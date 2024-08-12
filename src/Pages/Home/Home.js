import Header from "../Header/Header";
import pizza from "../../Assets/pizzaTeste.jpg";
import robo from "../../Assets/robozinho.png";
import 'react-toastify/dist/ReactToastify.css';
import "./home.css"
import { useEffect, useState } from "react";
import api from "../../Service/api";
import { toast, ToastContainer } from "react-toastify";

export default function Home() {

    const [pizzas, setPizzas] = useState([]);

    useEffect( ()=>{

        async function getData() {
            await api.get("/pizza")
            .then((response) => {
                setPizzas(response.data)
                toast.success("Seja bem vindo!")
            }).catch(() => {
                toast.error("Erro ao carregar dados!")
            })
        }

        getData();
        console.log(pizzas)
        
    }, [])

    return (
        <>
            <Header name="Rafael" />
            <body>
                <div className="container-feed">
                    <div className="feed">

                        {pizzas.map((p) => (
                            <div className="card">
                                <div className="image">
                                    <img src={pizza} alt="imagem de Pizza"/>
                                </div>
                                <div className="infos">
                                    <h2>{p.nomePizza}</h2>
                                    <p>{p.ingredientes}</p>
                                    <span>R${p.valorPizza}.00</span>
                                </div>
                            </div>

                        ))}

                    </div>
                </div>
                <div className="robo-area">
                    <div className="conteudo-robo">
                        <img src={robo} alt="imagem-robo"/>
                        <button>Faça seu pedido</button> 
                    </div>     
                </div>
            </body>
            <ToastContainer />
        </>
    );
}