import React, { useState, useEffect } from 'react';
import { headerLogo } from '../assets/images';
import { navLinks } from '../constants';
import MenuIcon from '@mui/icons-material/Menu';
import { Badge, IconButton } from '@mui/material';
import { IoBagHandleOutline } from "react-icons/io5";
import CloseIcon from '@mui/icons-material/Close';
import CartDrawer from './CartDrawer'; 
import { calculateTotalItems } from './CartDrawer'; 
const Nav = () => {
  const [openMenu, setOpenMenu] = useState(true);
  const [openDrawer, setOpenDrawer] = useState(false);
  const [isVisible, setIsVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);

  const handleClickMenu = () => {
    setOpenMenu(!openMenu);
  };

  const handleClickDrawer = () => {
    setOpenDrawer(!openDrawer);
  };
  const handleCloseDrawer = () => {
    setOpenDrawer(false);
  };

  const handleScroll = () => {
    if (typeof window !== 'undefined') {
      if (window.scrollY > lastScrollY) {
        setIsVisible(false);
      } else {
        
        setIsVisible(true);
      }
      setLastScrollY(window.scrollY);
    }
  };

  useEffect(() => {
    if (typeof window !== 'undefined') {
      window.addEventListener('scroll', handleScroll);

      return () => {
        window.removeEventListener('scroll', handleScroll);
      };
    }
  }, [lastScrollY]);
  const [cartItems, setCartItems] = useState([]);

  useEffect(() => {
    const storedCart = JSON.parse(localStorage.getItem('cart')) || [];
    setCartItems(storedCart);
  }, []);

  const totalItems = calculateTotalItems(cartItems);
  return (
    <header className={`fixed padding-x py-4 z-20  w-full transition-transform duration-300 ${isVisible ? 'translate-y-0 z-10 border-b bg-white' : '-translate-y-full'}${lastScrollY === 0 ? "bg-transparent border-b-0" : ""}`}>
      <nav className='flex justify-between items-center max-container'>
        <a href="/">
          <img src={headerLogo} alt="Logo" width={130} height={29} />
        </a>
        <ul className="flex-1 flex justify-center items-center gap-16 max-lg:hidden">
          {navLinks.map((nav, index) => (
            <li key={index}>
              <a className='font-montserrat leading-normal text-lg text-slate-gray hover:text-red-400' href={nav.href}>{nav.label}</a>
            </li>
          ))}
        </ul>
        {
          openMenu ?
            <div className='hidden text-neutral-700 cursor-pointer max-lg:block' onClick={handleClickMenu}>
              <IconButton>
                <MenuIcon fontSize='large' />
              </IconButton>
            </div>
            :
            <div className='hidden text-neutral-700 cursor-pointer max-lg:block' onClick={handleClickMenu}>
              <IconButton>
              <CloseIcon fontSize='large' />
              </IconButton>
            </div>
        }
        <div className='flex max-lg:hidden' >
          {
            openDrawer ?
            <CartDrawer open={openDrawer}  toggleDrawer={handleCloseDrawer} />
             
              :
              <IconButton sx={{ fontSize: '26px' }} onClick={handleClickDrawer}>
                <Badge badgeContent={totalItems} color="primary">
                <IoBagHandleOutline />

          </Badge>
              </IconButton>
          }
        </div>
      </nav>
    </header>
  );
};

export default Nav;
