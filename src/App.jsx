import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Card from './component/Card'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className='body'>
      <Card name={'Nirmal Wishwantha'}
        discription={'React is the library for web and native user interfaces. Build user interfaces out of individual pieces called components written in JavaScript.'} address={'Kurunegala'}
        age={'25'} namebgcolor={'rgb(52, 222, 193)'} disbgcolor={'rgb(149, 214, 230'} addbgcolor={'rgb(41, 43, 43)'} addtxtcolor={'white'}
        agebgcolor={'rgb(41, 43, 43)'} agetxtcolor={'white'} parabgcolor={'white'} bgcolor={' #e6e6ff'}/>



      <Card name={'Supun sadaruwan '}/>

      <Card />

      <Card />
    </div>

  )
}

export default App
