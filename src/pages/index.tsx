import { Inter } from "next/font/google";
import { OptionsRiskReward } from "@/components/OptionsRiskReward";
import { mockOptions } from "@/utils/mockData";
import { ChangeEvent, useState } from "react";
import { MinMaxDropdown } from "@/components/MinMaxDropdown";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  const [minMaxX, setMinMaxX] = useState(30)
  const [minMaxY, setMinMaxY] = useState(30)

  const handleChangeX = (event: ChangeEvent<HTMLSelectElement>) => {
    setMinMaxX(Number(event.target.value))
  }

  const handleChangeY = (event: ChangeEvent<HTMLSelectElement>) => {
    setMinMaxY(Number(event.target.value))
  }

  return (
    <main
      className={`flex min-h-screen flex-col items-center justify-between p-24 ${inter.className}`}
    >
      <h1 className="text-3xl mb-4">Risk & Reward Graph for Options Strategies</h1>
      <div className="flex gap-10 w-full">
        <MinMaxDropdown label="Stock Price" value={minMaxX} onChange={handleChangeX} />
        <MinMaxDropdown label="Profit/Loss" value={minMaxY} onChange={handleChangeY} />
      </div>
      <OptionsRiskReward options={mockOptions} minMaxX={minMaxX} minMaxY={minMaxY} />
    </main>
  );
}
