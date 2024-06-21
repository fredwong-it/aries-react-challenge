import { OptionType } from "@/types/option"
import { generateData, optionColorMap } from "@/utils/option";
import { capitalizeFirstLetter } from "@/utils/string";
import { LineChart, Line, XAxis, YAxis, Tooltip, CartesianGrid, ResponsiveContainer, Legend, ReferenceLine } from 'recharts';


type OptionsRiskRewardType = {
  options: OptionType[]
}

export const OptionsRiskReward = ({ options }: OptionsRiskRewardType) => {
  const data = generateData(options)

  const minY = -50;
  const maxY = 50;
  const yTicks = Array.from({ length: (maxY - minY) / 10 + 1 }, (_, i) => minY + i * 10);
  const optionsKeys = Object.keys(data[0]).filter((o) => !["price", "totalProfit"].includes(o))

  return (
    <div style={{ width: '100%', height: '800px' }}>
      <ResponsiveContainer width="100%" height="100%">
        <LineChart data={data}>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="price" />
          <YAxis ticks={yTicks} />
          <Tooltip />
          <Legend iconType="square" layout="vertical" align="right" verticalAlign="middle" wrapperStyle={{ paddingLeft: '50px' }} />
          <ReferenceLine y={0} stroke="#000000" strokeWidth={1} strokeDasharray="10 5" label={{ value: 'Break-even', position: 'insideBottomRight' }} />
          <Line type="monotone" name="Total Profit" dataKey="totalProfit" stroke="#32CD32" strokeWidth={4} />
          {optionsKeys.map((key) => {
            const [long_short, type, strike] = key.split('_')
            const name = `${capitalizeFirstLetter(long_short)} ${capitalizeFirstLetter(type)} (Strike ${strike})`
            const color = optionColorMap(long_short, type)

            return (
              <Line type="monotone" name={name} dataKey={key} stroke={color} strokeWidth={2} />
            )
          })}
        </LineChart>
      </ResponsiveContainer>
    </div>
  )
}