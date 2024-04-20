import React from 'react'
import './Card.css'

export default function Card({ name, discription, address, age, bgcolor, namebgcolor, nametxtcolor,
  disbgcolor, distxtcolor, addbgcolor, addtxtcolor, agebgcolor, agetxtcolor, parabgcolor }) {
  return (

    <div className='cardbbody'>
      {/* bacground */}
      <div style={{ backgroundColor: bgcolor }} className='card'>

        {/* name */}
        <div style={{ backgroundColor: namebgcolor }} className='namebg'>
          <h3 style={{ color: nametxtcolor }} className='name'> Name : {name} </h3>
        </div>

        {/* discriptin topic */}
        <div>
          <p style={{ backgroundColor: disbgcolor }} className='discriptxt' > Discription </p>
        </div>

        {/* paragraf */}
        <div>
          <p style={{ backgroundColor: parabgcolor, color: distxtcolor }} className='paragraf'>{discription}</p>
        </div>

        {/* address */}
        <div>
          <p style={{ backgroundColor: addbgcolor, color: addtxtcolor }} className='txtstyle'> Address : {address} </p>
        </div>

        {/* age */}
        <div>
          <p style={{ color: agetxtcolor, backgroundColor: agebgcolor }} className='txtstyle'> Age : {age}</p>
        </div>

      </div>

    </div>
  )
}
