import React, {useState, useEffect} from 'react';
import RegisterForm1 from '../../components/registerForm1';
import Button from '../../components/Button';

const Register: React.FC = () => {

  const [step, setStep] = useState(1);
  const [stepContent, setStepContent] = useState(<></>);
  const [returnHidden, setReturnHidden] = useState(true);

  useEffect(() => {
    if(step === 1) {
      setStepContent(<RegisterForm1 />)
      setReturnHidden(true)
    }
    else if(step != 1) {
      setReturnHidden(false);
    }},[step]);

  return <div style={{
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    width: "100vw",
    height: "100vh",
    backgroundColor: "#E3F2FD",
  }}>
    <div style={{
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      backgroundColor: "#fff",
      width: 1000,
      height: 650,
      padding: 30,
      borderRadius: 10,
      boxShadow: "0 0 20px rgba(0, 0, 0, 0.5)"
    }}>
      <h2 style={{
        fontSize: 38,
        fontWeight: 'bold',
      }}>Cadastre-se</h2>
      <div style={{
        display: "flex",
        alignItems: "center",
      }}>
        <p style={{
          margin: "14px 0",
          fontSize: 16,
        }}>Já possui uma conta?</p>
        <span style={{
          textDecoration: "underline",
          color: "#009FB7",
          marginLeft: 12,
          cursor: "pointer"
        }}>Login</span>
      </div>
      {stepContent}
      <Button text="Avançar"/>
      <Button hidden={returnHidden} text="Voltar" color="#009FB7" margin={10}/>
    </div>
  </div>;
}

export default Register;