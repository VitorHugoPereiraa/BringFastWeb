import React, { useEffect, useState } from 'react';
import CloseIcon from '@mui/icons-material/Close';
import { TextField } from '@mui/material';
import InputAdornment from '@mui/material/InputAdornment';
import EditOutlinedIcon from '@mui/icons-material/EditOutlined';
import EditIcon from '@mui/icons-material/Edit';

// import { Container } from './styles';

interface Props {
    show: boolean,
    setShow: any,
    order: any,
}

const ShowProduct: React.FC<Props> = (props: Props) => {
  const [edit, setEdit] = useState(false)
  const [selectedProduct, setSelectedProduct] = React.useState({
    id: 0,
      name: '',
      value: 0,
      status: '1010',
      details: {
        note: '',
        date: '',
        food: [],
        beaverages: [],
      }
  })

  useEffect(()=>{
      let order = props.order

      if(order){
        setSelectedProduct({
            id: order.id,
            name: order.name,
            value: order.value,
            status: order.status,
            details: order.details,
        })
      }
  },[props.order])

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
      <p>Seu produto</p>
      <div style={{
        display: "flex",
        alignItems: "center",
        justifyContent: "space-evenly",
        height: "100%",
      }}>
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
    <div>
    </div>
  </div>;
}

export default ShowProduct;