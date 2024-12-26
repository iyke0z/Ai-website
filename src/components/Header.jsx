import React, { useState } from 'react'
import { disablePageScroll, enablePageScroll } from 'scroll-lock'
import { useLocation } from 'react-router-dom';
import { brainwave } from '../assets';
import { navigation } from '../constants';
import Button from './Button';
import MenuSvg from '../assets/svg/MenuSvg'
import { HambugerMenu } from './design/Header';

const Header = () => {
    const pathName = useLocation()
    const [openNavigation, setOpenNavigation] = useState(false);
    const toggleNavigation = () => {
        if(openNavigation){
            setOpenNavigation(false)
        }else{
            setOpenNavigation(true)
            disablePageScroll()
        }
    }

    const handleClick = () => {
        if (!openNavigation) return

        enablePageScroll()
        setOpenNavigation(false)
        
    }

  return (
    <div className={`fixed top-0 z-50 bg-n-8/90 backdrop-blur-sm border-b left-0 w-full border-n-6
                        ${openNavigation ? 'bg-n-8' : 'bg-n-8/90'}`}>
        <div className='flex items-center px-5 lg:px-7.5 xl:px-10 max-lg:py-4'>
            <a className='block w-[12rem] xl:mr-8' href="#hero">
            <img src={brainwave} alt="Brainwave" />
            </a>

            <nav className={`${openNavigation ? "flex" : "hidden"} fixed top-[5rem] left-0 right-0 bottom-0 bg-n-8 lg:static lg:flex lg:mx-auto lg:bg-transparent`}>
                <div className='relative z-2 flex flex-col items-center justify-center m-auto lg:flex-row'>
                    {navigation.map((item) => {
                        return (
                            <a 
                                className={`block relative font-code text-2xl uppercase text-n-1 transition-colors cursor:pointer hover:text-color-1 
                                    ${item.onlyMobile ? "lg:hidden" : ""} px-6 py-6 md-py-8 lg:-mr-0.25 lg:text-xs lg:font-semibold 
                                    ${item.url === pathName.hash ? 'z-2 lg:text-n-1' : 'lg:text-n-1/50'} lg:leading-5 lg:hover:text-n-1 xl:px-12`} 
                                key={item.id} 
                                href={item.url}
                                onClick={handleClick}
                            >
                            {item.title}
                        </a>
                        )
                    })}
                </div>
                    <HambugerMenu />
            </nav>

            <a href="" className="button hidden mr-8 text-n-1/50 transition-colors hover:text-n-1 lg:block">
                New Account
            </a>
            <Button className="hidden lg:flex" href="#login">
                Sign In
            </Button>

            <Button onClick={toggleNavigation} className="ml-auto lg:hidden" px="px-3">
                <MenuSvg openNavigation={openNavigation} />
            </Button>
        </div>
    </div>
  )
}

export default Header
