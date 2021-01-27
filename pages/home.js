import styles from '../components/global.module.css'

function Home(){
    return(
        <div className={styles.body}>
            <div className={styles.header}>
                <img className={styles.imageProfile} src='https://s3-sa-east-1.amazonaws.com/99freelas/profile/210x210/tiagoMurilo08.png?m=1590619193863'/>
            </div>
            <div className={styles.globalContainer}>
                <p> Tiago Murilo Ochôa da Luz </p>
                <div className={styles.headerMenu}>
                    <a> Home </a>
                    <a> Projects </a>
                    <a> About </a>
                </div>
            </div>
        </div>
    )
}

export default Home;