import React, { useState } from 'react';
import Drawer from '@mui/material/Drawer';
import { useNavigate } from 'react-router-dom';
import { Backdrop, CircularProgress, IconButton } from '@mui/material';
import { useDispatch, useSelector } from 'react-redux';
import RemoveIcon from '@mui/icons-material/Remove';
import AddIcon from '@mui/icons-material/Add';
import DeleteIcon from '@mui/icons-material/Delete';
import ClearAllIcon from '@mui/icons-material/ClearAll'; 
import { incrementQuantity, decrementQuantity, removeFromCart,clearCart } from '../redux/slices/createSlice';
const CartDrawer = ({ open, toggleDrawer }) => {
  const [openBackdrop, setOpenBackdrop] = useState(false);
  const navigate = useNavigate();
  const dispatch = useDispatch();
  
  const handleClose = () => {
    setOpenBackdrop(false);
  };

  const handleOpen = () => {
    if (cartItems.length > 0) {
      setOpenBackdrop(true);
    setTimeout(() => {
      navigate("/payment");
    }, 2000); 
    }
    
  };

  const cartItems = useSelector((state) => state.cart.items) || [];
  const totalPrice = useSelector((state) => state.cart.totalPrice) || 0;

  const handleIncrement = (item) => {
    dispatch(incrementQuantity(item));
  };

  const handleDecrement = (item) => {
    if (item.quantity > 1) {
      dispatch(decrementQuantity(item));
    }
  };

  const handleRemove = (item) => {
    dispatch(removeFromCart(item));
  };
  const handleClearCart = () => {
    dispatch(clearCart());
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
          <>
            {cartItems.map((item, index) => (
              <div key={index} className="flex items-center justify-between mb-4">
                <img 
                  src={item.imgURLs && item.imgURLs[0] ? item.imgURLs[0] : 'default-image-url.jpg'} 
                  alt={item.name} 
                  className="w-16 h-16 object-cover rounded-md border"
                />
                <div className="flex flex-col mr-auto ml-4">
                  <span className="font-medium text-gray-700">{item.name}</span>
                  <span className="text-sm text-gray-500">Adet: {item.quantity}</span>
                  <span className="text-sm text-gray-900">{item.price} TL</span>
                </div>
                <div className="flex items-center gap-2">
                  <IconButton 
                    onClick={() => handleDecrement(item)} 
                    disabled={item.quantity <= 1} 
                    color="primary"
                  >
                    <RemoveIcon />
                  </IconButton>
                  <span>{item.quantity}</span>
                  <IconButton onClick={() => handleIncrement(item)} color="primary">
                    <AddIcon />
                  </IconButton>
                  <IconButton onClick={() => handleRemove(item)} color="error">
                    <DeleteIcon />
                  </IconButton>
                </div>
              </div>
            ))}

            <div className="flex justify-end mb-4">
              <IconButton 
                onClick={handleClearCart} 
                color="secondary" 
                title="Sepeti Temizle"
              >
                <ClearAllIcon />
              </IconButton>
            </div>
          </>
        ) : (
          <div className="flex-grow flex items-center justify-center min-w-[400px]">
  <p className="text-gray-600 text-center">Sepetiniz boş.</p>
</div>

        )}
      </div>
      <div className="mt-4">
          <p className="text-lg font-semibold text-gray-900 mb-2">Toplam: {totalPrice} TL</p>
          {
            cartItems.length > 0 ? (
              <button 
              onClick={handleOpen} 
              className="w-full py-2 bg-orange-500 text-white rounded-lg font-semibold hover:bg-orange-600 transition duration-200"
            >
              Alışverişi Tamamla
            </button>
            ) : ("")
          }
       
      </div>
      <Backdrop
  sx={{
    color: '#fff',
    zIndex: (theme) => theme.zIndex.drawer + 1,
    display: 'flex', // Backdrop içeriğini tam ortalamak için flex düzeni
    alignItems: 'center',
    justifyContent: 'center',
  }}
  open={openBackdrop}
  onClick={handleClose}
>
  <div className='flex flex-col items-center'>
    <CircularProgress color="inherit" size={60} /> {/* Boyutu büyüttük */}
    <h1 className='mt-4 text-xl font-semibold'>Yönlendiriliyorsunuz...</h1> {/* Araya mesafe ve daha büyük bir yazı ekledik */}
  </div>
</Backdrop>

    </div>
  </Drawer>
  );
};

export default CartDrawer;
