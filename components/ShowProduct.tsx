import React from 'react';

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
  }}/>;
}

export default ShowProduct;