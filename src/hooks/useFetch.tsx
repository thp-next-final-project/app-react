import { useState } from "react";
import Cookies from 'js-cookie';
import { API_URL, COOKIE_TOKEN } from '../config/config';

export const useFetch = ( withAuth = false ) => {
  const [ isLoading, setIsLoading ] = useState(false);
  const [ responseData, setResponseData ] = useState(null);
  const [ token, setToken ] = useState(Cookies.get(COOKIE_TOKEN));
  const [ errors, setErrors] = useState(null);

  const headers:Record<string, string> = { 
    'Content-Type': 'application/json',
   };
  if (withAuth && token) {
    headers.Authorization = token;
  }
  const get = (path:string) => {
    setIsLoading(true);
    setErrors(null);
    fetch( API_URL + path,
      {
        method: 'get',
        headers,
      })
				.then((response) => response.json())
				.then ((response) => {
					setResponseData(response)
				})
        .catch(error => {setErrors(error)})
        .finally(() => {setIsLoading(false)})
  };

  const post = (path:string, postData:Object) => {
    
    setIsLoading(true);
    setErrors(null);
    fetch( API_URL + path,
      {
        method: 'post',
        headers,
        body: JSON.stringify(postData)
      })
				.then((response) => {
          if ((path === '/api/login' || path === '/api/signup')  && response.status === 200) {
            setToken(response.headers.get('Authorization') || "");
          } 
          return response.json()
        })
				.then((response) => {  
          console.log(response)       
          setResponseData(response)
				})
        .catch(error => setErrors(error))
        .finally(() => setIsLoading(false))
  };
  
  const patch = (path:string, postData:Object) => {
    console.log("in patch ", headers);

    setIsLoading(true);
    setErrors(null);
    fetch( API_URL + path,
      {
        method: 'PATCH',
        headers,
        body: JSON.stringify(postData)
      })
        .then((response) => (response.json()))
        
				.then((response) => {        
          console.log(response)  
					setResponseData(response)
				})
        .catch(error => setErrors(error))
        .finally(() => setIsLoading(false))
  };

  return {
    isLoading,
    errors,
    responseData,
    token,
    headers,
    get,
    post,
    patch
  };
}