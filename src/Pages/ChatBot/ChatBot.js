import { useState } from "react";

export default function ChatBot() {

    const [option, setOption] = useState("");
    const [pizzas, setPizzas] = useState([]);
    const [isNewPizza, setIsNewPizza] = useState(false);

    const decisionTree = {
        question: "Qual operação voce deseja fazer?",
        answers: {
            "Novo pedido" : {
                question: "Escolha seu pedido",
                answers: newPedido()
            },

            "Repetir pedido" : {
                question: "Repetir pedido",
                answers: repetirPedido()
            },

            "Sair" : sair()
        }
    }

    function newPedido() {
        setIsNewPizza(true);

    }

    return(
        <div>

        </div>
    );
}