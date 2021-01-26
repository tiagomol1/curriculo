
import Link from 'next/link'

function Sobre(){
    return(
        <div>
            <h2>Sobre</h2>
            <Link href='/home'>
                <a>home</a>
            </Link>
            <Link href='/tempo'>
                <a>Tempo</a>
            </Link>
        </div>
    )
}

export default Sobre;