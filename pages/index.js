import styles from '../components/index.module.css'
import Link from 'next/link'

function Index(){
    return(
        <div className={styles.body}>
            <img src='https://avatars.githubusercontent.com/u/62064267?s=460&u=47dd36f865b2c5023a74d21bc505abbcceec872e&v=4'/>
            <h1>Tiago Murilo</h1>
            <h2>Desenvolvedor Full Stack</h2>  
            <br/>          
            <div className={styles.listOptions}>
                <Link href='/resume'>
                    <a>
                        <div className={styles.itemListOptions}>
                            <h3>Currículo</h3>
                            <p>Conheça um pouco mais sobre minha trajetória profissional.</p>
                        </div>
                    </a>
                </Link>
                <Link href='https://www.linkedin.com/in/tiago-murilo-o-30876b14b/'>
                    <a target='_blank'>
                        <div className={styles.itemListOptions}>
                            <h3>Linkedin</h3>
                            <p>Acompanhe minhas publicações nesta rede social.</p>
                        </div>
                    </a>
                </Link>
                <Link href='https://github.com/tiagomol1'>
                    <a target='_blank'>
                        <div className={styles.itemListOptions}>
                            <h3>Github</h3>
                            <p>Veja alguns dos meus projetos, estudos e testes.</p>
                        </div>
                    </a>
                </Link>
                <Link href='/contact'>
                    <a>
                        <div className={styles.itemListOptions}>
                            <h3>Contato</h3>
                            <p>Para facilitar minha comunicação com vocês.</p>
                        </div>
                    </a>
                </Link>
            </div>
            <br/>
            <p className={styles.impactPhrase}>
                "Cada sonho que você deixa pra trás, é um pedaço do seu futuro que deixa de existir." ~Steve Jobs
            </p>
            <br/>
        </div>
    )
}

export default Index;