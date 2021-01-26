
import { useState } from 'react';

function Home(){
    return(
        <div>
            <h2>Contador</h2>
            <Contador />
        </div>
    )
}

function Contador(){

    const [contador, setContador] = useState(1);

    function adicionar(){
        setContador(contador + 1)
    }

    return(
        <div>
            <p>{contador}</p>
            <button onClick={() => adicionar()}>Adicionar</button>
        </div>
    )
}


export default Home;