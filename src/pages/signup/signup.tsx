import { useContext, useEffect, useState } from 'react';
import Home from '../../components/home/home';
import FirstForm from './components/first-form/first-form';
import { Wrapper } from './signup.style';
import { LocalUserType } from '../../models/user.model';
import { handleStep } from './signup.handlers';
import { fetchGenreModel, fetchRaceModel } from './signup.controller';
import SettingsStore from '../../settings/settings.context';
import axios from 'axios';

const texts = [
  `Nos reconhecer no ambiente corporativo sempre foi um desafio. Primeiro porque esse foi um ambiente que não foi construído para nós e vive tentando nos expulsar. Mas também porque somos pouco estimulados a ter referências reais, honestas de pessoas negras dentro desse espaço. Pensando nisso, escolhemos algumas profissões e gostaríamos que você representasse a sua no nosso anuário de profissões como posto único e exclusivamente por pessoas negras."`
];

const SignUp = () => {
  const settingsContext = useContext(SettingsStore);
  console.log('🚀 ~ settingsContext:', settingsContext.state);
  const [tempUser, setTempUser] = useState<LocalUserType>();
  console.log('🚀 ~ tempUser:', tempUser);
  const [index, setIndex] = useState<number>();
  const [errors, setErrors] = useState<any>({});
  const [id, setId] = useState<number>();
  
  useEffect(() => {
    fetchGenreModel(settingsContext);
    fetchRaceModel(settingsContext);
    window.location.href = 'https://864a-2804-7f0-9740-9a33-2a5c-30d1-29b8-4ec3.ngrok-free.app/api/connect/google';
  }, []);
  return (
    <Wrapper>
      {
        index === undefined ? (
          <Home texts={texts} callToActionText={'Começar ➝'} onCallToActionClick={() => setIndex(0)} />
        ) : (
          <FirstForm
            index={index}
            onNext={(data) => {
              handleStep(
                data,
                index,
                tempUser,
                id,
                setTempUser,
                setIndex,
                setErrors,
                setId,
              );
            }}
            tempUser={tempUser}
            errors={errors}
          />
        )
      }
    </Wrapper>
  );
};

export default SignUp;