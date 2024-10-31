import logo from '../../assets/Logo.svg'
import { Container } from './style'
import { useNavigate } from 'react-router-dom';

export function Logo(){

    const navigate = useNavigate()

    return(
        <Container onClick={() => navigate("/")}>    
            <img src={logo} alt="Logo All&Food" />
            <strong>All&Food</strong>
        </Container>
    )
}