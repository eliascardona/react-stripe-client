import React, { useState, useEffect } from 'react'
import '../../styles/premium-view.css'
import { auth, db } from '../../base'
import { Line } from '../utils/Line'
import { InfoModal } from '../utils/InfoModal'
import { YoutubeVideo } from '../utils/YoutubeVideo'

export const PremiumView = () => {
  const [lines, setLines] = useState([])

  useEffect(() => {
    const fetchData = async () => {
      const coll = await db.collection("videos").get()
      setLines(coll.docs.map(doc => {
        return doc.data()
      }))
    }
    fetchData()
  }, [])

  const logOut = async () => {
    await auth.signOut()
    window.location.reload()
  }
  
  return (
    <div className='grid'>
      <div className='i-1'>
        <div className='img'>-</div>
        <h2 className='pt-2 pl-1'>Course title</h2>
        <h3 className='pb-1 pl-1'>Course little description</h3>
        <p className='pl-1'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestiae hic officia repellat, animi voluptatum maiores dolorum expedita beatae architecto fugit debitis reiciendis vel fuga commodi cumque ipsam est nulla nesciunt, culpa adipisci fugiat perspiciatis. Pariatur, provident voluptates! Sunt doloremque ea saepe, expedita odio libero modi maxime dignissimos necessitatibus laudantium mollitia!</p>
        <button type='button' className='btn btn-sm btn-dark ml-1 mb-2' onClick={logOut}>Log out</button>
      </div>
      <div className='i-2'>
        <h2 className='mt-2 ml-2'>Time to study!</h2>
        <h3 className='ml-2'>Some motivation phrase</h3>
        {
          lines.map((line) => {
            return (
              <div key={line.src}>
                <Line text={line.text} src={line.src} />
              </div>
            )
          })
        }
      </div>
    </div>
  )
}