import styled from "styled-components"
import { InputWrapper } from "../../components/InputWrapper"

export const Container = styled.div `
    display: grid;
    grid-template-rows: max-content 1fr max-content; 
    height: 100vh;
    gap: 7.5rem;

    main{
        display: grid;
        grid-template-columns: 1fr;
        justify-content: center;
        position: relative;
        
        height: 100%;
        margin: 0 clamp(3rem, 1.5rem + 5vw, 6rem);   
        
        .btn-return{
            display: ${({$isPayment}) => $isPayment ? "grid" : "none"};
            height: max-content;
            width: max-content;

            padding: .5rem 4rem;
            position: absolute;
            bottom: 0;
            left: 0;

            border-radius: 5px;
            background: ${({theme}) => theme.COLORS.TOMATO_100};
            border: none;

            color: ${({theme}) => theme.COLORS.LIGHT_100};
            font-family: "Poppins", sans-serif;
            font-size: 1.4rem;
            font-weight: 500;
            line-height: 2.4rem; 
        }
    
    .order{
        width: max-content;
        display: ${({$isPayment}) => $isPayment ? "none" : "flex"};
        flex-direction: column;
        gap: 3.2rem;


        h2{
            color: ${({theme}) => theme.COLORS.LIGHT_300};
            font-family: "Poppins", sans-serif;
            font-size: 3.2rem;
            font-weight: 500;
            line-height: 4.48rem; 
        }
        

        strong{
            color: ${({theme}) => theme.COLORS.LIGHT_300};
            font-family: "Poppins", sans-serif;
            font-size: 20px;
            font-style: normal;
            font-weight: 500;
            line-height: 160%; 
        }

        > button{
            background: ${({theme}) => theme.COLORS.TOMATO_100};
            border: none;
            border-radius: 8px;
            padding: 1.2rem 3.2rem;
            
            color: ${({theme}) => theme.COLORS.LIGHT_100};
            text-align: center;
            font-family: "Poppins", sans-serif;
            font-size: 1.4rem;
            font-weight: 500;
            line-height: 2.4rem; 
        }
    }

    .payment{
        border-radius: 8px;
        border: 1px solid  ${({theme}) => theme.COLORS.LIGHT_600};
        width: 100%;
        max-width: 600px;
        height: max-content;
        display: ${({$isPayment}) => $isPayment ? "grid" : "none"};

        .buttons{
            width: 100%;
            border-radius: 8px 8px 0 0;
            display: grid;
            grid-template-columns: 1fr 1fr;

            button{
                width: 100%;
                grid-template-areas: pix;
                border: 0;
                border-bottom: 1px solid  ${({theme}) => theme.COLORS.LIGHT_600};

                display: flex;
                background: ${({theme}) => theme.COLORS.DARK_500};

                padding: 2rem 0;
                gap: 8px;

                align-items: center;
                justify-content: center;
                color: ${({theme}) => theme.COLORS.LIGHT_100};
                font-family: "Roboto", sans-serif;
                font-size: 1.6rem;
                font-weight: 400;
            }

            button:first-child{
                border-radius: 8px 0px 0 0;
                border-right: 1px solid  ${({theme}) => theme.COLORS.LIGHT_600};
                background: ${ ({ $isPix, theme }) => $isPix ? theme.COLORS.DARK_800 : "none"  };
            }

            button:last-child {
                border-radius: 0px 8px 0 0;
                background: ${ ({ $isPix, theme }) => $isPix ? "none" : theme.COLORS.DARK_800};
            }
        }

        .data{

            .img{
                display: ${ ({ $isPix }) => $isPix ? "flex" : "none" };
                width: 100%;
                padding: 4.7rem 13.0rem;
                justify-content: center; 

                img{
                    width: 100%;
                }
            }
        }

        form{
            display: ${ ({ $isPix }) => $isPix ? "none" : "grid" };
            grid-template-areas: 
            "number number"
            "validate cvc"
            "button button";

            padding: 5.5rem 9.1rem;

            div:nth-child(1){
                grid-area: number;
                margin-bottom: 3.7rem;
            }

            div:nth-child(2){
                grid-area: validate;
                margin-right: 2rem;
            }
            
            div:nth-child(3){   
                grid-area: cvc;
               
            }

            button{
                margin-top: 3.7rem;
                grid-area: button;
            }
        }
    }
 

}
@media (min-width: 900px) {
    
        main{
            margin: 0 clamp(1rem, -32rem + 36.667vw, 12rem);
            grid-template-columns: 1fr 1fr;
            justify-content: space-between;

            .order{
                display: flex;
            }
            .payment{
                display: grid;
            }

            .order{
                >button{
                    display: none;
                }
            }
            
        }
    }
    
`

export const NewInputWrapper = styled(InputWrapper) `

`