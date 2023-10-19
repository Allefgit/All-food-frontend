import { styled } from "styled-components"
import { Button } from "../Button"
import { ButtonText } from "../ButtonText"

export const Container = styled.header `
    width: 100%;
    padding: 6rem 3rem 2rem;
    background: ${({theme}) => theme.COLORS.DARK_700};

    display: grid;
    gap: 3.2rem;
    grid-template-columns: max-content 1fr max-content;

    .menu-button{
        background: none;
        border: none;

        svg{
            width: 3rem;
            height: 3rem;
        }
        

        color: ${({theme}) => theme.COLORS.LIGHT_100};
    }

    .btn-receipt{
        background: none;
        border: none;
        position: relative;

        width: 2.4rem;
        height: 1.8rem;

        color: ${({theme}) => theme.COLORS.LIGHT_100};

        svg{
            width:3.4rem;
            height:3.4rem;
        }

        p{
            position: absolute;
            background: ${({theme}) => theme.COLORS.TOMATO_100};
            border-radius: 50%;

            display: flex;
            justify-content:center;
            align-items:center;

            width: 2rem;
            height: 2rem;
            top: -7px;
            right: -15px;

            font-family: 'Poppins', sans-serif;
            font-size: 1.4rem ;
            font-weight: 500;
            line-height: 2.4rem;
        }
    }

    img:first-child{
       width: 3.0rem;
       height: 3.0rem;
    }

    strong{
        font-family: 'Roboto', sans-serif;
        font-size: 2.4rem;
        font-weight:
        
        700;
    }

    .search{
        display: none;

        gap: 1.4rem;
        padding: 1.2rem 1.4rem;
        border-radius: 5px;
        background: ${({theme}) => theme.COLORS.DARK_900};

        > svg{
            width: max-content;
            color: ${({theme}) => theme.COLORS.LIGHT_400};
        }

        > input{
            width: 100%;
            background: none;
            border: none;
            color: ${({theme}) => theme.COLORS.LIGHT_500};

            &::placeholder{
                color: ${({theme}) => theme.COLORS.LIGHT_500};
            }
        }
    }

    .logout-button{
        background: none;
        border: none;

        display: none;
        
        svg{
            
            color:  ${({theme}) => theme.COLORS.LIGHT_100};
        }
    }

    @media (min-width: 900px){
        padding: 2.4rem 12.3rem;
        align-items: center;
        grid-template-columns: max-content 1fr max-content max-content max-content;

        .logout-button, .search, .btn-receipt{
            display: flex;
        }

        .menu-button, .btn-receipt{
            display: none;
        }
    }

`

export const NewButton = styled(Button)`
    display: none;

    @media (min-width: 900px){
        display: flex;
    }
`

export const NewButtonText = styled(ButtonText)`
    display: none;

    @media (min-width: 900px){
        display: flex;
    }
`
