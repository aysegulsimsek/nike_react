import React, { useState } from 'react';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import CartDrawer from './CartDrawer';
import { Badge } from '@mui/material';
import { useSelector } from 'react-redux';

function CartButton() {
  const [openDrawer, setOpenDrawer] = useState(false);

  const handleClickDrawer = () => {
    setOpenDrawer(!openDrawer);
  };
  const handleCloseDrawer = () => {
    setOpenDrawer(false);
  };
 
  const cartItems = useSelector((state) => state.cart.items) || [];

  const totalUniqueItems = cartItems.length;
  return (
    <div>
      <button
        onClick={handleClickDrawer}
        className="fixed bottom-4 right-4 bg-red-600 hover:bg-red-700 text-white p-3 rounded-full shadow-lg focus:outline-none"
        style={{ zIndex: 1000 }} 
      >
           <Badge
                    badgeContent={totalUniqueItems}
                    className="absolute top-0 right-0"
                    sx={{
                      '& .MuiBadge-badge': {
                        backgroundColor: 'white',
                        fontWeight:'700',
                        color: 'black',
                        width:'25px ',
                        height: '25px ',
                        fontSize:'15px',
                        borderRadius:'100%',
                        border: '2px solid #cd2424',
                      },
                    }}
        > 
        
                    <ShoppingCartIcon fontSize="large" />
          
                  </Badge>
       
      </button>
      {
        openDrawer ? 
     
      (<CartDrawer open={openDrawer} toggleDrawer={handleCloseDrawer} /> ) : ("")
    }
    </div>
  );
}

export default CartButton;