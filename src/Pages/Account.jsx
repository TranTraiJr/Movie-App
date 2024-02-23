import SavedShow from "../components/SavedShow";

function Account() {
  return (
    <>
      <div className="w-full text-white">
        <img
          className="object-cover w-full h-[400px]"
          src="https://assets.nflxext.com/ffe/siteui/vlv3/2e07bc25-8b8f-4531-8e1f-7e5e33938793/0019a33b-65e2-4ebc-bfb3-2d0b23352b5c/VN-vi-20240219-popsignuptwoweeks-perspective_alpha_website_large.jpg"
          alt="/"
        />
        <div className="bg-black/60 fixed top-0 left-0 w-full h-[550px]"></div>
        <div className="absolute top-[20%] p-4 md:p-8">
          <h1 className="text-3xl font-bold md:text-5xl">My Shows</h1>
        </div>
      </div>
      <SavedShow />
    </>
  );
}

export default Account;
