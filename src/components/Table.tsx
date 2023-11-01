import React, { FC } from 'react'
import { RiDeleteBin5Line } from 'react-icons/ri'
import { IoMdAddCircle } from 'react-icons/io'
import { Item } from '../App'

interface TableProps {
  items: Item
  handlerRemove: (index: number) => void
  handlerAdd: (index: number, value: number, weight: number) => void
}

const Table: FC<TableProps> = ({ items, handlerAdd, handlerRemove }) => {
  const [poup, setPoup] = React.useState<boolean>(false)
  const [value, setValue] = React.useState<number>(0)
  const [weight, setWeight] = React.useState<number>(0)
  const [index, setIndex] = React.useState<number>(0)

  return (
    <>
      <div className="relative">
        <div className="w-max m-auto mt-10 mb-10 overflow-x-auto shadow-md sm:rounded-lg">
          <table className=" m-auto text-sm text-left text-gray-500 dark:text-gray-400">
            <tbody>
              <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
                <th
                  scope="row"
                  className="px-6 py-4 group font-medium text-gray-900 whitespace-nowrap dark:text-white"
                >
                  Number item
                  <div
                    style={{ boxShadow: '0px 0px 4px #ebebeb' }}
                    className=" w-10 h-9 rounded-lg absolute mt-[-50px] hidden group-hover:flex justify-between p-2"
                  >
                    <button
                      onClick={() => {
                        setPoup(true)
                        setIndex(0)
                      }}
                    >
                      <IoMdAddCircle size="20px" className=" text-green-500" />
                    </button>
                  </div>
                </th>
                {items.value.map((e: number, index) => {
                  return (
                    <td key={index} className="px-6 py-4 group">
                      {index + 1}
                      <div
                        style={{ boxShadow: '0px 0px 4px #ebebeb' }}
                        className=" w-16 h-9 rounded-lg absolute mt-[-50px] hidden group-hover:flex justify-between p-2"
                      >
                        <button onClick={() => handlerRemove(index)}>
                          <RiDeleteBin5Line
                            size="20px"
                            className=" text-red-500"
                          />
                        </button>
                        <button
                          onClick={() => {
                            setPoup(true)
                            setIndex(index)
                          }}
                        >
                          <IoMdAddCircle
                            size="20px"
                            className=" text-green-500"
                          />
                        </button>
                      </div>
                    </td>
                  )
                })}
              </tr>
              <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
                <th
                  scope="row"
                  className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
                >
                  value
                </th>
                {items.value.map((e: number, index) => {
                  return (
                    <td key={index} className="px-6 py-4">
                      {e}
                    </td>
                  )
                })}
              </tr>
              <tr className="bg-white dark:bg-gray-800">
                <th
                  scope="row"
                  className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
                >
                  weight
                </th>
                {items.weight.map((e: number, index) => {
                  return (
                    <td key={index} className="px-6 py-4">
                      {e}
                    </td>
                  )
                })}
              </tr>
            </tbody>
          </table>
        </div>
      </div>
      {poup && (
        <>
          <div
            className=" w-full h-screen absolute right-0 left-0 top-0 "
            onClick={() => setPoup(false)}
          ></div>
          <div
            style={{ boxShadow: '0px 0px 10px #dbdbdb' }}
            className=" z-50 w-56 h-max p-2 m-auto right-0 left-0 absolute bg-white rounded-xl shadow-md border border-gray-400 "
          >
            <div className=" w-full">
              <label className="mt-1 mb-1"> weight </label>
              <input
                placeholder=" entry your weight "
                type="number"
                onChange={(e) => {
                  setWeight(parseInt(e.target.value))
                }}
                className=" w-full rounded-lg border border-gray-400 p-1"
              />
            </div>
            <div>
              <label className="mt-1 mb-1"> value </label>
              <input
                onChange={(e) => {
                  setValue(parseInt(e.target.value))
                }}
                placeholder=" entry your value"
                className=" w-full rounded-lg border border-gray-400 p-1"
                type="number"
              />
            </div>{' '}
            <div className=" mt-5">
              <button
                className=" p-1 pl-4 pr-4 text-white font-medium text-lg bg-green-400 rounded-lg "
                onClick={() => {
                  handlerAdd(index, value, weight)
                  setPoup(false)
                }}
              >
                {' '}
                Add
              </button>
            </div>
          </div>
        </>
      )}
    </>
  )
}

export default Table
