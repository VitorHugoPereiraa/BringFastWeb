import React, { useState } from 'react';
import { useRouter } from 'next/router';
import PersonIcon from '@mui/icons-material/Person';
import { outlinedInputClasses } from '@mui/material';

const Navbar: React.FC = () => {
    const router = useRouter()

    const user = {
        image: "https://static1.minhavida.com.br/articles/5e/41/c5/51/cereal-matinal-cafe-da-manha-orig-1.jpg"
    }

  return <div style={{
      backgroundColor: "#2541B2",
      display: "flex",
      justifyContent: "right",
      alignItems: "center",
      width: "100vw",
      height: 100,
  }}>
      <div style={{
          display: "flex",
          alignItems: "center",
          margin: 20,
      }}>
        <span
        onClick={()=>router.push("/DashHome")} 
        style={{
            color: "#fff",
            marginRight: 20,
            cursor: "pointer",
        }}>Home</span>
        <span 
        onClick={()=>router.push("/DashMenu")} 
        style={{
            color: "#fff",
            marginRight: 20,
            cursor: "pointer",
        }}>Cardapio</span>
        <span style={{
            color: "#fff",
            marginRight: 20,
            cursor: "pointer",
        }}>Mesas</span>
        <span 
        onClick={()=>router.push("/DashEmployees")}
        style={{
            color: "#fff",
            cursor: "pointer",
        }}>Funcionários</span>
        <div style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            backgroundColor: "#fff",
            width: 50,
            height: 50,
            borderRadius: "50%",
            margin: "0 20px",
            outline: "3px solid #009FB7"
        }}>
            {user.image ? <div style={{
                backgroundImage: `url(${user.image})`,
                backgroundSize: "cover",
                width: "100%",
                height: "100%",
                borderRadius: "50%",
            }}/> : <PersonIcon style={{
                width: 30,
                height: 30,
                color: "#009FB7"
            }}/>}
        </div>
      </div>
  </div>;
}

export default Navbar;