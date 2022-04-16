import { useState, useEffect } from 'react'


export const useFetch = (url) => {
  const [data, setData] = useState(null)

  // fetch data from url, convert response to json, update setData state
  useEffect(() => {
    const fetchData = async () => {
      const res = await fetch(url)
      const json = await res.json()
      setData(json)
    }
    // invoke the function
    fetchData()
  }, [url])

  return { data } 

}
