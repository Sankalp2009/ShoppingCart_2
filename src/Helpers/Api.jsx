import axios from "axios";
export const getApi = async(url)=>{
  let Res  = await axios.get(url);
  return Res;
}