import { Button, Container1, Container2, ContainerPrincipal, Form, H1, Img, Input, InputComentario, Label, P } from "../Style/ControleDeLimpeza"
import Img1 from '../../Image/carrinho-limpeza.png'
import React from "react"

const ControleDeLimpeza = ({saveDados}) => {

    const[nome, setNome] = React.useState('')
    const[hora, setHora] = React.useState('')
    const[sala, setSala] = React.useState('')
    const[data, setData] = React.useState('')
    const[comentario, setComentario] = React.useState('')
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


    function EnviaForm() {
        if(nome === '' || hora === '' || sala === '' || comentario === ''){
            setError('Preencha os campos vazios')
        }else {
            setError(null)
        }
    }

    

    return(
        <ContainerPrincipal>
            <Container1>
                <Form onSubmit={EnviaForm}>
                <H1>Controle de Limpeza</H1>
                <Input type="text" placeholder="Nome" value={nome}
                onChange={event => setNome(event.target.value)}
                style={error ? {borderColor: "red"} :{borderColor:"green"}}/>
                <Input type="text" placeholder="Horário da limpeza"
                 value={hora}
                 onChange={event => setHora(event.target.value)}
                 style={error ? {borderColor: "red"} :{borderColor:"green"}}/>
                <Input type="text" placeholder="Número da sala"
                 value={sala}
                 onChange={event => setSala(event.target.value)}
                 style={error ? {borderColor: "red"} :{borderColor:"green"}}/>
                <Input type="text" placeholder="Data"
                 value={data}
                 onChange={event => setData(event.target.value)}/>
                <Label>Deixe aqui seu comentário</Label>
                <InputComentario type="text"
                value={comentario}
                onChange={event => setComentario(event.target.value)}/>
                {error && <P>{error}</P>}
                <Button onClick={handleSaveInfo}>Enviar</Button>
                
                </Form>
            </Container1>
            <Container2>
                <Img src={Img1}/>
            </Container2>
        </ContainerPrincipal>
    )
}

export default ControleDeLimpeza;