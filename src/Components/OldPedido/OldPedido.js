import "./oldPedido.css";

import { FaPizzaSlice } from "react-icons/fa";
import { FaBeer } from "react-icons/fa";

import { useEffect, useState } from "react";
import api from "../../Service/api";
import { toast } from "react-toastify";

export default function OldPedido(props) {

    const [pedido, setPedido] = useState({})
    const [user, setUser] = useState({});
    const userId = localStorage.getItem("@userId")

    useEffect(() =>{
        function hidePizza() {
            console.log(props.hidden)
            
            if (props.hidden) {
                document.getElementById("pizza-form-old").setAttribute("class", "pizza-modal-hidden-old");
                return;
            }
            
            document.getElementById("pizza-form-old").setAttribute("class", "pizza-modal-old");     
        }

        hidePizza();
        getLastPedido();
    }, [props.hidden])

    async function getLastPedido() {
        
        try {
            const user = await verifyPedidosUser(); // Aguarda a função para obter o usuário
            if (user) {
                const response = await api.post(`pedidos/ultimo-pedido/${user.codigoUsuario}`);
                setPedido(response.data); // Seta o pedido após a resposta
            }
        } catch (error) {
            console.log(error)
            toast.error(error.response.data.message || "Erro ao buscar pedido");
        }
    }

    async function submitPedido(event) {
        event.preventDefault()
    }

    async function verifyPedidosUser() {
        try {
            const response = await api.get(`user/find/${userId}`);
            setUser(response.data); // Atualiza o estado do usuário
            return response.data; // Retorna o usuário para ser usado no getLastPedido
        } catch (error) {
            toast.error("Erro ao buscar usuário");
        }
    }

    return (
        <div id="pizza-form-old" className="pizza-modal-old">
            
            <form onSubmit={submitPedido}>
                <h2>Repetir Pedido</h2>
                <div className="inputs">
                    <div className="item-pizza">
                        <div className="inputarea">
                            <label> <FaPizzaSlice size={15}/> Pizza</label>
                            <div className="multi-value">
                                <select value="Pizza" >
                                
                                </select>
                                <input type="number" value={10} min={1} step={1}/>
                            </div>
                        </div>
                    </div>
                    <div className="item-pizza">
                    <div className="inputarea">
                            <label> <FaBeer size={15}/> Bebida</label>
                            <div className="multi-value">
                                <select value="Bebida" >
                                
                                </select>
                                <input type="number" value={10} min={1} step={1}/>
                            </div>
                        </div>
                    </div>
                </div>
                <button type="submit" className="login-btn">
                    Finalizar pedido
                </button>
            </form>
        </div>
    )
}