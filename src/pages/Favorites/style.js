import styled from "styled-components";

export const Container = styled.div `
    display: grid;
    width: 100%;
    height: 100vh;
    grid-template-rows: max-content 1fr max-content;

    main{
        display: flex;
        flex-direction: column;
        margin: 3.4rem clamp(0.625rem, -1.667rem + 12.222vw, 7.5rem) 0;
        gap: 3.2rem;
        
        h2{
            color: ${({ theme }) => theme.COLORS.LIGHT_300};
            font-family: "Poppins", sans-serif;
            font-size: 3.2rem;
            font-weight: 500;
            line-height: 4.5rem; 
        }

        .dishes{

            display: flex;
            flex-wrap: wrap;
            gap: 2rem 1rem;;

            .dish {
                display: flex;
                max-width: max-content;
                gap: 2rem;

                > img{
                    width: 100px;
                    height: 100px;
                }

                > div {
                    display: flex;
                    flex-direction: column;
                    justify-content: center;
                    
                    strong{ 
                        color: ${({ theme }) => theme.COLORS.LIGHT_300};
                        font-family: "Poppins", sans-serif;
                        font-size: 2.0rem;
                        font-weight: 500;
                        line-height: 3.2rem;
                    }

                    button{
                        background: none;
                        border: none;
                        text-align: left;
                        
                        color: ${({ theme }) => theme.COLORS.TOMATO_400};;
                        font-family: "Roboto", sans-serif;
                        font-size: 1.2rem;
                        font-weight: 400;
                        line-height: 2rem;
                    }
                }
            }
        }        
    }

`