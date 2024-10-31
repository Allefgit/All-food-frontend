import styled from 'styled-components'

import { InputWrapper } from "../InputWrapper";

export const Container = styled.form `
    width: 100%;
    display: grid;
    gap: 2.4rem;

    h1{
        color: ${({theme}) => theme.COLORS.LIGHT_300};
        font-family: 'Poppins', sans-serif;
        font-size: 3.2rem;
        font-weight: 500;
        line-height: 140%; /* 44.8px */
    }

    .file-dish{

        display: grid;
        gap: 1.6rem;

        input{
            display: none;
        }

        span{
            color: ${({theme}) => theme.COLORS.LIGHT_400};        
            font-family: 'Roboto', sans-serif;
            font-size: 1.6rem;
            font-weight: 400;
        }

        label{
            width: 100%;
            height: 48px;
            cursor: pointer;
            padding: 1.2rem 3.2rem;
            display: flex;
            align-items: center;
            gap: 0.8rem;

            border-radius: 8px;
            background: ${({theme}) => theme.COLORS.DARK_800};

            color: ${({theme}) => theme.COLORS.LIGHT_100};        
            font-family: 'Poppins', sans-serif;
            font-size: 1.4rem;
            font-weight: 500;
            line-height: 2.4rem;

            svg{
                width: 2.4rem;
                height: 2.4rem;
            }
        }
    }

    .price, .name{
        display: grid;
        gap: 1.6rem;

        label {
            color: ${({theme}) => theme.COLORS.LIGHT_500};        
            font-family: 'Roboto', sans-serif;
            font-size: 1.6rem;
            font-weight: 400;
        }

        input{
            height: 48px;
            width: 100%;
            padding: 1.2rem 1.4rem;
            border-radius: 8px;

            border: 0;
            background: ${({theme}) => theme.COLORS.DARK_800};
            color:  ${({theme}) => theme.COLORS.LIGHT_500};

            &::placeholder{
                color:  ${({theme}) => theme.COLORS.LIGHT_500};
            }
        }

    }

    .category{
        display: grid;
        gap: 1.6rem;

        label{
            color: ${({theme}) => theme.COLORS.LIGHT_500};        
            font-family: 'Roboto', sans-serif;
            font-size: 1.6rem;
            font-weight: 400;
        }

        select{
            height: 48px;
            width: 100%;
            display: flex;
            border-radius: 8px;

            background: ${({theme}) => theme.COLORS.DARK_900};
            color:  ${({theme}) => theme.COLORS.LIGHT_400};

            border: 0;
            padding: 16px;
            align-items: center;
            gap: 14px;
            align-self: stretch;

            cursor: pointer;
        }
    }

    .tags{

        display: grid;
        gap: 1.6rem;

        > span{
            color: ${({theme}) => theme.COLORS.LIGHT_500};        
            font-family: 'Roboto', sans-serif;
            font-size: 1.6rem;
            font-weight: 400;
        }

        .tag{
            max-height: 50px;
            height: max-content;
            overflow-y: auto;
            display: flex;
            flex-wrap: wrap;
            flex-direction: row;
            gap: 1.6rem;
            padding: 0.4rem 0.8rem;
            border-radius: 8px;
            background: ${({theme}) => theme.COLORS.DARK_800};
        }
    }

    .text-area{
        display: grid;
        gap: 1.6rem;

        label {
            color: ${({theme}) => theme.COLORS.LIGHT_500};        
            font-family: 'Roboto', sans-serif;
            font-size: 1.6rem;
            font-weight: 400;
        }

        textarea{
            padding: 1.4rem;
            width: 100%;
            height: 172px;

            resize: none;
            border: none;
            border-radius: 8px;
            background: ${({theme}) => theme.COLORS.DARK_800};
            
            color: ${({theme}) => theme.COLORS.LIGHT_500};        
            font-family: 'Roboto', sans-serif;
            font-size: 1.6rem;
            font-weight: 400;
        }
    }

    > button{
        width: 100%;
        text-align: center;
        font-family: 'Poppins', sans-serif;
        font-size: 1.4rem;
        font-weight: 500;
        line-height: 2.4rem; 

        padding: 1.2rem 3.2rem;
        border: none;
        border-radius: 5px;
        opacity: 0.8;
    }

    .buttons{
        display: flex;
        justify-content: space-between;
        gap: 3.2rem;

        button{
            font-family: 'Poppins', sans-serif;
            font-size: 1.4rem;
            font-weight: 500;
            line-height: 2.4rem; 

            padding: 1.2rem 3.2rem;
            border: none;
            border-radius: 5px;
            opacity: 0.8;
        }
    }

    .btn-save{
        color: ${({theme}) => theme.COLORS.LIGHT_100};
        background: ${({theme}) => theme.COLORS.TOMATO_400};
    }

    .btn-exclude{
        color: ${({theme}) => theme.COLORS.LIGHT_100};
        background: ${({theme}) => theme.COLORS.DARK_800};
    }

    @media (min-width: 900px){
        grid-template-areas: 
        "title title title"
        "img name category"
        "tags tags price"
        "desc desc desc"
        "0 0 buttons ";

        h1{
            display: grid;
            grid-area: title;
        }

        .file-dish{
            grid-area: img;
        }

        .name{
            grid-area: name;
        }

        .category{
            grid-area: category;
        }

        .tags{
            grid-area: tags;
        }

        .price{
            grid-area: price;
        }

        .text-area{
            grid-area: desc;
        }

        .buttons{
            grid-area: buttons;
        }

        .btn-save{
            grid-area: ${({$isedit}) => $isedit ? "none" : "buttons"};
        }
        
    }
`