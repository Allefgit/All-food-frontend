import { styled } from "styled-components"

export const Container = styled.footer `
   width: 100%;
   padding: 2.4rem 5%;
   margin-top: 3rem;
   background: ${({theme}) => theme.COLORS.DARK_600};

   display: flex;
   justify-content: space-between;
   align-items: center;
   

   p{
    color: ${({theme}) => theme.COLORS.LIGHT_200};
    font-family: 'DM Sans', sans-serif;
    font-size: 1.2rem;
    font-weight: 400;
    height: max-content;
   }

   div{
        display: flex;
        align-items: center;
        gap: 6px;
        height: max-content;

        img{
            width: 2.2rem;
            height: 1.8rem;
        }

        strong{
            color: ${({theme}) => theme.COLORS.LIGHT_700};
            font-family: 'Roboto', sans-serif;
            font-size: 1.5rem;
            font-weight: 700;
        }
   } 
`
