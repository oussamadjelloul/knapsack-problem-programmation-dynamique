import React, { FC } from 'react'
import { Item } from '../App'

interface Props {
  table: Array<Array<number>>
  itemsTable: Item
}
const DisplayItems: FC<Props> = ({ table, itemsTable }) => {
  const [items, setItems] = React.useState<Array<number>>([])
  React.useEffect(() => {
    const items: Array<number> = []
    let i = table.length - 1
    let j = table[0].length - 1
    while (i > 0 && j > 0) {
      if (table[i][j] !== table[i - 1][j]) {
        items.push(i)
        i -= 1
        j = j - itemsTable.weight[j - 1]
      } else {
        i -= 1
      }
    }
    setItems(items)
  }, [table])

  return (
    <div className=" w-max m-auto mt-5">
      <h2 className=" text-xl font-semibold text-blue-400">
        Items that choosed for optimale solution
      </h2>
      <div className=" flex flex-row flex-wrap w-max m-auto">
        {items.length > 0 ? (
          items.map((item, index) => {
            return (
              <div
                key={index}
                className=" m-1 p-2 rounded-xl border border-gray-400"
              >
                {item}
              </div>
            )
          })
        ) : (
          <div className=" m-1 p-2 rounded-xl border border-gray-400">?</div>
        )}
      </div>
    </div>
  )
}

export default DisplayItems
