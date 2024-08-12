import { useEffect, useState } from "react";
import api from "../../Service/api";
import { toast} from "react-toastify";
import "./newPizza.css";

export default function NewPizzaForm(props) {

    
    const [pizzaNew, setPizzaNew] = useState({});
    const [bebidaNew, setBebidaNew] = useState({})

    const [pizzaCodigo, setPizzaCodigo] = useState(null);
    const [bebida, setBebida] = useState(null);
    const [quantidadePizza, setQuantidadePizza] = useState(1);
    const [quantidadeBebida, setQuantidadeBebida] = useState(1);

    const [pizzas, setPizzas] = useState([]);
    const [bebidas, setBebidas] = useState([]);

    useEffect(() =>{
        function hidePizza() {
            
            if (props.hidden) {
                document.getElementById("pizza-form").setAttribute("class", "container-hidden");
                return;
            }
        
            document.getElementById("pizza-form").setAttribute("class", "container");     
            getPizzas();
            getBebidas();
        }

        hidePizza();
    }, [props.hidden])

    async function getPizzas() {
        await api.get("pizza")
            .then((res) => {
                setPizzas(res.data)
            })  
            .catch((error) => {
                toast.error(error.message);
            })
    }

    async function getBebidas() {

        await api.get("bebidas")
            .then((res) => {
                setBebidas(res.data);
            })  
            .catch((error) => {
                toast.error(error.message);
            })
    }

    async function submitPedido() {

        await api.get(`pizza/${pizzaCodigo}`)
        .then((res) => {
            setPizzaNew(res.data);
        })
        .catch((error) => toast.error(error.message))

        await api.get(`bebidas/${bebida}`)
        .then((res) => {
            setBebidaNew(res.data);
        })
        .catch((error) => toast.error(error.message))
    }

    return(
        <div id="pizza-form" className="container">
            <form>
                <div className="inputarea">
                    <label>Pizza</label>
                    <select value={pizzaCodigo} onChange={(e) => setPizzaCodigo(e.target.value)}>
                        {pizzas.map((p) => (
                            <option value={p.codigoPizza}>
                                {p.nomePizza}
                            </option>
                        ))}
                    </select>
                    <input type="number" value={quantidadePizza} onChange={(e) => setQuantidadePizza(e.target.value)} min={1} step={1}/>
                </div>

                <div className="inputarea">
                    <label>Bebida</label>
                    <select value={bebida} onChange={(e) => setBebida(e.target.value)}>
                        {bebidas.map((b) => (
                            <option value={b.codigoBebida}>
                                {b.bebida}
                            </option>
                        ))}
                    </select>
                    <input type="number" value={quantidadeBebida} onChange={(e) => setQuantidadeBebida(e.target.value)} min={1} step={1}/>
                </div>
            </form>
        </div>
    );
}