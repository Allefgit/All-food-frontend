import { styled } from "styled-components"

import { ButtonText } from "../../components/ButtonText";
import { Button } from "../../components/Button";

export const Container = styled.div`
    width: 100%;
    height: 100vh;
    
    display: grid;
    grid-template-rows: max-content 1fr max-content;

    main{
        margin: 1.6rem 5.6rem 0;
        height: 100%;
        display: flex;
        flex-direction: column;

        gap: 1.6rem;

        .buttonEdit{
            width: 100%;
            align-items: left;
        }

        .img{
            width: 100%;
            display: flex;
            justify-content: center;

                >img{
                    width: 100%;
                    height: 100%;

                    max-width: 400px;
                    max-height: 400px;
                }
            }

        .data{
            display: flex;
            flex-direction: column;
            align-items: center;
            gap: 4.8rem;
            text-align: center;

            

            .description{
                display: flex;
                flex-direction: column;
                gap: 2.4rem;
                
                h2 {
                    color: ${({theme}) => theme.COLORS.LIGHT_300 };
                    font-family: 'Poppins', sans-serif;
                    font-size: clamp(2.5rem, 1.375rem + 3.75vw, 4rem);
                    font-weight: 500;
                    line-height: 140%; /* 37.858px */
                }      

                p {
                    color: ${({theme}) => theme.COLORS.LIGHT_300 };
                    font-family: 'Poppins', sans-serif;
                    font-size: clamp(1.6rem, 1.2rem + 1vw, 2.4rem);
                    font-weight: 400;
                    line-height: 140%; 
                }
            }

            .div-tags{
                display: grid; 
                gap: 2.4rem;
                grid-template-columns: repeat(3, 1fr);

                span{
                    background: ${({theme}) => theme.COLORS.DARK_1000};
                    padding: 4px 8px;
                    border-radius: 5px;

                    color: ${({theme}) => theme.COLORS.LIGHT_100};
                    font-family: 'Poppins', sans-serif;
                    font-size: clamp(1.6rem, 1.467rem + 0.444vw, 2rem);
                    font-weight: 500;
                    line-height: 2.4rem;
                }
            }

            .div-buy{
                display: flex;
                gap: 1.6rem;

                section{
                    display: flex;
                    align-items: center;
                    gap: 1.6rem;

                    button{
                        background: none;
                        border: none; 

                        svg{
                            color: ${({theme}) => theme.COLORS.LIGHT_300 };
                            width: 2.8rem;
                            height: 2.8rem;
                        }
                    }

                    span{
                        color: ${({theme}) => theme.COLORS.LIGHT_300 };
                        font-family: 'Roboto', sans-serif;
                        font-size: 2.3rem;
                        font-weight: 700;
                        line-height: 160%;
                    }
                }
            }
        }
    }

    @media (min-width: 658px){
        main{
            
            display: grid;
            grid-template-areas: 
            "btn_return 0 0"
            "img description description"
            ;

            grid-template-rows: repeat(2, max-content);
            grid-template-columns: repeat(2, 1fr);
            justify-content:center;
            align-items: center;

            .img{
                grid-area: img;
            }

            .data{
                grid-area: description;
                text-align: left;
                justify-content: left;
                align-items: center;

                > button {
                    width: max-content;
                    
                }
            }

            .description{
                margin-top: 0;
                gap: 3%;
                justify-content: left;

                p{
                    text-align: left;
                }
            }

            .div-tags{
                display: flex;
                flex-wrap: wrap;
                text-align: center;
            }
        }
    }

    @media (min-width: 900px){
        
        main{
            margin: 1.6rem 5.6rem 0;
        }
    } 
`

export const NewButtonText = styled(ButtonText) `
    width: 100%;

    color: ${({theme}) => theme.COLORS.LIGHT_300};
    font-family: Poppins;
    font-size: 2.4rem;
    font-style: normal;
    font-weight: 700;
    line-height: 140%; 

    svg{
        width: 2.4rem;
        height: 2.4rem;
        margin-right: clamp(1rem, 1.333rem + -1.111vw, 0rem);
    }    

    @media (min-width: 658px)  {
        grid-area: btn_return;
    }
`

export const NewButton = styled(Button) `
        width: max-content;
        font-size: clamp(1.6rem, 1.467rem + 0.444vw, 2rem);
        justify-content: center;
`