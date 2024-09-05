import React, { useState, useEffect } from 'react';
import { headerLogo } from '../assets/images';
import { navLinks } from '../constants';
import MenuIcon from '@mui/icons-material/Menu';
import { Badge, IconButton } from '@mui/material';
import { IoBagHandleOutline } from "react-icons/io5";
import CloseIcon from '@mui/icons-material/Close';
import CartDrawer from './CartDrawer';
import { useSelector } from 'react-redux';
import { useLocation, useNavigate } from 'react-router-dom';
import { auth } from '../Firebase'
import { signOut, onAuthStateChanged } from 'firebase/auth';
import { toast, ToastContainer } from 'react-toastify';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';

const Nav = () => {
  const [openMenu, setOpenMenu] = useState(true);
  const [openDrawer, setOpenDrawer] = useState(false);
  const [isVisible, setIsVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);
  const navigate = useNavigate();

  const [user, setUser] = useState(null);
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        setUser(auth.currentUser);
      } else {
        setUser(null);
      }
    });

    return () => unsubscribe();
  }, [auth]);

  const logout = async () => {
    try {
      await signOut(auth)
      if (signOut) {
        toast.success('Çıkış')
        navigate('/authantication')
      }
    } catch (error) {
      toast.error(error.message)
    }

  }

  const cartItems = useSelector((state) => state.cart.items) || [];

  const totalUniqueItems = cartItems.length;

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

  const location = useLocation();
  return (
    <header className={`fixed padding-x py-4 z-20 w-full transition-transform duration-300 
  ${isVisible ? 'lg:translate-y-0 ' : 'lg:-translate-y-full '} 
  ${location.pathname === '/' && lastScrollY === 0 ? 'bg-transparent border-b-0' : 'border-b bg-white'}
   ${location.pathname === '/' && lastScrollY === 0 && isVisible ? 'border-b bg-white' : ''}  
  lg:transition-transform lg:duration-300`}>
      <ToastContainer position="top-right" autoClose={1500} />

      <nav className='flex justify-between items-center max-container max-lg:flex-col'>
        <div className='flex-1 flex items-center justify-between max-lg:w-full'>

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
            openMenu ? (
              <div className='hidden text-neutral-700 cursor-pointer max-lg:block' onClick={handleClickMenu}>
                <IconButton>
                  <MenuIcon fontSize='large' />
                </IconButton>
              </div>
            )

              : (
                <div className='hidden text-neutral-700 cursor-pointer max-lg:block ' onClick={handleClickMenu}>
                  <IconButton>
                    <CloseIcon fontSize='large' />
                  </IconButton>

                </div>
              )

          }
        </div>
        {
          openMenu ? ("") : (
            <div className='relative z-2 flex flex-col items-center justify-center m-auto lg:flex-row cursor-pointer'>
              <ul className="hidden gap-16 max-lg:flex max-lg:flex-col max-lg:w-full items-center">
                {navLinks.map((nav, index) => (
                  <li key={index} className='mb-2 mt-2 relative block font-semibold text-4xl uppercase text-n-1 transition-colors hover:text-color-1'>
                    <a className='font-montserrat leading-normal text-lg text-slate-gray hover:text-red-400' href={nav.href}>{nav.label}</a>
                  </li>
                ))}
                {user ? (
                  <div onClick={logout} className="">
                    <button className="bg-red-500 hover:bg-red-600 text-white font-bold py-2 px-4 rounded focus:outline-none focus:ring focus:ring-red-300">
                      Logout
                    </button>
                  </div>
                ) : (<div onClick={logout} className="mb-3">
                  <a className="font-montserrat leading-normal text-xl font-semibold text-slate-gray hover:text-red-400">
                    Login
                  </a>
                </div>)}
              </ul>
            </div>
          )
        }
       
        <div className='flex items-center max-lg:hidden gap-4'>
          {
            user ? (<div className=" ">
              {openDrawer ? (
                <CartDrawer open={openDrawer} toggleDrawer={handleCloseDrawer} />
              ) : (
                <button
                  className=" bg-red-500 hover:bg-red-700 text-white p-2 rounded-full shadow-lg focus:outline-none"
                  style={{ zIndex: 1000 }}
                  onClick={handleClickDrawer}
                >
                  <Badge
                    badgeContent={totalUniqueItems}

                    className="absolute top-0 right-0"
                    sx={{
                      '& .MuiBadge-badge': {
                        backgroundColor: 'white',
                        fontFamily: 'inherit',
                        color: 'black',
                        border: '2px solid #cd2424',
                      },
                    }}
                  >
                    <ShoppingCartIcon fontSize="medium" />
                  </Badge>
                </button>
              )}
            </div>) : ("")
          }
          <div className='flex items-center '>
            {user ? (
              <div onClick={logout} className="ml-3">
                <button className="bg-red-500 hover:bg-red-600 text-white font-bold py-2 px-4 rounded focus:outline-none focus:ring focus:ring-red-300">
                  Logout
                </button>
              </div>
            ) : (<div onClick={() => navigate("/authantication")} className="ml-3">
              <button className="bg-red-500 hover:bg-red-600 text-white font-bold py-2 px-4 rounded focus:outline-none focus:ring focus:ring-red-300">
                Login
              </button>
            </div>)}
          </div>
        </div>

      </nav>
    </header>
  );
};

export default Nav;
