import {createAsyncThunk , createSlice, PayloadAction  } from "@reduxjs/toolkit"
import coreApi from "./../../../api" ;
 interface ITypeSocials {
    value: string;
  }
  
export interface IDataFormUserSocial {
    social: ITypeSocials;
    address?: string;
  }
 
  export interface IinitialState {
    socialUser: IDataFormUserSocial[] ,
    loading :boolean  ,
    erroreMessage : null | string
  }

export const fetchSocialUser = createAsyncThunk('fetchSocialUser',
async ()=> {
         const {data} = await coreApi.get(`/user_socials`);
         return data
})   

const initialState = {
    socialUser : [] ,
    loading:true,
    erroreMessage : null
  } as IinitialState

  const socialSlice = createSlice({
      name:'socialUserss' ,
      initialState,
      reducers: {
        // fill in primary logic here
      },
      extraReducers: (builder) => {
        builder
        .addCase(fetchSocialUser.fulfilled, (state, action) => { 
            state.socialUser = action.payload;
            state.loading = false;
        })
        .addCase(fetchSocialUser.pending, (state)=> {
            state.loading = true;
        })
        .addCase(fetchSocialUser.rejected, (state) => {
            state.loading = false;
            state.erroreMessage = "errore fetch";
        })
        
      }
  })



  export default socialSlice.reducer;