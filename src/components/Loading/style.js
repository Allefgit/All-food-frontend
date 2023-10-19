import styled from "styled-components";

export const Container = styled.div`
    position: absolute;
    width: 100%;
    height: 100%;
    
    display: flex;
    align-items: center;
    justify-content: center;
    background: rgba(0, 0, 0, 0.3);

    .loading{
        
        span{
            display: inline-block;
            width: 3rem;
            height: 3rem;
            border-radius: 50%;
            background: ${({theme}) => theme.COLORS.CAKE_100};
            margin: 8px;

            animation: bounce .6s cubic-bezier(0.6, 0.1, 1, 0.4);
            animation-iteration-count: infinite;
            animation-direction: alternate;

            &:nth-child(1){
                animation-delay: .1s;
            }

            &:nth-child(2){
                animation-delay: .2s;
            }

            &:nth-child(3){
                animation-delay: .3s;
            }
        }
    }

    @keyframes bounce {
        to{
            transform: translateY(50px);
        }
    }
`