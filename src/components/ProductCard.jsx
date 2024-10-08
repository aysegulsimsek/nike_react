import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import "../css/Shake.css";
import { addToCart } from "../redux/slices/createSlice";
import NewBtn from "../components/NewBtn";
import { IoBagAddOutline } from "react-icons/io5";
import { auth } from '../Firebase'
import {  onAuthStateChanged } from 'firebase/auth';
import { toast, ToastContainer } from "react-toastify";
const ProductCard = ({ name, imgURLs, imgURL, specious, price, URL, i }) => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
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

  const addToCartHandler = () => {
    if (user) {
      dispatch(
        addToCart({
          name,
          imgURLs: imgURL,
          specious,
          price,
          URL,
          quantity: 1,
        })
      );
    } else {
      toast.error("Giriş yapınız")
      setInterval(() => {
      navigate("/authantication")
        
      },[2000])
    }

   
  };


  return (
    <div
      key={i}
      className="col-6 col-md-3 product-grid-item-container p-4 mb-4 bg-white shadow-lg rounded-lg "
    >
<ToastContainer position="bottom-right"/>

      <img
        src={imgURLs[0]}
        alt={name}
        className="w-full h-48 object-cover rounded-t-lg cursor-pointer"
        onClick={() => navigate("/details/" + URL)}
      />

      <div className="flex flex-col justify-between items-start p-4">
        <h3 className="mt-2 text-xl leading-normal font-medium font-palanquin select-text text-gray-800">
          {name}
        </h3>
        <p className="text-gray-500">{specious}</p>
        <p className="mt-2 font-semibold text-coral-red text-2xl leading-normal">
          {price} TRY
        </p>
      </div>

      <div
        className="flex justify-center mt-2 bottom-5"
        onClick={addToCartHandler}
      >
        <NewBtn
          sx={{
            color: "orange",
            transition: "transform 0.2s ease-in-out",
            ":hover": {
              animation: "shake 0.5s infinite",
            },
          }}
          label="Sepete Ekle"
          icon={<IoBagAddOutline size={24} />}
        />
      </div>
    </div>
  );
};

export default ProductCard;