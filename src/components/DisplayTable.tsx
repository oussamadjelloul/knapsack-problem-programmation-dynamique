import React, { FC } from 'react'
import { Item } from '../App'

interface Props {
  items: Item
  weightMax: number
  table: Array<Array<number>>
  setTable: (table: Array<Array<number>>) => void
}

const DisplayTable: FC<Props> = ({ items, weightMax, table, setTable }) => {
  const [open, setOpen] = React.useState<boolean>(false)

  React.useEffect(() => {
    const table: Array<Array<number>> = []
    const { value, weight } = items
    const n = value.length + 1
    const W = weightMax

    for (let i = 0; i <= n; i++) {
      table.push([])
      for (let w = 0; w <= W; w++) {
        if (i === 0 || w === 0) {
          table[i][w] = 0
        } else if (weight[i - 1] <= w) {
          table[i][w] = Math.max(
            value[i - 1] + table[i - 1][w - weight[i - 1]],
            table[i - 1][w]
          )
        } else {
          table[i][w] = table[i - 1][w]
        }
      }
    }
    setTable(table)
  }, [items, weightMax])
  return (
    <div className=" p-2 w-full">
      <button
        onClick={() => setOpen(!open)}
        className=" p-2 pl-4 pr-4 text-lg font-medium bg-green-400 text-white rounded-xl"
      >
        show demo of table that used
      </button>
      {open && (
        <div className=" m-auto my-4 overflow-x-auto relative">
          <table className="w-full">
            <thead>
              <tr>
                <th className="border px-4 py-2">i\w</th>
                {table[0].map((_, index) => (
                  <th className="border px-4 py-2" key={index}>
                    {index}
                  </th>
                ))}
              </tr>
            </thead>
            <tbody>
              {table.map((row, index) => (
                <tr key={index}>
                  <td className="border px-4 py-2">{index}</td>
                  {row.map((col, index) => (
                    <td className="border px-4 py-2" key={index}>
                      {col}
                    </td>
                  ))}
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
    </div>
  )
}

export default DisplayTable
