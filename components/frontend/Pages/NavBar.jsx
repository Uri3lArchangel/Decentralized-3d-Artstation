import React from 'react'
import {Bars4Icon,WalletIcon,ArrowTrendingDownIcon,ChevronDownIcon} from '@heroicons/react/24/solid'
import {openNav} from '../functions/navControl'

function NavBar(props) {

  let theme = props.theme
  return (
    <div className={theme.navBar} id='navbar'>
      <Bars4Icon id='dropdown' className={theme.dropDown_nav} onClick={openNav} />
      <ul className={theme.flexedBar}>
        <div className='flex space-x-4'>
        <li>Categories <ChevronDownIcon className={theme.navIcon} /></li>
        <li>Statitics <ArrowTrendingDownIcon className={theme.navIcon} /></li>
        </div>
        <li>Connect Wallet<WalletIcon className={theme.navIcon} /></li>
      </ul>
    </div>
  )
}

export default NavBar