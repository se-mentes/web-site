import { NegativeButton, PositiveButton, Wrapper } from "./boolean-input.style";

interface Props {
  placeholder?: string;
  value?: string;
  type: 'genres' | 'races';
  name?: string;
  id: string;
  handleChange?: (data: any) => void;
}

const BooleanInput = ({ placeholder, value, type, name, id, handleChange }: Props): React.ReactElement<Props> => {
  const onChange = (value: boolean) => handleChange && handleChange({ target: { id, value }})
  return (
    <Wrapper onClick={(e) => e.preventDefault()}>
      <PositiveButton onClick={(e) => onChange(true)}>
        Sim
      </PositiveButton>
      <NegativeButton onClick={(e) => onChange(false)}>
        Não
      </NegativeButton>
    </Wrapper>

  )
};

export default BooleanInput;
