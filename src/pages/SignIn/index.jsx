import { Container, NewButton, NewButtonText } from "./style";

import { Logo } from "../../components/Logo";
import { Loading } from "../../components/Loading"
import { InputWrapper } from "../../components/InputWrapper";

import { useNavigate } from 'react-router-dom';
import { useState } from 'react'
import { useAuth } from '../../hooks/auth'

export function SignIn(){

    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")  
    const [loading, setLoading] = useState(false)
  
    const { signIn } = useAuth()

    function handleSignIn(){
        setLoading(true)
        signIn({
            email,
            password
        }).then(() => setLoading(false))
        .catch(err => {
            setLoading(false)
            console.log(err)
        })
    }

    const navigate = useNavigate()

    return(
        <Container>

            {
            loading ? 
            
            <Loading/>
            :
            <></>
            }

            <Logo />

            <form>
                <h1>Faça login</h1>

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
                    title="Entrar"
                    onClick={handleSignIn}
                />

                <NewButtonText 
                    title="Criar uma conta"
                    onClick={() => navigate("/register")}
                />
            </form>
            
        </Container>
    )
}