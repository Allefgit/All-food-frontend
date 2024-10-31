import { styled } from "styled-components";

export const Container = styled.div`

    display:flex;
    flex-direction: column;
    gap: 8px;

    label {
        color: ${({theme}) => theme.COLORS.LIGHT_400};
        font-family: 'Roboto', sans-serif;
        font-size: 1.6rem;
        font-weight: 400;
        line-height: 1.6rem;
    }

    input{
        width: 100%;
        padding: 1.2rem 1.4rem;
        border-radius: 8px;

        justify-content: center;
        align-items: center;
        align-self: stretch;

        border: 0;
        background: ${({theme}) => theme.COLORS.DARK_900};
        color:  ${({theme}) => theme.COLORS.LIGHT_500};

        &::placeholder{
            color:  ${({theme}) => theme.COLORS.LIGHT_500};
        }
    }

`