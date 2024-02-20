import { Input } from "./input-text.style";

interface Props {
  placeholder?: string;
  value?: string | boolean;
  type?: string;
  name?: string;
  id?: string;
  handleChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

const InputText = ({ placeholder, value, type, name, id, handleChange }: Props): React.ReactElement<Props> => {
  return (
    <Input
      placeholder={placeholder}
      value={`${value}`}
      onChange={handleChange}
      type={type}
      name={name}
      id={id}
    />
  )
};

export default InputText;
