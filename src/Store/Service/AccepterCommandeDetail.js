import axios from "axios";
import { Path, Base_url } from "../../config/Config";
export const AccepterCommande = async (id) => {
  const response = await axios.put(Base_url + Path.AccepteCommande+id);
  return response.data;
};
export const AnnulerCommande = async (id) => {
  const response = await axios.put(Base_url + Path.AnnulerCommande+id);
  return response.data;
};