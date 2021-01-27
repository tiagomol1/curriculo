import styles from '../components/index.module.css'
import Link from 'next/link'
import {FiArrowLeft} from 'react-icons/fi'

function RequestAccess(){
    return(
        <div className={styles.bodyAuthorize}>
            <h1>Inform your e-mail below</h1>
            <form action="post">
                <input type="text" placeholder="Insert the e-mail"/>
                <button type="submit">Access</button>
            </form>
            <br/>
            <br/>
            <Link href="/"><a> <FiArrowLeft/> Return</a></Link>
        </div>
    )
}

export default RequestAccess;