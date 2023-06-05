import {faker} from '@faker-js/faker'

const genRandomSizes = () => {
  const sizes = ['S', 'M', 'L', 'XL'].sort(() => 0.5 - Math.random())
  const randomSlice = faker.datatype.number({min: 0, max: 4})
  return sizes.slice(randomSlice)
}

const genRandomPrices = () => {
  return {
    black: faker.datatype.boolean() ? faker.commerce.price() : null,
    yellow: faker.datatype.boolean() ? faker.commerce.price() : null,
    red: faker.datatype.boolean() ? faker.commerce.price() : null,
    purple: faker.datatype.boolean() ? faker.commerce.price() : null
  }
}

const genRelatedResult = () => {
  const prices = genRandomPrices()
  const sizes = genRandomSizes()
  const validPrices = Object.fromEntries(Object.entries(prices).filter(([_, v]) => v != null))
  const validPricesLength = Object.keys(validPrices).length
  const stock = validPricesLength * sizes.length
  return {
    prices: () => prices,
    sizes: () => sizes,
    stock: () => stock
  }
}

const product1Result = genRelatedResult()
const product2Result = genRelatedResult()
const product3Result = genRelatedResult()
const product4Result = genRelatedResult()

export const mockData = [
  {
    id: faker.datatype.uuid(),
    name: '超級酷的襪子',
    prices: product1Result.prices(),
    size: product1Result.sizes(),
    stock: product1Result.stock(),
    image: 'product1',
    note: `．於訂單備註填寫需要的球員
．球員搭配號碼不可替換
．訂單需要十四天`,
    category: '這邊填關於分類的內容',
    description: `攻城獅團隊專為球員打造的高端High End系列，以提供球員私下訓練時與場上暖身為主要訴求的機能裝備，
      全系列在版型及用料上精心挑選，採用彈性輕量面料合身且透氣，讓你在健身、訓練、打球或戶外活動時仍保持清爽舒適。
    `,
    productNoteDetail: `避免使用柔軟精、漂白水、冷洗精、等衣物清潔劑，避免影響機能布料功效`
  },
  {
    id: faker.datatype.uuid(),
    name: '21-22 攻城獅主戰球褲',
    prices: product2Result.prices(),
    size: product2Result.sizes(),
    stock: product2Result.stock(),
    image: 'product2',
    note: `．於訂單備註填寫需要的球員
．球員搭配號碼不可替換
．訂單需要十四天`,
    category: '這邊填關於分類的內容',
    description: `攻城獅團隊專為球員打造的高端High End系列，以提供球員私下訓練時與場上暖身為主要訴求的機能裝備，
      全系列在版型及用料上精心挑選，採用彈性輕量面料合身且透氣，讓你在健身、訓練、打球或戶外活動時仍保持清爽舒適。
    `,
    productNoteDetail: `避免使用柔軟精、漂白水、冷洗精、等衣物清潔劑，避免影響機能布料功效`
  },
  {
    id: faker.datatype.uuid(),
    name: '攻城獅三對三直紋球衣(庫存超多)',
    prices: product3Result.prices(),
    size: product3Result.sizes(),
    stock: 100,
    image: 'product3',
    note: `．於訂單備註填寫需要的球員
．球員搭配號碼不可替換
．訂單需要十四天`,
    category: '這邊填關於分類的內容',
    description: `攻城獅團隊專為球員打造的高端High End系列，以提供球員私下訓練時與場上暖身為主要訴求的機能裝備，
      全系列在版型及用料上精心挑選，採用彈性輕量面料合身且透氣，讓你在健身、訓練、打球或戶外活動時仍保持清爽舒適。
    `,
    productNoteDetail: `避免使用柔軟精、漂白水、冷洗精、等衣物清潔劑，避免影響機能布料功效`
  },
  {
    id: faker.datatype.uuid(),
    name: '22-23好野人露營風格收納箱',
    prices: product4Result.prices(),
    size: product4Result.sizes(),
    stock: product4Result.stock(),
    image: 'product4',
    note: `．於訂單備註填寫需要的球員
．球員搭配號碼不可替換
．訂單需要十四天`,
    category: '這邊填關於分類的內容',
    description: `攻城獅團隊專為球員打造的高端High End系列，以提供球員私下訓練時與場上暖身為主要訴求的機能裝備，
      全系列在版型及用料上精心挑選，採用彈性輕量面料合身且透氣，讓你在健身、訓練、打球或戶外活動時仍保持清爽舒適。
    `,
    productNoteDetail: `避免使用柔軟精、漂白水、冷洗精、等衣物清潔劑，避免影響機能布料功效`
  }
]
