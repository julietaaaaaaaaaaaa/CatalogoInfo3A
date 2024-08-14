// Crie um estado chamado `listaProdutos` para armazenar uma lista de objetos.
// Inicialize o estado com, no mínimo, 3 objetos, cada um contendo 3 propriedades, incluindo um `id` único.
// Lembre-se de importar o `useState` do módulo `react` para utilizar o estado.
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
return (
    <div>
        <h1>Bolos da Julieta</h1>
    </div>
);
}

