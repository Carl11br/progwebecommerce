import React, { useState, useEffect } from 'react'; 
import { TiShoppingCart } from 'react-icons/ti'

import api from '../../services/api'

import './styles.css';

import Gridbox from './components/GridBox'
import ItemView from './components/ItemView'

export default function Home() {
    const [produtos, setProdutos] = useState([]);
    const [sideMove, setSideMove] = useState(false);
    const [visu, setVisu] = useState(0);

    useEffect(() => {
        api.get('produtos').then( response => {
            setProdutos( response.data);
        })

    },[]);

    function Show(props) {
        const visu = props.visu;
        if (visu === 0) {
          return <Gridbox produtos={props.produtos} setVisu={setVisu}/>
        }
        return <ItemView  produto={props.produtos.find((element) => { return element.id === visu; }) } setVisu={setVisu}/>;
      }

    return(
        <div className="home"> 
            <header> 
                <div className="logo">
                <h1>Mudinhas e afins.</h1>
                <p>Horto Online</p>
                </div>
                <button type="checkbox" className="check" onClick={() => setSideMove(!sideMove)}>
                    <TiShoppingCart size={60} color="gray"/>
                </button>
            </header>
            
            <Show produtos={produtos} visu={visu} />
            <div className={`sidebar${sideMove === true ? '-open':''}`}>
                <header>Meu Carrinho</header>
                <div>
                    <h1>TOTAL: {90}</h1>
                    <button onClick={() => setSideMove(!sideMove)}>Continuar comprando</button>
                    <button>Finalizar Compra</button>
                </div>
            </div>


        </div>
    );
} 