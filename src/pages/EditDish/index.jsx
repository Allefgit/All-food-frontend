import { Container, NewButtonText } from "./style"
import { AiOutlineLeft } from 'react-icons/ai'

import { Header } from "../../components/Header"
import { Footer } from "../../components/Footer"
import { Form } from "../../components/Form"

import { useNavigate } from "react-router-dom"

export function EditDish(){

    const navigate = useNavigate();

    return(
        <Container>
            <Header/>

            <main>
                <NewButtonText
                    title="voltar"
                    icon={AiOutlineLeft}
                    onClick={() => navigate(-1)}
                />

                <Form
                    title="Editar prato"
                    $isedit={true}
                />
                
            </main>
            
            <Footer/>
        </Container>
    )
}