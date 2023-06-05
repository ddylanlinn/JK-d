import React from 'react'
import styled from '@emotion/styled'
import {SizeT, ColorT} from '../type'

const Wapper = styled.div`
  width: 100%;
  border-radius: 10px;
  margin-bottom: 10px;
  display: flex;
  align-items: center;
  &:hover {
    cursor: pointer;
  }
`

const ProductTitle = styled.div`
  width: 60%;
  margin-left: 5px;
`

const ProductAmount = styled.div`
  width: 15%;
  margin-left: 5px;
`

interface CartCardT {
  name: string
  price: number
  img: string
  amount: number
  size?: SizeT
  color?: ColorT
  clickAction: any
}

export const CartCard = (props: CartCardT) => {
  const {name, price, img, amount, size, color, clickAction} = props

  const colorText =
    color === 'black'
      ? '酷炫黑'
      : color === 'purple'
      ? '炫風紫'
      : color === 'red'
      ? '躍動紅'
      : '耀眼黃'

  return (
    <Wapper onClick={clickAction}>
      <img
        src={`./images/${img}.png`}
        style={{width: '25%', borderRadius: '10px'}}
        alt="item"
      />
      <ProductTitle>
        <div>{name}</div>
        <div>
          {size} {colorText}
        </div>
        <div>$ {price}</div>
      </ProductTitle>
      <ProductAmount>{amount}</ProductAmount>
    </Wapper>
  )
}
