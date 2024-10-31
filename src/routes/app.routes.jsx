import { Route, Routes } from 'react-router-dom'

import { Home } from '../pages/Home'
import { Dish } from '../pages/Dish'
import { Menu } from '../pages/Menu'
import { Order } from '../pages/Order'
import { NewDish } from '../pages/NewDish'
import { EditDish } from '../pages/EditDish'
import { Favorites } from '../pages/Favorites'

export function AppRoutes(){
    return(
        <Routes>
            <Route path='/' element={<Home/>}/>
            <Route path='/menu' element={<Menu/>}/>
            <Route path='/order' element={<Order/>}/>
            <Route path='/create' element={<NewDish/>}/>
            <Route path='/edit/:id' element={<EditDish/>}/>
            <Route path='/dish/:id/:qtd' element={<Dish/>}/>
            <Route path='/favorites' element={<Favorites/>}/>
        </Routes>
    )
}