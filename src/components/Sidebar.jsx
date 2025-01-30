import React, { useState } from 'react'
import Navigation from './Navigation'
import { useFilterStore } from '../store'

export default function Sidebar() {

    const [isOpen, setisOpen] = useState(false)
    const [CountryDropdown, setCountryDropdown] = useState(false)
    const [ColorDropdown, setColorDropdown] = useState(false)
    // const [PriceDropdown, PriceDropdown] = useState(false)

    const toggleSidebar = () => setisOpen(!isOpen)
    const { setSelectedContries, setSelectedColors, setSelectedPriceRange, clearFilters } = useFilterStore()

    return (
        <div>
            <Navigation toggleSidebar={toggleSidebar} />

            {/* <div className={`fixed top-0 left-0 h-full w-80 bg-white shadow-lg transform ${isOpen ? ' translate-x-0' : 'translate-x-full'} transition-transform duration-300 ease-in-out z-50`}>

            </div> */}
        </div>
    )
}
