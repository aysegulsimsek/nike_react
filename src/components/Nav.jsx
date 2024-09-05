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
import { toast ,ToastContainer} from 'react-toastify';
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

    return () => unsubscribe(); // Component unmount olduğunda dinleyiciyi kaldırır.
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
    <header className={`fixed padding-x py-4 z-20  w-full transition-transform duration-300 ${isVisible ? 'translate-y-0 z-10 border-b bg-white' : '-translate-y-full'} ${location.pathname === '/' && lastScrollY === 0 ? "bg-transparent border-b-0" : ""}`}>
        <ToastContainer  position="top-right" autoClose={1500} />
     
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
       <div className='flex items-center max-lg:hidden'>
 

  <div className="ml-4">
    {openDrawer ? (
      <CartDrawer open={openDrawer} toggleDrawer={handleCloseDrawer} />
    ) : (
      <button
        className="relative flex items-center justify-center bg-gray-100 hover:bg-gray-200 rounded-full p-3 focus:outline-none focus:ring focus:ring-blue-300"
        onClick={handleClickDrawer}
      >
        <Badge
          badgeContent={totalUniqueItems}
          color="primary"
          className="absolute top-0 right-0"
        >
          <IoBagHandleOutline className="text-2xl text-gray-700" />
        </Badge>
      </button>
    )}
          </div>
          {user ? (
    <div onClick={logout} className="ml-3">
      <button className="bg-red-500 hover:bg-red-600 text-white font-bold py-2 px-4 rounded focus:outline-none focus:ring focus:ring-red-300">
        Çıkış Yap
      </button>
    </div>
  ) : ""}
</div>

      </nav>
    </header>
  );
};

export default Nav;
