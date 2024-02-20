import { ReactElement } from "react";
import { Error, Hint, Label, Wrapper } from "./input-group.style";

interface Props {
  children: ReactElement;
  label?: string;
  error?: string;
  hint?: string;
  customStyle?: string;
}

const InputGroup = ({ children, label, error, hint, customStyle }: Props) => {
  return (
    <Wrapper customStyle={customStyle}>
      <Label>{label}</Label>
      {children}
      {hint && (<Hint>{hint}</Hint>)}
      {error && (<Error>{error}</Error>)}
    </Wrapper>
  )
}

export default InputGroup;
