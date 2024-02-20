import axios from "axios";
import { LocalUserType, UserType } from "../../models/user.model";
import { StepType } from "./signup-model";
import { Models } from "../../settings/settings.context.d";
import { Address } from "../../components/address-input/address-input";

export const handleText = (
  value: string,
  id: string,
  fieldHandlers: { [key: string]: (u: unknown) => void },
  fields?: { [key: string]: unknown },
) => {
  if (!id) return;
  const fieldsCopy = fields || {};
  fieldsCopy[id] = value;
  fieldHandlers[id](value);
}

export const handleSelect = async (
  value: { id: string, selected: Models },
  id: string,
  fieldHandlers: { [key: string]: (u: unknown) => void },
  fields?: { [key: string]: unknown },
) => {
  if (!id) return;
  const fieldsCopy = fields || {};
  fieldsCopy[id] = value.selected.id;
  fieldHandlers[id](value.selected.id)
}
export const handleBoolean = async (
  value: string | boolean,
  id: string,
  fieldHandlers: { [key: string]: (u: unknown) => void },
  fields?: { [key: string]: unknown },
) => {
  if (!id) return;
  const fieldsCopy = fields || {};
  fieldsCopy[id] = !!value;
  fieldHandlers[id](!!value as boolean)
}
export const handleAddress = async (
  value: Address,
  id: string,
  fieldHandlers: { [key: string]: (u: unknown) => void },
  fields?: { [key: string]: unknown },
) => {
  console.log('🚀 ~ value:', value);
  if (!id) return;
  const fieldsCopy = fields || {};
  fieldsCopy[id] = value;
  fieldHandlers[id](value as Address)
  
}

export const handleStep = async (
  data: { step: StepType, value: unknown },
  index: number,
  tempUser: LocalUserType | undefined,
  id: number | undefined,
  setTempUser: (data: LocalUserType) => void,
  setIndex: (data: number) => void,
  setErrors: (data: any) => void,
  setId: (id: number) => void,
) => {
  console.log('🚀 ~ data:', data);
  const regex = data.step.validation;
  if (regex) {
    if (!regex.test(data.value as string)) {
      const errors: any = {};
      errors[data.step.id] = data.step.validation_error || 'Erro não definido'
      setErrors(errors);
      return;
    }
  }
  const userData = tempUser || {} as any;
  if (data.value) userData[data.step.id] = data.value;
  setTempUser(userData as unknown as LocalUserType);
  const userToApi: UserType = {
    name: userData.name,
    email: userData.email,
    phone: userData.phone,
    race: userData.race,
    have_disability: userData.haveDisability,
    disability: userData.disability,
    occupation_area: userData.occupationArea,
    job_role: userData.jobRole,
    linkedin: userData.linkedin,
    instagram: userData.instagram,
    address: userData.address,
    genre: parseInt(userData.genre),
  }
  
  console.log('🚀 ~ userData:', userData);
  if (userData.email && !id) {
    try {
      const resp = await axios.post(
        'http://0.0.0.0:1337/api/pre-users/',
        { data: userToApi }
      );
      setId(resp.data.data.id);
    } catch (err: any){
      const errors: any = {};
      if (err?.response?.data?.error?.details?.errors[0]) {
        const data = err?.response?.data?.error?.details?.errors[0];
        const uniqueText = 'This attribute must be unique'
        if (data.path && data.path[0] &&  data.message === uniqueText) {
          errors[data.path[0]] = 'E-mail já cadastrado';
        }
        setErrors(errors);
        return;
      }
      errors[data.step.id] = 'Erro inesperado, tente novamente mais tarde.'
      setErrors(errors);
      return;
    }
  } else if (userData.email && id) {
    try {
      const resp = await axios.put(
        `http://0.0.0.0:1337/api/pre-users/${id}`,
        { data: userToApi }
      );
      setId(resp.data.data.id);
    } catch {
      const errors: any = {};
      errors[data.step.id] = 'Erro inesperado, tente novamente mais tarde.'
      setErrors(errors);
      return;
    }
  }
  setIndex(index + 1);
}


const handlers = {
  handleText,
  handleSelect,
  handleBoolean,
  handleStep,
  handleAddress,
};

export default handlers;