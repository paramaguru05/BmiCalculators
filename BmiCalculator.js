import React,{useState} from 'react'
import LeftContainer from './LeftContainer'
import RightContainer from './RightContainer'
import Footer from './Footer'
const BmiCalculator = () => {
  const [bmiVal,setBmiVal]=useState(null)
  const [status,setStatus]=useState(null)
  const [hight,setHight]=useState('')
  const [wight,setWight]=useState('')
  const [wightError,setWightError]=useState(false)
  const [hightError,setHightError]=useState(false)
  function handleClear(){
    setHight("")
    setWight("")
    setHightError(false)
    setWightError(false)
  }
  function handleBmiCalculate(){

    if(hight!==""&&wight!==""){
      let wightVal=Number(wight)
      let hightVal=Number(hight)
      console.log(hightVal)
      console.log(hightVal)
        if(isNaN(hightVal)){
          console.log("The hight is a string")
          setHightError(true)
        }
        else{
          setHightError(false)
        }
        if(isNaN(wightVal)){
          console.log("The wight is a String")
          setWightError(true)
        }
        else{
          setWightError(false)
        }
        let hightMeter=hightVal/100
        let bimi=wightVal/(hightMeter*hightMeter)
        setBmiVal(bimi.toFixed(2))
        if(bmiVal<18.5){
          setStatus("UnderWight")
        }
        else if(bmiVal>=18.5 && bmiVal<24.9){
          setStatus("Normal Wight")
        }
        else {
          setStatus("Obese")
  
        }
        if(hightVal&&wightVal&&!isNaN(hightVal)&&!isNaN(wightVal)){
          console.log(bmiVal)
          setHightError(false)
          setWightError(false)
          setHight("")
          setWight("") 
        }
        else{
          setBmiVal(false)
  
        }
    }
    else{
      setHightError(true)
      setWightError(true) 
    }
}
  return (
    <main className='bg-slate-600 h-screen flex justify-center items-center '>
        <div className='w-4/5 hight sm:h-4/5 bg-slate-50 sm:flex' >
            <LeftContainer
            />
            <div className='w-full h-full'>
            <RightContainer
            hightError={hightError} wightError={wightError}
            hight={hight} setHight={setHight} wight={wight} setWight={setWight}
            handleClear={handleClear} handleBmiCalculate={handleBmiCalculate}
            />
            <Footer
            bmiVal={bmiVal} status={status}/>
            </div>
        </div>
   </main>
  )
}

export default BmiCalculator