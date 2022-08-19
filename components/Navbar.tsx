import React from 'react';
import { useRouter } from 'next/router';

const Navbar: React.FC = () => {
    const router = useRouter()

  return <div style={{
      backgroundColor: "#2541B2",
      display: "flex",
      justifyContent: "right",
      alignItems: "center",
      width: "100vw",
      height: 100,
  }}>
      <div style={{
          margin: 20,
      }}>
        <span
        onClick={()=>router.push("/DashHome")} 
        style={{
            color: "#fff",
            marginRight: 20,
            cursor: "pointer",
        }}>Home</span>
        <span style={{
            color: "#fff",
            marginRight: 20,
            cursor: "pointer",
        }}>Cardapio</span>
        <span style={{
            color: "#fff",
            marginRight: 20,
            cursor: "pointer",
        }}>Mesas</span>
        <span style={{
            color: "#fff",
            cursor: "pointer",
        }}>Funcionários</span>
      </div>
  </div>;
}

export default Navbar;