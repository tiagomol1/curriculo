export default async function Contact(request, response){

    const { name, email, phone, text } = request.body
    // const token = request.headers.authorization

    if(request.method == 'POST'){
        return response.json({ 
            status: 200,
            message: 'Dados para contato enviado com sucesso!',
            data: {
                name, email, phone, text
            }
        })        
    }else{
        return response.status(505).end()
    }

}
