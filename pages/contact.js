import style from '../components/contact.module.css'

function Contact(){
    return(
        <div className={style.body}>
            <h1>Contato</h1>
            <form action="post">
                <input type="text" placeholder='Nome'/>
                <input type="text" placeholder='Email'/>
                <input type="text" placeholder='Telefone'/>
                <textarea name="" id="" cols="30" rows="10"></textarea>
                <button type='submit'>Enviar</button>
            </form>
        </div>
    )
}

export default Contact;