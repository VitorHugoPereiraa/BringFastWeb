import React, {useState} from 'react';
import Navbar from '../../components/Navbar';
import { DataGrid } from '@mui/x-data-grid';
import { idID } from '@mui/material/locale';
import ShowOrder from "../../components/ShowOrder"

// import { Container } from './styles';

const DashHome: React.FC = () => {
  const [showOrder, setShowOrder] = React.useState(false)
  const [selectedOrder, setSelectedOrder] = React.useState()

  const toReal = (value: number) => {
    return new Intl.NumberFormat('pt-BR', {
      style: 'currency',
      currency: 'BRL',
    }).format(value);
  }

  const orders = [
    {
      id: 1,
      name: 'John Doe',
      value: 100,
      status: '999',
      details: {
        note: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quidem.',
        date: '2020-01-01',
        food: [
          'Pizza',
          'Burger',
          'Pasta',
        ],
        beaverages: [
          'Coke',
          'Fanta',
          'Sprite',
        ]
      }
    },
    {
      id: 2,
      name: 'Gabriel Machado',
      value: 200.50,
      status: '000',
      details: {
        note: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quidem.',
        date: '2020-01-01',
        food: [
          'Pizza',
          'Burger',
          'Pasta',
          'Pizza',
          'Burger',
        ],
        beaverages: [
          'Coke',
          'Fanta',
        ],
      }
    }
  ]

  const columns = [
    { field: 'id', headerName: 'Id', flex: 1 },
    { field: 'employee', headerName: 'Funcionário', flex: 1 },
    { field: 'value', headerName: 'Valor', flex: 1 },
    { field: 'status', headerName: 'Status', flex: 1, renderCell: (params) => {
      if(params.value === '999') {
        return <div style={{
          width: 150,
          height: 30,
          backgroundColor: "#009FB7",
          color: "#fff",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          borderRadius: 5,
        }}>Finalizado</div>
    } else if(params.value === '000') {
      return <div style={{
        width: 150,
        height: 30,
        backgroundColor: "#FF0000",
        color: "#fff",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        borderRadius: 5,
      }}>Cancelado</div>
    } else {
      return <div style={{
        width: 150,
        height: 30,
        backgroundColor: "#FFA500",
        color: "#fff",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        borderRadius: 5,
      }}>Aberto</div>
    }}},
    { field: 'info', headerName: 'Detalhes', flex: 1, renderCell: (params) => (
      <div 
      onClick={()=>{
        setSelectedOrder(params.row)
        setShowOrder(true)
      }}
      style={{
        width: 150,
        height: 30,
        backgroundColor: "#009FB7",
        color: "#fff",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        borderRadius: 5,
        cursor: "pointer",
      }}>
        Ver detalhes
      </div>
    )},
  ];

  const rows = 
    orders.map(order => ({ 
      id: order.id, 
      employee: order.name, 
      value: toReal(order.value),
      status: order.status, 
      info: order.details 
    }));
    // { id: 3, employee: 'Jonas', value: 'R$100,00', status: 999, info: 'info' },
    // { id: 4, employee: 'Jonas', value: 'R$100,00', status: 999, info: 'info' },
    // { id: 5, employee: 'Jonas', value: 'R$100,00', status: 999, info: 'info' },


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
    <ShowOrder show={showOrder} setShow={setShowOrder} order={selectedOrder}/>
    <div style={{
      padding: 100,
      width: "100vw",
      height: "100%",
      overflowY: "auto"
    }}>
      <h2 style={{
        marginBottom: 25,
      }}>Seus pedidios:</h2>
      <DataGrid style={{
        margin: 0,
        padding: 0,
        width: "100%",
        height: 500,
        backgroundColor: "#fff"
      }} rows={rows} columns={columns}/>
    </div>
  </div>;
}

export default DashHome;