import React from 'react'
import {ChevronDownIcon} from '@heroicons/react/24/solid'
import {openSubMenu} from '../functions/navControl'

function DropdownMenu(props) {
    let theme = props.theme
  return (
    <div className={theme.dropdownContainer} id='dropdownmenu'>
    <ul>
      <li><p className='flex justify-between'>{false?<u>Account Settings</u> : <u>Connect Wallet</u>}</p></li>
      <li  onClick={openSubMenu}><p className='flex justify-between'><u>Categories</u>  <ChevronDownIcon className={theme.dropdownArrow}/></p>
      <ul id='innersubmenu' className={theme.dropdownInnerOption}>
        <li>3D Misc Assets</li>
        <li>3D Print</li>
        <li>Animal</li>
        <li>Architecture</li>
        <li>Character</li>
        <li>Fluids</li>
        <li>Food</li>
        <li>Furniture</li>
        <li>Household </li>
        <li>Industrials </li>
        <li>Landscape </li>
        <li>Military </li>
        <li>Ornaments and Accesories</li>
        <li>Plant</li>
        <li>Space</li>
        <li>Structures</li>
        <li>Vehicle</li>
        <li>Water</li>
        <li>Weapon</li>
      </ul>
      </li>
      <li><p className='flex justify-between'><u>Staistics</u></p></li>
    </ul>
  </div>
  )
}

export default DropdownMenu