import React, { useState } from 'react';
import { createUserWithEmailAndPassword, signInWithEmailAndPassword, GoogleAuthProvider, signInWithPopup } from "firebase/auth";
import {auth} from '../Firebase'
import { toast, ToastContainer } from 'react-toastify';
import "react-toastify/dist/ReactToastify.css";
import { useNavigate } from 'react-router-dom';
const provider = new GoogleAuthProvider();
const Auth = () => {
  const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const navigate = useNavigate()
    const register = async () => {
        try {
        const response = await createUserWithEmailAndPassword(auth, email, password);
        const user = response.user;
            if (user) {
           toast.success("Kullanıcı başarıyla oluşturuldu.")
            setEmail("")
            setPassword("")
            setTimeout(() => {
                navigate("/");
              }, 1500); 

        }
        } catch (error) {
            toast.error(error.message)
        }
    }
    const loginWithGoogle = async () => {
        try {
            const response = await signInWithPopup(auth, provider)
            // const credential = GoogleAuthProvider.credentialFromResult(response);
            // const token = credential.accessToken;
            const user = response.user;

            if (user) {
                toast.success('Giriş yapıldı')
                setTimeout(() => {
                    navigate("/");
                  }, 1500); 
            }
        } catch (error) {
            toast.error(error.message)
        }
    }
    const login = async () => {
        try {
            const response = await signInWithEmailAndPassword(auth, email, password);
            const user = response.user
            if (user) {
                toast.success('Giriş yapıldı')
                setTimeout(() => {
                    navigate("/");
                  }, 1500); 
            }

        } catch (error) {
            toast.error(error.message)
        }
    }
    return (
        <div>
        <ToastContainer  position="top-right" autoClose={1500} />
      <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="bg-white p-8 rounded-lg shadow-lg max-w-md w-full">
        <h2 className="text-2xl font-semibold text-center text-gray-800 mb-6">Giriş Yap</h2>
      
          <div className="mb-4">
            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="email">
              E-posta
            </label>
            <input
              type="email"
              placeholder="E-posta adresinizi girin"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:ring focus:border-blue-300"
            />
          </div>
          <div className="mb-6">
            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="password">
              Şifre
            </label>
            <input
              type="password"
              placeholder="Şifrenizi girin"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:ring focus:border-blue-300"
            />
          </div>
          <div className="flex items-center justify-between">
            <button
                                type="submit"
                                onClick={login}
              className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:ring focus:ring-blue-300 w-full"
            >
              Giriş Yap
            </button>
          </div>
      

        <div className="my-6 border-t border-gray-300 text-center">
          <span className="text-sm text-gray-500 bg-white px-2">veya</span>
        </div>

        <button
          type="button"
          className="flex items-center justify-center bg-red-500 hover:bg-red-600 text-white font-bold py-2 px-4 rounded focus:outline-none focus:ring focus:ring-red-300 w-full mb-4"
          onClick={loginWithGoogle}
        >
          <svg
            className="h-5 w-5 mr-2"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 48 48"
            width="48px"
            height="48px"
          >
            <path
              fill="#4285F4"
              d="M24 9.5c3.2 0 5.6 1.3 7.3 2.5l5.4-5.4C33.7 3.2 29.2 1 24 1 14.9 1 7.3 6.9 4.5 14.5l6.6 5.1C12.8 12.3 17.9 9.5 24 9.5z"
            />
            <path
              fill="#34A853"
              d="M46.5 24.5c0-1.5-.1-2.9-.3-4.3H24v8.3h12.5c-.5 3.1-2.2 5.8-4.7 7.6v6.2h7.6c4.5-4.2 7.1-10.4 7.1-17.8z"
            />
            <path
              fill="#FBBC05"
              d="M11.1 28.6c-1-3.1-1-6.4 0-9.5l-6.6-5.1C1.6 18.3 0 21.9 0 25.9c0 4 1.6 7.6 4.5 10.4l6.6-5.1z"
            />
            <path
              fill="#EA4335"
              d="M24 48c6.5 0 11.9-2.1 15.8-5.7l-7.6-6.2c-2.1 1.4-4.8 2.3-8.2 2.3-6.1 0-11.3-4.1-13.1-9.6l-6.6 5.1C7.3 41.1 14.9 48 24 48z"
            />
          </svg>
          Google ile Giriş Yap
        </button>

        <button
          type="button"
          className="flex items-center justify-center bg-gray-500 hover:bg-gray-600 text-white font-bold py-2 px-4 rounded focus:outline-none focus:ring focus:ring-gray-300 w-full"
          onClick={register}
        >
          Kayıt Ol
        </button>
      </div>
            </div>
        </div>
            
  );
};

export default Auth;
