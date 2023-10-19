
import { Container } from "./style"

export function InputWrapper({id, title, placeholder, type, ...rest}){
    return(
        <Container>
            
            <label htmlFor={id} {...rest}> 
                {title} 
             </label>
             
            <input 
                id={id} 
                type={type} 
                placeholder={placeholder} 
                {...rest}
            />    

            
        </Container>
    )
}