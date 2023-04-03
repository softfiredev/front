import axios from "axios";
import { createAsyncThunk} from '@reduxjs/toolkit';
import { Path, Base_url } from '../../config/Config'
export const findProfileLibrairie = createAsyncThunk(
    'findProfileLibrairie',
    async (id) => {
      const response = await axios.post(Base_url+ Path.findProfile+id, {headers: {"Content-Type": "application/json"}})
      return response
    }
  )
  