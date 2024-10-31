import { styled } from "styled-components"

export const Container = styled.button `
    width: 100%;
    padding: 1.2rem 3.2rem;
    text-align: center;

    border-radius: 5px;
    border: none;
    background: ${({theme}) => theme.COLORS.TOMATO_100};   

    color: ${({theme}) => theme.COLORS.LIGHT_100};
    font-family: 'Poppins', sans-serif;
    font-size: 1.4rem;
    font-weight: 500;
    line-height: 2.4rem;

    display: flex;
    align-items: center;
    gap: 0.4rem;
`