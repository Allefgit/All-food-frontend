import { styled } from "styled-components";

export const Container = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    cursor: pointer;

    img{
        width: 4.2rem;
        height: 4.2rem;
    }

    strong{
        color: ${({theme}) => theme.COLORS.LIGHT_100};
        font-family: 'Roboto', sans-serif;
        font-size: 3.8rem;
        font-weight: 700;
    }
`