import axios from 'axios';
import { useEffect } from 'react';
import { useSearchParams } from "react-router-dom";

const texts = [
  `Nos reconhecer no ambiente corporativo sempre foi um desafio. Primeiro porque esse foi um ambiente que não foi construído para nós e vive tentando nos expulsar. Mas também porque somos pouco estimulados a ter referências reais, honestas de pessoas negras dentro desse espaço. Pensando nisso, escolhemos algumas profissões e gostaríamos que você representasse a sua no nosso anuário de profissões como posto único e exclusivamente por pessoas negras."`
];

const testLogin = async (token: string | null) => {
  const resp = await axios.get(`http://localhost:1337/api/auth/google/callback?${token}`, {
    headers: {
        'Content-Type': 'application/json'
    }
  });
  console.log('🚀 ~ resp:', resp.data);
}

const LoginRedirect = () => {
  const [searchParams] = useSearchParams();
  console.log('🚀 ~ searchParams:', searchParams.toString());
  console.log('🚀 ~ searchParams:', searchParams.get('id_token'));
  
  useEffect(() => {
    testLogin(searchParams.toString())
  }, []);
  return (
    <div>
      Salvea aaaa
    </div> 
  );
};

export default LoginRedirect;