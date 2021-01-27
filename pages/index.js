import styles from '../components/index.module.css'
import Link from 'next/link'

function Index(){
    return(
        <div className={styles.bodyAuthorize}>
            <img src='https://avatars.githubusercontent.com/u/62064267?s=460&u=47dd36f865b2c5023a74d21bc505abbcceec872e&v=4'/>
            <h2>Tiago Murilo Ochôa da Luz</h2>
            <p>Full Stack Developer</p>
            <h1>Welcome!<br/>To access my resume, enter the token below :</h1>
            <form action="post">
                <input type="text" placeholder="Insert the token"/>
                <Link href='/requestAccess'><a><p>or request access by clicking here</p></a></Link>
                <button type="submit">Access</button>
            </form>
        </div>
    )
}

export default Index;