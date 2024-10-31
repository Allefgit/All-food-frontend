
import { styled } from "styled-components";
import { Button } from '../Button'

export const Container = styled.div `
    border-radius: 8px;
    border: 1px solid ${({theme}) => theme.COLORS.DARK_300};

    background: ${({theme}) => theme.COLORS.DARK_200};
    color: ${({theme}) => theme.COLORS.LIGHT_100};
    text-align: center;

    align-items: center;

    display: flex;
    flex-direction: column;
    justify-content: center;
    gap: 2rem;
    padding: 2.4rem;

    width: clamp(21rem, 9.75rem + 22.5vw, 30rem);
    
    height: 100%;

    position: relative;

    .inputWrapper{
            width: 100%;
            display: flex;
            justify-content: flex-end;
            
            
            input{
                display: none;
                &:checked{
                    animation: appear .5s .2s backwards;
                }
            }

            input:checked{
                animation: appear .5s .2s backwards;
            }

            label{
                cursor: pointer;
            }

            label:checked{
                animation: appear .5s .2s backwards;
            }
        }

    > button{
        position: absolute;
        right: 16px;
        top: 16px;

        background: none;
        border: none;

        img:first-child{
            width: 2.4rem;
            height: 2.2rem;
            position: relative;
        }
    }

    .div-intro{ 
        max-width: 100%;
        display: flex;
        align-items: center;
        justify-content: center;
        flex-direction: column;
        gap: .2rem;

        img{
            cursor: pointer;
            width: clamp(8.8rem, 5.867rem + 9.778vw, 17.6rem);
            height: clamp(8.8rem, 5.867rem + 9.778vw, 17.6rem);
            margin-bottom: 5%;
        }

        > span{
            color: ${({theme}) => theme.COLORS.LIGHT_400};
            font-family: 'Roboto', sans-serif;
            font-size: 1.4rem;
            font-weight: 400;
            line-height: 2.2rem;
            width: 100%;

            display: none;
            justify-content: center;
            margin-bottom: 5%;
        }

        p{
            font-family: 'Poppins', sans-serif;
            font-size: clamp(1.4rem, 1.067rem + 1.111vw, 2.4rem);
            font-weight: 500;
            line-height: 2.4rem; 
            margin-bottom: 5%;
        }

        strong{
            color: ${({theme}) => theme.COLORS.CAKE_200};
            font-family: 'Roboto', sans-serif;
            font-size: clamp(1.6rem, 1.067rem + 1.778vw, 3.2rem);
            font-weight: 400;
            line-height: 1.6rem; 
        }
    }

    .div-buy{
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        width: 100%;

        gap: 1.6rem;
        
        section{
            display: flex;
            justify-content: center;
            align-items: center;
            gap: 1.4rem;
        }

        span{
            color: ${({theme}) => theme.COLORS.LIGHT_300};

            font-family: 'Roboto', sans-serif;
            font-size: 16px;
            font-style: normal;
            font-weight: 400;
            line-height: 100%; /* 16px */
        }

        .qtd-button{
            background: none;
            border: none;
            color: ${({theme}) => theme.COLORS.LIGHT_100};

            display: flex;
            justify-content: center;

            svg{
                width: 2.4rem;
                height: 2.2rem;
            }
        }
    }

    @media (min-width: 900px) {


    .div-intro span {
        display: block;
        white-space: nowrap;
        overflow: hidden;
        text-overflow: ellipsis;
    }

    .div-buy{
        flex-direction: row;
    }
  }
`

export const NewButton = styled(Button) `
    justify-content: center;
    width: 100%;

    @media (min-width: 900px) {
        
    }
`   