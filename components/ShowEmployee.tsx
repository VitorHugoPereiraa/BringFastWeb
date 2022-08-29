import React, { useEffect, useState } from 'react';
import CloseIcon from '@mui/icons-material/Close';
import { emphasize, TextField } from '@mui/material';
import InputAdornment from '@mui/material/InputAdornment';
import EditOutlinedIcon from '@mui/icons-material/EditOutlined';
import EditIcon from '@mui/icons-material/Edit';

// import { Container } from './styles';

interface Props {
    show: boolean,
    setShow: any,
    employee: any,
}

const ShowEmployee: React.FC<Props> = (props: Props) => {
  const [edit, setEdit] = useState(false)
  const [selectedEmployee, setSelectedEmployee] = React.useState({
    id: 0,
    name: '',
    image: '',
    email: "",
    phone: 0,
    description: "",
    auth: {
      login: "",
      password: "",
      passconfirm: ""
    }
  })


  useEffect(()=>{
      let emp = props.employee

      if(emp){
        setSelectedEmployee({
          id: emp.id,
          image: emp.image,
          name: emp.name,
          email: emp.email,
          description: emp.description,
          auth: {
            login: emp.login,
            password: emp.password,
            passconfirm: ""
          }
        })
      }
  },[props.employee])

  return <div style={{
      display: props.show ? "flex" : "none",
      flexDirection: "column",
      position: "absolute",
      top: 0,
      left: 0,
      zIndex: 999,
      width: "100vw",
      height: "100vh",
      backgroundColor: "#fff"
  }}>
    <div style={{
      backgroundColor: "#2541B2",
      display: "flex",
      justifyContent: "space-between",
      alignItems: "center",
      width: "100%",
      height: 75,
      padding: "0 50px",
      borderRadius: "0 0 10px 10px",
      color: "#fff",
      fontSize: 20,
    }}>
      <p>Funcionário:</p>
      <div style={{
        display: "flex",
        alignItems: "center",
        justifyContent: "space-evenly",
        height: "100%",
      }}>
        {
          edit ? <EditIcon
            style={{
              width: 35,
              height: 35,
              cursor: "pointer"
            }}
            onClick={()=>setEdit(!edit)}
          /> : <EditOutlinedIcon
            style={{
              width: 35,
              height: 35,
              cursor: "pointer"
            }}
            onClick={()=>setEdit(!edit)}
          />
        }
        <CloseIcon 
        onClick={()=>props.setShow(false)}
        style={{
          width: 40, 
          height: 40, 
          color: "#fff",
          cursor: "pointer",
          marginLeft: 20,
        }}
        />
      </div>
    </div>
    <div style={{
      width: "100%",
      height: "100%",
      display: "flex",
      flexDirection: "column"
    }}>
      <div style={{
        display: "flex",
        alignItems: "center",
        flex: 1.5,
        width: "100%",
        justifyContent: "space-around"
      }}>
        <div style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          width: 200,
          height: 200,
          margin: 25,
          backgroundImage: selectedEmployee.image ? `url(${selectedEmployee.image})` : "",
          backgroundSize: "cover",
          borderRadius: "50%",
        }}>
          <div style={{
            cursor: "pointer",
            display: edit ? "flex" : "none",
            alignItems: "center",
            justifyContent: "center",
            width: 200,
            height: 200,
            backgroundColor: "rgb(0,0,0,0.5)",
            borderRadius: "50%",
          }}>
            <span style={{fontSize: 20, color: "#fff"}}>Alterar imagem</span>
          </div>
        </div>
        <div style={{
          display: "flex",
          flexDirection: "column",
          width: "70%",
          margin: 25,
        }}>
          <div style={{
            display: "flex",
            width: "100%",
          }}>
            <TextField 
              disabled={!edit}
              value={selectedEmployee.name}
              label="Nome do produto" 
              variant="standard"
              style={{width: "100%", marginRight: 50}}
            />
            <TextField 
              disabled={!edit}
              value={selectedEmployee.phone}
              label="Telefone" 
              variant="standard"
              style={{width: "100%", marginRight: 50}}
            />
            <TextField 
              disabled={!edit}
              value={selectedEmployee.auth.login}
              label="Login" 
              variant="standard"
              style={{width: "100%"}}
            />
          </div>
          <div style={{
            display: "flex",
            marginTop: 20,
            width: "100%",
          }}>
            <TextField 
              disabled={!edit}
              value={selectedEmployee.email}
              label="E-mail" 
              variant="standard"
              style={{width: "100%", marginRight: edit ? 50 : 0}}
            />
            <TextField 
              disabled={!edit}
              value={selectedEmployee.auth.password}
              label="Password" 
              variant="standard"
              type="password"
              style={{width: "100%", marginRight: 50, display: edit ? "flex" : "none"}}
            />
            <TextField 
              disabled={!edit}
              value={selectedEmployee.auth.passconfirm}
              label="Passconfirm" 
              variant="standard"
              type="password"
              style={{width: "100%", display: edit ? "flex" : "none"}}
            />
          </div>
        </div>
      </div>
      <div style={{
        display: "flex",
        justifyContent: "center",
        width: "100%",
        flex: 1,
      }}>
        <textarea 
            disabled={!edit}
            value={selectedEmployee.description}
            style={{
              width: "90%",
              margin: 20,
              height: 170,
              resize: "none",
            }}/>
      </div>
    </div>
  </div>;
}

export default ShowEmployee;