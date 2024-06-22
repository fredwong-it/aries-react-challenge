import { mockOptions } from "@/utils/mockData";
import { OptionsRiskReward as OptionsRiskRewardComponent } from "./OptionsRiskReward";


export default {
  title: "Components",
  component: OptionsRiskRewardComponent,
};

export const OptionsRiskReward = () => <OptionsRiskRewardComponent options={mockOptions} minX={60} maxX={130} />