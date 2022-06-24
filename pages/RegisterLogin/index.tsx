import React, { useState } from 'react';
import Button from '../../components/Button';
import TextInput from '../../components/TextInput';
import KeyIcon from '@mui/icons-material/Key';
import PersonIcon from '@mui/icons-material/Person';
import {useRouter} from 'next/router'

const RegisterLogin: React.FC = () => {
  const router = useRouter()

  const [login, setLogin] = useState('')
  const [password, setPassword] = useState('')
  const [passwordError, setPasswordError] = useState(false)
  const [passwordConfirm, setPasswordConfirm] = useState('')
  const [passwordConfirmError, setPasswordConfirmErrror] = useState(false)

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
          }}>Dados de acesso</p>
        <TextInput 
          value={login}
          callback={(e)=>setLogin(e.target.value)}
          placeholder="Login"
          margin="0 0 30px"
          icon={<PersonIcon style={{
            width: 30,
            height: 30,
          }}/>}
        />
        <TextInput
        type="password"
          value={password}
          callback={(e)=>{
            setPassword(e.target.value)
            if(password.length < 8){
                setPasswordError(true)
            }
            else{
                setPasswordError(false)
            }
          }}
          error={passwordError}
          placeholder="Senha"
          margin="0 0 30px"
          icon={<KeyIcon style={{
            width: 30,
            height: 30,
          }}/>}
        />
        <TextInput
          type="password"
          value={passwordConfirm}
          callback={(e)=>{
            setPasswordConfirm(e.target.value)
            if(password !== passwordConfirm){
                setPasswordConfirmErrror(true)
            }
            else{
                setPasswordConfirmErrror(false)
            }
          }}
          error={passwordConfirmError}
          placeholder="Confirme sua senha"
          margin="0 0 30px"
          icon={<KeyIcon style={{
            width: 30,
            height: 30,
          }}/>}
        />
      </div>
      <Button 
        text="Cadastrar" 
        callback={()=>console.log("confirm")}
      />
      <Button text="Voltar" color="#009FB7" margin={10} callback={()=>router.push('/RegisterPersonInfo')}/>
    </div>
  </div>;;
}

export default RegisterLogin;