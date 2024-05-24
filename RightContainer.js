import React from 'react'
const RightContainer = ({hight,setHight,wight,setWight,handleClear,handleBmiCalculate,hightError,wightError}) => {
  return (
    <div className='bg-blue-300 h-1/2 sm:h-3/4 sm:flex sm:flex-col sm:justify-center sm:items-center '>
        <header className='pt-3'>
            <p className='text-center text-white text-2xl italic '>BMI CALCULATOR</p>
        </header>
        <form action="" onSubmit={(e)=>e.preventDefault()} className='flex  sm:w-4/5  flex-col mt-6 '>
{/* This part is a hight input */}
            <label htmlFor="hight" className='ml-5 text-white font-bold italic'>
                Hight( cm )
            </label>
            <input type="text" id='hight' className='w-1/2 ml-5 mt-5 rounded pl-3 cursor-pointer ring-2 outline-none focus:ring-blue-800 hover:shadow-2xl' 
            value={hight} onChange={(e)=>setHight(e.target.value)}
            />
            {hightError&&<p className='ml-5 mt-3 text-red-600 font-bold'>plece enter numeric value</p>}
{/* This prat ia a whight input */}
            <label htmlFor="wight" className='ml-5 mt-3 text-white font-bold italic'>
                Wight(Kg)
            </label>
            <input type="text" id='wight' className='w-1/2 ml-5 mt-5 rounded pl-3 cursor-pointer ring-2 outline-none focus:ring-blue-800 hover:shadow-2xl'
             value={wight} onChange={(e)=>setWight(e.target.value)}/>
             {wightError&&<p className='ml-5 mt-3 text-red-600 font-bold'>plece enter numeric value</p>}
             
             
{/* Button groups */}
            <div className='mt-5'>
{/* Calculate button for BMI */}
                <button className=' ml-5 bg-green-500 text-white px-4 py-1 rounded font-bold shadow-2xl hover:bg-green-300 focus:ring-2 focus:ring-green-600'
                onClick={handleBmiCalculate}>Calculate BMI</button>
{/* Clear button for used to clear the input value */}
                <button type='reset' className='ml-5 bg-red-500 text-white font-bold px-5 py-1 rounded hover:bg-red-300 hover:ring-2 hover:ring-red-600'
                onClick={handleClear}>Clear</button>
            </div>
        </form>
    </div>
  )
}

export default RightContainer