import nodemailer from 'nodemailer'
const emailSend = process.env.EMAIL_SEND
const emailPass = process.env.EMAIL_PASS_SEND
const emailRece = process.env.EMAIL_RECEIVE

export default async function Contact(request, response){
    
    const { name, email, phone, text } = request.body
    console.log(emailPass)
    console.log(emailRece)
    console.log(emailSend)

    if(request.method == 'POST'){   

        try{
            const mailTransporter = nodemailer.createTransport({ 
                service: 'gmail', 
                auth: { 
                    user: emailSend, 
                    pass: emailPass
                } 
            }); 

            const mailDetails = { 
                from: emailSend, 
                to: emailRece, 
                subject: `(Novo contato) ${email}`, 
                text: `Olá, \n\nSegue dados enviados: \n- Nome: ${name} \n- E-mail: ${email} \n- Telefone: ${phone} \n- Texto:\n---------\n ${text}\n--------- \n\n Att. notify.tiagomurilo`
            }; 

            const date = new Date();
            const dateNow = date.toGMTString()

            mailTransporter.sendMail(mailDetails, function(err, data) { 
                if(err) { 
                    console.log(dateNow + ' - Ocorreu algum erro ao tentar enviar o contato'); 
                } else { 
                    console.log(dateNow + ' - Sucesso ao enviar o contato'); 
                } 
            }); 

            return response.json({ 
                status: 200,
                message: 'Dados para contato enviado com sucesso!',
                data: {
                    name, email, phone, text
                }
            })     
        }catch(error){
            return response.status(404).json({ 
                error: 'Erro ao enviar e-mail'
            })
        }
            
    }else{
        return response.status(505).end()
    }

}
