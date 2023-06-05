export type SizeT = 'S' | 'M' | 'L' | 'XL'
export type ColorT = 'black' | 'purple' | 'yellow' | 'red'

export interface CartProductT {
  id: string
  name: string
  price: number
  size: SizeT | undefined
  color: ColorT | undefined
  amount: number
  image: string
}

export interface ProductT {
  id: string
  name: string
  prices: Record<ColorT, number>
  size: SizeT[]
  stock: number
  image: string
  note: string
  category: string
  description: string
  productNoteDetail: string
}
