import styled from 'styled-components'

export const Container = styled.div `

    display: grid;
    grid-template-columns: max-content max-content;
    padding: 1rem 1rem;
    
    width: max-content;

    border-radius: 8px;
    background: ${({theme, $isnew}) => $isnew ? 'none' : theme.COLORS.LIGHT_600};
    border: 1px ${({$isnew}) => $isnew ? 'dashed' : 'none' } ${({theme}) => theme.COLORS.LIGHT_500};

    input{
        max-width: 100px;

        color: ${({theme, $isnew}) => $isnew ? theme.COLORS.LIGHT_500 : theme.COLORS.LIGHT_100};
        
        font-family: 'Roboto', sans-serif;
        font-size: 1.6rem;

        background: transparent;
        border: none;
    }

    > button {
        display: flex;
        align-items: center;
        border: none;
        background: none;

        svg{
            width: 100%;
            color: ${({theme, $isnew}) => $isnew ? theme.COLORS.LIGHT_500 : theme.COLORS.LIGHT_100};
        }
    }

    

    .button-delete{
        color: ${({theme}) => theme.COLORS.RED};
    }

    .button-add{
        color: ${({theme}) => theme.COLORS.ORANGE};
    }

    @media (min-width: 900px){
        padding: 1rem 1.6rem;
    }
`