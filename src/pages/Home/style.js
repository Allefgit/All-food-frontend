import styled from 'styled-components'

export const Container = styled.div`
    width: 100%;
    
    display: flex;
    flex-direction: column;
    align-items: center;
    
    main {
        width: 100%;
        max-width: 1120px;

        display: flex;
        flex-direction: column;
        align-items: center;
        padding: 0 1.6rem;

    }
`

export const LogoBanner = styled.div `
            width: 100%;
            height: 12rem;
            margin: 4rem auto 0;

            position: relative;

            display: flex;
            justify-content: flex-end;

            background: linear-gradient(180deg, #091E26 0%, #00131C 100%);
            border-radius: 8px;

            padding-right: clamp(0rem, -5rem + 14vw, 13rem);

            picture {
                position: absolute;
                top: -3rem;
                left: -3rem;
                bottom: 0;
            }

            div{
                width: clamp(21.5rem, 100%, 100% - 151px);
                font-family: 'Poppins', sans-serif;
                color: ${({theme}) => theme.COLORS.LIGHT_300};

                padding-top: 4rem;
                display: flex;
                flex-direction: column;
                gap: 3px;


                h2{
                    font-size: 1.8rem;
                    line-height: 2.5rem;
                    font-weight: 600;
                }

                p{
                    font-size: 1.2rem;
                    line-height: 1.6rem;
                }

            }
            
            @media (max-width: 399px) {
                justify-content: center;
                align-items: center;

                > picture > img {
                display: none;
                }
                > div {
                padding-top: 0;
                }
            }

            @media (min-width: 900px) {
                height: clamp(12rem, -6rem + 29vw, 26rem);
                justify-content: space-between;
                margin-top: clamp(8.6rem, -8rem + 22vw, 16.4rem);

                > picture {
                    position: static;
                    margin-top: -9%;
                    margin-left: -4%;
                    width: 58%;

                    >img{
                        width: 100%;
                        height: 100%;
                    }
                }

                > div {
                    width: 50%;
                    padding-top: clamp(4.4rem, -1rem + 9vw, 9rem);

                > h2 {
                    font-size: clamp(1.8rem, -1rem + 4vw, 4rem);
                    margin-bottom: clamp(0.3rem, -0rem + 1vw, 0.8rem);
                    line-height: clamp(2.5rem, -1rem + 6vw, 5.6rem);
                }

                > p {
                    font-size: clamp(1.2rem, 0.7rem + 0.8vw, 1.6rem);
                    line-height: 1.7rem;
                }
            }
        }    
`

