
import { useState, useEffect } from "react";
import { Container } from "./style";
import { useNavigate } from "react-router-dom";

import { Header } from "../../components/Header";
import { Footer } from "../../components/Footer";
import { api } from '../../services/api'

export function Favorites(){

    const [dishes, setDishes] = useState([])
    const navigate = useNavigate()

    useEffect(() =>{
        async function fetchDishes(){

            const getDishes = await api.get("/favorites")      
            
            const newDish = getDishes.data.map(dish => {
                const imgFile = `${api.defaults.baseURL}/files/${dish.img}`
                dish.img = imgFile
                return dish
            })

            setDishes(newDish)
        }

        fetchDishes()
      }, [])

      async function handleExcludeDish(id){
            
        await api.delete(`/favorites/${id}`)
        const newDishes = dishes.filter(dish => dish.id !== id)

        setDishes(newDishes)
    }

    return(
        <Container>

        <Header/>

        <main>
            <h2>Favorites</h2>

            <div className="dishes">
                {
                    dishes.map((dish, index) =>{
                        return(
                            <div className="dish" key={index}>
                                <img src={dish.img} alt="" onClick={() => navigate(`/dish/${dish.id}/1`)}/>

                                <div>
                                    <strong> {dish.name} </strong>
                                    <button onClick={() => handleExcludeDish(dish.id)}> 
                                        Remover dos Favoritos
                                    </button>
                                </div>
                            </div>
                        )
                    })
                }
                
            </div>
            
        </main>
        
        <Footer/>
        </Container>
    )
}