
import { useState } from "react"
import Content from "./components/content"
import Hero from "./components/hero"


function App(){
  const [page,setPage]=useState(true)
return(
  <main className="
    min-h-screen
    bg-[#dceeff]
    bg-[radial-gradient(circle_at_10%_20%,rgba(255,255,255,0.9),transparent_25%),radial-gradient(circle_at_90%_30%,rgba(190,220,255,0.8),transparent_30%),radial-gradient(circle_at_20%_90%,rgba(240,250,255,0.9),transparent_30%)]
   box-border py-4 px-8" >
    <div >

{page ?<Hero setPage={setPage}/>:
<Content />}
    </div>

  </main>
)
}
export default App