import { JSXElementConstructor, ReactComponentElement, useEffect, useState } from "react";
import InputGroup from "../../../../components/input-group/input-group";
import InputText from "../../../../components/input-text/input-text";
import { LocalUserType } from "../../../../models/user.model";
import { StepType, inputTypes, signupFormSteps } from "../../signup-model";
import handlers from "../../signup.handlers";
import { Button, FormWrapper, Photo, PhotoWrapper,  StepWrapper,  Wrapper } from "./first-form.style";
import SelectInput from "../../../../components/select-input/select-input";
import Boolean from "../../../../components/boolean-input/boolean-input";
import AddressInput from "../../../../components/address-input/address-input";

interface Props {
  index: number;
  tempUser?: LocalUserType;
  onNext: (data: { step: StepType, value: unknown }) => void;
  errors: any;
}

interface StepProps {
  step: StepType;
  fieldHandlers: { [key: string]: (u: unknown) => void};
  fields: { [key: string]: unknown };
  onNext: Props['onNext'];
  errors: Props['errors'];
}

const getInput = (type: inputTypes) => {
  if (type === 'text') return InputText;
  if (type === 'select') return SelectInput;
  if (type === 'boolean') return Boolean;
  if (type === 'address') return AddressInput;
  return null;
}

const renderStep = ({
  step,
  fieldHandlers,
  fields,
  onNext,
  errors,
}: StepProps) => {
  const Input = getInput(step.input) as unknown as JSXElementConstructor<any>;
  if (!Input) return <Button onClick={() => onNext({
    step,
    value: fields[step.id] as string,
    })}>Continuar ➝</Button>;
  const handler = handlers[step.handler];
  console.log('🚀 ~ step:', step);
  console.log('🚀 ~ handler:', handler);
  const onChange = (value: any) => handler(value, step.id, fieldHandlers, fields);
  return (
    <StepWrapper>
      <InputGroup error={errors[step.id]} label={step.label}>
        <Input
          placeholder={step.placeholder}
          value={fields[step.id] || ''}
          handleChange={({ target }: React.ChangeEvent<HTMLInputElement>) => onChange(target.value)}
          type={step.type}
          name={step.name}
          id={step.id}
        />
      </InputGroup>
      <Button type="submit" value="Continuar ➝" />
    </StepWrapper>
  );
}

const FirstForm = ({
  index,
  tempUser,
  errors,
  onNext,
}: Props) => {
  const [name, setName] = useState<string>(tempUser?.name || '');
  const [email, setEmail] = useState<string>('');
  const [phone, setPhone] = useState<string>('');
  const [genre, setGenre] = useState<string>('');
  const [haveDisability, setHaveDisability] = useState<boolean>();
  const [occupationArea, setOccupationArea] = useState<string>();
  const [jobRole, setJobRole] = useState<string>();
  const [linkedin, setLinkedin] = useState<string>();
  const [race, setRace] = useState<string>();
  const [instagram, setInstagram] = useState<string>();
  const [disability, setDisability] = useState<string>('');
  const [cep, setCep] = useState<string>('');
  const [step, setStep] = useState<StepType>(signupFormSteps[index]);
  const [address, setAddress] = useState<any>();
  const fieldHandlers = {
    name:  (data: unknown) => setName(data as string),
    email:  (data: unknown) => setEmail(data as string),
    phone:  (data: unknown) => setPhone(data as string),
    genre:  (data: unknown) => setGenre(data as string),
    haveDisability:  (data: unknown) => setHaveDisability(data as boolean),
    cep:  (data: unknown) => setCep(data as string),
    disability:  (data: unknown) => setDisability(data as string),
    occupationArea: (data: unknown) => setOccupationArea(data as string),
    jobRole: (data: unknown) => setJobRole(data as string),
    linkedin: (data: unknown) => setLinkedin(data as string),
    instagram: (data: unknown) => setInstagram(data as string),
    race: (data: unknown) => setRace(data as string),
    address: (data: unknown) => setAddress(data as string),
  };
  const fieldValues: { [key: string]: unknown } = {
    name,
    email,
    phone,
    genre,
    haveDisability,
    cep,
    disability,
    occupationArea,
    jobRole,
    race,
    linkedin,
    instagram,
    address,
  };
  console.log('🚀 ~ fieldValues:', fieldValues);
  useEffect(() => {
    setStep(signupFormSteps[index]);
  }, [index])

  return (
    <Wrapper>
      <PhotoWrapper>
        <Photo src={`${process.env.PUBLIC_URL}/assets/images/signup-01.png`} />
      </PhotoWrapper>
      <FormWrapper onSubmit={(e) => {
        e.preventDefault();
        onNext({
          step,
          value: fieldValues[step!.id],
        });
      }}>
        {
          renderStep({
            step,
            fieldHandlers,
            fields: fieldValues,
            onNext,
            errors,
          })
        }
      </FormWrapper>
    </Wrapper>
  )
}

export default FirstForm;