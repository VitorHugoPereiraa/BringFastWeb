import React from 'react';
import Button from '../../components/Button';
import { useRouter } from 'next/router';

// import { Container } from './styles';

const RegisterAdress: React.FC = () => {
    const router = useRouter()

    const handleNext = () => {
        // if(nickname.length === 0 || code.length < 14 || companyName.length === 0){
        //   window.alert("Todos os campos devem ser preenchidos corretamente")
        //   return
        // }
    
        // localStorage.setItem("nickname", nickname)
        // localStorage.setItem("code", code)
        // localStorage.setItem("company_name", companyName)
        // router.push("/RegisterAdress")
      }

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
      <Button text="Avançar" callback={()=>handleNext()}/>
      <Button text="Voltar" color="#009FB7" margin={10} callback={()=>router.push('/RegisterPersonInfo')}/>
    </div>
  </div>;;
}

export default RegisterAdress;