import React from 'react'
import {Bars4Icon,WalletIcon,ArrowTrendingDownIcon,ChevronDownIcon} from '@heroicons/react/24/solid'
import {closeSubMenuMD, openNav, openSubMenu, openSubMenuMD} from '../functions/navControl'

function NavBar(props) {

  let theme = props.theme
  return (
    <div className={theme.navBar} id='navbar'>
      <Bars4Icon id='dropdown' className={theme.dropDown_nav} onClick={openNav} />
      <ul className={theme.flexedBar} id='flexedBar'>
        <div className='flex space-x-4'>
        <li onMouseOverCapture={openSubMenuMD} >Categories <ChevronDownIcon className={theme.navIcon} />
        </li>
        <li >Statitics <ArrowTrendingDownIcon className={theme.navIcon} /></li>
        </div>
        <li >Connect Wallet<WalletIcon className={theme.navIcon} /></li>
      </ul>
      <ul onMouseLeave={closeSubMenuMD} id='innersubmenuMD' className={theme.dropdownInnerOptionMD}>
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
    </div>
  )
}

export default NavBar