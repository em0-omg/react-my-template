import { PayloadAction } from './../../../../node_modules/@reduxjs/toolkit/src/createAction'
import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import type { RootState } from '@/store'
import sampleReducer from '@/features/sample/slices/sampleSlice'

interface UserState {
  name: string
  status: 'idle' | 'loading' | 'complete'
}

const initialState: UserState = {
  name: 'No user',
  status: 'idle'
}

const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    setUser: (state, action: PayloadAction<UserState>) => {
      state.name = action.payload.name
      state.status = action.payload.status
    }
  }
})

export const { setUser } = userSlice.actions

export default userSlice.reducer
