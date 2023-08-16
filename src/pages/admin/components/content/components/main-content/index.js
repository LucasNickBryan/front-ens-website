import React, { useEffect, useState } from 'react'
import Animation from '../../../../../ui/Animation'
import MainServices from '../../../../../../services/Main.services'

const MiniBox = (props) => {
  const { title, lastNumber, animate, duration } = props
  const [number, setNumber] = useState(0)

  const countDown = () => {
    let count = 0
    let interval = setInterval(() => {
      setNumber(count)
      if (count == lastNumber) clearInterval(interval)
      count += 1
    }, 100);
  }

  useEffect(() => {
    countDown()
  }, [])

  return (
    <Animation animate={animate} duration={duration}>
      <div className="flex bg-yellow-500 max-w-sm px-4 justify-around my-5 py-8 rounded cursor-pointer relative">
        <div className="text-white text-3xl uppercase">{title}</div>
        <div className="text-white text-4xl pt-2">{number}</div>
        {/* <div className='absolute bg-black h-10 text-white w-full bottom-0'>voir</div> */}
      </div>
    </Animation>
  )
}

export const MainContent = () => {
  useEffect(()=>{
    MainServices.get()
    .then(res=>{
      console.log("res ", res.data);
    })
    .catch(err=>{})
  }, [])
  return (
    <div>
      <div className='grid gap-3 grid-cols-5 xl:grid-cols-4 lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1 place-content-center'>
        <MiniBox animate="fade-up" duration="1000" title={"contenu"} lastNumber={10} />
        <MiniBox animate="fade-up" duration="1500" title={"galerie"} lastNumber={27} />
        <MiniBox animate="fade-up" duration="2000" title={"fonction"} lastNumber={5} />
        <MiniBox animate="fade-up" duration="2500" title={"personnel"} lastNumber={9} />
        <MiniBox animate="fade-up" duration="3000" title={"utilisateur"} lastNumber={3} />
      </div>
    </div>
  )
}
