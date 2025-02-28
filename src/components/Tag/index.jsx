
import { Container } from "./style";
import { FiPlus, FiX } from 'react-icons/fi' 

export function Tag( {$isnew="true", value, onClick, ...rest}){
    return(
        <Container $isnew={$isnew}>

            <input 
                type='text' 
                value={value}
                readOnly={!$isnew}
                {...rest}
            /> 

            <button 
                type='button' onClick={onClick}
                className={$isnew ? 'button-add' : 'button-delete'}
            >
                { $isnew ? <FiPlus/> : <FiX/>}
            </button>

        </Container>
    )
}