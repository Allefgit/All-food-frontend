import logo from '../../assets/Logo.svg'
import { Container } from './style'
import { useNavigate } from 'react-router-dom';

export function LogoAdmin(){

    const navigate = useNavigate()

    return(
        <Container >  
            <div>
                <section onClick={() => navigate("/")}>
                    <img src={logo} alt="Logo All&Food" />
                    <strong>All&Food</strong>
                </section>
                <p>admin</p>
            </div>

        </Container>
    )
}