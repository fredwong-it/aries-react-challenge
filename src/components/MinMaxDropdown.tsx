import React from "react";
import { ChangeEvent } from "react";

type MinMaxDropdownType = {
  label: string;
  value: number;
  onChange: (event: ChangeEvent<HTMLSelectElement>) => void;
}

export const MinMaxDropdown = ({ label, value, onChange }: MinMaxDropdownType) => {
  return (
    <div className="flex gap-2">
      <div>
        {label}
      </div>
      <select className="cursor-pointer" value={value} onChange={onChange}>
        <option value="30">30</option>
        <option value="40">40</option>
        <option value="50">50</option>
        <option value="60">60</option>
      </select>
    </div>
  )
}