import { styled } from "styled-components";
import { Button } from "../../components/Button";
import { ButtonText } from "../../components/ButtonText";

export const Container = styled.div`
    width: 100%;
    height: 100vh;
    padding: clamp(5rem, 5rem + 4.167vw, 10rem) clamp(0rem, 0rem + 8.333vw, 10rem) 0;

    display: grid;
    grid-template-rows: max-content max-content;

    background: ${({theme}) => theme.COLORS.DARK_400 };

    h1 {
        color: var(--light-light-100, #FFF);
        font-family: 'Poppins', sans-serif;
        font-size: clamp(1.6rem, 1.6rem + 1.3333vw, 3.2rem);
        font-weight: 500;
        line-height: 4.48rem;
        display: none;
    }

    form{
        margin-top: 7.0rem;
        display: flex;
        flex-direction: column;
        gap: 3.2rem
    }

    @media (min-width: 766px){
        display: grid;
        grid-template-rows: none;
        grid-template-columns: 1fr 1fr;
        padding: 0 clamp(0rem, 0rem + 8.333vw, 10rem) 0;


        h1{
            text-align: center;
            display: flex;
        }

        form{
            margin: auto 0;
            padding: 6.4rem;
            border-radius: 16px;

            background: ${({theme}) => theme.COLORS.DARK_700}
        }
    }
`

export const NewButton = styled(Button)`
        justify-content: center;
`
export const NewButtonText = styled(ButtonText)`
        justify-content: center;
`