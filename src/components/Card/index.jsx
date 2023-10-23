import { Container, NewButton } from './style'
import { FiPlus, FiMinus } from 'react-icons/fi'

import favoriteImg from '../../assets/favorite.svg'
import notFavoriteImg from '../../assets/notFavorite.svg'

import edit from '../../assets/Pencil.svg'

import { api } from '../../services/api';
import { useNavigate } from 'react-router-dom';
import { useAuth } from "../../hooks/auth";
import { useEffect, useState } from 'react';

export function Card({id, img, name, price, desc, isFavorite}){

    const [ qtd, setQtd ] = useState(1)
    const [ isChecked, setIsChecked] = useState(isFavorite)


    function controllerFavorite(e){

        if(e.target.checked){
            createFavorite(id)

        } else{
            deleteFavorite(id)
        }

        setIsChecked(!isChecked)
    }

    async function createFavorite(dish_id){
        await api.post(`/favorites/${dish_id}`)
    }

    async function deleteFavorite(dish_id){
        await api.delete(`/favorites/${dish_id}`)
    }

    const { user } = useAuth()
    const navigate = useNavigate()
    const imgUrl = `${api.defaults.baseURL}files/${img}`  

    return(
        <Container>

                {
                    user.admin? 

                    <button onClick={() => navigate(`/edit/${id}`)}>
                        <img src={edit} alt="Edite" />
                    </button>

                    :

                    <div className="inputWrapper">
                        <label>
                            <img src={isChecked ? favoriteImg : notFavoriteImg } alt="" />
                            <input 
                                type="checkbox" 
                                checked={isChecked} 
                                onChange={controllerFavorite}/>
                        </label>
                    </div>

                }

            <div className='div-intro'>        
                <img 
                    src={imgUrl} 
                    alt="Imagem do Prato" 
                    onClick={() => navigate(`/dish/${id}/${qtd}`)}
                />
                
                <p>{name}</p>
                {
                    desc && <span> {desc} </span>
                }
                <strong> R${parseFloat(price).toFixed(2)}</strong>
            </div>

            {
                user.admin ?
                
                <></>
                
                :
                
                <div className='div-buy'>
                <section>
                    <button 
                        className='qtd-button' 
                        type='button'
                        onClick={() => { qtd > 1 ? setQtd(qtd-1) : alert("Quantidade não deve ser menor do que 1!") } }
                    >
                        <FiMinus/>
                    </button>

                    <span>
                        {qtd}
                    </span>

                    <button 
                        className='qtd-button' 
                        type='button'
                        onClick={() => setQtd(qtd+1) }
                    >
                        <FiPlus/>
                    </button>
                </section>

                <NewButton 
                    type='button' 
                    title='Incluir' 
                    onClick={() => navigate(`/dish/${id}/${qtd}`)}    
                />
            </div>
            }
        </Container>
    )
}
