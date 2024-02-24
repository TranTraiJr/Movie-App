import { Link, useNavigate } from "react-router-dom";
import { useAuth } from "../context/AuthContext";
import { BiChevronDown, BiChevronUp } from "react-icons/bi";
import { IoSearchSharp } from "react-icons/io5";
import { useState } from "react";

function NavBar() {
  const [open, setOpen] = useState(false);
  const navigate = useNavigate();
  const { user, logOut, setRequestGenres } = useAuth();
  // console.log(user);
  async function handleLogout() {
    try {
      await logOut();
      navigate("/");
    } catch (error) {
      console.log(error);
    }
  }

  function handleClickGenres(value) {
    setRequestGenres(value);
    setOpen(false);
    navigate("/genres");
  }

  return (
    <div className="flex items-center justify-between p-4 z-[100] absolute w-full">
      <Link to="/">
        <h1 className="text-4xl font-bold text-red-600 cursor-pointer">
          NETFLIX
        </h1>
      </Link>
      <div className="relative flex w-40 h-8 ml-4 font-medium">
        <button className="relative flex items-center w-full h-full p-2 text-2xl text-red-600 ">
          Genres
          {open ? (
            <BiChevronUp
              onClick={() => setOpen((open) => !open)}
              className="absolute right-0"
            />
          ) : (
            <BiChevronDown
              onClick={() => setOpen((open) => !open)}
              className="absolute right-0"
            />
          )}
        </button>
        {open && (
          <ul className="absolute text-xl text-white top-8 left-2">
            <li className="cursor-pointer hover:text-red-500">
              <button onClick={() => handleClickGenres("adventure")}>
                Adventure
              </button>
            </li>
            <li className="cursor-pointer hover:text-red-500">
              <button onClick={() => handleClickGenres("comedy")}>
                Comedy
              </button>
            </li>
            <li className="cursor-pointer hover:text-red-500">
              <button onClick={() => handleClickGenres("history")}>
                History
              </button>
            </li>
            <li className="cursor-pointer hover:text-red-500">
              <button onClick={() => handleClickGenres("music")}>Music</button>
            </li>
            <li className="cursor-pointer hover:text-red-500">
              <button onClick={() => handleClickGenres("romance")}>
                Romance
              </button>
            </li>
            <li className="cursor-pointer hover:text-red-500">
              <button onClick={() => handleClickGenres("war")}>War</button>
            </li>
          </ul>
        )}
      </div>
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
