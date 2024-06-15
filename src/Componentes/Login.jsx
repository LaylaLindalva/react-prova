import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom'; 
import '../../src/index.css';
import { Div1, InputSenha, Div2, Div3, P, H1, H2, Label, InputCPF, Button, Form } from '../Style/Login';

const Login = ({ onLoginSuccess }) => { 
    const navigate = useNavigate();
    const [cpf, setCpf] = useState('');
    const [senha, setSenha] = useState('');

    const handleLogin = () => {
        if (cpf === '123456789' && senha === 'password') {
            onLoginSuccess(); 
            navigate('/home'); 
        } else {
            alert('CPF ou Senha incorretos');
        }
    };

    return (
        <>
            
            <Div1>
                <H1>Control-Clean</H1>
                <Div2>
                    <P>Plataforma de apoio aos colaboradores na efetuação de suas tarefas.</P>
                </Div2>
            </Div1>

            <Div3>
                <Form>
                <H2>Login</H2>
                <Label htmlFor="cpf">CPF</Label>
                <InputCPF
                    value={cpf}
                    onChange={(e) => setCpf(e.target.value)}
                />
                <Label htmlFor="senha">SENHA</Label>
                <InputSenha
                    value={senha}
                    onChange={(e) => setSenha(e.target.value)}
                />
                <Button onClick={handleLogin}>ENTRAR</Button>
                </Form>
            </Div3>
            
        </>
    );
};

export default Login;