import React from 'react'
import {Route} from "react-router-dom"
import {Schedule} from './containers'

const App = () =>{
  return(
    <><Route exact path='/' component={Schedule}></Route></>

  )
}
export default App