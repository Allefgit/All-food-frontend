
import { Container, NewInputWrapper } from "./style"
import { api } from '../../services/api'

import { Header } from "../../components/Header";
import { Footer } from "../../components/Footer";
import { DishCard } from "../../components/DishCard"
import { Button } from "../../components/Button";

import pix from '../../assets/pix.svg'
import credit from '../../assets/creditCard.svg'
import qrCode from '../../assets/qrCode.svg'
import { useState, useEffect } from "react"

import { PiReceipt } from 'react-icons/pi'

export function Order(){

    const [isPix, setIsPix] = useState(true)
    const [isPayment, setIsPayment] = useState(false)
    const [dishes, setDishes] = useState([])
    const [total, setTotal] = useState(0)

    useEffect(() =>{
        async function fetchDishes(){

            const getDishes = await api.get("/buying")      
            
            const newDish = getDishes.data.map(dish => {
                const imgFile = `${api.defaults.baseURL}/files/${dish.img}`
                dish.img = imgFile
                return dish
            })

            const allPrices = getDishes.data.map(dish => {
                return dish.price * dish.qtd
            })

            const sumPrices = allPrices.reduce((accumulator, current) => {
                return accumulator + current;
            }, 0);

            setTotal(sumPrices)
            setDishes(newDish)
        }

        fetchDishes()
      }, [])

    async function handleExcludeDish(id){
        const confirmDelete = confirm("Você confirma a exclusão desse prato da sua lista de pedidos?")
        if(confirmDelete){
            await api.delete(`/buying/${id}`)
            const newDishes = dishes.filter(dish => dish.id !== id)

            const allPrices = newDishes.map(dish => {
                return dish.price * dish.qtd
            })

            const sumPrices = allPrices.reduce((accumulator, current) => {
                return accumulator + current;
            }, 0);

           setDishes(newDishes)
           setTotal(sumPrices)
        }
    }

    function handlePix(){
        setIsPix(true)
    } 

    function handleCard(){
        setIsPix(false)
    } 

    function handleTogglePayment(){
        setIsPayment(!isPayment)
    } 
    
    return(

        <Container $isPix={ isPix } $isPayment={ isPayment }>
            <Header/>

            <main>
                <div className="order">
                    <h2>Meu pedido</h2>

                    {
                        dishes.map((dish, index) =>{
                            return(
                                <DishCard
                                key={index}
                                id={dish.id}
                                img={dish.img}
                                name={dish.name}
                                price={dish.price}
                                qtd={dish.qtd}
                                excludeFunction={handleExcludeDish}
                            />
                        )})
                    }

                    <strong>Total: R$ {total.toFixed(2)}</strong>
                    <button type="button" onClick={handleTogglePayment}>
                        Avançar
                    </button>
                </div>

                <div className="payment">
                    <div className="buttons">
                        <button onClick={handlePix}>
                            <img src={pix} alt="Pix" /> Pix
                        </button>

                        <button onClick={handleCard}>
                            <img src={credit} alt="Cartão de Crédito" /> Crédito
                        </button>
                    </div>

                    <div className="data">

                        <div className="img">
                            <img src={ qrCode } alt="QR Code" />
                        </div>
                        

                        <form action="" >
                            <NewInputWrapper
                                id="card" 
                                title="Número do Cartão" 
                                placeholder="0000.0000.0000.0000" 
                                type="number"
                            />

                            <NewInputWrapper
                                id="date" 
                                title="Validade" 
                                placeholder="04/25" 
                                type="number"
                            />

                            <NewInputWrapper
                                id="cvc" 
                                title="CVC" 
                                placeholder="000" 
                                type="number"
                            /> 

                            <Button
                                type="button"
                                title= "Finalizar pagamento"
                                icon={PiReceipt}
                            />

                        </form>

                    </div>
                </div>

                <button className="btn-return" onClick={handleTogglePayment}>
                    Voltar
                </button>
            </main>

        <Footer/>

        </Container>

    )
}