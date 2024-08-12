// Crie um estado chamado `listaProdutos` para armazenar uma lista de objetos.
// Inicialize o estado com, no mínimo, 3 objetos, cada um contendo 3 propriedades, incluindo um `id` único.
// Lembre-se de importar o `useState` do módulo `react` para utilizar o estado.


import { useState } from "react";
export default function Home() {
const [listaProdutos, setProdutos] = useState([
    {  id:1, 
        item: "bolo de morango", 
        preco: 'R$68,00'},
    {   id:2,
        item: "bolo de chocolate",
         preco: 'R$72,00'},
    {   id:3, 
        item: "bolo 4 leite",
          preco: 'R$120,00'}
]);
return (
    <div>
        <h1>Bolos da Julieta</h1>
    </div>
);
}

