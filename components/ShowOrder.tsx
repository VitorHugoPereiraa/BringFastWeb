import React, { useEffect, useState } from 'react';
import CloseIcon from '@mui/icons-material/Close';
import { TextField } from '@mui/material';
import InputAdornment from '@mui/material/InputAdornment';
import EditOutlinedIcon from '@mui/icons-material/EditOutlined';
import EditIcon from '@mui/icons-material/Edit';
import { DataGrid } from '@mui/x-data-grid';

// import { Container } from './styles';

interface Props {
    show: boolean,
    setShow: any,
    order: any,
}

const ShowProduct: React.FC<Props> = (props: Props) => {
  const [edit, setEdit] = useState(false)

  const toReal = (value: number) => {
    return new Intl.NumberFormat('pt-BR', {
      style: 'currency',
      currency: 'BRL',
    }).format(value);
  }

  const dateFormating = (date: number) => {
    let newDate = new Date(date)
    return `${newDate.getUTCDate() < 10 
      ? "0"+newDate.getUTCDate() 
      : newDate.getUTCDate()
    }/${newDate.getUTCMonth()+1 < 10 
      ? "0"+Number(newDate.getUTCMonth()+1)
      : newDate.getUTCMonth()}/${newDate.getUTCFullYear()}`
  }

  const timeFormating = (date: number) => {
    let newDate = new Date(date)
    return `${newDate.getUTCHours() < 10 
      ? "0"+newDate.getUTCHours() 
      : newDate.getUTCHours()
    }:${newDate.getUTCMinutes() < 10 
      ? "0"+newDate.getUTCMinutes()
      : newDate.getUTCMinutes()}`
  }

  const handleStatus = (statusnum: string) => {
    let status = {
      name: "",
      color: "",
    }

    switch (statusnum) {
      case "999":
        status = {
          name: "Finalizado",
          color: "#009FB7"
        }
        break;
      case "000":
        status = {
          name: "Cancelado",
          color: "#FF0000"
        }
        break;
    }

    return status
  }

  const [selectedOrder, setSelectedOrder] = React.useState({
    id: 0,
      name: '',
      value: '',
      status: "1010",
      details: {
        note: '',
        date: 0,
        products: [],
      }
  })

  const products = [
    {
      id: 1,
      name: 'X-Burguer',
      image: 'https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fwww.wallpapersdsc.net%2Fwp-content%2Fuploads%2F2016%2F09%2FJunk-Food-Pictures.jpg&f=1&nofb=1',
      value: 13.99,
      details: {
        description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quidem.",
        discount: 10,
        category: 'Lanches',
      }
    },
    {
      id: 2,
      image: 'https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fwww.wallpapersdsc.net%2Fwp-content%2Fuploads%2F2016%2F09%2FJunk-Food-Pictures.jpg&f=1&nofb=1',
      name: 'X-Salada',
      value: 15.99,
      details: {
        description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quidem.",
        discount: 15,
        category: 'Lanches',
      }
    },
    {
        id: 3,
        image: "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fimg.cybercook.com.br%2Fimagens%2Freceitas%2F818%2Fsuco-de-laranja-com-linhaca-1.jpeg&f=1&nofb=1",
        name: 'Suco de laranja',
        value: 4.99,
        details: {
          description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quidem.",
          discount: 25,
          category: 'Bebidas',
          beverage: true,
        }
      }
  ]

  const columns = [
    { field: 'id', headerName: 'Id', flex: 1 },
    { field: 'image', headerName: 'Imagem', flex: 1, renderCell: (params) => {
      return <div style ={{
          backgroundImage: `url(${params.value})`,
          backgroundSize: 'cover',
          width: 40,
          height: 40,
          borderRadius: '50%',
      }}/>
    }},
    { field: 'name', headerName: 'Nome', flex: 1 },
    { field: 'value', headerName: 'Preço', flex: 1 },
    { field: 'discount', headerName: 'Desconto', flex: 1},
  ];

  const rows =
    products.map(order => ({ 
      id: order.id, 
      name: order.name,
      image: order.image, 
      value: toReal(order.value),
      discount: order.details.discount+"%",
      categoria: order.details.category,
      info: order.details 
    }));

  useEffect(()=>{
      let order = props.order

      if(order){
        setSelectedOrder({
            id: order.id,
            name: order.name,
            value: toReal(order.value),
            status: order.status,
            details: order.details,
        })
      }
  },[props.order])

  return (<>
  <style jsx>
    {`
      .body-container {
        width: 100%; 
        height: 100%;
      }
    
      .main-container {
        display: flex;
        width: 100%;
        min-height: 400px;
        padding: 0 50px 30px;
        overflow: auto;
      }

      .left-main {
        display: flex;
        flex-direction: column;
        justify-content: space-between;
      }

      @media (min-width: 650px) {
        .body-container {
          overflow-y: hidden;
        }

        .left-main {
          flex: 1;
          font-size: 24px;
        }
      }

      @media (max-width: 650px) {
        .body-container {
          overflow-y: auto;
        }

        .main-container {
          flex-direction: column;
          height: 100%;
        }
        
        .left-main {
          flex: 0.5;
          font-size: 16px;
        }

        .product-table {
          margin-top: 50px;
        }
      }
    `}
  </style>
  <div style={{
      display: props.show ? "flex" : "none",
      flexDirection: "column",
      position: "absolute",
      top: 0,
      left: 0,
      zIndex: 999,
      width: "100vw",
      height: "100vh",
      backgroundColor: "#fff",
      overflowY: "hidden"
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
      <p>Detalhes do pedido</p>
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
    <div className='body-container'>
      <div style={{
        display: "flex",
        width: "100%",
        height: 80,
        margin: "50px 0",
        padding: "0 50px",
        alignItems: "center",
        justifyContent: "space-between",
        fontSize: 24,
      }}>
        <h2>Informações básicas:</h2>
        <div style={{
          display: "flex",
          alignItems: "center",
        }}>
          <p style={{marginRight: 10,}}>Status: </p>
          <div style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            fontSize: 16,
            height: 35,
            padding: "0 20px",
            borderRadius: 5,
            color: "#fff",
            backgroundColor: handleStatus(selectedOrder.status).color,
          }}><p>{handleStatus(selectedOrder.status).name}</p></div>
        </div>
      </div>
      <div className='main-container'>
        <div className='left-main'>
          <div style={{
            display: "flex",
            flexDirection: "column",
          }}>
            <div style={{
              display: "flex",
              boxSizing: "border-box",
              marginBottom: 50,
            }}>
              <p style={{marginRight: 10}}>Nome:</p>
              <p style={{marginRight: 10}}>{selectedOrder.name}</p>
            </div>
            <div style={{
              display: "flex",
              boxSizing: "border-box",
              marginBottom: 50,
            }}>
              <p style={{marginRight: 10}}>Data:</p>
              <p style={{marginRight: 10}}>{dateFormating(selectedOrder.details.date)}</p>
            </div>
            <div style={{
              display: "flex",
              boxSizing: "border-box",
              marginBottom: 50,
            }}>
              <p style={{marginRight: 10}}>Horário:</p>
              <p style={{marginRight: 10}}>{timeFormating(selectedOrder.details.date)}</p>
            </div>
          </div>
          <div style={{
              display: "flex",
              boxSizing: "border-box",
              marginBottom: 10,
            }}>
              <h2 style={{marginRight: 10}}>Valor total:</h2>
              <h2 style={{marginRight: 10}}>{selectedOrder.value}</h2>
            </div>
        </div>
        <div 
        className="product-table"
        style={{
          boxSizing: "border-box",
          display: "flex",
          flex: 1,
        }}>
          <DataGrid 
          style={{
            margin: 0,
            padding: 0,
            width: "80%",
            height: "100%",
            backgroundColor: "#fff"
          }}
          columns={columns} 
          rows={rows}/>
        </div>
      </div>
    </div>
  </div></>)
}

export default ShowProduct;