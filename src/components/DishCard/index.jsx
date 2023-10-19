
import { Container } from "./style"

export function DishCard({id, excludeFunction, img, name, price, qtd}){
    return(
        <Container>
            <img src={img} alt="" />

            <section>
                <strong> {qtd} x {name} <p>R$ {price} </p> </strong>
                <button onClick={() => excludeFunction(id)}> 
                    Excluir! </button>
            </section>
        </Container>
    )
}