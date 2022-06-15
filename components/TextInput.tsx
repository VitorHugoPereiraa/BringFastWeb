import React from 'react';
import PersonIcon from '@mui/icons-material/Person';

// import { Container } from './styles';

interface Props {
    height?: string | number
    width?: string | number
    icon?: string | React.Component
}

const TextInput: React.FC<Props> = (props: Props) => {
  return <div style={{
      display: "flex",
      alignItems: "center",
      border: "1px solid #0f0f0f",
      borderRadius: 10,
      height: props.height ? props.height : 50,
      width: props.width ? props.width : 350,
  }}>
      {props.icon == "person" ? <PersonIcon style={{
          display: "flex",
          flex: 1,
          width: 30,
          height: 30,
      }}/> : <div/>}
      <input 
        style={{
          outline: 0,
          border: 0,
          flex: 5,
          fontSize: 20,
          height: 30,
        }} 
        type="text"
        placeholder='Nome completo'
      />
  </div>;
}

export default TextInput;