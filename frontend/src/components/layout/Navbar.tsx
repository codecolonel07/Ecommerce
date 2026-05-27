import { Link } from "react-router-dom";

import useAuth from "../../hooks/useAuth";

const Navbar = () => {

  const { token, logout } = useAuth();

  return (
    <nav className="flex items-center justify-between p-4 shadow-md">

      <h1 className="text-xl font-bold">
        Ecommerce
      </h1>

      <div className="flex gap-4 items-center">

        <Link to="/">
          Home
        </Link>

        {!token ? (
          <>
            <Link to="/login">
              Login
            </Link>

            <Link to="/register">
              Register
            </Link>
          </>
        ) : (
          <button
            onClick={logout}
            className="bg-black text-white px-4 py-2 rounded-lg"
          >
            Logout
          </button>
        )}

      </div>
    </nav>
  );
};

export default Navbar;