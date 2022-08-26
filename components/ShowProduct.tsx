import React from 'react';
import CloseIcon from '@mui/icons-material/Close';

// import { Container } from './styles';

interface Props {
    show: boolean,
    setShow: any,
}

const ShowProduct: React.FC<Props> = (props: Props) => {
  return <div style={{
      display: props.show ? "flex" : "none",
      position: "absolute",
      top: 0,
      left: 0,
      zIndex: 999,
      width: "100vw",
      height: "100vh",
      backgroundColor: "#fff"
  }}>
    <div style={{
      display: "flex",
      justifyContent: "space-between",
      alignItems: "center",
      width: "100%",
      height: 100,
      margin: "0 50px",
    }}>
      <p>blabla</p>
      <CloseIcon 
      onClick={()=>props.setShow(false)}
      style={{
        width: 50, 
        height:50, 
        color: "#c4c4c4",
        cursor: "pointer",
      }}
      />
    </div>
  </div>;
}

export default ShowProduct;