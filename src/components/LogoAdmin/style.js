import { styled } from "styled-components";

export const Container = styled.div`
        display: flex;
        align-items:center;
        justify-content: center;
        cursor: pointer;

    div{
        display: flex;
        flex-direction: column;
        justify-content: center;
        
        section{
            display: flex;
            align-items:center;
            justify-content: center;

            img{
                width: 4.2rem;
                height: 4.2rem;
            }

            strong{
                color: ${({theme}) => theme.COLORS.LIGHT_100};
                font-family: 'Roboto', sans-serif;
                font-size: 2.4rem;
                font-weight: 700;
            }
        }

        p{
            color: ${({theme}) => theme.COLORS.CAKE_200};
            font-family: 'Roboto', sans-serif;
            font-size: 1.2rem;
            font-weight: 400;
            text-align: right;
        }
    }

    

    
`