import cepPromise from 'cep-promise';
import { Address } from './address-input';

export const fetchCep = async (cep: string, setAddress: (d: Address) => void) => {
  const addr = {
    postalCode: '',
    number: '',
    city: '',
    state: '',
    country: '',
    district: '',
    complement: '',
    street: '',
  }
  const address = await cepPromise(cep);
  console.log('🚀 ~ address:', address);
  addr.postalCode = address.cep;
  addr.city = address.city;
  addr.district = address.neighborhood;
  addr.state = address.state;
  addr.street = address.street;
  addr.country = 'Brasil';
  console.log('🚀 ~ addr:', addr);
  setAddress(addr);
}