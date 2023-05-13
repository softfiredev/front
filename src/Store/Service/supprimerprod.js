import axios from "axios";
import { Path, Base_url } from "../../config/Config";
export const supprimerprod = async (id) => {
  const response = await axios.delete(Base_url+Path.Supproduit+id);
  console.log(response.data)
  return response.data;
};