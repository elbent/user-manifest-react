import { NavLink } from 'react-router-dom'
import React from "react"
import style from './style.module.scss'

const Header = () => (
    <div className={style.header}>
        <h1>React Fetch Demo</h1>
        <ul className={style.navList}>
            <NavLink to='/'>Home</NavLink>
            <NavLink to='/users'>Users</NavLink>
            <a href='https://jsonplaceholder.typicode.com/'>API Docs</a>
        </ul>
    </div>
    
)

export default Header