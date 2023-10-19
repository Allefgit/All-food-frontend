
import { Container, LogoBanner } from "./style";
import fruitsDesk from '../../assets/fruitsDesk.png'
import fruitsMob from '../../assets/fruitsMob.png'

import { useState, useEffect } from "react"
import { api } from '../../services/api';
import { useAuth } from "../../hooks/auth";

import { Header } from "../../components/Header";
import { Section } from "../../components/Section";
import { Footer } from "../../components/Footer";

export function Home(){

    const [search, setSearch] = useState("")

    const [dishes, setDishes] = useState([])
    const [disserts, setDisserts] = useState([])
    const [drinks, setDrinks] = useState([])

    const { singOut} = useAuth()

    const [favorites, setFavorites] = useState([])

    function modifySearch(newSearch){
        setSearch(newSearch)
    }

    useEffect(() =>{

        async function fetchDishesFavorites(){

            try{
                const response = await api.get("/favorites")
                const favorite =  response.data.map(favorite => favorite.dish_id)
                setFavorites(favorite)
            } catch(err){

                if(err.response.statusText == "Unauthorized" ){
                    alert("Token expirado, logue novamente!")
                    singOut()
                } else{
                    console.log(err)
                }
            }
        }   

        async function fetchDish(){
            const response = await api.get(`/dishes?category=refeicao&name=${search}`)
            setDishes(response.data)
        }

        async function fetchDisserts(){
            const response = await api.get(`/dishes?category=sobremesa&name=${search}`)
            setDisserts(response.data)
        }

        async function fetchDrinks(){
            const response = await api.get(`/dishes?category=bebida&name=${search}`)
            setDrinks(response.data)
        }

        fetchDishesFavorites()
        fetchDish()
        fetchDisserts()
        fetchDrinks()
    }, [ search ])

    return(
        <Container>

            <Header 
                modifySearch = {modifySearch}
            />

            <main>

                <LogoBanner>
                    <picture>
                        <source media="(max-width: 900px)" srcSet={fruitsMob} />
                        <img src={fruitsDesk} alt="Imagem de frutas" />
                    </picture>
                    
                    <div>
                        <h2>Sabores inigualáveis</h2>
                        <p>Sinta o cuidado do preparo com ingredientes selecionados</p>
                    </div>
                </LogoBanner>

                <Section title="Refeitções" dishes={dishes} favorites={favorites}/>
                <Section title="Sobremesas" disserts={disserts} favorites={favorites}/>
                <Section title="Bebidas" drinks={drinks} favorites={favorites}/>
                
            </main>
            
            <Footer />
        </Container>
    )
}