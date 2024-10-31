import { styled } from "styled-components";

export const Container = styled.section`
    margin-top: 6.2rem; 

    width: 100%;
    height: 100%;

    h2{
        color: ${({theme}) => theme.COLORS.LIGHT_300};
        font-family: 'Poppins', sans-serif;
        font-size: 1.8rem;
        font-weight: 500;
        line-height: 2.5rem;

        margin-bottom: 2.4rem;
    }

    .swiper-slide {
        width: fit-content;
        height: clamp(30rem, 23.933rem + 20.222vw, 48.2rem);
    }

    .swiper-button-prev {
        width: 20%;
        height: 100%;
        background: var(--gradients-100, linear-gradient(90deg, #000A0F 0%, rgba(0, 10, 15, 0.27) 100% ));        
        left: -5px;
        top: 1.375rem;

        color: ${({theme}) => theme.COLORS.LIGHT_100};
        display: none;
    }

    .swiper-button-next {
        width: 10%;
        height: 100%;
        background: var(--gradients-100, linear-gradient(90deg, rgba(0, 10, 15, 0.27) 0%, #000A0F 100%));    right: 0;
        top: 1.375rem;
        padding-right: 0.5rem;
        color: ${({theme}) => theme.COLORS.LIGHT_100};
        display: none;
    }

  @media (min-width: 900px) {
    .swiper-button-prev,
    .swiper-button-next {
      display: flex;
    }

    > h2 {
      font-size: clamp(2.4rem, 1.3rem + 1.6vw, 3.2rem);
    }
  }

`