import styled from "styled-components"

export const Container = styled.div `
    display: flex;
    flex-direction: row;
    gap: 1.3rem;

    > img{
        max-width: 100px;
        max-height: 100px;
    }

    >section{

        display: flex;
        flex-direction: column;
        justify-content: center;


        strong{
            display: flex;
            align-items: center;
            gap: 1rem;

            color: ${({theme}) => theme.COLORS.LIGHT_300};
            font-family: "Poppins", sans-serif;
            font-size: 2.0rem;
            font-weight: 500;
            line-height: 160%; 
            

            p{
                color: ${({theme}) => theme.COLORS.LIGHT_400};
                font-family: "Roboto", sans-serif;
                font-size: 1.2rem;
                font-weight: 400;
                line-height: 160%; 
            }
        }

        button{
            background: none;
            border: none;
            
            color: ${({theme}) => theme.COLORS.TOMATO_400};
            font-family: Roboto;
            font-size: 1.2rem;
            font-weight: 400;
            line-height: 160%;

            text-align: left;
        }

    }
`