import React, {useState, useEffect} from 'react';
import TextInput from '../../components/TextInput';
import PersonIcon from '@mui/icons-material/Person';
import BadgeOutlinedIcon from '@mui/icons-material/BadgeOutlined';
import MailOutlineIcon from '@mui/icons-material/MailOutline';
import PhoneIphoneIcon from '@mui/icons-material/PhoneIphone';
import Button from '../../components/Button';
import { NavigateBefore } from '@mui/icons-material';

const Register: React.FC = () => {

  const [step, setStep] = useState(1);
  const [stepContent, setStepContent] = useState(<></>);
  const [returnHidden, setReturnHidden] = useState(true);
  const [name, setName] = useState('');
  const [personCode, setPersonCode] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [personCodeError, setPersonCodeError] = useState(false);
  const [emailError, setEmailError] = useState(false);
  const [phoneError, setPhoneError] = useState(false);

  const validateEmail = (email) => {
    let validation = /[a-zA-Z0-9]+@[a-zA-Z0-9.-]+\.[a-z]{2,8}(\.[a-z]{2,8})?/;
    if (validation.test(email)) {
      return true;
    } else {
      return false;
    }
  };

  // useEffect(() => {
  //   switch(step){
  //     case 1:
  //       setStepContent(<RegisterForm1 trigger={setStep}/>)
  //       setReturnHidden(true)
  //       break
  //     case 2:
  //       setStepContent(<RegisterForm2 />)
  //       setReturnHidden(false)
  //   }
  //   // if(step === 1) {
  //   //   setStepContent(<RegisterForm1 />)
  //   //   setReturnHidden(true)
  //   // }
  //   // else if(step != 1) {
  //   //   setReturnHidden(false);
  //   // }
  //   },[step]);

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
      <div style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        height: 370,
      }}>
        <p style={{
            fontSize: 24,
            margin: "10px 0 20px"
          }}>Dados da empresa</p>
        <TextInput 
          value={name}
          callback={(e) => setName(e.target.value)}
          placeholder="Nome completo"
          margin="0 0 30px"
          icon={<PersonIcon style={{
            width: 30,
            height: 30,
          }}/>}
        />
        <TextInput
          value={personCode}
          masked={true}
          mask={"000.000.000-00"}
          callback={(value)=>{
            setPersonCode(value.replace(/[^0-9]/g, ''));
            if(value.replace(/[^0-9]/g, '').length === 11 || value.replace(/[^0-9]/g, '').length === 0){
              setPersonCodeError(false);
            }
            else if(value.replace(/[^0-9]/g, '').length != 0 && value.replace(/[^0-9]/g, '').length < 11){
              setPersonCodeError(true);
            }
          }}
          error={personCodeError}
          placeholder="CPF"
          margin="0 0 30px"
          icon={<BadgeOutlinedIcon style={{
            width: 30,
            height: 30,
          }}/>}
        />
        <TextInput
          value={email}
          callback={(e)=>{
            setEmail(e.target.value);
            if(validateEmail(e.target.value)){
              setEmailError(false);
            }
            else{
              setEmailError(true)
            }
          }}
          error={emailError}
          placeholder="E-mail"
          margin="0 0 30px"
          icon={<MailOutlineIcon style={{
            width: 30,
            height: 30,
          }}/>}
        />
        <TextInput
          value={phone}
          masked={true}
          mask={"(00) 00000-0000"}
          callback={(value)=>{
            setPhone(value.replace(/[^0-9]/g, ''));
            if(value.replace(/[^0-9]/g, '').length === 11 || value.replace(/[^0-9]/g, '').length === 0){
              setPhoneError(false);
            }
            else if(value.replace(/[^0-9]/g, '').length != 0 && value.replace(/[^0-9]/g, '').length < 11){
              setPhoneError(true);
            }
          }}
          error={phoneError}
          placeholder="Celular"
          margin="0 0 30px"
          icon={<PhoneIphoneIcon style={{
            width: 30,
            height: 30,
          }}/>}
        />
      </div>
      <Button text="Avançar" callback={window.location("/Register2")}/>
      <Button text="Voltar" color="#009FB7" margin={10}/>
      {/* {stepContent} */}
    </div>
  </div>;
}

export default Register;