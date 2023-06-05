import React, {useState, useContext} from 'react'
import {DevelopingContext, CartContext} from '../context'
import styled from '@emotion/styled'
import {SpecButton} from '../components'
import {ProductT, SizeT, ColorT} from '../type'

const Wrapper = styled.div<{display: boolean}>`
  z-index: 3;
  position: fixed;
  bottom: 0;
  right: 0;
  background: #2e303f;
  width: 100%;
  height: ${(props) => (props.display ? 'fit-content' : '0px')};
`

const TopSection = styled.div`
  display: flex;
  padding: 10px;
  border-bottom: 1px solid black;
  justify-content: space-between;
`

const ProductTitle = styled.div`
  margin-left: 5px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`

const ProductName = styled.div`
  font-size: 16px;
`

const ProductPrice = styled.div`
  font-size: 20px;
`

const SpecSection = styled.div`
  padding: 10px;
  border-bottom: 1px solid black;
`

const SpecBtnGroup = styled.div`
  display: flex;
`

const SizeSection = styled.div``

const ColorSection = styled.div`
  margin-top: 10px;
`

const AmountSection = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 10px;
`

const AmountAdjustment = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 10px;
  width: 100px;
`

const AmountInput = styled.input`
  background: #2e303f;
  border: none;
  border-color: transparent;
  width: 20px;
`

const AddBtn = styled.div`
  margin: 10px;
  background: #b82944;
  border-radius: 10px;
  text-align: center;
  padding: 10px 25px;
  font-size: 20px;
  &:hover {
    cursor: pointer;
  }
`

interface PreviewPopT {
  product: ProductT
  previewPopType: 'cart' | 'check' | ''
  setPreviewPopType: React.Dispatch<React.SetStateAction<'cart' | 'check' | ''>>
}

export const PreviewPop = (props: PreviewPopT) => {
  const {setDisplayDevelopingPop} = useContext(DevelopingContext)
  const {setCart} = useContext(CartContext)

  const {previewPopType, setPreviewPopType, product} = props
  const productPrices = Object.fromEntries(
    Object.entries(product.prices).filter(([_, v]) => v != null)
  )

  const btnWording = previewPopType === 'cart' ? '加入購物車' : '直接購買'

  const [selectdSize, setSelectedSize] = useState<SizeT | undefined>(product?.size[0])
  const [selectdColor, setSelectedColor] = useState<ColorT | undefined>(
    Object.keys(productPrices)?.[0] as ColorT
  )
  const [amount, setAmount] = useState(1)

  const handleClickAddBtn = () => {
    if (previewPopType === 'check') return setDisplayDevelopingPop('sorry_dude')
    if (amount === 0) return
    setCart((prev) => [
      ...prev,
      {
        id: product.id,
        name: product.name,
        price: selectdColor ? productPrices[selectdColor] : 0,
        size: selectdSize,
        color: selectdColor,
        amount,
        image: product.image
      }
    ])
    setPreviewPopType('')
  }

  const handleInputChange = (e: any) => {
    const input = e.target?.value
    const isNumber = /^(?:[0-9]+|)$/.test(input)
    if (!isNumber) return
    if (input === '') return setAmount(0)
    if (input <= 0 || input > product.stock) return
    setAmount(Number(input))
  }

  return (
    <Wrapper display={previewPopType !== ''}>
      <TopSection>
        <img
          src={`./images/${product?.image}.png`}
          style={{width: '70px', borderRadius: '10px'}}
          alt="item"
        />
        <ProductTitle>
          <ProductName>{product?.name}</ProductName>
          <ProductPrice>$ {selectdColor && productPrices[selectdColor]}</ProductPrice>
        </ProductTitle>
        <img
          onClick={() => setPreviewPopType('')}
          src="./images/cancel.png"
          style={{width: '10px', height: '10px', cursor: 'pointer'}}
          alt="item"
        />
      </TopSection>

      <SpecSection>
        <SizeSection>
          尺寸
          <SpecBtnGroup>
            <SpecButton
              {...{
                text: 'S',
                value: 'S',
                stock: product.size.some((size) => size === 'S'),
                selected: selectdSize === 'S',
                clickAction: setSelectedSize
              }}
            />
            <SpecButton
              {...{
                text: 'M',
                value: 'M',
                stock: product.size.some((size) => size === 'M'),
                selected: selectdSize === 'M',
                clickAction: setSelectedSize
              }}
            />
            <SpecButton
              {...{
                text: 'L',
                value: 'L',
                stock: product.size.some((size) => size === 'L'),
                selected: selectdSize === 'L',
                clickAction: setSelectedSize
              }}
            />
            <SpecButton
              {...{
                text: 'XL',
                value: 'XL',
                stock: product.size.some((size) => size === 'XL'),
                selected: selectdSize === 'XL',
                clickAction: setSelectedSize
              }}
            />
          </SpecBtnGroup>
        </SizeSection>

        <ColorSection>
          顏色
          <SpecBtnGroup>
            <SpecButton
              {...{
                text: '酷炫黑',
                value: 'black',
                stock: Object.keys(productPrices).some((key) => key === 'black'),
                selected: selectdColor === 'black',
                clickAction: setSelectedColor
              }}
            />
            <SpecButton
              {...{
                text: '耀眼黃',
                value: 'yellow',
                stock: Object.keys(productPrices).some((key) => key === 'yellow'),
                selected: selectdColor === 'yellow',
                clickAction: setSelectedColor
              }}
            />
            <SpecButton
              {...{
                text: '炫風紫',
                value: 'purple',
                stock: Object.keys(productPrices).some((key) => key === 'purple'),
                selected: selectdColor === 'purple',
                clickAction: setSelectedColor
              }}
            />
            <SpecButton
              {...{
                text: '躍動紅',
                value: 'red',
                stock: Object.keys(productPrices).some((key) => key === 'red'),
                selected: selectdColor === 'red',
                clickAction: setSelectedColor
              }}
            />
          </SpecBtnGroup>
        </ColorSection>
      </SpecSection>

      <AmountSection>
        購買數量
        <AmountAdjustment>
          <img
            onClick={() => {
              if (amount === 1) return
              setAmount((prev) => prev - 1)
            }}
            src="./images/minus.png"
            style={{
              width: '12px',
              height: '12px',
              cursor: amount === 1 ? 'auto' : 'pointer'
            }}
            alt="icon"
          />
          <AmountInput value={amount} onChange={(e) => handleInputChange(e)} />
          <img
            onClick={() => {
              if (amount >= product.stock) return
              setAmount((prev) => prev + 1)
            }}
            src="./images/plus.png"
            style={{
              width: '12px',
              height: '12px',
              cursor: amount >= product.stock ? 'auto' : 'pointer'
            }}
            alt="icon"
          />
        </AmountAdjustment>
      </AmountSection>

      <AddBtn onClick={handleClickAddBtn}>{btnWording}</AddBtn>
    </Wrapper>
  )
}
