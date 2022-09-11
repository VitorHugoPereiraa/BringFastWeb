import React, { useState } from 'react';
import dynamic from 'next/dynamic';
import CloseIcon from '@mui/icons-material/Close';

import { TextField } from '@mui/material';
import Button from "./Button";

// import { Container } from './styles';

interface Props {
    show: boolean;
    setShow: any;
}

const SingleInputAlert: React.FC<Props> = (props: Props) => {
    
  return <div style={{
    zIndex: 99,
    position: "absolute",
    top: 0,
    left: 0,
    display: props.show ? "flex" : "none",
    justifyContent: "center",
    alignItems: "center",
    width: "100vw",
    height: "100vh",
    backgroundColor: "rgba(0,0,0,0.5)",
  }}>
    <div style={{
        display: "flex",
        flexDirection: "column",
        width: 500,
        height: 300,
        borderRadius: 10,
        backgroundColor: "#fff",
    }}>
        <div style={{
            backgroundColor: "#2541B2",
            color: "#fff",
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            flex: 0.4,
            fontSize: 24,
            padding: "0 25px",
            borderRadius: "10px 10px 0 0",
        }}>
          <p>Nomeie a mesa:</p>
          <CloseIcon 
          onClick={()=>props.setShow(false)}
          style={{
            cursor: "pointer",
            width: 30,
            height: 30,
          }}/>
          </div>
        <div style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            flex: 1,
        }}>
          <TextField style={{
            width: "80%",
          }}/>
        </div>
        <div style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            flex: 0.5,
            paddingBottom: 20,
        }}>
          <Button text="Confirmar"/>
        </div>
    </div>
  </div>;
}

export default SingleInputAlert;