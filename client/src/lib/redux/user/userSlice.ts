import { createSlice, PayloadAction } from "@reduxjs/toolkit"

interface userState {
  name: string
  email: string
  password: string
  agreeToTerms: boolean
}

const userDetail: userState = {
  name: '',
  email: '',
  password: '',
  agreeToTerms: false
}

const initialState = {
  user: userDetail
}

const userSlice = createSlice({
  name: "user", 
  initialState,
  reducers: {
    onLogin: (state, action: PayloadAction<userState>) => {
      state.user = action.payload
    },
    onLogout: (state) => {
      state.user = userDetail
    },
  }
})

export const { onLogin, onLogout } = userSlice.actions
export default userSlice.reducer