"use client";

import { useState } from "react";
import {
  Checkbox,
  Combobox,
  Command,
  DateInput,
  Fieldset,
  FileUpload,
  FilterBar,
  FormField,
  InlineEditor,
  Input,
  NumberInput,
  PasswordInput,
  RadioGroup,
  RadioGroupItem,
  SearchInput,
  Select,
  Slider,
  Switch,
  Textarea,
} from "@luiggidiog/mew-ui";

export default function FormsPreview({ name }: { name: string }) {
  const [checked, setChecked] = useState(false);
  const [switchOn, setSwitchOn] = useState(true);
  const [slider, setSlider] = useState<number[]>([40]);
  const [search, setSearch] = useState("demo");
  const [radio, setRadio] = useState("a");
  const [selectValue, setSelectValue] = useState("");
  const [combo, setCombo] = useState("");
  const [editor, setEditor] = useState("Example");

  switch (name) {
    case "Checkbox": return <Checkbox checked={checked} onCheckedChange={setChecked} />;
    case "Combobox": return <Combobox value={combo} onValueChange={setCombo} options={[{ label: "Alpha", value: "alpha" }, { label: "Beta", value: "beta" }]} />;
    case "Command": return <Command items={[{ label: "Create project", value: "create", description: "Start a workspace" }, { label: "Open settings", value: "settings" }]} />;
    case "DateInput": return <DateInput label="Due date" />;
    case "Fieldset": return <Fieldset legend="Profile"><Input placeholder="Name" /></Fieldset>;
    case "FileUpload": return <FileUpload label="Upload asset" description="PNG or JPG" />;
    case "FilterBar": return <FilterBar query={search} onQueryChange={setSearch} actions={<button className="rounded-lg border border-border px-3 py-2 text-sm">New</button>} />;
    case "FormField": return <FormField label="Name" htmlFor="name-field"><Input id="name-field" placeholder="John Doe" /></FormField>;
    case "InlineEditor": return <InlineEditor value={editor} onChange={setEditor} onSave={() => {}} onCancel={() => {}} />;
    case "Input": return <Input placeholder="Write here" />;
    case "NumberInput": return <NumberInput label="Seats" min={1} />;
    case "PasswordInput": return <PasswordInput label="Password" />;
    case "RadioGroup": return <RadioGroup value={radio} onValueChange={setRadio}><RadioGroupItem value="a" /><RadioGroupItem value="b" /></RadioGroup>;
    case "SearchInput": return <SearchInput value={search} onChange={(e) => setSearch(e.target.value)} onClear={() => setSearch("")} />;
    case "Select": return <Select value={selectValue} onValueChange={setSelectValue} placeholder="Choose" groups={[{ options: [{ label: "One", value: "one" }, { label: "Two", value: "two" }] }]} />;
    case "Slider": return <Slider value={slider} onValueChange={setSlider} />;
    case "Switch": return <Switch checked={switchOn} onCheckedChange={setSwitchOn} />;
    case "Textarea": return <Textarea placeholder="Write a message" />;
    default: return <p className="m-0 text-xs text-text-secondary">See usage snippet below.</p>;
  }
}
