import {createContext} from 'react'
import {CartProductT, ProductT} from './type'

// developing popup
export const DevelopingContext = createContext<{
  displayDevelopingPop: '' | 'error' | 'sorry_dude'
  setDisplayDevelopingPop: React.Dispatch<React.SetStateAction<'' | 'error' | 'sorry_dude'>>
}>({
  displayDevelopingPop: '',
  setDisplayDevelopingPop: () => {}
})

// route state
export const RouteContext = createContext<{
  route: 'product' | 'cart' | 'home'
  setRoute: React.Dispatch<React.SetStateAction<'product' | 'cart' | 'home'>>
}>({
  route: 'home',
  setRoute: () => {}
})

// store data from API
export const ProductListContext = createContext<{
  productList: ProductT[]
  setProductList: React.Dispatch<React.SetStateAction<ProductT[]>>
}>({
  productList: [],
  setProductList: () => {}
})

// store user cart
export const CartContext = createContext<{
  cart: CartProductT[]
  setCart: React.Dispatch<React.SetStateAction<CartProductT[]>>
}>({
  cart: [],
  setCart: () => {}
})
