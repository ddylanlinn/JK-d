import React, {useContext} from 'react'
import {RouteContext, DevelopingContext, CartContext} from '../context'
import styled from '@emotion/styled'
import {CartCard} from '../components'

const Wrapper = styled.div`
  max-width: 500px;
  height: fit-content;
  margin: 0 auto;
  background: #060709;
  height: 100vh;
  padding: 10px;
`

const Topbar = styled.div`
  text-align: center;
  padding: 10px 0;
  position: relative;
`

const BackBtn = styled.div`
  border: 1px solid white;
  border-top: none;
  border-right: none;
  width: 10px;
  height: 10px;
  position: absolute;
  transform: rotate(45deg);
  top: 15px;
  left: 15px;
  &:hover {
    cursor: pointer;
  }
`

const ProductCardGroup = styled.div`
  margin-top: 10px;
`

const Cost = styled.div`
  position: fixed;
  bottom: 10%;
  right: 10%;
  width: 80%;
  text-align: center;
`

const CheckBtn = styled.div`
  position: fixed;
  bottom: 2%;
  right: 10%;
  width: 80%;
  background: #b82944;
  border-radius: 10px;
  text-align: center;
  padding: 10px 25px;
  font-size: 20px;
  &:hover {
    cursor: pointer;
  }
`

interface CartT {
  setProductId: React.Dispatch<React.SetStateAction<string | null>>
}

export const Cart = (props: CartT) => {
  const {setRoute} = useContext(RouteContext)
  const {setDisplayDevelopingPop} = useContext(DevelopingContext)
  const {cart} = useContext(CartContext)
  const {setProductId} = props
  const cost = cart.reduce((acc, product) => acc + product.price * product.amount, 0)

  return (
    <Wrapper>
      <Topbar>
        <BackBtn onClick={() => setRoute('product')} />
        購物車
      </Topbar>
      <ProductCardGroup>
        {cart.map((product) => (
          <CartCard
            {...{
              key: product.id,
              name: product.name,
              price: product.price,
              img: product.image,
              amount: product.amount,
              size: product.size,
              color: product.color,
              clickAction: () => {
                setRoute('product')
                setProductId(product.id)
              }
            }}
          />
        ))}
      </ProductCardGroup>

      <Cost>Total: $ {cost}</Cost>
      <CheckBtn onClick={() => setDisplayDevelopingPop('sorry_dude')}>結帳</CheckBtn>
    </Wrapper>
  )
}
