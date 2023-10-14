import React, { useEffect, useState } from 'react'

function Profile() {
 const [rick, setRick] = useState([])

        useEffect(()=>{
                const getRicks = async () =>{
                        const response = await fetch ('https://rickandmortyapi.com/api/character/')
                        const listRick = await response.json()
                        const {results} = listRick
        
                        const newRick = results.map(async(rickapi) => {
                                const response = await fetch(rickapi.url)
                                const ricks = await response.json()
        
                        return{
                                id:ricks.id,
                                name:ricks.name,
                                status:ricks.status,
                                img:ricks.image,
                        }      
        })
          setRick(await Promise.all(newRick))
        }
        getRicks()  
        
        },[])  

  return (
    <>
    <h1>USER PROFILE</h1>
    {
      rick.map(ricksa => {
        return(
          <div>
          <img src={ricksa.img} alt={ricksa.name} />
          <p>{ricksa.name}</p>
          <span>{ricksa.id}</span>
          <span>{ricksa.status}</span>
          </div>
        )
      })
    }
    </>
  )
}

export default Profile