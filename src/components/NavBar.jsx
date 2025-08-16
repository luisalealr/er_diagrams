import { Link } from "react-router-dom";

const NavBar = () => {
  return (
    <div className="p-6 bg-[#]">
      <h1 className="text-3xl font-bold text-center">Ejercicios de ERD</h1>
      <div className="flex flex-row justify-around items-center p-4">
        <Link
          to="/zoologico"
          className="w-[150px] text-center p-2 bg-[#A046B3] hover:bg-[#D57DE8] text-white rounded-md"
        >
          Zoológico
        </Link>
        <Link
          className="w-[150px] text-center p-2 bg-[#A046B3] hover:bg-[#D57DE8] text-white rounded-md"
          to="/abogados"
        >
          Gabinete
        </Link>
        <Link
          className="w-[150px] text-center p-2 bg-[#A046B3] hover:bg-[#D57DE8] text-white rounded-md"
          to="/ecommerce"
        >
          Ventas
        </Link>
        <Link
          className="w-[150px] text-center p-2 bg-[#A046B3] hover:bg-[#D57DE8] text-white rounded-md"
          to="/universidad"
        >
          UVI
        </Link>
      </div>
    </div>
  );
};

export default NavBar;
