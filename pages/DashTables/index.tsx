import React, {useState} from 'react';

import Navbar from '../../components/Navbar';
import { DataGrid } from '@mui/x-data-grid';
import { idID } from '@mui/material/locale';
import Button from '../../components/Button';
import NewProduct from '../../components/NewProduct';
import ShowProduct from '../../components/ShowProduct';
import SingleInputAlert from '../../components/SingleInputAlert';


// import { Container } from './styles';

const DashTables: React.FC = () => {
  const [newTableShow, setNewTableShow] = React.useState(false);

  const toReal = (value: number) => {
    return new Intl.NumberFormat('pt-BR', {
      style: 'currency',
      currency: 'BRL',
    }).format(value);
  }

  const tables = [
    {
      _id: 1,
      id: 'Entrada',
    },
    {
      _id: 2,
      id: 'Recepção',
    },
    {
      _id: 3,
      id: 'Arvores',
    }
  ]

  const columns = [
    { field: 'id', headerName: 'Identificador', flex: 1, headerAlign: 'center', align: 'center' },
  ];

  const rows =
    tables.map(table => ({ 
      id: table.id,
    }));

  return <>
  <SingleInputAlert show={newTableShow} setShow={setNewTableShow}/>
  <div style={{
      overflow: "hidden",
      backgroundColor: "#E3F2FD",
      display: "flex",
      flexDirection: "column",
      width: "100vw",
      height: "100vh ",
      alignItems: "center",
  }}>
    <Navbar/>
    <div style={{
      padding: 100,
      width: "100vw",
      height: "100%",
      overflowY: "auto"
    }}>
      <div style={{
        display: "flex",
        justifyContent: "space-between",
        height: 50,
        marginBottom: 25,
        alignItems: "center",
      }}>
        <h2 style={{
            fontSize: 25,
        }}>Suas mesas:</h2>
        <Button 
            text="+Adicionar Mesa" 
            callback={() => {setNewTableShow(true)}}
            width={170}
            height={35}
            fontSize={15}
        />
      </div>
      <DataGrid 
      style={{
        margin: 0,
        padding: 0,
        width: "100%",
        height: 500,
        backgroundColor: "#fff"
      }} rows={rows} columns={columns}/>
    </div>
  </div>
  </>;
}

export default DashTables;