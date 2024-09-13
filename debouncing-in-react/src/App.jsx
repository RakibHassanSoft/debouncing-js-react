import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import SearchComponent from './debouncing/SearchComponent'
import SearchComponetWithLodash from './debouncing/SearchComponetWithLodash'
import ButtonClickComponentWithLodash from './debouncing/ButtonClickComponentWithLodash'
import ButtonClickComponent from './debouncing/ButtonClickComponent'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div>

    {/********  useDebounce  ******* */}
    {/* <SearchComponent/> */}
    {/* <ButtonClickComponent/> */}


    {/* *******   useDebounceWithLodash ****  */}
    {/* <SearchComponetWithLodash/> */}
    {/* <ButtonClickComponentWithLodash/> */}
    </div>
  )
}

export default App
