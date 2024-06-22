import React from "react";
import { ChangeEvent } from "react";

type RangeDropdownProps = {
  label: string;
  options?: number[];
  value?: number;
  midPoint: number;
  onChange: (event: ChangeEvent<HTMLSelectElement>) => void;
}

export const RangeDropdown = ({ label, options = [30, 40, 50], value = options[0], midPoint, onChange }: RangeDropdownProps) => {
  return (
    <div className="flex gap-2">
      <div data-testid="label">
        {label}:
      </div>
      <select className="cursor-pointer" value={value} onChange={onChange}>
        {options.map((option) =>
          <option key={option} value={option}>{midPoint - option} - {midPoint + option}</option>
        )}
      </select>
    </div>
  )
}