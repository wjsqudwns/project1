import React from 'react'
import {ItemMenu as Menu} from '../common'
import './table.style.css'

const Item = ({children}) =>(
    <>
    <h1>item</h1>
    <Menu/>
    {children}
    </>

)
export default Item