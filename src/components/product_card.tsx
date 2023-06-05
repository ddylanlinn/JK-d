import styled from '@emotion/styled'

const Wapper = styled.div`
  width: 45%;
  border-radius: 10px;
  margin-bottom: 20px;
  &:hover {
    cursor: pointer;
  }
`

interface ProductCardT {
  key: string
  name: string
  prices: any
  img: string
  stock: number
  clickAction: any
}

export const ProductCard = (props: ProductCardT) => {
  const {name, prices, img, clickAction, stock} = props

  const pricesRange = Object.values(prices).filter((price) => price !== null) as number[]
  const minPrice = Math.min(...pricesRange)
  const maxPrice = Math.max(...pricesRange)
  const pricesWording = minPrice === maxPrice ? `$ ${minPrice}` : `$ ${minPrice} - $ ${maxPrice}`

  return (
    <Wapper onClick={clickAction}>
      <img
        src={`./images/${img}.png`}
        style={{width: '100%', borderRadius: '10px 10px 0 0'}}
        alt="item"
      />
      <div>{!!stock && name}</div>
      <div>{!!stock && pricesWording}</div>
      <div>{stock === 0 && 'Sold out'}</div>
    </Wapper>
  )
}
