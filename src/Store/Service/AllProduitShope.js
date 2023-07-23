import axios from "axios"
import { createAsyncThunk} from '@reduxjs/toolkit';
import { Path, Base_url } from '../../config/Config';
export const getAllProduitlibrairie = createAsyncThunk(
    'getAllProduitlibrairie',
    async () => {
      const response = await axios.get(Base_url+ Path.getAllProduitlibrairie)
       return response.data
    }
  )