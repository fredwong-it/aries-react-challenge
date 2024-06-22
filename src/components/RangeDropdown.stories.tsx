import { RangeDropdown as RangeDropdownComponent } from "./RangeDropdown";

export default {
  title: "Components",
  component: RangeDropdownComponent,
};

export const RangeDropdown = () => <RangeDropdownComponent label="Stock Price" onChange={() => { }} midPoint={50} />