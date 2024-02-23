import { useState } from "react";
import { FaHeart, FaRegHeart } from "react-icons/fa";
import { useAuth } from "../context/AuthContext";
import { arrayUnion, doc, updateDoc } from "firebase/firestore";
import { db } from "../firebase";

function Movie({ item }) {
  const [like, setLike] = useState(false);
  const [saved, setSaved] = useState(false);
  const { user } = useAuth();

  const movieID = doc(db, "users", `${user?.email}`);

  const saveShow = async () => {
    if (user?.email) {
      setLike(!like);
      setSaved(true);
      await updateDoc(movieID, {
        saveShows: arrayUnion({
          id: item.id,
          title: item.title,
          img: item.backdrop_path,
        }),
      });
    } else {
      alert("Please log in to save a movie");
    }
  };

  return (
    <div className="w-[160px] sm:w-[200px] md:w-[240px] lg:w-[280px] relative p-2 inline-block cursor-pointer">
      <img
        className="block w-full h-auto"
        src={`https://image.tmdb.org/t/p/w500/${item?.backdrop_path}`}
        alt={item.title}
      />
      <div className="absolute top-0 left-0 w-full h-full text-white opacity-0 hover:bg-black/80 hover:opacity-100">
        <p className="flex items-center justify-center h-full text-xs font-bold text-center whitespace-normal md:text-sm">
          {item?.title}
        </p>
        <p onClick={saveShow}>
          {like ? (
            <FaHeart className="absolute text-gray-300 top-4 left-4" />
          ) : (
            <FaRegHeart className="absolute text-gray-300 top-4 left-4" />
          )}
        </p>
      </div>
    </div>
  );
}

export default Movie;
