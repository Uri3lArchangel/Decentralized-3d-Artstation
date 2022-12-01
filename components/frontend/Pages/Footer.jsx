import Image from 'next/image'
import React from 'react'
import img1 from '../../imgs/img7.png'
import img2 from '../../imgs/img8.png'
import img3 from '../../imgs/img9.png'
import img4 from '../../imgs/img10.png'




function Footer(props) {
    let theme =props.theme
  return (
    <div className={theme.footerContainer}>
        <h3 className={theme.footerHeading}>Stay Connected</h3>
        <div className='flex justify-center space-x-4'>
        <Image alt='facebook' className='rounded-full w-7 cursor-pointer' src={img1} layout='intrinsic' />
        <Image alt='whatsapp' className='rounded-full w-8 cursor-pointer' src={img2} layout='intrinsic' />
        <Image alt='linkedin' className='rounded-full w-8 cursor-pointer' src={img3} layout='intrinsic' />
        <Image alt='twitter' className='rounded-full w-7 cursor-pointer' src={img4} layout='intrinsic' />
        </div>
        <div className={theme.footerBase}>
        powered by WEB3
        </div>

    </div>
  )
}

export default Footer