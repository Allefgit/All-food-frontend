import { Container, NewButtonText, NewButton } from "./style";

import { AiOutlineLeft } from 'react-icons/ai'
import { FiPlus, FiMinus } from 'react-icons/fi'

import { Header } from "../../components/Header";
import { Footer } from "../../components/Footer";

import { api } from '../../services/api'
import { useAuth } from "../../hooks/auth";

import { useNavigate, useParams } from 'react-router-dom';
import { useEffect, useState } from "react";

export function Dish(){

    const { user } = useAuth()

    const navigate = useNavigate();
    const params = useParams()

    const [qtd, setQtd] = useState(params.qtd)

    const [dish, setDish] = useState({})
    const [img, setImg] = useState("")
    const[tags, setTags] = useState([])

    useEffect(() =>{
        async function fetchDishes(){

            const dishData = await api.get(`/dishes/${params.id}`)
            setDish(dishData.data)

            const imgFile = `${api.defaults.baseURL}/files/${dishData.data.img}`
            setImg(imgFile)

            const tagData = await api.get(`/tags/${params.id}`)
            setTags( tagData.data.map(tag => tag.title) )            
        }
    
        fetchDishes()
      }, [])

      async function handleBuyingDish(){
        try{
            await api.post(`/buying/${params.id}`, { qtd } )
            alert("Prato adicionado à lista de compras!")
            navigate("/")
            
        } catch(err){
            alert(err.response.data.message)
        }
        
      }

    return(
        <Container>
            <Header/>

            <main>
                
                <NewButtonText
                    title="voltar"
                    icon={AiOutlineLeft}
                    onClick={() => navigate(-1)}
                />

                <section className="img">
                    <img src={img}  alt="Imagem do prato" />
                </section>
                

                <section className="data">
                    <div className="description">
                        <h2> {dish.name} </h2>

                        <p> {dish.description} </p>

                        <div className="div-tags">
                            {
                                tags.map((tag, index) => (
                                    <span key={index}> { tag } </span> 
                                ))
                            }
                        </div>
                    </div>

                    {
                        user.admin ?

                        <div className="buttonEdit">
                            <NewButton 
                            type='button' 
                            title="Editar!"
                            onClick={() => navigate("/edit/"+ params.id)}
                        />
                        </div>
                        
                        
                        :

                        <div className="div-buy">
                            <section>
                                <button className='qtd-button' type='button'
                                    onClick={() => { qtd > 1 ? setQtd(qtd-1) : alert("Quantidade não deve ser menor do que 1!") } }
                                >
                                    <FiMinus/>
                                </button>

                                <span>
                                    { qtd }
                                </span>

                                <button 
                                    className='qtd-button' 
                                    type='button'
                                    onClick={() => setQtd(parseInt(qtd) + 1) }
                                >
                                    <FiPlus/>
                                </button>
                            </section>

                            <NewButton 
                                onClick={handleBuyingDish}
                                type='button' 
                                title={`Incluir ∙ R$ ${(qtd * parseFloat(dish.price).toFixed(2)).toFixed(2)}`}    
                            />
                        </div>
                    }
                    
                </section>

            </main>

            <Footer/>
        </Container>
    )
}