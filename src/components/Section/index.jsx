import { Navigation } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react'
import { register } from 'swiper/element/bundle'
register()

import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/scrollbar';

import { Container } from './style'

import { Card } from '../Card'

export function Section({title, dishes, disserts, drinks, favorites}){

    const settings = {
        modules: [Navigation],
        navigation: true,
        spaceBetween: 16,
        slidesPerView: 'auto',
        breakpoints: {
          769: {
            spaceBetween: 27,
          }
        }
      }

    return(
        <Container>
            <h2>
                {title}
            </h2>            

                <Swiper
                    {...settings}
                >
                    {
                        
                        dishes ?

                        dishes.map((dish, index) => (
                            <SwiperSlide 
                                key={String(index)}
                            >
                                <Card
                                    id={dish.dish_id}
                                    img={dish.img}
                                    name={dish.name}
                                    price={dish.price}
                                    desc={dish.description}
                                    isFavorite={favorites.includes(dish.dish_id)}
                                />
                            </SwiperSlide>
                        ))

                        :

                        <></>
                    }

                    {
                        disserts ?

                        disserts.map((dissert, index) => (
                        <SwiperSlide 
                            key={String(index)}
                        >
                            <Card
                                id={dissert.dish_id}
                                img={dissert.img}
                                name={dissert.name}
                                price={dissert.price}
                                desc={dissert.description}
                                isFavorite={favorites.includes(dissert.dish_id)}
                            />
                        </SwiperSlide>
                        ))

                        :
                        <></>
                    }

                    {
                        drinks ?

                        drinks.map((drink, index) => (
                        <SwiperSlide 
                            key={String(index)}
                        >
                            <Card
                                id={drink.dish_id}
                                img={drink.img}
                                name={drink.name}
                                price={drink.price}
                                desc={drink.description}
                                isFavorite={favorites.includes(drink.dish_id)}
                            />
                        </SwiperSlide>
                        ))

                        :
                        <></>
                    }
                </Swiper>        
        </Container>
    )
}