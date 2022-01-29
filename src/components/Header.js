
const Header = () => {
    return (
        <nav className="flex  w-screen bg-indigo-100 py-2 md:py-4">
            <div className="container px-4 mx-auto md:flex md:items-center">
            <div className="flex justify-between items-center">
                <a href="/" className="font-bold text-xl text-indigo-600">Dish Poll</a>
                <button className="border border-solid border-gray-600 px-3 py-1 rounded text-gray-600 opacity-50 hover:opacity-75 md:hidden" id="navbar-toggle">
                <i className="fas fa-bars"></i>
                </button>
            </div>

            <div className="hidden md:flex flex-col md:flex-row md:ml-auto mt-3 md:mt-0" id="navbar-collapse">
                <a href="/poll" className="p-2 lg:px-4 md:mx-2 text-gray-600 rounded hover:bg-gray-200 hover:text-gray-700 transition-colors duration-300">Poll</a>
                <a href="/result" className="p-2 lg:px-4 md:mx-2 text-gray-600 rounded hover:bg-gray-200 hover:text-gray-700 transition-colors duration-300">Show Results</a>
                <a href="/" className="p-1 lg:px-4 md:mx-2 text-gray-600 rounded hover:bg-gray-200 hover:text-gray-700 transition-colors duration-300"><img className="object-cover w-8 h-8 border-2 border-indigo-600 rounded-full"
                src="https://images.unsplash.com/photo-1520315342629-6ea920342047?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MjR8fGNhdHxlbnwwfHwwfHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60"
                alt="Avatar" /></a>

                <a href="/login" className="p-2 lg:px-4 md:mx-2 text-indigo-600 text-center border border-solid border-indigo-600 rounded hover:bg-indigo-600 hover:text-white transition-colors duration-300 mt-1 md:mt-0 md:ml-1">Login</a>
            </div>
            </div>
        </nav>
    );
};

export default Header;
