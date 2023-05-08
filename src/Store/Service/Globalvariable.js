
import { createAsyncThunk} from '@reduxjs/toolkit';
export const Globalvariable = createAsyncThunk(
    'Globalvariable',
    async (id) => {
      const data=id
      return data
    }
)