import style from '../components/resume.module.css'

function Resume(){  
    return(
        <div className={style.body}>
            <h1>Curriculo</h1>
            <br />
            <iframe src="https://github.com/tiagomol1/curriculo/blob/master/TiagoMurilo.pdf" width="%" height="500px"/>
        </div>
    )
}
export default Resume;