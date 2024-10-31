import { Container, NewButton, NewButtonText } from "./style"
import { FiSearch, FiLogOut, FiMenu } from 'react-icons/fi'
import { PiReceipt } from 'react-icons/pi'

import { useNavigate } from 'react-router-dom';
import { useAuth } from "../../hooks/auth";
import { api } from '../../services/api'

import { Logo } from "../Logo"
import { LogoAdmin } from "../LogoAdmin"
import { useState, useEffect } from "react";

export function Header({icon: Icon, modifySearch}){

    const { singOut, user} = useAuth()
    const navigate = useNavigate()
    const [qtdOrders, setQtdOrders] = useState(0) 

    useEffect(() => {
        async function fetchGetDishes(){
            const getDishes = await api.get("/buying") 
            const rangeDishes = getDishes.data.length
            setQtdOrders(rangeDishes)
        }
        
        fetchGetDishes()
    })

    async function handleLogout(){
        navigate("/")
        singOut()
    }

    return(
        <Container>

            <button 
                className="menu-button"
                onClick={() => navigate('/menu')}
            >
            <FiMenu/>
            </button>

            {
              user.admin ? <LogoAdmin /> : <Logo />
            }
            

            <div className="search">
                <FiSearch />
                <input 
                    type="text" 
                    placeholder="Busque por pratos ou ingredientes"
                    onChange={(e) => modifySearch(e.target.value)}
                />
            </div>

            {
                    user.admin ?  
                    <></>

                    :
                    <button className="btn-receipt" onClick={() => navigate("/order")}>
                        <div>
                            <p>{qtdOrders}</p>
                            <PiReceipt/>
                        </div>
                    </button>
                }

            

            {
                user.admin ? 
                <></>
                :
                <NewButtonText 
                    onClick={() => navigate("/favorites")}
                    title="Meus favoritos"
                />
            }

            <NewButton
                icon={ user.admin ? null : PiReceipt}
                type="button"
                title={ user.admin ? "Novo Prato" : `Pedidos (${qtdOrders})`}
                onClick={() => user.admin ? navigate("/create") : navigate("/order")}
            />

            <button 
                className="logout-button" type="button"
                onClick={handleLogout}
            >
               <FiLogOut/>
            </button>
        </Container>
    )
}