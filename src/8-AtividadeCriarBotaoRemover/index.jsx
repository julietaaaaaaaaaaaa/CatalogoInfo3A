// Crie e exporte uma função que retorna uma estrutura HTML.
// Nomeie a função como `Home`, lembrando-se sempre de usar a primeira letra maiuscula.
// Inclua uma tag `<h1>` dentro da função, e insira um texto relacionado ao tema escolhido.

// Crie um estado chamado `arrayProdutos` para armazenar uma lista de objetos.
// Inicialize o estado com, no mínimo, 5 objetos, cada um contendo 4 propriedades, incluindo um `id` único.
// Lembre-se de importar o `useState` do módulo `react` para utilizar o estado.

// Crie um elemento `<div>`.
// Utilize o método `map` para listar cada objeto da `arrayProdutos`
// dentro desse `<div>`.

// Crie o estado `meusPedidos`.
// Dentro do componente, crie a função `adicionarItemPedidos`.
// A função recebe um parâmetro, que pode ser nomeado como `produto`.
// Dentro da função, utilize `setMeusPedidos` para adicionar o `produto` à `meusPedidos`.
// Exemplo: `setMeusPedidos([...arrayPedidos, produto]);`

// Para cada objeto renderizado, adicione um botão.
// Utilize o atributo onClick para o botão.
// No valor do onClick, passe a função adicionarItemPedidos, 
// por exemplo: onClick={() => adicionarItemPedidos(pedido)}
// No conteúdo do botão, coloque o texto "Selecionar" ou algo semelhante.

// Crie um elemento `<div>`.
// Utilize o método `map` para listar cada objeto da `arrayPedidos`
// dentro desse `<div>`.

// Dentro do componente, crie a função `removerItemPedidos`.
// A função recebe um parâmetro `id`, que é o identificador do item a ser removido.
// Crie uma variável `listaAux` para armazenar a lista filtrada sem o item com o `id` fornecido.
// Utilize `setListaPedidos` para atualizar o estado com a nova lista filtrada.
// Exemplo: `setListaPedidos(listaAux);`

// Dentro do `map`, crie um botão para cada item.
// Utilize o atributo `onClick` para definir a ação do botão.
// No valor do `onClick`, chame a função `removerItemPedidos`.
// Passe o identificador (`id`) do item como parâmetro para `removerItemPedidos`, o mesmo que você usa no `map`.
// No conteúdo do botão, coloque o texto "Remover".
import { useState } from "react";
export default function Home() {
    const [listadeBolos, setBolos] = useState([
        {
            id: 1,
            item: "bolo de morango",
            imagem: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTlYePBpwDeuRD_mpzGEvRi_kZa0LfLHYukrg&s",
            preco: "R$68,00"
        },

        {
            id: 2,
            item: "bolo de chocolate",
            imagem: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ_S6hEdOhEOZC_vh5dU660IkR3msCqttEUOg&s",
            preco: "R$72,00",
        },

        {
            id: 3,
            item: "bolo 4 leite",
            imagem: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQSYBr9IcXAaTyKPt7KHBzOc1-OcEsPqm-AEg&s",
            preco: "R$120,00"
        }
    ]);
    const [listaPedidos, setlistaPedidos] = useState([]);

    const adicionarBOLOPedido = (bolo) => {
        setlistaPedidos([...listaPedidos, bolo]);
    }
    const removerBolo = (id) => {
        let remover = false;
        let listaAux = listaPedidos.filter((bolo) => {
            if (remover == false) {
                if (bolo.id !== id) {
                    return bolo
                } else {
                    remover = true;
                    return null
                }
            } else {
                return bolo
            }
        });
        setlistaPedidos(listaAux)
    }

    return (
        <div>
            <h1>Bolos da Julieta</h1>
            {
                listadeBolos.map((bolo) =>
                    <div key={bolo.id}>
                        <p>{bolo.item}</p>
                        <p>{bolo.preco}</p>
                        <img src={bolo.imagem} />
                        <button onClick={() => adicionarBOLOPedido(bolo)}> Comprar </button>
                    </div>
                )
            }
            {
                listaPedidos.map((bolo) =>
                    <div key={bolo.id}>
                        <p>{bolo.item}</p>
                        <p>{bolo.preco}</p>
                        <button onClick={() => removerBolo(bolo.id)}> Remover compra </button>
                    </div>
                )
            }
        </div>
    );
}

