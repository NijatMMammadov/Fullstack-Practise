import React from 'react'
import Navbarr from '../components/Navbarr'
import { Outlet } from 'react-router'
import Footerr from '../components/Footerr'

function Root() {
    return (
        <>
            <Navbarr></Navbarr>
            <Outlet></Outlet>
            <Footerr></Footerr>
        </>
    )
}

export default Root
