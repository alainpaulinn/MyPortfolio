import {useState, useEffect} from 'react'

const {REACT_APP_API_TOKEN:API_TOKEN} = process.env

function useFetch(url) {
  const [data, setData] = useState(null)
  const [error, setError] = useState(null)
  const [loading, setLoading] = useState(true)

  useEffect(()=>{
    const fetchData = async () =>{
        setLoading(true)

        try {
            const res = await fetch(url,{
                method: 'GET',
                headers: {
                    'Content-type': 'application/json',
                    'Authorization': `Bearer ${API_TOKEN}`, // notice the Bearer before your token
                },
                // body: JSON.stringify(yourNewData)
            })
            console.log("res", res)
            const json = await res.json()
            setData(json)
            setLoading(false)
        } catch (fetchError) {
            setError(fetchError)
        }
    }
    fetchData()
  }, [url])

  return{loading, error, data}
}

export default useFetch