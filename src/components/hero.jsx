import { useState } from "react"
import flower1 from '../assets/flower1.png'
import ballon1 from '../assets/ballon1.png'
import cake1 from '../assets/cake1.png'
import cloud2 from '../assets/cloud2.png'



function Hero({setPage}){
    const [code ,setCode] = useState("")
const password ='2909'
const [color,setColor]=useState(true)
function handlenumber(number){
    const newcode=code+number
    newcode.length<=4?setCode(newcode):setCode(code)
}
function page(){
    if(code==password){
        setPage(false)  
    }
    else{
setColor(false)
setCode('')
    }
}
    
    return(
        <div    className="grid grid-cols-1  justify-items-center px-6 py-4 bg-blue-50  rounded-xl ">
            <img src={flower1} alt="" className="absolute top-4 left-10 h-25 rotate-260" />
            <img src={flower1} alt="" className="absolute bottom-4 right-8 h-25 rotate-80 " />
            <img src={ballon1} alt="" className="absolute h-15 right-10 top-25" />
            <section> 
                <img src={cake1} alt="" className=" absolute top-0 h-30  z-[-1]" />
                <h1 className ='text-center font-bold font-["Fredoka"] text-4xl font-bold
bg-gradient-to-r from-pink-500 via-purple-500 to-yellow-400
bg-clip-text text-transparent z-5'>HAAPY<br /> BIRTHDAY</h1>

            </section>
            <section className ="py-2">
                <p className ='text-center mt-2 font-semi-bold text-xs font-handwritten text-gray-600'>A Little Surprise Await </p>
                <h2 className ='text-center mt-2 text-2xl font-bold font-elegent text-2xl '>For Siva Ranjani</h2>
                <p className ='text-center mt-2  font-bold text-sm bg-white rounded-xl shadow box-border text-blue-800 px-2 py-2 font-body font-semibold '> 🔑 Enter The Secret Code To Open It (2909) 💕</p>
               
            </section>
            <section className="grid grid-cols-1 mt-2 justify-items-center">
                 <div className="flex gap-3 py-2">
                    {[0,1,2,3].map((index)=>(
                        <div key={index} className={`h-2 w-2 rounded-full border-1 ${color?"border-blue-500":"border-red-500"} bg-transperent
                             ${code.length > index ? "border-4":"border-1"}`}></div>
                    ))}
                </div>
                <div className="grid grid-cols-3 gap-6  place-items-center py-2 " >
                  {['1','2','3','4','5','6','7','8','9','0',].map((index)=>(
                    <button key={index} onClick={()=>handlenumber(String(index))} className=" cursor-pointer z-10 shadow-md h-8 w-14 rounded bg-blue-100 font-bold  font-body hover:bg-blue-400 transition">{index}</button>
                  ) )}
                  <button className=" cursor-pointer shadow-md h-8 w-14  rounded bg-blue-100 hover:bg-red-400 transition" onClick={()=>setCode(code.slice(0,-1))}>X</button>
                  <button className=" cursor-pointer shadow-md h-8 w-14 z-10  rounded bg-blue-100  hover:bg-green-400 transition text-sm font-bold" onClick={()=>page()}>Enter</button>
                </div>
            </section>
        </div>
    )
}
export default Hero
