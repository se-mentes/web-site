import { useEffect, useState } from "react";
import InputGroup from "../input-group/input-group";
import InputText from "../input-text/input-text";
import { NegativeButton, GringoButton, Wrapper } from "./address-input.style";
import { fetchCep } from "./address-input.controller";

interface Props {
  placeholder?: string;
  value?: string;
  type: 'genres' | 'races';
  name?: string;
  id: string;
  handleChange?: (data: any) => void;
}
interface RenderCepProps {
  setCep: (data: string) => void;
  setIsGringo: (data: boolean) => void;
  cep: string;
}

export interface Address {
  postalCode: string;
  number: string;
  city: string;
  state: string;
  country: string;
  district: string;
  street: string;
  complement: string;
}
export interface AddressHandlers {
  postalCode: (data: string) => void;
  number: (data: string) => void;
  city: (data: string) => void;
  state: (data: string) => void;
  country: (data: string) => void;
  district: (data: string) => void;
  street: (data: string) => void;
  complement: (data: string) => void;
}

const renderCompleteAddress = (address?: Address, handlers?: AddressHandlers) => {
  return (
    <>
      <InputGroup label="Cep">
        <InputText
          handleChange={({ target }) => handlers?.postalCode(target.value)}
          value={address?.postalCode}
        />
      </InputGroup>
      <InputGroup label="Rua">
        <InputText
          handleChange={({ target }) => handlers?.street(target.value)}
          value={address?.street}
        />
      </InputGroup>
      <InputGroup label="Bairro">
        <InputText
          handleChange={({ target }) => handlers?.district(target.value)}
          value={address?.district}
        />
      </InputGroup>
      <InputGroup label="Cidade">
        <InputText
          handleChange={({ target }) => handlers?.city(target.value)}
          value={address?.city}
        />
      </InputGroup>
      <InputGroup label="Estado">
        <InputText
          handleChange={({ target }) => handlers?.state(target.value)}
          value={address?.state}
        />
      </InputGroup>
      <InputGroup label="Pais">
        <InputText
          handleChange={({ target }) => handlers?.country(target.value)}
          value={address?.country}
        />
      </InputGroup>
      <InputGroup label="Numero">
        <InputText
          handleChange={({ target }) => handlers?.number(target.value)}
          value={address?.number}
        />
      </InputGroup>
      <InputGroup label="Complemento">
        <InputText
          handleChange={({ target }) => handlers?.complement(target.value)}
          value={address?.complement}
        />
      </InputGroup>
    </>
  );
}
const renderCep = ({ setCep, setIsGringo, cep }: RenderCepProps) => {
  return (
    <>
      <InputGroup label="CEP">
        <InputText handleChange={({ target }) => setCep(target.value)} value={cep} />
      </InputGroup>
      <GringoButton onClick={(e) => setIsGringo(true)}>
        Não moro no Brasil
      </GringoButton>
    </>
  );
}

const AddressInput = ({ placeholder, value, type, name, id, handleChange }: Props): React.ReactElement<Props> => {
  const onChange = (value: Address) => handleChange && handleChange({ target: { id, value }})
  const [cep, setCep] = useState<string>('');
  const [fetchedAddress, setFetchedAddress] = useState<Address>();
  const [isGringo, setIsGringo] = useState<boolean>();
  const [postalCode, setPostalCode] = useState<string>('');
  const [number, setNumber] = useState<string>('');
  const [city, setCity] = useState<string>('');
  const [state, setState] = useState<string>('');
  const [country, setCountry] = useState<string>('');
  const [district, setDistrict] = useState<string>('');
  const [street, setStreet] = useState<string>('');
  const [complement, setComplement] = useState<string>('');

  const values: Address = {
    postalCode,
    number,
    city,
    state,
    country,
    district,
    street,
    complement,
  }
  const handlers: AddressHandlers = {
    postalCode: setPostalCode,
    number: setNumber,
    city: setCity,
    state: setState,
    country: setCountry,
    district: setDistrict,
    street: setStreet,
    complement: setComplement,
  }

  useEffect(() => {
    if (cep.length > 7) {
      console.log('AQUI')
      fetchCep(cep, setFetchedAddress);
    }
  }, [cep]);

  useEffect(() => {
    if (fetchedAddress) {
      setPostalCode(fetchedAddress.postalCode);
      setNumber(fetchedAddress.number);
      setCity(fetchedAddress.city);
      setState(fetchedAddress.state);
      setCountry(fetchedAddress.country);
      setDistrict(fetchedAddress.district);
      setStreet(fetchedAddress.street);
    }
  }, [fetchedAddress]);

  useEffect(() => {
    onChange(values);
  }, [postalCode, number, city, state, country, district, street, complement]);


  return (
    <Wrapper onClick={(e) => e.preventDefault()}>
      {
        fetchedAddress || isGringo ?
        (renderCompleteAddress(values, handlers)) :
        renderCep({ setCep, setIsGringo, cep })
      }
    </Wrapper>

  )
};

export default AddressInput;
