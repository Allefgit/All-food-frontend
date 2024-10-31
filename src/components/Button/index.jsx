import { Container } from "./style"

export function Button({ type, icon: Icon, title, ...rest}){
    return(
        <Container type={type} {...rest}>
            {Icon && <Icon size={20}/>}
            {title}
        </Container>
    )
}