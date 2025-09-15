import { useRouteError } from "react-router-dom";
import iconError from '/public/icon-error.svg'
import refresh from '/public/refresh.png'

export default function Error() {
    const error = useRouteError();
  return (
    <div className="flex flex-col justify-center items-center text-center text-white">
      <img className="w-[46px] mt-16 mb-8" src={iconError} alt="" />  
      <h1 className="text-4xl lg:text-5xl font-bold mb-6">{error?.status || "Something went wrong"}</h1>
      <p className="text-lg lg:text-xl mb-6 opacity-65 text-[o.9rem] w-[300px] lg:w-[500px]">
        {error?.statusText || error?.message || "Error occurred while fetching data. Try with different input or check your internet connection."}
      </p>
      <a
        href="/"
        className="flex gap-3 text-[#fff] border border-[hsl(243,27%,20%)] px-4 py-2 rounded-md bg-[hsl(243,27%,20%)] hover:scale-105 active:scale-95 transition-colors duration-300"
      >
        <img className="w-6" src={refresh} alt="" />
        Retry
      </a>
    </div>
  );
}
