import axios from "axios"
import { createAsyncThunk} from '@reduxjs/toolkit';
import { Path, Base_url } from '../../config/Config';
export const GetAllFavorieClient = createAsyncThunk(
    'GetAllFavorieClient',
    async (id) => {
      const response = await axios.get(Base_url + Path.Getfavo+id);
      return response.data
    }
  )