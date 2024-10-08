
import { useState, useEffect, useRef } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { products } from "../allProducts";
import { star } from "../assets/icons";
import Notfound from "../components/Notfound";
import Nav from "../components/Nav";
import { auth } from '../Firebase'
import {  onAuthStateChanged } from 'firebase/auth';
import { IoBagAddOutline } from "react-icons/io5";
import NewBtn from "../components/NewBtn";
import CountBtn from "../components/CountBtn";
import { MdFavorite, MdFavoriteBorder } from "react-icons/md";
import { addToCart } from "../redux/slices/createSlice";
import { useDispatch } from "react-redux";
import { toast, ToastContainer } from "react-toastify";
import SmBasket from '../components/SmBasket'


const ProductDetails = () => {
  const { URL } = useParams();
  const [detailData, setDetailData] = useState(null);
  const [selectedImageIndex, setSelectedImageIndex] = useState(0);
  const [isFavorite, setIsFavorite] = useState(false);
  const [selectedSize, setSelectedSize] = useState(null);
  const dispatch = useDispatch();
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

  const sizes = [40, 40.5, 41, 42, 42.5, 43, 44, 44.5];

  const handleSizeClick = (size) => {
    setSelectedSize(size);
  };

  const handleToggleFavorite = () => {
    setIsFavorite(!isFavorite);
  };

  const [zoomPosition, setZoomPosition] = useState({ x: 50, y: 50 });
  const [isZoomed, setIsZoomed] = useState(false);
  const imageContainerRef = useRef(null);

  const handleMouseMove = (e) => {
    const { left, top, width, height } =
      imageContainerRef.current.getBoundingClientRect();
    const x = ((e.clientX - left) / width) * 100;
    const y = ((e.clientY - top) / height) * 100;

    setZoomPosition({ x, y });
    setIsZoomed(true);
  };

  const handleMouseLeave = () => {
    setZoomPosition({ x: 50, y: 50 });
    setIsZoomed(false);
  };

  useEffect(() => {
    const product = products.find((item) => item.URL === URL);
    if (product) {
      setDetailData(product);
    } else {
      setDetailData(null);
    }
  }, [URL]);

  const addToCartHandler = () => {
    if (user) {
      if (selectedSize === null) {
        return;
      }
      dispatch(
        addToCart({
          name: detailData.name,
          imgURLs: detailData.imgURLs[0],
          specious: detailData.specious,
          price: detailData.price,
          URL: detailData.URL,
          quantity: 1,
          selectedSize,
        })
      );
    } else {
      toast.error("Giriş yapınız.")
      setInterval(() => {
        navigate("/authantication")
      },[2000])
    }
   

  };
  if (!detailData || !detailData.imgURLs) {
    return <Notfound />;
  }

  return (
    <main className="p-0">
      <Nav />
      <ToastContainer position="bottom-right" />
     
      <div className="px-4 pt-[84px] pb-5 flex flex-col lg:flex-row w-full items-center justify-between max-md:justify-start lg:space-x-4 space-y-6 lg:space-y-0 max-md:space-y-0">
        <div className="w-full lg:w-1/2 flex flex-col gap-2 h-[85vh]">
          <div
            className="w-full h-[60vh] lg:h-[75%] md:h-[50%] bg-[#f6f6f6] rounded-md overflow-hidden relative"
            onMouseMove={handleMouseMove}
            onMouseLeave={handleMouseLeave}
            ref={imageContainerRef}
          >
            <img
              src={detailData.imgURLs[selectedImageIndex]}
              alt={detailData.name}
              className="w-full h-full object-contain transition-transform duration-300 ease-in-out"
              style={{
                transformOrigin: `${zoomPosition.x}% ${zoomPosition.y}%`,
                transform: isZoomed ? "scale(3)" : "scale(1.2)",
              }}
            />
          </div>
          <div className="flex gap-2 w-full h-[15vh] lg:h-[25%]">
            {(detailData.imgURLs || []).map((item, i) => (
              <img
                key={i}
                src={item}
                alt={detailData.name}
                className={`cursor-pointer w-20 h-20 lg:w-32 lg:h-32 rounded-md overflow-hidden ${
                  selectedImageIndex === i ? "border-2 border-orange-500" : ""
                }`}
                onClick={() => setSelectedImageIndex(i)}
              />
            ))}
          </div>
        </div>

        <div className="w-full lg:w-1/2 flex flex-col gap-4 h-auto lg:h-[85vh] py-2 px-4 lg:px-10">
          <div className="flex flex-col space-y-4 lg:space-y-0 lg:flex-row items-center justify-between">
            <div className="font-semibold font-palanquin text-xl lg:text-2xl text-slate-600">
              {detailData.name}
            </div>
            <div className="flex gap-2 items-center">
              <img src={star} alt="rating" className="w-6 h-6" />
              <p className="font-montserrat text-base lg:text-xl leading-normal text-slate-gray">
                ({detailData.rate})
              </p>
            </div>
          </div>

          <div className="flex flex-col gap-2">
            <div className="font-medium text-base lg:text-xl text-slate-600 underline">
              Beden Tablosu
            </div>
            <div className="text-lg lg:text-xl text-slate-600">Beden</div>
            <div className="flex flex-wrap gap-2">
              {sizes.map((size, index) => (
                <button
                  key={index}
                  onClick={() => handleSizeClick(size)}
                  className={`w-10 h-10 lg:w-12 lg:h-12 rounded-full border-2 flex items-center justify-center transition-colors duration-200 ${
                    selectedSize === size
                      ? "bg-black text-white border-black"
                      : "bg-white text-black border-gray-300"
                  }`}
                >
                  {size}
                </button>
              ))}
            </div>
           
          </div>

          <div className="font-semibold font-montserrat text-xl lg:text-2xl text-coral-red">
            {detailData.price} ₺
          </div>
          <div className="flex flex-col gap-4">
            <CountBtn />
            <div className="w-full flex items-center gap-2">
              <div
                onClick={addToCartHandler}
                className={`w-full lg:w-[80%] ${
                  !selectedSize && "opacity-50 cursor-not-allowed"
                }`}
              >
                <NewBtn
                  selectedSize={selectedSize}
                  label="Sepete Ekle"
                  icon={<IoBagAddOutline size={24} />}
                />
              </div>
              <div
                onClick={handleToggleFavorite}
                className="cursor-pointer mt-3"
              >
                {isFavorite ? (
                  <MdFavorite color="red" size={36} className="" />
                ) : (
                  <MdFavoriteBorder color="red" size={36} />
                )}
              </div>
            </div>
          </div>
        </div>
        <section className='hidden max-lg:block'>
      <SmBasket/>
    </section>
      </div>
    </main>
  );
};

export default ProductDetails;