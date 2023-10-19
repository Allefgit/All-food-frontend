import styled from "styled-components"

export const Container = styled.div `
    width: 100%;
    height: 100vh;

    display: grid;
    grid-template-rows: max-content 1fr max-content;

    header{
        display: flex;
        align-items: center;

        width: 100%;
        padding: 5.6rem 2.6rem 2.4rem;
        gap: 1.6rem;

        background: ${({theme}) => theme.COLORS.DARK_700};

        button{
            display: flex;
            justify-content: center;
            background: none;
            border: none;
            color: ${({theme}) => theme.COLORS.LIGHT_100};

            svg{
                width: 2.1rem;
                height: 2.1rem;
            }   
        }

        p{
            color: ${({theme}) => theme.COLORS.LIGHT_100};
            font-family: 'Roboto', sans-serif;
            font-size: 2.1rem;
            font-weight: 400;
        }
    }

    main{

        display: flex;
        flex-direction: column;
        gap: 3.6rem;
        padding: 3.6rem 2.8rem 0;

        .search{
            display: flex;
            gap: 1.4rem;
            padding: 1.2rem 1.4rem;
            border-radius: 5px;
            background: ${({theme}) => theme.COLORS.DARK_900};

            > svg{
                width: max-content;
                color: ${({theme}) => theme.COLORS.LIGHT_400};
            }

            > input{
                width: 100%;
                background: none;
                border: none;
                color: ${({theme}) => theme.COLORS.LIGHT_500};

                &::placeholder{
                    color: ${({theme}) => theme.COLORS.LIGHT_500};
                }
            }
        }

        button{
            padding: 1rem;
            background: none;
            border: none;

            border-bottom: 1px solid ${({theme}) => theme.COLORS.DARK_1000};

            text-align: left;
            color: ${({theme}) => theme.COLORS.LIGHT_100};
            font-family: 'Poppins', sans-serif;
            font-size: 2.4rem;
            font-weight: 300;
            line-height: 3.4rem;
        }
    }
    
`