import { optionColor1, optionColor2, optionColor3, optionColor4, totalProfitColor } from "@/constants/color";
import { OptionType } from "@/types/option";
import { generateData } from "@/utils/option";
import { capitalizeFirstLetter } from "@/utils/string";
import { useState } from "react";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  Tooltip,
  CartesianGrid,
  ResponsiveContainer,
  Legend,
  ReferenceLine,
  Label,
} from "recharts";

interface TooltipData {
  color: string;
  name: string;
  value: number;
}

interface CustomTooltipProps {
  active?: boolean;
  payload?: TooltipData[];
  label?: string | number;
}

const CustomTooltip = ({ active, payload, label }: CustomTooltipProps) => {
  if (active && payload && payload.length) {
    return (
      <div className="p-4 bg-white border border-solid border-gray-300 rounded-xl">
        <p className="text-xl mb-4">{`Stock Price at Expiry: ${label}`}</p>
        {payload.map((entry, index) => (
          <p key={`item-${index}`} style={{ color: entry.color }}>
            {`${entry.name}: ${entry.value.toFixed(2)}`}
          </p>
        ))}
      </div>
    );
  }

  return null;
};

type OptionsRiskRewardProps = {
  options: OptionType[];
  minX: number;
  maxX: number;
};

export const OptionsRiskReward = ({
  options,
  minX,
  maxX,
}: OptionsRiskRewardProps) => {
  const { data, maxY, minY } = generateData(options, minX, maxX);
  const yTicks = Array.from(
    { length: (maxY - minY) / 10 + 1 },
    (_, i) => minY + i * 10
  );
  const optionsKeys = Object.keys(data[0]).filter(
    (key) => !["price", "totalProfit"].includes(key)
  );
  const optionColorArr = [optionColor1, optionColor2, optionColor3, optionColor4];

  return (
    <div style={{ width: "100%", height: "700px" }}>
      <ResponsiveContainer width="100%" height="100%">
        <LineChart
          data={data}
          margin={{ top: 20, right: 20, left: 20, bottom: 25 }}
        >
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="price">
            <Label value="Stock Price at Expiry" dy={30} />
          </XAxis>
          <YAxis ticks={yTicks}>
            <Label value="Profit / Loss" angle={-90} dx={-20} />
          </YAxis>
          <Tooltip content={<CustomTooltip />} />
          <Legend
            iconType="square"
            layout="vertical"
            align="right"
            verticalAlign="middle"
            wrapperStyle={{ paddingLeft: "50px" }}
          />
          <ReferenceLine
            y={0}
            stroke="#000000"
            strokeWidth={1}
            strokeDasharray="10 5"
            label={{ value: "Break-even", position: "insideBottomRight" }}
          />
          {optionsKeys.map((key, index) => {
            const [long_short, type, strike] = key.split("_");
            const name = `${capitalizeFirstLetter(long_short)} ${capitalizeFirstLetter(type)} (Strike ${strike})`;

            return (
              <Line
                key={key}
                type="monotone"
                name={name}
                dataKey={key}
                stroke={optionColorArr[index]}
                strokeWidth={2}
              />
            );
          })}
          <Line
            type="monotone"
            name="Total Profit"
            dataKey="totalProfit"
            stroke={totalProfitColor}
            strokeWidth={3}
          />
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
};
