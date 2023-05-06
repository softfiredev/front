import axios from "axios";
import { Path, Base_url } from "../../config/Config";
export const changePassword = async (id) => {
  const response = await axios.put(Base_url + Path.changePassword+id);
  return response.data;
};