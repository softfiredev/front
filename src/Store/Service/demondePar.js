import axios from "axios"
import { createAsyncThunk} from '@reduxjs/toolkit';
import { Path, Base_url } from '../../config/Config';
export const demondePar = createAsyncThunk(
    'demondePar',
    async () => {
      const response = await axios.get(Base_url+ Path.demondeP)
      return response.data
    }
  )