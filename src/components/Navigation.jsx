import React from 'react'
import { IoBagOutline, IoFilterOutline } from 'react-icons/io5'

export default function Navigation({ toggleSidebar }) {
    return (
        <div className=' mt-[2rem] container w-[90%] ml-[5rem] flex justify-between items-center'>
            <h1 className=' Logo'><IoFilterOutline onClick={toggleSidebar} size={27} className=' ml-[4rem] cursor-pointer' /></h1>
            <nav>
                <ul className=' flex items-center mr-[2rem] space-x-4'>
                    <li>search</li>
                    <li>Help</li>
                    <li>My Account</li>
                </ul>
            </nav>

            <IoBagOutline />
        </div>
    )
}
