
import styled from "styled-components"
import { ButtonText } from "../../components/ButtonText";

export const Container = styled.div`
    display: grid;
    width: 100%;
    height: 100vh;
    grid-template-rows: max-content 1fr max-content;

    main{
        margin-top: 2rem;
        display: grid;
        padding: 0 clamp(3.2rem, -3.443rem + 13.286vw, 12.5rem);
        gap: 2.4rem;

        width: 100%;
    }

    @media (min-width: 900px) {
        main{
            margin-top: 0;
        }
    }
`

export const NewButtonText = styled(ButtonText) `
    width: max-content;
    align-items: left;

    color: ${({theme}) => theme.COLORS.LIGHT_300};
    font-size: 1.6rem;
    font-weight: 500;
    line-height: 2.4rem;

    svg{
        width: 2.2rem;
        height: 2.2rem;
    }   

`