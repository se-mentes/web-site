export interface OptionType {
  label: string;
  value: string;
}

export interface StepType {
  label: string;
  alt: string;
  placeholder?: string;
  name: string;
  type: types;
  input: inputTypes;
  id: idType;
  handler: 'handleText' | 'handleSelect' | 'handleBoolean' | 'handleAddress';
  validation?: RegExp;
  validation_error?: string;
  options?: OptionType[];
}

export type types =
  'text' |
  'email' |
  'select' |
  'boolean' |
  'tel' |
  'races' |
  'address' |
  'genres';

  export type inputTypes =
  'text' |
  'boolean' |
  'address' |
  'select';

export type idType =
  'name' |
  'email' |
  'phone' |
  'genre' |
  'haveDisability' |
  'address' |
  'disability' |
  'linkedin' |
  'instagram' |
  'occupationArea' |
  'jobRole' |
  'race' |
  'cep';

export const signupFormSteps: StepType[] = [
  {
    label: 'Nome',
    alt: 'Nome',
    placeholder: 'Nome',
    name: 'name',
    type: 'text',
    input: 'text',
    id: 'name',
    handler: 'handleText',
  },
  {
    label: 'Melhor e-mail',
    alt: 'Melhor e-mail',
    name: 'e-mail',
    type: 'email',
    input: 'text',
    handler: 'handleText',
    validation: /^[\w.]+@([\w-]+\.)+[\w-]{2,4}$/,
    validation_error: 'E-mail invalido',
    id: 'email',
  },
  {
    label: 'Telefone (com DDD)',
    alt: 'Telefone (com DDD)',
    name: 'tel',
    type: 'tel',
    input: 'text',
    handler: 'handleText',
    validation: /^[\d]{11}$/,
    id: 'phone',
  },
  {
    label: 'Como você define sua raça?',
    alt: 'Como você define sua raça?',
    name: 'race',
    type: 'races',
    input: 'select',
    handler: 'handleSelect',
    id: 'race',
  },
  {
    label: 'Identidade de Gênero',
    alt: 'Identidade de Gênero',
    name: 'genre',
    type: 'genres',
    input: 'select',
    handler: 'handleSelect',
    id: 'genre',
  },
  {
    label: 'Pessoa com deficiência',
    alt: 'Pessoa com deficiência',
    name: 'haveDisability',
    type: 'boolean',
    input: 'boolean',
    handler: 'handleBoolean',
    id: 'haveDisability',
  },
  {
    label: 'Precisa de adaptações? Se sim, quais?',
    alt: 'Precisa de adaptações? Se sim, quais?',
    name: 'disability',
    type: 'boolean',
    input: 'text',
    handler: 'handleText',
    id: 'disability',
  },
  {
    label: 'Qual sua área de atuação?',
    alt: 'Qual sua área de atuação?',
    name: 'occupationArea',
    type: 'text',
    input: 'text',
    handler: 'handleText',
    id: 'occupationArea',
  },
  {
    label: 'Qual o seu cargo?',
    alt: 'Qual o seu cargo?',
    name: 'jobRole',
    type: 'text',
    input: 'text',
    handler: 'handleText',
    id: 'jobRole',
  },
  {
    label: 'Qual seu username no linkedin?',
    alt: 'Qual seu username no linkedin?',
    name: 'linkedin',
    type: 'text',
    input: 'text',
    handler: 'handleText',
    id: 'linkedin',
  },
  {
    label: 'Qual seu @ no instagram?',
    alt: 'Qual seu @ no instagram?',
    name: 'instagram',
    type: 'text',
    input: 'text',
    handler: 'handleText',
    id: 'instagram',
  },
  {
    label: 'Para finalizar vamos cadastrar uma senha?',
    alt: 'Qual seu @ no instagram?',
    name: 'instagram',
    type: 'text',
    input: 'text',
    handler: 'handleText',
    id: 'instagram',
  },
  {
    label: 'Onde você mora?',
    alt: 'Onde você mora?',
    name: 'address',
    type: 'address',
    input: 'address',
    handler: 'handleAddress',
    validation: /^[\d]{8}$/,
    id: 'address',
  },
];