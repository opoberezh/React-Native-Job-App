import { useState, useEffect } from "react";
import axios from "axios";


const rapidApiKey = 'a1840df85cmsh0286957184e4b2ep1424d8jsn03c799269619';
const useFetch = (endpoint, query) => {
  const [data, setData] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  const options = {
    method: 'GET',
    url: `https://jsearch.p.rapidapi.com/${endpoint}`,  
      headers: {
      'X-RapidAPI-Key': rapidApiKey,
      'X-RapidAPI-Host': 'jsearch.p.rapidapi.com'
    },
    params: {...query},

  };
  const fetchData = async () => {
    setIsLoading(true);
  
  try {
    const response = await axios.request(options);
    console.log(response.data);
    setData(response.data.data);
    setIsLoading(false);
  } catch (error) { 
    setError(error);
    console.error(error);
   
    alert("There is an error")
  }finally{
setIsLoading(false);
  }
}
useEffect(() => {
  fetchData();
}, [])

const refetch = () => {
  setIsLoading(true);
  fetchData();
}
return {data, isLoading, error, refetch};
}
export default useFetch;