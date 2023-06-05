import React, {useContext} from 'react'
import {RouteContext, CartContext} from '../context'
import styled from '@emotion/styled'
import '../styles.css'

const Wrapper = styled.div`
  position: fixed;
  bottom: 0;
  right: 0;
  width: 100%;
  height: fit-content;
  margin: 0 auto;
  background: #2e303f;
  padding: 10px;
  display: flex;
  justify-content: space-between;
  align-items: center;
`

const CartWapper = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  &:hover {
    cursor: pointer;
  }
`

const CartDesc = styled.div`
  font-size: 10px;
`

const CartCountDot = styled.div`
  position: absolute;
  top: -5px;
  right: -5px;
  border-radius: 50%;
  background: #c05766;
  width: 15px;
  height: 15px;
  text-align: center;
  line-height: 15px;
`

const AddCartBtn = styled.div`
  background: #43455e;
  border-radius: 10px;
  text-align: center;
  padding: 10px 20px;
  font-size: 16px;
  &:hover {
    cursor: pointer;
  }
`

const BuyBtn = styled.div`
  background: #b82944;
  border-radius: 10px;
  text-align: center;
  padding: 10px 25px;
  font-size: 16px;
  &:hover {
    cursor: pointer;
  }
`

interface NavbarT {
  setPreviewPopType: React.Dispatch<React.SetStateAction<'cart' | 'check' | ''>>
}

export const Navbar = (props: NavbarT) => {
  const {setRoute} = useContext(RouteContext)
  const {cart} = useContext(CartContext)
  const {setPreviewPopType} = props
  return (
    <Wrapper>
      <CartWapper onClick={() => setRoute('cart')}>
        <img src="./images/cart.png" style={{width: '25px'}} alt="item" />
        <CartDesc>購物車</CartDesc>
        <CartCountDot>{cart.length}</CartCountDot>
      </CartWapper>
      <AddCartBtn onClick={() => setPreviewPopType('cart')}>
        加入購物車
      </AddCartBtn>
      <BuyBtn onClick={() => setPreviewPopType('check')}>直接購買</BuyBtn>
    </Wrapper>
  )
}
