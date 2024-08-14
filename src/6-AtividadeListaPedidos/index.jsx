// Crie um elemento `<div>`.
// Utilize o método `map` para listar cada objeto da `listaPedidos`
// dentro desse `<div>`.
import { useState } from "react";
export default function Home() {
  const [listadeBolos, setBolos] = useState([
      {  id:1, 
          item: "bolo de morango", 
          imagem:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTlYePBpwDeuRD_mpzGEvRi_kZa0LfLHYukrg&s",
          preco: "R$68,00"
        },
      {   id:2,
          item: "bolo de chocolate",
          imagem:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ_S6hEdOhEOZC_vh5dU660IkR3msCqttEUOg&s",
           preco: "R$72,00"
        },
      {   id:3, 
          item: "bolo 4 leite",
          imagem:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQSYBr9IcXAaTyKPt7KHBzOc1-OcEsPqm-AEg&s",
            preco: "R$120,00"
        }
  ]);

    const [listaPedidos, setlistaPedidos] = useState([]);
  

  const adicionarBOLOPedido = (bolo) => {
    setlistaPedidos([...listaPedidos,bolo]);
  }
  return (
      <div>
          <h1>Bolos da Julieta</h1>
{
    listadeBolos.map((bolo)=>
    <div key={bolo.id}>
      <p>{bolo.item}</p>
      <p>{bolo.preco}</p>
      <img src={bolo.imagem}/>
      <button onClick={()=> adicionarBOLOPedido(bolo)}> Comprar </button>
    </div>
    )
  } 
  {
    listaPedidos.map((bolo)=>
        <div key={bolo.id}>
        <p>{bolo.item}</p>
        <p>{bolo.preco}</p>
         </div>
     )
  }
  </div>
  );
}
