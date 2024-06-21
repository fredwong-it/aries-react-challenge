import React from "react";
import { ChangeEvent } from "react";

type MinMaxDropdownType = {
  label: string;
  value?: number;
  onChange: (event: ChangeEvent<HTMLSelectElement>) => void;
}

const options = [30, 40, 50, 60];

export const MinMaxDropdown = ({ label, value = 30, onChange }: MinMaxDropdownType) => {
  return (
    <div className="flex gap-2">
      <div data-testid="label">
        {label}
      </div>
      <select className="cursor-pointer" value={value} onChange={onChange}>
        {options.map((option) =>
          <option value={option}>{option}</option>
        )}
      </select>
    </div>
  )
}