import axios from 'axios'

export  default function ajax(url,data={},type='GET'){
  return new Promise(function(resolve,reject){
    let promise
    if(type==='GET'){
      let  queryStr = ''
      Object.keys(data).forEach(key=>{
        const value = data[key];
        queryStr += key + '=' + value + '&';
        //去掉最后的&
      })
      if(queryStr){
        queryStr.substring(0,queryStr.length-1);
        queryStr = '?'+ queryStr;
      }
      promise = axios.get(url+queryStr)
    }else{
      promise = axios.post(url,data)
    }
    promise.then(response=>{
      //请求成功
      resolve(response.data)
      })
      .catch(error=>{
        //请求失败
        reject(error)
      }
    )
  })
}
