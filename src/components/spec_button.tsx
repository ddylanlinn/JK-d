import styled from '@emotion/styled'
import {SizeT, ColorT} from '../type'

const SpecBtn = styled.div<{stock: boolean; selected: boolean}>`
  border: ${(props) => !props.selected && '2px solid #3d3f4e'};
  border-radius: 5px;
  width: fit-content;
  padding: 5px;
  min-width: 30px;
  min-height: 30px;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-top: 10px;
  margin-right: 10px;
  color: ${(props) => !props.stock && '#3d3f4e'};
  background: ${(props) => props.selected && '#b82944'};
  &:hover {
    cursor: ${(props) => props.stock && 'pointer'};
  }
`

interface SpecButtonT {
  text: string
  value: SizeT | ColorT
  stock: boolean
  selected: boolean
  clickAction: any
}

export const SpecButton = (props: SpecButtonT) => {
  const {text, value, stock, selected, clickAction} = props

  const handleClick = () => {
    if (!stock) return
    clickAction(value)
  }

  return (
    <SpecBtn onClick={handleClick} {...{stock, selected}}>
      {text}
    </SpecBtn>
  )
}
