import React, {useState, useContext} from 'react'
import {RouteContext, ProductListContext} from '../context'
import styled from '@emotion/styled'
import {Navbar} from '../components'
import {PreviewPop} from '../components'

const Wrapper = styled.div`
  max-width: 500px;
  height: fit-content;
  margin: 0 auto;
  background: #060709;
  padding-bottom: 60px;
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

const TitleSection = styled.div`
  background: #1b1e27;
  margin: 10px 5px;
  border-radius: 10px;
  padding: 10px;
`

const ProductName = styled.div`
  font-size: 18px;
`

const ProductPrices = styled.div`
  font-size: 18px;
`

const DiscountInfoWapper = styled.div`
  margin-top: 5px;
  display: flex;
`

const DiscountInfo = styled.div`
  background: #60223b;
  padding: 3px;
  border-radius: 2px;
  width: fit-content;
  font-size: 12px;
  margin-right: 5px;
`

const ProductNote = styled.div`
  margin-top: 10px;
  padding-top: 10px;
  border-top: 1px solid black;
  white-space: pre;
`

const DetailSection = styled.div`
  background: #1b1e27;
  margin: 10px 5px;
  border-radius: 10px;
  padding: 10px;
`

const ProductDetailType = styled.div`
  font-size: 16px;
  margin-top: 5px;
`

const ProductDetailContent = styled.div`
  margin: 5px 0;
`

const Mask = styled.div<{display: boolean}>`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: rgba(0, 0, 0, 0.6);
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: ${(props) => (props.display ? '2' : '-1')};
`

interface ProductT {
  productId: string | null
}

export const Product = (props: ProductT) => {
  const {setRoute} = useContext(RouteContext)
  const {productList} = useContext(ProductListContext)
  const [previewPopType, setPreviewPopType] = useState<'cart' | 'check' | ''>('')

  const {productId} = props
  const product = productList.find((product) => product.id === productId)

  const pricesRange = product && Object.values(product.prices).filter((price) => price !== null)
  const minPrice = pricesRange && Math.min(...pricesRange)
  const maxPrice = pricesRange && Math.max(...pricesRange)
  const pricesWording = minPrice === maxPrice ? `$ ${minPrice}` : `$ ${minPrice} - $ ${maxPrice}`

  return (
    <Wrapper>
      <Topbar>
        <BackBtn onClick={() => setRoute('home')} />
        街口攻城獅官方商城
      </Topbar>
      <img src={`./images/${product?.image}.png`} style={{width: '100%'}} alt="item" />
      <TitleSection>
        <ProductName>{product?.name}</ProductName>
        <ProductPrices>{pricesWording}</ProductPrices>
        <DiscountInfoWapper>
          <DiscountInfo>街口結帳享九折優惠</DiscountInfo>
          <DiscountInfo>訂單滿399免運費</DiscountInfo>
        </DiscountInfoWapper>
        {product?.note && <ProductNote>{product?.note}</ProductNote>}
      </TitleSection>

      <DetailSection>
        <ProductDetailType>商品分類</ProductDetailType>
        <ProductDetailContent>{product?.category}</ProductDetailContent>
        <div style={{borderTop: '1px solid black'}} />
        <ProductDetailType>商品描述</ProductDetailType>
        <ProductDetailContent>{product?.description}</ProductDetailContent>
        <div style={{borderTop: '1px solid black'}} />
        <ProductDetailType>商品備註</ProductDetailType>
        <ProductDetailContent>{product?.productNoteDetail}</ProductDetailContent>
      </DetailSection>

      <Navbar {...{setPreviewPopType}} />

      <Mask display={previewPopType !== ''} />
      {product && (
        <PreviewPop
          {...{
            product,
            previewPopType,
            setPreviewPopType
          }}
        />
      )}
    </Wrapper>
  )
}
