import { Container, NewButton, NewButtonText } from "./style";

import { api } from '../../services/api'
import { Logo } from "../../components/Logo";
import { InputWrapper } from "../../components/InputWrapper";

import { useNavigate } from 'react-router-dom';
import { useState } from 'react'

export function SignUp(){

    const [name, setName] = useState("")
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")

    const navigate = useNavigate();

    function handleSubmit(){
        let checkFieldsIsNotFilled = !name || !email || !password
        if(checkFieldsIsNotFilled){
            return alert("Preencha todos os campos")
        }

        api.post("/users", {name, email, password})
        .then(() =>{
            alert("Usuário cadastrado com sucesso!")
            navigate("/")
        }).catch(error =>{
            if(error.response){
                alert(error.response.data.message)
            } else{
                alert("Não foi possível cadastrar!")
            }
        })
    }

    return(
        <Container>
            <Logo />
            
            <form>
                <h1>Crie sua conta</h1>

                <InputWrapper
                    id = "name"
                    title="Seu nome"
                    placeholder="EExemplo: Maria da Silva"
                    type="text"
                    onChange={(e) => setName(e.target.value)}
                />

                <InputWrapper
                    id = "email"
                    title="E-mail"
                    placeholder="Exemplo: exemplo@exemplo.com.br"
                    type="email"
                    onChange={(e) => setEmail(e.target.value)}
                />

                <InputWrapper
                    id = "password"
                    title="Senha"
                    placeholder="No mínimo 6 caracteres"
                    type="password"
                    min="6"
                    onChange={(e) => setPassword(e.target.value)}
                />

                <NewButton 
                    type="button"
                    title="Criar conta"
                    onClick={handleSubmit}
                />

                <NewButtonText 
                    title="Já tenho uma conta"
                    onClick={() => navigate("/")}
                />
            </form>

        </Container>
    )
}