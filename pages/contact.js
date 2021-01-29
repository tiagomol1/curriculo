import style from '../components/contact.module.css'
import { useState } from 'react'
const token = process.env.API_SECRET

function Contact(){
    const [name, setName] = useState('');
    const [email, setEmail] = useState('')
    const [phone, setPhone] = useState('')
    const [text, setText] = useState('')

    async function handleSubmit(e){
        e.preventDefault()

        try {
            const request =  await fetch('/api/contact', {
                method: 'post',
                headers: {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({
                    name: name,
                    email: email,
                    phone: phone,
                    text: text
                })            
            })
            const response = await request.json();
            alert(JSON.stringify(response))
        } catch (error) {
            return alert('Erro ao realizar envio de dados para contato.')            
        }
    
    }

    return(
        <div className={style.body}>
            <h1>Contato</h1>
            <p>test</p>
            <form action="post" onSubmit={handleSubmit}>
                <input type="text" placeholder='Nome' onChange={e => setName(e.target.value)} required/>
                <input type="email" placeholder='Email' onChange={e => setEmail(e.target.value)} required/>
                <input type="phone" placeholder='Telefone' onChange={e => setPhone(e.target.value)} required/>
                <textarea cols="30" rows="10" onChange={e => setText(e.target.value)}></textarea>
                <button type='submit'>Enviar</button>
            </form>
        </div>
    )
}

export default Contact;