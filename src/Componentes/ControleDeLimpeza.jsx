import { Button, DivCardMaior, DivImg, DivPrincipal, Form, H1, Img, Input, InputComentario, Label } from "../Style/ControleDeLimpeza"
import Img1 from '../../Image/carrinho-limpeza.png'
import React from "react"

const ControleDeLimpeza = (saveDados) => {

    const[nome, setNome] = React.useState('')
    const[hora, setHora] = React.useState('')
    const[sala, setSala] = React.useState('')
    const[data, setData] = React.useState('')
    const[error, setError] = React.useState('')

    function handleSaveInfo () {
        const dados = {
           nome,
           hora, 
           sala, 
           data 
        }
        console.log(dados)
        saveDados(dados)
    }

    function ValidaNome (value) {
        if(value === ''){
            setError("O campo não pode estar vazio")
            return false
    }else {
        setError(null)
        return true
    }
}

function handleNome({target}){
    ValidaNome(target.value)
}

    function preventDefult(event){
        event.preventDefult()
        }

    return(
        <DivPrincipal>
            <DivCardMaior>
                <Form onSubmit={preventDefult}>
                <H1>Controle de Limpeza</H1>
                <Input type="text" placeholder="Nome" 
                value={nome}
                onBlur={handleNome}
                style={error ? {borderColor: "red"} :{borderColor:"green"}}
                onChange={({target}) => setNome(target.value)}/>
                <Input type="text" placeholder="Horário da limpeza"
                 value={hora}
                 onChange={event => setHora(event.target.value)}/>
                <Input type="text" placeholder="Número da sala"
                 value={sala}
                 onChange={event => setSala(event.target.value)}/>
                <Input type="text" placeholder="Data"
                 value={data}
                 onChange={event => setData(event.target.value)}/>
                <Label>Deixe aqui seu comentário</Label>
                <InputComentario type="text"/>
                <Button onClick={handleSaveInfo}>Enviar</Button>
                </Form>
            </DivCardMaior>
            <DivImg>
                <Img src={Img1}/>
            </DivImg>
        </DivPrincipal>
    )
}

export default ControleDeLimpeza;