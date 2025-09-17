import dropdownIcon from "/src/assets/images/icon-dropdown.svg";

export default function HomeShimmer() {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-8">
      <div className="lg:col-span-2">
        <section className="flex flex-col h-54 justify-center items-center bg-[hsl(243,27%,20%)] lg:flex-row bg-cover bg-center rounded-2xl p-6 lg:px-8 lg:py-12 text-white animate-pulse">
          <h1 className="text-2xl">Loading...</h1>
        </section>
      </div>
      <div className="grid gap-6 w-full grid-cols-[repeat(auto-fit,minmax(132px,1fr))] lg:col-span-2">
        {Array.from({ length: 4 }).map((el, index) => (
          <div
            key={index}
            className="h-26 bg-[hsl(243,27%,20%)] rounded-2xl animate-pulse"
          ></div>
        ))}
      </div>
      <div className="lg:col-span-2">
        <p className="font-semibold">Daily forecast</p>
        <div className="grid gap-4 xl:gap-5 w-full grid-cols-[repeat(auto-fit,minmax(72px,1fr))] mt-4">
          {Array.from({ length: 7 }).map((el, index) => (
            <div
              key={index}
              className="h-36 bg-[hsl(243,27%,20%)] rounded-2xl animate-pulse"
            ></div>
          ))}
        </div>
      </div>
      <div className="w-[100%] max-h-[564px] xl:max-h-[574px] lg:col-start-3 lg:col-span-1 lg:row-start-1 lg:row-end-4 flex flex-col gap-4 bg-[hsl(243,27%,20%)] rounded-2xl p-4 overflow-y-scroll">
        <div className="flex justify-between items-center xl:mb-2">
          <p className="text-white font-semibold">Hourly forecast</p>
          <button className="flex items-center justify-center gap-2 text-[0.96rem] relative bg-[hsl(243,23%,30%)] rounded-md px-4 py-1">
            <span> - </span>
            <img src={dropdownIcon} alt="dropdown" />
          </button>
        </div>
        {Array.from({ length: 12 }).map((el, index) => (
          <div
            key={index}
            className="p-6 bg-[hsl(243,27%,24%)] rounded-md border border-[hsl(243,23%,30%)] animate-pulse"
          ></div>
        ))}
      </div>
    </div>
  );
}
