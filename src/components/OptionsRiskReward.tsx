import { OptionsType } from "@/types/options"
import { generateData } from "@/utils/options";
import { LineChart, Line, XAxis, YAxis, Tooltip, CartesianGrid, ResponsiveContainer, Legend } from 'recharts';


type OptionsRiskRewardType = {
  options: OptionsType[]
}

export const OptionsRiskReward = ({ options }) => {

  const data = generateData()

  const minY = -50;
  const maxY = 50;
  const yTicks = Array.from({ length: (maxY - minY) / 10 + 1 }, (_, i) => minY + i * 10);

  return (
    <div style={{ width: '100%', height: '800px' }}>
      <ResponsiveContainer width="100%" height="100%">
        <LineChart data={data}>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="price" />
          <YAxis ticks={yTicks} />
          <Tooltip />
          <Legend iconType="square" layout="vertical" align="right" verticalAlign="middle" wrapperStyle={{ paddingLeft: '50px' }} />
          <Line type="monotone" name="option1" dataKey="optionsProfit1" stroke="#8884d8" />
          <Line type="monotone" name="option2" dataKey="optionsProfit2" stroke="#82ca9d" />
          <Line type="monotone" name="option3" dataKey="optionsProfit3" stroke="#8884d8" />
          <Line type="monotone" name="option4" dataKey="optionsProfit4" stroke="#82ca9d" />
          <Line type="monotone" name="Total Profit" dataKey="totalProfit" stroke="#82ca9d" strokeWidth={4} />
        </LineChart>
      </ResponsiveContainer>
    </div>
  )
}