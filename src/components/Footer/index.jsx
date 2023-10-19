import { Container } from "./style"
import logoFooter from '../../assets/LogoFooter.svg'

export function Footer(){
    return(
        <Container>
            <div>
                <img src={logoFooter} alt="Logo Footer" />
                <strong>All&Food</strong>
            </div>
            
            <p>© 2023 - Todos os direitos reservados.</p>
        </Container>
    )
}