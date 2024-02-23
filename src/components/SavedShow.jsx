import { MdChevronLeft, MdChevronRight } from "react-icons/md";
import { useAuth } from "../context/AuthContext";
import { useEffect, useState } from "react";
import { doc, onSnapshot, updateDoc } from "firebase/firestore";
import { db } from "../firebase";
import { AiOutlineClose } from "react-icons/ai";

function SavedShow() {
  const [movies, setMovies] = useState([]);
  const { user } = useAuth();

  const slideLeft = () => {
    var slider = document.getElementById("slider");
    slider.scrollLeft = slider.scrollLeft - 500;
  };

  const slideRight = () => {
    var slider = document.getElementById("slider");
    slider.scrollLeft = slider.scrollLeft + 500;
  };

  useEffect(
    function () {
      onSnapshot(doc(db, "users", `${user?.email}`), (doc) => {
        setMovies(doc.data()?.saveShows);
      });
    },
    [user?.email]
  );

  const movieRef = doc(db, "users", `${user?.email}`);

  async function deleteShow(passedID) {
    try {
      const result = movies.filter((item) => item.id !== passedID);
      await updateDoc(movieRef, {
        saveShows: result,
      });
    } catch (error) {
      console.log(error);
    }
  }

  return (
    <>
      <h2 className="p-4 font-bold text-white md:text-xl">My Shows</h2>
      <div className="relative flex items-center group">
        <MdChevronLeft
          onClick={slideLeft}
          className="absolute left-0 z-10 hidden bg-white rounded-full opacity-50 cursor-pointer hover:opacity-100 group-hover:block"
          size={40}
        />
        <div
          id={"slider"}
          className="relative w-full h-full overflow-x-scroll whitespace-nowrap scroll-smooth scrollbar-hide"
        >
          {movies?.map((item, id) => (
            <div
              key={id}
              className="w-[160px] sm:w-[200px] md:w-[240px] lg:w-[280px] relative p-2 inline-block cursor-pointer"
            >
              <img
                className="block w-full h-auto"
                src={`https://image.tmdb.org/t/p/w500/${item?.img}`}
                alt={item.title}
              />
              <div className="absolute top-0 left-0 w-full h-full text-white opacity-0 hover:bg-black/80 hover:opacity-100">
                <p className="flex items-center justify-center h-full text-xs font-bold text-center whitespace-normal md:text-sm">
                  {item?.title}
                </p>
                <p
                  onClick={() => deleteShow(item?.id)}
                  className="absolute text-gray-300 top-4 right-4"
                >
                  <AiOutlineClose />
                </p>
              </div>
            </div>
          ))}
        </div>
        <MdChevronRight
          onClick={slideRight}
          className="absolute right-0 z-10 hidden bg-white rounded-full opacity-50 cursor-pointer hover:opacity-100 group-hover:block"
          size={40}
        />
      </div>
    </>
  );
}

export default SavedShow;
