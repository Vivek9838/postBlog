import React, { useEffect } from 'react'

export const useTitle  =(title) => {
    useEffect(()=>{
        document.title = `${title} - AppWrite`
    },[title])
  return (
    <div>
      
    </div>
  )
}
