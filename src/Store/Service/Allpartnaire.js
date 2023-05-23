import axios from "axios"
import { createAsyncThunk} from '@reduxjs/toolkit';
import { Path, Base_url } from '../../config/Config';
export const getAllPartanire = createAsyncThunk(
    'getAllPartanire',
    async () => {
      const response = await axios.get(Base_url+ Path.AllPartnaire)
      return response.data
    }
  )