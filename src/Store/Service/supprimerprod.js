import axios from "axios";
import { Path, Base_url } from "../../config/Config";
export const supprimerprod = async (data) => {

  const response = await axios.delete(Base_url+Path.Supproduit,{data:data});
  console.log(response)
  return response.data;
};