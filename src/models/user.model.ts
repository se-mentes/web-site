export interface UserType {
  name: string;
  email: string;
  phone: string;
  race: string;
  have_disability: boolean;
  disability?: string;
  occupation_area: string;
  job_role: string;
  linkedin: string;
  instagram: string;
  address: Address;
  genre: number;
  cep?: string;
  _is_seed?: boolean;
}

export interface LocalUserType {
  name: string;
  email: string;
  phone: string;
  race: string;
  haveDisability: boolean;
  disability?: string;
  occupationArea: string;
  jobRole: string;
  linkedin: string;
  instagram: string;
  address: Address;
  genre: string;
}

export interface Address {
  CEP?: string;
  state?: string;
  country?: string;
  city?: string;
  neighborhood?: string;
  street?: string;
  number?: string;
  complement?: string;
}

export interface Models {
  model: 'race' | 'genre';
  label: string;
}