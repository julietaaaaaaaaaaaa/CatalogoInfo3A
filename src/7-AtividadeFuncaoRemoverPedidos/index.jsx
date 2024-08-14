// Dentro do componente, crie a função `removerItemPedidos`.
// A função recebe um parâmetro `id`, que é o identificador do item a ser removido.
// Crie uma variável `listaAux` para armazenar a lista filtrada sem o item com o `id` fornecido.
// Utilize `setListaPedidos` para atualizar o estado com a nova lista filtrada.
// Exemplo: `setListaPedidos(listaAux);`
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
        preco: "R$72,00",
    },
  
    {   id:3, 
        item: "bolo 4 leite",
        imagem:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQSYBr9IcXAaTyKPt7KHBzOc1-OcEsPqm-AEg&s",
        preco: "R$120,00"
    }
  ]);
  const [listaPedidos, setlistaPedidos] = useState([]);

  const adicionarBOLOPedido = (bolo) => {
    setBolos([...listaPedidos,bolo]);
  }

    const remover = (id) => {
        let remover = false;
        let listaAux = listaPedidos.filter((bolo)=> {
        if(remover == false){
            if(bolo.id !== id){
                return bolo
            }else{
                remover == true;
                return null
            }
        }else{
            return bolo
        }
    });
    setlistaPedidos(listaAux)
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
