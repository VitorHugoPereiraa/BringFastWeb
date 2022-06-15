import React from 'react';
import TextInput from './TextInput';

// import { Container } from './styles';

const RegisterForm1: React.FC = () => {
  return <>
    <p style={{
        fontSize: 26,
        margin: "14px 0"
      }}>Dados da empresa</p>
    <TextInput icon="person"/>
  </>;
}

export default RegisterForm1;