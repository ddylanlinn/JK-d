import {useState} from 'react'
import {RouteContext, DevelopingContext, CartContext, ProductListContext} from './context'
import {Product, Cart, Home} from './pages'
import {DevelopingPop} from './components'
import {CartProductT, ProductT} from './type'

const App = () => {
  const [displayDevelopingPop, setDisplayDevelopingPop] = useState<'' | 'error' | 'sorry_dude'>('')
  const [route, setRoute] = useState<'product' | 'cart' | 'home'>('home')
  const [productList, setProductList] = useState<ProductT[]>([])
  const [cart, setCart] = useState<CartProductT[]>([])
  const [productId, setProductId] = useState<string | null>(null)

  const renderContent = () => {
    switch (route) {
      case 'product':
        return <Product {...{productId}} />
      case 'cart':
        return <Cart {...{setProductId}} />
      case 'home':
        return <Home {...{setProductId}} />
      default:
        return <Home {...{setProductId}} />
    }
  }

  return (
    <DevelopingContext.Provider value={{displayDevelopingPop, setDisplayDevelopingPop}}>
      {displayDevelopingPop !== '' && <DevelopingPop />}
      <RouteContext.Provider value={{route, setRoute}}>
        <ProductListContext.Provider value={{productList, setProductList}}>
          <CartContext.Provider value={{cart, setCart}}>{renderContent()}</CartContext.Provider>
        </ProductListContext.Provider>
      </RouteContext.Provider>
    </DevelopingContext.Provider>
  )
}

export default App
