
import { Container } from "./style";

export function ButtonText({title, icon: Icon, isActive = false, ...rest}){
    return(
        <Container type="button" {...rest}>
            {Icon && <Icon size={20}/>}
            {title}
        </Container>
    )
    
}