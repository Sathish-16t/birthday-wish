import { useState, useEffect, useRef } from 'react'
import photo from '../assets/camera.png'
import full from '../assets/fullsize.png'
import pic1 from '../assets/pic1.png'
import pic2 from '../assets/pic2.png'
import pic3 from '../assets/pic3.png'
import pic4 from '../assets/pic4.png'
import pic5 from '../assets/pic5.png'
import flower1 from '../assets/flower1.png'
import flower5 from '../assets/flower5.png'
import cloud2 from '../assets/cloud2.png'
import ballon1 from '../assets/ballon1.png'
import ballon2 from '../assets/ballon2.png'
import cake1 from '../assets/cake1.png'
import gift1 from '../assets/gift1.png'
import papper1 from '../assets/papper.png'
import song from '../assets/song.mp3'
import music1 from '../assets/music.png'
import songpic from '../assets/songpic.webp'

function Content() {
    const photos = [
        full,
        pic1,
        pic2,
        pic3,
        pic4,

    ]
    const [open, setOpen] = useState(true)
    const [open1, setOpen1] = useState(true)
    const [open2, setOpen2] = useState(true)
    const [open3, setOpen3] = useState(true)
    const [flash, setFlash] = useState(false)
    const gridRef = useRef(null)

    const [index, setIndex] = useState(null)

    useEffect(() => {
        if (index >= 0 && gridRef.current) {
            gridRef.current.scrollIntoView({ behavior: 'smooth', block: 'start' })
            setFlash(true)
            const t = setTimeout(() => setFlash(false), 250)
            return () => clearTimeout(t)
        }
    }, [index])

    const [revealed, setRevealed] = useState([])
    const handleclick = () => {
        if (index === null) {
            setIndex(0)
            setRevealed([photos[0]])
        }
        else if (index < photos.length - 1) {
            const nextIndex = index + 1
            setIndex(nextIndex)
            setRevealed((prev) => [...prev, photos[nextIndex]])
        }
    }
    const remaining = photos.length - revealed.length
    const [candle, setCandle] = useState(false)
    const handlecandle = () => {
        setCandle(true)
    }

    const [music, setMusic] = useState(false)
    const audioRef = useRef(null)
    const playmusic = () => {
        audioRef.current.play();
    }
    const stopmusic = () => {
        audioRef.current.pause()
    }
    return (
        <main>
            <section className="grid grid-cols-1 place-items-center  gap-2 mt-20">
                <p className="text-sm text-blue-700 font-bold font-pacifico text-center z-10">★ A BIRTHDAY MADE JUST FOR YOU ★</p>
                <h2 className='text-center mt-2 font-indie  text-5xl'>Happy <br />Birthday,</h2>
                <h1 className=" text-center  text-orange-900 text-2xl mt-2 font-clean font-bold">SIVA RANJANI 💫</h1>
                <p className="text-center  text-blue-700 bg-white  py-1 w-25 text-sm rounded-xl mx-auto font-bold font-body">🎂   2026   🎂</p>
                <p className=' font-["Satisfy"] text-2xl text-gray-700 text-sm text-center font-bold font-handwritten mt-5'>5 Little memories, One special person, Happy birthday Siva Ranjani 💢</p>
            </section>

            <section className='mt-24'>
                <p className='text-center font-bold text-xs mt-14 text-blue-700 font-kalam'>CAPTURED MOMENTS </p>
                <h1 className='text-center text-2xl font-bold font-allura mt-2'>Press for a memory</h1>
                <h1 className='text-center font-bold text-2xl/[0.5] text-blue-600 font-bold '>_____</h1>
                <div className='grid place-items-center mt-12 ' >
                    <span onClick={handleclick} ><img src={photo} alt="" className='bg-white rounded-full w-30 h-30 p-4 border-2 border-dashed border-black-400' />
                    </span> </div>
                <p className='mt-2 text-center text-gray-500  font-body'>Click the camera 5 times . {remaining} memories left</p>
                <div ref={gridRef} className={`grid grid-cols-2 mt-2 gap-2 ${flash ? 'flash-anim' : ""}`}  >{revealed.map((p, i) => (<img src={p} key={i} className={`${i == 0 ? "col-span-2" : ""} " bg-white p-2 tar "`} />))}</div>
            </section>

            <section className='mt-16'>
                <div>
                    <h3 className='text-center font-bold font-kalam text-blue-600'>One Special </h3>
                    <h1 className='mt-2 text-center text-3xl font-bold font-elegent'>Make a wish</h1>
                    <h1 className='text-center font-bold text-2xl/[0.05] text-blue-600 font-bold'>_____</h1>
                    <p className='mt-12 text-center font-body text-gray-600'>Close your eyes and thing of something beautiful then blow out the candle</p>

                </div>

                <div className="relative mx-auto mt-18  w-16">
                    <div className={`${!candle ? "flame absolute -top-10 left-1/2 h-10 w-6 -translate-x-1/2 rounded-full bg-gradient-to-t from-yellow-300 via-orange-400 to-red-500 blur-[2px] transition" : ""}`}></div>
                    <div className="absolute -top-2 left-1/2 h-2 w-1 -translate-x-1/2 bg-gray-800"></div>
                    <div className="h-40 w-full rounded-b-xl bg-gradient-to-b from-amber-200 z-100 to-amber-400 shadow-lg " onClick={handlecandle}></div>
                </div>
                <div></div>
                {candle && <h2 className='text-2xl mt-6 text-center font-bold font-elegent'>Your wish is off to the stars</h2>}
                <p className='text-center mt-4 font-body text-gray-60 '>{candle ? 'May every beautyful thing you hoped for find its way to you' : 'Click the candle'}</p>

            </section>
            <section>
                <img src={flower1} alt="" className='absolute top-2 right-2 h-40 ' />
                <img src={flower5} alt="" className='absolute top-150 h-15  ' />
                <img src={flower5} alt="" className='absolute top-150 h-15 right-4  ' />
                <img src={cloud2} alt="" className='absolute top-[0] h-25 ' />
                <img src={ballon1} alt="" className='absolute top-250 h-20' />
                <img src={ballon1} alt="" className='absolute top-450 h-20' />

                <img src={ballon1} alt="" className='absolute top-610 h-20 right-4' />
                <img src={ballon1} alt="" className='absolute top-450 h-20' />
                <img src={ballon1} alt="" className='absolute top-290 h-20 right-4' />
                <img src={ballon1} alt="" className='absolute top-290 h-20 right-4' />
                <img src={gift1} alt="" className='absolute top-100 h-15 ' />
                <img src={gift1} alt="" className='absolute top-190 h-15 right-4 ' />
                {candle && <img src={papper1} alt="" className='absolute top-240 right-26  flash-anim w-40  ' />}

            </section>
            <section>
                <p className='text-center font-bold text-sm mt-14 text-blue-700 font-kalam'>Song for you</p>
                <h3 className='mt-2 text-center text-3xl font-bold font-elegent'>Play for me</h3>
                <div className='mt-4 p-4 bg-pink-300 rounded grid  gap-2 place-items-center grid-cols-1'>
                    <img src={music1} className='h-15 animate-spin' />
                    <p className='text-center mt-4 font-body text-gray-60'>One song that always make me think of you</p>
                    <img src={songpic} alt="" className='w-40 h-40 rounded-xl ' />
                    <audio src={song} ref={audioRef} loop ></audio>
                    <button onClick={() => { !music ? playmusic() : stopmusic(), setMusic(!music) }} className='font-body mt-4 bg-white p-2 rounded-full'>{!music ? '▶️ Play Music' : ' ⏸️Stop Music '} </button>

                </div>
            </section>
            <section className='grid grid-cols-1 place-items-center mt-4 gap-4'>
                <p className='text-center font-bold text-xs mt-14 text-blue-700 font-kalam' >WHISHES FOR YOU</p>
                <h2 className='text-center text-2xl font-bold font-allura mt-2'>Everything I hope you get  </h2>
                <h1 className='text-center font-bold text-2xl/[0.05] text-blue-600 font-bold'>_____</h1>
                {!open ? <div onClick={() => setOpen(!open)} className={`${open ? 'rotate-y-180' : ''} bg-white mt-4 text-gray-600 text-sm transition-transform duration-700 p-2 w-full text-center shadow-xl rounded-lg h-25 grid place-items-center `}><p className='font-["Noto Sans Tamil"] '>நீ ஆசைப்பட்டவை அனைத்தும் உனக்குக் கிடைக்கட்டும் 🥰</p></div>
                    : <div onClick={() => setOpen(!open)} className={`${!open ? 'rotate-y-180' : ''} bg-white mt-4 transition-transform duration-700 p-2 w-full text-center shadow-xl rounded-lg h-25 grid place-items-center font-["Noto Sans Tamil"]`}> <p className='font-body'>1 ⭐ <br />Click to reveal</p></div>}

                {!open1 ? <div onClick={() => setOpen1(!open1)} className={`${open1 ? 'rotate-y-180' : ''} bg-white mt-4 text-gray-600 text-sm transition-transform duration-700 p-2 w-full text-center shadow-xl rounded-lg h-25 grid place-items-center `}><p className='font-["Noto Sans Tamil"] '>உனக்கும் உன் மனதிற்கும் எந்தத் தீங்கும் ஏற்படாமல் இருக்கட்டும் ✨</p></div>
                    : <div onClick={() => setOpen1(!open1)} className={`${!open1 ? 'rotate-y-180' : ''} bg-white mt-4 transition-transform duration-700 p-2 w-full text-center shadow-xl rounded-lg h-25 grid place-items-center font-["Noto Sans Tamil"]`}> <p className='font-body'>2  🥰<br />Click to reveal</p></div>}

                {!open2 ? <div onClick={() => setOpen2(!open2)} className={`${open2 ? 'rotate-y-180' : ''} bg-white mt-4 text-gray-600 text-sm transition-transform duration-700 p-2 w-full text-center shadow-xl rounded-lg h-25 grid place-items-center `}><p className='font-["Noto Sans Tamil"] '>நல்லவர்களைத் தேர்ந்தெடுத்து,
                    தீயவர்களிடமிருந்து விலகி இரு 🤗</p></div>
                    : <div onClick={() => setOpen2(!open2)} className={`${!open2 ? 'rotate-y-180' : ''} bg-white mt-4 transition-transform duration-700 p-2 w-full text-center shadow-xl rounded-lg h-25 grid place-items-center font-["Noto Sans Tamil"]`}> <p className='font-body'>3 💐 <br />Click to reveal</p></div>}

                {!open3 ? <div onClick={() => setOpen3(!open3)} className={`${open3 ? 'rotate-y-180' : ''} bg-white mt-4 text-gray-600 text-sm transition-transform duration-700 p-2 w-full text-center shadow-xl rounded-lg h-25 grid place-items-center `}><p className='font-["Noto Sans Tamil"] '>உன் மனதிற்குப் பிடித்ததைச் செய்து,
                    மகிழ்ச்சியாக வாழ் ❤️</p></div>
                    : <div onClick={() => setOpen3(!open3)} className={`${!open3 ? 'rotate-y-180' : ''} bg-white mt-4 transition-transform duration-700 p-2 w-full text-center shadow-xl rounded-lg h-25 grid place-items-center font-["Noto Sans Tamil"]`}> <p className='font-body'>4  🤎 <br />Click to reveal</p></div>}




            </section>

            <section className='grid place-items-center grid-cols-1'>
                <p className='text-center font-bold text-xs mt-14 text-blue-700 font-kalam' >FROM MY HEART</p>
                <h2 className='text-center text-2xl font-bold font-allura mt-2'>A note for you  </h2>
                <h1 className='text-center font-bold text-2xl/[0.05] text-blue-600 font-bold'>_____</h1>
                <p className='mt-8 font-caveat'>Septemper 2026</p>
                <p className='text-sm/[2] bg-white p-4 text-gray-600 mt-2 w-full rounded-xl'  >சிவரஞ்சனி, திரும்ப ஒரு தடவை
                    இனிய பிறந்தநாள் வாழ்த்துகள்! ❤️ <br /> நீ நினைக்கிறதெல்லாம் உன் வாழ்க்கையில்
                    கிடைக்கட்டும். உன் மனதுக்குப் பிடித்ததைச் செய்து, எப்போதும் சந்தோஷமாக
                    இரு. இந்த வருடம் முழுவதும் உனக்கு நல்லது மட்டுமே நடக்க வேண்டும் என்று
                    நான் விரும்புகிறேன்.
                    <br /><br />
                    எனக்கு உன்னிடம் பேச ஒரே வழி இதுதான்.


                    <br /><br />
                    உனக்காக நான்  நிறைய   கவிதைகள் எழுதியிருக்கிறேன்
                    , அதில் சில கவிதைகள் மட்டும் இங்கே சொல்கிறேன்.
                    <br /><br />
                    “புன்னகை செய்வதைத் தவிர வேறு என்ன செய்ய முடியும்?
                    உன் பிறந்தநாள் அன்று நானோ ஒரு மூன்றாவது மனிதன்
                    தான உனக்கு 💛”

                    <br /><br />
                    “உனக்குப் பிறகே வரும்,
                    நான் அதிகம் ரசித்தவைகள் 💌”
                    <br /><br />
                    "இன்று என்னை கவிஞன் ஆக்க இருபது வருடதிற்கு <br />
                    முன் பிறந்த கவிதை நீ 🪶"
                    <br /><br />
                    "அழகானவைகளை வரிசை படுத்துங்கள்
                    நிச்சயமாக அவள்(நீ) முதலிடத்தில் வருவாள் 💙"
                    <br /><br />

                </p>
            </section>
            <section>
                <img src={ballon2} alt="" className='h-30 ml-25 mt-4 ' />

                <h2 className='text-center text-2xl font-bold  z-10 font-allura text-blue-700 mt-2 '>Just for you siva ranjani <br /> </h2>
                <p className='mt-2 font-handwritten ml-40 z-10'>-By:Unknown</p>


            </section>
        </main>
    )
}
export default Content
