import { useContext, useEffect, useState } from "react";
import { Models } from "../../settings/settings.context.d";
import { Input } from "./select-input.style";
import SettingsStore from "../../settings/settings.context";

interface Props {
  placeholder?: string;
  value?: string;
  type: 'genres' | 'races';
  name?: string;
  id: string;
  handleChange?: (data: any) => void;
}

const SelectInput = ({ placeholder, value, type, name, id, handleChange }: Props): React.ReactElement<Props> => {
  const { state } = useContext(SettingsStore);
  const [options, setOptions] = useState<Models[]>([]);
  const [selected, setSelected] = useState<Models>();
  const typeModel = state[type];
  
  useEffect(() => {
    setOptions(typeModel);
  }, [typeModel]);
  
  useEffect(() => {
    if (handleChange && selected) handleChange({ target: { value: { id, selected }}});
  }, [selected]);

  return (
    <Input
      name={name}
      id={id}
      defaultValue={selected?.id || ''}
      value={selected?.id || ''}
      onChange={({ target }) => {
        if (!target.value) return;
        const option = target.querySelector(`option[value="${target.value}"]`)
        setSelected({
          label: option?.textContent || '',
          id: target.value,
          model: type
        });
      }}
    >
      <option value="">{placeholder}</option>
      {options.map((opt: any) => 
        (
          <option selected={selected?.id === opt.id} value={opt?.id}>{opt.label}</option>
        )
      )}
    </Input>

  )
};

export default SelectInput;
