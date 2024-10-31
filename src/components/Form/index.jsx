import { Container } from "./style";

import { Tag } from "../Tag";

import { FiUpload } from "react-icons/fi";

import { api } from '../../services/api'
import { useNavigate, useParams } from 'react-router-dom'
import { useState, useEffect } from 'react';

export function Form({title, $isedit}) {

    const params = useParams()

    const [name, setName] = useState("")
    const [price, setPrice] = useState("")
    const [description, setDescription] = useState("")
    const [category, setCategory] = useState("")
    const [img, setImgFile] = useState(null)

    const [dish, setDish] = useState({})

    const[tags, setTags] = useState( dish.tag ? dish.tag.split(",") : [])
    const[newTag, setNewTag] = useState("")

    useEffect(() =>{
        async function fetchDishes(){

            if($isedit){
                const dishData = await api.get(`/dishes/${params.id}`)
                setDish(dishData.data)

                const tagData = await api.get(`/tags/${params.id}`)
                setTags( tagData.data.map(tag => tag.title) )

                setName(dishData.data.name)
                setPrice(dishData.data.price)
                setDescription(dishData.data.description)
                setCategory(dishData.data.category)
            }
        }
    
        fetchDishes()
      }, [])


    const navigate = useNavigate()

    async function handleExcludeDish(){
        const confirm = window.confirm("Você deseja mesmo EXCLUIR esse prato?")
        if(confirm){
          await api.delete(`/dishes/${params.id}`)
          navigate(-1)
        }
    }

    function handleSetImg(event){
        const file = event.target.files[0]
        setImgFile(file)
    }

    async function handleEditDish(){

        const tag = tags.toString()
        const UploadForm = new FormData()



        UploadForm.append("img", img)
        UploadForm.append("name", name)
        UploadForm.append("description", description)
        UploadForm.append("category", category)
        UploadForm.append("price", parseFloat(price).toFixed(2))
        UploadForm.append("tag", tag)

        try{
            await api.put(`/dishes/${params.id}`, UploadForm  )
            alert("Alterado com sucesso!")
            navigate("/")
        } catch(err){
            alert(err)
        }
    }

    async function handleCreateDish(){

        const tag = tags.toString()
        const UploadForm = new FormData()

        UploadForm.append("img", img)
        UploadForm.append("name", name)
        UploadForm.append("description", description)
        UploadForm.append("category", category)
        UploadForm.append("price", parseFloat(price).toFixed(2))
        UploadForm.append("tag", tag)

        try{
            await api.post("/dishes", UploadForm)
            alert("Criado com sucesso!")
            navigate("/")
        } catch(err){
            alert(err)
        }
    }

    function controllerFunctionHandler(){

        if(newTag !== ""){
            return alert("Existe uma tag pendente!")
        }

        if(img == null && !$isedit){
            return alert("A imagem do prato é obrigatório!")
        }

        if(name === ""){
            return alert("O nome do prato é obrigatório!")
        }

        if(price === ""){
            return alert("O preço do prato é obrigatório!")
        }

        if(description === ""){
            return alert("A descrição do prato é obrigatório!")
        }

        if(category === ""){
            return alert("A categoria do prato é obrigatório!")
        }

        if(tags.length <= 0){
            return alert("Os ingredientes do prato são obrigatórios!")
        }

        $isedit ? handleEditDish() : handleCreateDish()
    }
    
    function handleAddTag(){
        if(newTag === ""){
            return alert("Coloque algo na tag!")
        }

        setTags((prevState) => [...prevState, newTag])
        setNewTag("")
    }

    function handleRemoveTag(deleted){
        setTags(prevState => prevState.filter(tag => tag !== deleted))
    }


    return(
        <Container $edit={$isedit}>

            <h1>{title}</h1>

            <div className="file-dish">

                <span> Imagem do prato</span>

                <label htmlFor="file">
                    <FiUpload/>    
                    Escolha o arquivo
                </label>
                <input type="file" id="file" onChange={handleSetImg}/>
            </div>

            <div className="name">
                <label htmlFor="name"> Nome </label>

                <input 
                    id="name" 
                    type="text"
                    placeholder="Ex.: Salada Ceasar"
                    onChange={(e) => setName(e.target.value)}
                    defaultValue={dish.name}
                />  
            </div>

            <div className="category">
                <label htmlFor="category">Categoria</label>
                <select name="" id="category" onClick={(e) => setCategory(e.target.value)} defaultValue={dish.category}>
                    <option value="refeicao">Refeição</option>
                    <option value="sobremesa">Sobremesa</option>
                    <option value="bebida">Bebida</option>
                </select>
            </div>

            <div className='tags'>
                <span> Ingredientes </span>

                <div className="tag">
                    {
                        tags.map((tag, index) =>(
                            <Tag 
                                $isnew={false} 
                                key={String(index)}
                                value={tag}
                                onClick={() => handleRemoveTag(tag)}
                            />
                        )) 
                    }

                    <Tag 
                        $isnew 
                        placeholder="Adicionar"
                        value={newTag}
                        onChange={e => setNewTag(e.target.value)}
                        onClick={handleAddTag}
                    />
                </div>
            </div>

            <div className="price">
                <label htmlFor="price"> Preço </label>

                <input 
                    id="price" 
                    type="number"
                    placeholder="R$ 00.00"
                    min="0" 
                    step="0.01" 
                    onChange={e => setPrice( e.target.value )}
                    defaultValue={dish.price}
                />  
            </div>

            <div className="text-area">
                <label htmlFor="description">Descrição</label>
                <textarea 
                    placeholder="Fale brevemente sobre o prato, seus ingredientes e composição" 
                    id="description"
                    onChange={(e) => setDescription(e.target.value) }
                    defaultValue={dish.description}
                >

                </textarea>
            </div>
            
            {
                $isedit ? 
                <div className="buttons">
                    <button 
                        className="btn-exclude" 
                        type="button"
                        onClick={ handleExcludeDish }
                    > 
                        Excluir prato
                    </button>
                    
                    <button 
                        className="btn-save" 
                        type="button"
                        onClick={ controllerFunctionHandler }
                    > 
                        Salvar alterações 
                    </button>
                </div>

                :
                
                <button 
                    className="btn-save"  
                    type="button"
                    onClick={ controllerFunctionHandler }
                > 
                    Criar Prato! 
                </button>
            }

        </Container>
    )
}