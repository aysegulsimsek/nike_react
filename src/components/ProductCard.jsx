
import React from 'react'
import { useNavigate } from 'react-router-dom'
import ShoppingBagIcon from '@mui/icons-material/ShoppingBag';
import { IconButton } from '@mui/material';
import '../css/Shake.css'
const ProductCard = ({ name, imgURLs, specious, price, URL,i }) => {
  const navigate = useNavigate();
  const addToCart = () => {
    const currentCart = JSON.parse(localStorage.getItem('cart')) || [];
    const productIndex = currentCart.findIndex(item => item.name === name);

    if (productIndex !== -1) {
      currentCart[productIndex].quantity += 1;  // Eğer ürün zaten sepette varsa, miktarını artır
    } else {
      currentCart.push({ name, imgURLs, specious, price, URL, quantity: 1 });  // Yeni bir ürün ekle
    }

    localStorage.setItem('cart', JSON.stringify(currentCart));
  };
  return (

    <div key={i}  className='col-6 col-md-3  product-grid-item-container p-0 px-md-1 mb-md-4 rendered-enhanced flex-1 ' >

      <img src={imgURLs[0]} alt={name} className='max-w-[300px]' onClick={() => navigate("/details/" + URL)} />
      <div className='flex-col justify-between items-start'>
        <h3 className='mt-2 text-2xl leading-normal font-medium font-palanquin select-text'>{name}</h3>
        <p className='text-slate-gray'>{specious} </p>
        <p className='mt-2 font-semibold font-montserrat text-coral-red text-2xl leading-normal'>{price} TRY</p>

      </div>
      <div className='flex'>
        <IconButton onClick={addToCart}>
          <ShoppingBagIcon sx={{
            color: 'orange',
            transition: 'transform 0.2s ease-in-out',
            ":hover": {
              animation: 'shake 0.5s infinite',
            }
          }} fontSize='medium' />
        </IconButton>

      </div>

    </div>

  )
}

export default ProductCard


// chat e atalım bakalım.şimdi işte key muhabbeti. react de key demek  biliyom key .bi bakayım key olarak diyor ki fazladan aynı adlı ürün var ama heğsinin url i farklı özellikle url koydum farklı  diye. burada 4 ürün görünsün istiyosun dimi?yes ürün ekleniyor.hatayı chat yapsın.ne hatası var key hatasını dedim ya.sen bi de sonra eklersin popular a falan sepet eklemek istersen. yok böyle iyitm ya bi de key hatasını çözdüm işte ben gitti işte.adssadasdsadsa sepete ekle deyince cıkmadı mı hata :) hayır çıktı mı. tamam mal değilim ben lemalsın demedim benim mi gözümden kaçıyor  yavrum halfvlkdvnlkdkldbdklvdkzlkfbnfzdkndk tm devam et :D ürün bilgisine tıkladığımız üründen aldık şimdi sepet de çağıması kaldı. sepet compunu açar mısın catabiki açarım :D çekerken bi sorun var bi sn bakalım