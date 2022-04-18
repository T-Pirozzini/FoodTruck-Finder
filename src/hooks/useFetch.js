import { useState, useEffect } from 'react'



export const useFetch = (url) => {
  const [data, setData] = useState([])

  // fetch data from url, convert response to json, update setData state
  useEffect(() => {
    // console.log("test")
    const timeout = setTimeout(() => {
      
    }, 5000)
    if(url.length === 0){
      console.log("0")
      return
    }
    const fetchData = async () => {            
      const res = await fetch(url)
      // console.log("RES", res)
      const json = await res.json()
      // console.log("JSON", json)

      setData(json)
    }
    // invoke the function
   fetchData()

  //  console.log("test2")
  }, [url])

  return { data } 

}
