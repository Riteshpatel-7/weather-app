export default function SuggestionShimmer() {
  return <div className='flex flex-col gap-4 absolute top-[120%] left-0 w-[100%] bg-[hsl(243,27%,20%)] rounded-lg shadow-lg z-10 p-3'>
            {Array.from({ length: 4 }).map((el, index) => (
                <div key={index} className='h-8 rounded-lg bg-[hsl(243,23%,24%)]'></div>
            ))}
        </div>
}
