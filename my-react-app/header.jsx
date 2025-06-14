import { useState } from "react"; 
import { Link } from "react-router-dom";
import { Menu, Search, User, Heart, ShoppingCart } from "lucide-react";
import { UserContext } from "../context/userContext";

export default function Header(){
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [city, setCity] = useState("Москва");

    const pages = [
        {name: "Главная", path: '/'},
        {name: "Товары", path: '/products'}
    ];

    const handleCityChanges = () => {
        const newCity = prompt("Введите название города: ", city);
        if (newCity) setCity(newCity);
    }

    return (
        <header className="bg-indigo-50 shadow-md py-5 px-6 flex items-center justify-between h-16">
            {/* Блок меню */}
            <div className="flex items-center space-x-6">
                <button
                    className="text-indigo-500 hover:text-indigo-700 focus:outline-none"                
                    onClick={() => setIsMenuOpen(!isMenuOpen)}            
                >
                    <Menu className = 'w-6 h-6'/>
                </button>

                {isMenuOpen && (
                    <div className="absolute top-20 left-0 bg-gray-800 shadow-lg p-6 w-48 z-10"> {/* исправлено цвет фона и ширина */}
                        <ul className="space-y-2">
                            {pages.map((page, index) => (
                                <li key={index}>
                                    <Link
                                        to={page.path}
                                        className="text-indigo-100 hover:text-indigo-500 block"
                                        onClick={() => setIsMenuOpen(false)}
                                    >
                                        {page.name}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>
                )}
                <button
                    className="text-indigo-500 hover:text-indigo-700 focus:outline-none"
                    onClick={handleCityChanges}
                >
                    {city}
                </button>
            </div>
            <div className="flex text-center">
                <Link to="/" className="text-2x1 font-bold text-violet-900">
                    HomeShop
                </Link>
            </div>   
            <div className="flex items-center space-x-6">
                <button className = "text-indigo-500 hover:text-indigo-700 focus:outline-none">
                    <Search className="w-6 h-6"/>
                </button>
                <Link to="/profile" className="text-indigo-500 hover:text-violet-900">
                    <User className="w-6 h-6" />
                </Link>

                 <Link to="/favorites" className="text-indigo-500 hover:text-indigo-700">
                    <Heart className="w-6 h-6" />
                </Link>

                 <Link to="/cart" className="relative text-indigo-500 hover:text-indigo-700">
                    <ShoppingCart className="w-6 h-6" />
                    <span className="absolute -top2 -right-2 bg-red-500 text-white text-xs rounded-full px-1.5 py-0.5">
                        6
                    </span>
                </Link>
            </div>  
        </header>
    );


}


