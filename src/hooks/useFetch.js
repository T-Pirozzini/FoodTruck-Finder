import { useState, useEffect } from 'react'



export const useFetch = (url) => {
  const [data, setData] = useState([])

  // fetch data from url, convert response to json, update setData state
  useEffect(() => {
    // console.log("test")

    if(!url){
      console.log("its broken")
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
