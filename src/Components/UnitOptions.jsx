import iconCheckmark from '../assets/images/icon-checkmark.svg'

export default function UnitOptions({UnitOptions, setUnits, units}) {
    function Highlight(selected){
        const lists = document.querySelectorAll('li');
        lists.forEach((list) => {
            if (list.id === selected.id)
            list.classList.remove('highlighted');
        });
        selected.classList.add('highlighted');
    }

    if (!UnitOptions) return null;
  return (
    <div onClick={(e)=> e.stopPropagation()} className='absolute top-[120%] right-0 bg-[hsl(243,27%,20%)] text-left rounded-lg shadow-lg w-[200px] border border-[hsl(243,23%,30%)]  p-2 z-10'>
        <h2 className='p-2'>Switch to Imperial</h2>
        <p className='text-[0.8rem] opacity-50 p-2' >Temperature</p>
        <ul className='text-white text-sm font-medium border-b-3 border-[hsl(243,27%,24%)]'>
            <li className = {`${units.temperature === ''? 'highlighted': null}`} id='temp' onClick={(e)=>{Highlight(e.target); setUnits((prev)=>({...prev, temperature: ''}))}}>Celsius(°C) <img className='opacity-0' src={iconCheckmark} alt="checked" /></li>
            <li className = {`${units.temperature === 'F'? 'highlighted': null}`} id='temp' onClick={(e)=>{Highlight(e.target); setUnits((prev)=>({...prev, temperature: 'F'}))}} >Fahrenheit(°F) <img className='opacity-0' src={iconCheckmark} alt="checked" /></li>
        </ul>
        <p className='text-[0.8rem] opacity-50 p-2' >Wind Speed</p>
        <ul className='text-white text-sm font-medium border-b-3 border-[hsl(243,27%,24%)]'>
            <li className = {`${units.windSpeed === 'km/h'? 'highlighted': null}`} id='wind' onClick={(e)=>{Highlight(e.target); setUnits((prev)=>({...prev, windSpeed: 'km/h'}))}}>km/h <img className='opacity-0' src={iconCheckmark} alt="checked" /></li>
            <li className = {`${units.windSpeed === 'mph'? 'highlighted': null}`} id='wind' onClick={(e)=>{Highlight(e.target); setUnits((prev)=>({...prev, windSpeed: 'mph'}))}} >mph <img className='opacity-0' src={iconCheckmark} alt="checked" /></li>
        </ul>
        <p className='text-[0.8rem] opacity-50 p-2' >Precipitation</p>
        <ul className='text-white text-sm font-medium'>
            <li className = {`${units.precipitation === 'mm'? 'highlighted': null}`} id='pre' onClick={(e)=>{Highlight(e.target); setUnits((prev)=>({...prev, precipitation: 'mm'}))}}>Millimeters(mm) <img className='opacity-0' src={iconCheckmark} alt="checked" /></li>
            <li className = {`${units.precipitation === 'in'? 'highlighted': null}`} id='pre' onClick={(e)=>{Highlight(e.target); setUnits((prev)=>({...prev, precipitation: 'in'}))}}>Inch(in) <img className='opacity-0' src={iconCheckmark} alt="checked" /></li>
        </ul>
    </div>
  )
}
