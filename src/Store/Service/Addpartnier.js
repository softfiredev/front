import axios from "axios";
import { Path, Base_url } from "../../config/Config";
export const AddLibrairie = async (data) => {
  const response = await axios.post(Base_url + Path.AddLibrairie,data);
  return response.data;
};
