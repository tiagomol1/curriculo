import styles from '../components/index.module.css'
import options from '../utils/options_page.json'
import Link from 'next/link'

function Index(){
    return(
        <div className={styles.body}>
            <img src='https://avatars.githubusercontent.com/u/62064267?s=460&u=47dd36f865b2c5023a74d21bc505abbcceec872e&v=4'/>
            <h1>Tiago Murilo</h1>
            <h2>Desenvolvedor Full Stack</h2>  
            <br/>          
            <div className={styles.listOptions}>
                {options.map(option =>{
                    return(
                        <Link href={option.link}>
                            <a>
                                <div className={styles.itemListOptions}>
                                    <h3>{option.title}</h3>
                                    <p>{option.description}</p>
                                </div>
                            </a>
                        </Link>
                    )
                })}
            </div>
            <p className={styles.impactPhrase}>
                "A única maneira de fazer um excelente trabalho é amar o que você faz." ~Steve Jobs
            </p>
            <br/>
        </div>
    )
}

export default Index;