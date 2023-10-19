import { Container } from "./style"
import { FiSearch, FiX } from 'react-icons/fi'

import { Footer } from "../../components/Footer";

import { useNavigate } from 'react-router-dom';
import { useAuth } from "../../hooks/auth";

export function Menu(){

    const {user, singOut} = useAuth()

    const navigate = useNavigate()

    async function handleLogout(){
        navigate("/")
        singOut()
    }
    
    return(
        <Container>

            <header>
                <button onClick={() => navigate("/")}> <FiX/> </button>
                <p>Menu</p>
            </header>

            <main>
                <div className="search">
                    <FiSearch />
                    <input 
                        type="text" 
                        placeholder="Busque por pratos ou ingredientes"
                    />
                </div>

                {
                   user.admin ?  
                    <button type="button" onClick={() => navigate("/create")}>
                        Novo Prato
                    </button>

                    :

                    <></>
                }

                {
                    user.admin ?  
                    <></>

                    :
                    <button type="button" onClick={() => navigate("/favorites")}>
                        Favoritos
                    </button>
                }
                

                <button type="button" onClick={handleLogout}>
                    Sair
                </button>
            </main>

            <Footer/>

        </Container>
    )
}