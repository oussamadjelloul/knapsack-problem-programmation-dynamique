import './App.css'
import React from 'react'
import Footer from './components/Footer'
import Table from './components/Table'
import DisplayTable from './components/DisplayTable'
import DisplayItems from './components/DisplayItems'

export interface Item {
  value: Array<number>
  weight: Array<number>
}

function App() {
  const [items, setItems] = React.useState<Item>({
    value: [],
    weight: [],
  })
  const [table, setTable] = React.useState<Array<Array<number>>>([[]])
  const [weightMax, setWeightMax] = React.useState<number>(0)
  function handlerRemove(index: number) {
    const updatedItems = { ...items } // Create a copy of the state object
    updatedItems.weight.splice(index, 1) // Remove weight at index
    updatedItems.value.splice(index, 1) // Remove value at index
    setItems(updatedItems)
  }
  function handlerAdd(index: number, value: number, weight: number) {
    const updatedItems = { ...items } // Create a copy of the state object
    updatedItems.value.splice(index + 1, 0, value) // Add newValue at index
    updatedItems.weight.splice(index + 1, 0, weight) // Add newWeight at index
    setItems(updatedItems)
  }
  return (
    <>
      <div>
        <h1 className=" text-2xl font-semibold w-full p-2 bg-blue-400 rounded-lg text-white">
          knapsack problem, programmation dynamique
        </h1>
        <Table
          items={items}
          handlerAdd={handlerAdd}
          handlerRemove={handlerRemove}
        />
        <div className=" w-full h-max p-3 ">
          <h2 className=" text-xl font-semibold text-blue-400">Weight max</h2>
          <input
            type="number"
            min={0}
            onChange={(e) => setWeightMax(parseInt(e.target.value))}
            className=" p-2 m-1 rounded-xl border border-gray-400"
          />
        </div>
        <DisplayTable
          items={items}
          weightMax={weightMax}
          table={table}
          setTable={setTable}
        />
        <DisplayItems table={table} itemsTable={items} weightMax={weightMax} />
        <Footer />
      </div>
    </>
  )
}

export default App
