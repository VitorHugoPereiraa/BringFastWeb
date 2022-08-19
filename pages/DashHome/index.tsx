import React from 'react';
import Navbar from '../../components/Navbar';
import { DataGrid } from '@mui/x-data-grid';

// import { Container } from './styles';

const DashHome: React.FC = () => {
  const columns: GridColDef[] = [
    { field: 'id', headerName: 'Id', flex: 1 },
    { field: 'employee', headerName: 'Funcionário', flex: 1 },
    { field: 'value', headerName: 'Valor', flex: 1 },
    { field: 'status', headerName: 'Status', flex: 1},
    { field: 'info', headerName: 'Detalhes', flex: 1, renderCell: (params) => (
      <div style={{
        width: 150,
        height: 30,
        backgroundColor: "#009FB7",
        color: "#fff",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        borderRadius: 5,
      }}>
        Ver detalhes
      </div>
    )},
  ];

  const rows: GridRowsProp = [
    { id: 1, employee: 'Jonas', value: 'R$100,00', status: 999, info: 'info' },
    { id: 1, employee: 'Jonas', value: 'R$100,00', status: 999, info: 'info' },
    { id: 1, employee: 'Jonas', value: 'R$100,00', status: 999, info: 'info' },
  ];

  return <div style={{
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
      <h2 style={{
      }}>Seus pedidios:</h2>
      <DataGrid style={{
        margin: 0,
        padding: 0,
        width: "100%",
        height: 800,
        backgroundColor: "#fff"
      }} rows={rows} columns={columns}/>
    </div>
  </div>;
}

export default DashHome;