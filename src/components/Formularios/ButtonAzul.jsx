function ButtonAzul({onClick, text}) {
  return (
    <button
    onClick={onClick}
      className="   
        bg-azulOscuro text-blanco
        px-5 py-2 rounded-md 
        shadow-lg
        
        duration-200
        hover:bg-azulNormal
        "
    >
    {text}
    </button>
  );
}
export default ButtonAzul;
