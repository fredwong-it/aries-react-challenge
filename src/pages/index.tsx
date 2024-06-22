import { Inter } from "next/font/google";
import { OptionsRiskReward } from "@/components/OptionsRiskReward";
import { mockOptions } from "@/utils/mockData";
import { ChangeEvent, useState } from "react";
import { RangeDropdown } from "@/components/RangeDropdown";
import { getAvgStrikePrice } from "@/utils/option";
import { roundToNearestTen } from "@/utils/number";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  const [range, setRange] = useState(30)

  const handleChangeX = (event: ChangeEvent<HTMLSelectElement>) => {
    setRange(Number(event.target.value))
  }

  const avgStrikePrice = getAvgStrikePrice(mockOptions);
  const base = roundToNearestTen(avgStrikePrice);

  return (
    <main
      className={`flex min-h-screen flex-col items-center justify-between p-24 ${inter.className}`}
    >
      <h1 className="text-3xl mb-4">Risk & Reward Graph for Options Strategies</h1>
      <div className="flex gap-10 w-full">
        <RangeDropdown label="Stock Price Range" value={range} onChange={handleChangeX} midPoint={base} />
      </div>
      <OptionsRiskReward options={mockOptions} minX={base - range} maxX={base + range} />
    </main>
  );
}
