import React, { useState, useEffect } from 'react';
import Drawer from '@mui/material/Drawer';
import { useNavigate } from 'react-router-dom';
import { Backdrop, CircularProgress } from '@mui/material';


export const calculateTotalItems = (cartItems) => {
  return cartItems.reduce((total, item) => total + item.quantity, 0);
};

const CartDrawer = ({ open, toggleDrawer }) => {
  const [openBackdrop, setOpenBackdrop] = React.useState(false);
  const handleClose = () => {
    setOpenBackdrop(false);
  };
  const handleOpen = () => {
    setOpenBackdrop(true);
    setTimeout(() => {
      navigate("/payment")
    }, 2000); 
    
    
  };
  const navigate = useNavigate();
  const [cartItems, setCartItems] = useState([]);
  const [totalPrice, setTotalPrice] = useState(0);
  useEffect(() => {
    const storedCart = JSON.parse(localStorage.getItem('cart')) || [];
    setCartItems(storedCart);
    console.log(storedCart);
    setTotalPrice(calculateTotalPrice(storedCart));

  }, []);
 const calculateTotalPrice = (cartItems) => {
    return cartItems.reduce((total, item) => total + parseFloat(item.price) * item.quantity, 0);
  };
  
  return (
    <Drawer 
      anchor="right" 
      open={open} 
      onClose={toggleDrawer}
    >
      <div className="p-6 w-100 bg-white flex flex-col">
        <h2 className="text-2xl font-semibold text-gray-800 mb-4">Sepetiniz</h2>
        <div className="flex-grow overflow-y-auto">
          {cartItems.length > 0 ? (
            cartItems.map((item, index) => (
              <div key={index} className="flex items-center justify-between mb-4">
                <img 
                  src={item.imgURLs[0]} 
                  alt={item.name} 
                  className="w-16 h-16 object-cover rounded-md border"
                />
                <div className="flex flex-col mr-auto ml-4 ">
                  <span className="font-medium text-gray-700">{item.name}</span>
                  <span className="text-sm text-gray-500">Adet: {item.quantity}</span>
                  <span className="text-sm text-gray-900">{item.price} TL</span>
                </div>
                <div>
                </div>
              </div>
            ))
          ) : (
            <p className="text-gray-600">Sepetiniz boş.</p>
          )}
        </div>
        <div className="mt-4">
        <p className="text-lg font-semibold text-gray-900 mb-2">Toplam: {totalPrice} TL</p>
        <button onClick={handleOpen} className="w-full py-2 bg-orange-500 text-white rounded-lg font-semibold hover:bg-orange-600 transition duration-200">
          Alışverişi Tamamla
        </button>
      </div>
        <Backdrop
        sx={(theme) => ({ color: '#fff', zIndex: theme.zIndex.drawer + 1 })}
        open={openBackdrop}
        onClick={handleClose}
      >
          <div className='flex-col items-center justify-center'>
          <CircularProgress color="inherit" />
          <h1 className='ml-auto mr-auto'>Yönlendiriliyorsunuz</h1>
          </div>
      </Backdrop>
      </div>
    </Drawer>
  );
}
export default CartDrawer;
