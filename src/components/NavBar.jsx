import { Link, useNavigate } from "react-router-dom";
import { useAuth } from "../context/AuthContext";

function NavBar() {
  const navigate = useNavigate();
  const { user, logOut } = useAuth();
  // console.log(user);
  async function handleLogout() {
    try {
      await logOut();
      navigate("/");
    } catch (error) {
      console.log(error);
    }
  }

  return (
    <div className="flex items-center justify-between p-4 z-[100] absolute w-full">
      <Link to="/">
        <h1 className="text-4xl font-bold text-red-600 cursor-pointer">
          NETFLIX
        </h1>
      </Link>
      {user?.email ? (
        <div className="ml-auto">
          <Link to="/account">
            <button className="pr-4 text-white">Account</button>
          </Link>
          <button
            onClick={handleLogout}
            className="px-6 py-2 text-white bg-red-600 rounded cursor-pointer"
          >
            Log out
          </button>
        </div>
      ) : (
        <div className="ml-auto">
          <Link to="/login">
            <button className="pr-4 text-white">Sign In</button>
          </Link>
          <Link to="/signup">
            <button className="px-6 py-2 text-white bg-red-600 rounded cursor-pointer">
              Sign Up
            </button>
          </Link>
        </div>
      )}
    </div>
  );
}

export default NavBar;
