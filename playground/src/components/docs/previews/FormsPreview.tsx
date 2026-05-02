"use client";

import { useState } from "react";
import {
  Checkbox,
  FormField,
  Input,
  RadioGroup,
  RadioGroupItem,
  SearchInput,
  Select,
  Slider,
  Switch,
  Textarea,
} from "@mew/ui";

export default function FormsPreview({ name }: { name: string }) {
  const [checked, setChecked] = useState(false);
  const [switchOn, setSwitchOn] = useState(true);
  const [slider, setSlider] = useState<number[]>([40]);
  const [search, setSearch] = useState("demo");
  const [radio, setRadio] = useState("a");
  const [selectValue, setSelectValue] = useState("");

  switch (name) {
    case "Checkbox":
      return <Checkbox checked={checked} onCheckedChange={setChecked} />;
    case "FormField":
      return (
        <FormField label="Name" htmlFor="name-field">
          <Input id="name-field" placeholder="John Doe" />
        </FormField>
      );
    case "Input":
      return <Input placeholder="Write here" />;
    case "RadioGroup":
      return (
        <RadioGroup value={radio} onValueChange={setRadio}>
          <RadioGroupItem value="a" />
          <RadioGroupItem value="b" />
        </RadioGroup>
      );
    case "SearchInput":
      return <SearchInput value={search} onChange={(e) => setSearch(e.target.value)} onClear={() => setSearch("")} />;
    case "Select":
      return (
        <Select
          value={selectValue}
          onValueChange={setSelectValue}
          placeholder="Choose"
          groups={[{ options: [{ label: "One", value: "one" }, { label: "Two", value: "two" }] }]}
        />
      );
    case "Slider":
      return <Slider value={slider} onValueChange={setSlider} />;
    case "Switch":
      return <Switch checked={switchOn} onCheckedChange={setSwitchOn} />;
    case "Textarea":
      return <Textarea placeholder="Write a message" />;
    default:
      return <p className="text-xs text-text-secondary">See usage snippet below.</p>;
  }
}
