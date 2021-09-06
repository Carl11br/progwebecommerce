import React from 'react';

import './styles.css';

import fplanta from '../../../../assets/planta.jpg';

export default function ItemView(props){
    console.log(props.produto)
    
    return(
    <div className="exibe">
        <div className="img">
          <img src={fplanta} alt="ola"/>
          <button onClick={() => props.setVisu(0)}>VOLTAR</button>
        </div>
        <div className="opcoes">
            <h1>{props.produto.nome_popular}</h1>
            <input type="number"  min="1" max={props.produto.estoque}></input>
            <button>ADD TO CARRINHO</button>
        </div>
    </div>
    );
}