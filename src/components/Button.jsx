const Button = ({label,iconURL,fullWidth}) => {
  return (
    <button className={`todo_btn flex justify-center items-center gap-2 px-7 py-4 border font-montserrat text-lg leading-none rounded-full hover:text-white ${fullWidth && "w-full mt-0"}`}>
      {label}
      {iconURL ? 
        <img className="ml-2 rounded-full w-5 h-5" src={iconURL} alt="" /> 
        : ""
        }
    </button>
  )
}

export default Button
