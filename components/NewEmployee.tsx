import React, { useState } from 'react';
import { useDropzone } from 'react-dropzone';
import dynamic from 'next/dynamic';
const Avatar = dynamic(
    () => import("react-avatar-edit"),
    {ssr: false}
)

import { TextField } from '@mui/material';
import InputAdornment from '@mui/material/InputAdornment';
import ImageOutlinedIcon from '@mui/icons-material/ImageOutlined';
import Button from "./Button";

// import { Container } from './styles';

interface Props {
    show: boolean;
    setShow: any;
}

const NewEmployee: React.FC<Props> = (props: Props) => {
    const [image, setImage] = useState(null);
    const [preview, setPreview] = useState(null);

    const imageRead = (e: any) => {
        const reader = new FileReader();
        reader.onload = () => {
                setImage(reader.result);
        }
        reader.readAsDataURL(e[0]);
    }

    const {getRootProps, getInputProps} = useDropzone({
        accept: {
            'image/png': [],
            'image/jpeg': [],
        },
        onDrop: acceptedFiles => imageRead(acceptedFiles),
    });

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
        width: 800,
        height: 500,
        borderRadius: 10,
        backgroundColor: "#fff",
    }}>
        <div style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            width: "100%",
            height: 100,
            padding: "0 40px",
            borderBottom: "1px solid #ccc",
            color: "#2541B2"
        }}>
            <h2>Novo funcionário</h2>
            <h2 
            onClick={() => props.setShow(false)}
            style={{
                cursor: "pointer",
            }}>X</h2>
        </div>
        <div style={{
            overflowY: "auto",
            // display: "flex",
            // flexDirection: "column",
            width: "100%",
            // height: "100%"
        }}>
            <div style={{
                width: "100%",
                height: 80,
                display: "flex",
                alignItems: "center",
                justifyContent: "space-evenly",
            }}>
                <TextField style={{width: "100%", margin: "0 30px"}} label="Nome" variant='standard'/>
            </div>
            <div style={{
                width: "100%",
                height: 80,
                display: "flex",
                alignItems: "center",
                justifyContent: "space-evenly",
            }}>
                <TextField style={{width: "100%", margin: "0 30px"}} label="E-mail" variant='standard'/>
                <TextField style={{width: "100%", margin: "0 30px"}} label="Telefone" variant='standard'/>
            </div>
            <div style={{
                width: "100%",
                height: 80,
                display: "flex",
                alignItems: "center",
                justifyContent: "space-evenly",
            }}>
                <TextField style={{width: "100%", margin: "0 30px"}} label="Login" variant='standard'/>
            </div>
            <div style={{
                width: "100%",
                height: 80,
                display: "flex",
                alignItems: "center",
                justifyContent: "space-evenly",
            }}>
                <TextField style={{width: "100%", margin: "0 30px"}} label="Senha" variant='standard'/>
                <TextField style={{width: "100%", margin: "0 30px"}} label="Confirmar senha" variant='standard'/>
            </div>
            <div style={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                width: "100%",
                height: 300,
                marginBottom: 20,
            }}>
                {image ? <Avatar
                onCrop={(view) => {setPreview(view)} }
                onClose={() => {setImage(null)} }
                width={700}
                height={270}
                src={image}
                />: <div 
                {...getRootProps()}
                style={{
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "center",
                    justifyContent: "center",
                    width: "90%",
                    height: "90%",
                    border: "2px dashed #009FB7",
                    cursor: "pointer",
                }}>
                    <input {...getInputProps()} />
                    <ImageOutlinedIcon style={{
                        width: 100,
                        height: 100,
                        color: "#009FB7",
                    }} />
                    <h2 style={{fontSize: 15, color: "#009FB7"}}>Selecione ou arraste uma imagem</h2>
                </div>}
            </div>
            <div style={{
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                    width: "100%",
                    height: 100,
                    margin: "10px 0",
                }}>
                    <Button text="Confirmar"/>
                </div>
        </div>
        <div style={{
            height: 50,
        }}/>
    </div>
  </div>;
}

export default NewEmployee;