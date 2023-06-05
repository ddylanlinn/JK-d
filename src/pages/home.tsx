import React, {useEffect, useContext} from 'react'
import {RouteContext, ProductListContext, DevelopingContext} from '../context'
import styled from '@emotion/styled'
import {ProductCard} from '../components'

const Wrapper = styled.div`
  max-width: 500px;
  height: fit-content;
  margin: 0 auto;
  background: #060709;
  height: 100vh;
  padding: 10px;
`

const PageTitle = styled.div`
  margin: 0 auto;
  text-align: center;
`

const ProductCardGroup = styled.div`
  margin-top: 10px;
  display: flex;
  justify-content: space-around;
  flex-wrap: wrap;
`

interface HomeT {
  setProductId: React.Dispatch<React.SetStateAction<string | null>>
}

export const Home = (props: HomeT) => {
  const {setRoute} = useContext(RouteContext)
  const {productList, setProductList} = useContext(ProductListContext)
  const {setDisplayDevelopingPop} = useContext(DevelopingContext)
  const {setProductId} = props

  useEffect(() => {
    fetch('/api/product-list')
      .then((response) => {
        if (!response.ok) return setDisplayDevelopingPop('error')
        return response.json()
      })
      .then((data) => {
        if (!data) return
        setProductList(data)
      })
  }, [])

  return (
    <Wrapper>
      <PageTitle>街口攻城獅官方商城</PageTitle>
      <ProductCardGroup>
        {productList.map((product) => (
          <ProductCard
            {...{
              key: product.id,
              name: product.name,
              prices: product.prices,
              img: product.image,
              stock: product.stock,
              clickAction: () => {
                if (product.stock === 0) return
                setRoute('product')
                setProductId(product.id)
              }
            }}
          />
        ))}
      </ProductCardGroup>
    </Wrapper>
  )
}
