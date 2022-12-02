import {createAsyncThunk , createSlice, PayloadAction  } from "@reduxjs/toolkit"
import coreApi from "./../../../api" ;
 interface ITypeSocials {
    value: string;
  }
  
export interface IDataFormUserSocial {
    type: ITypeSocials;
    address?: string;
  }
 
  export interface IinitialState {
    socialUser: IDataFormUserSocial ,
    loading :boolean  ,
    erroreMessage : null | string
  }

export const fetchSocialUser = createAsyncThunk('socialUser/get',
async ()=> {
         const {data} = await coreApi.get(`https://jsonplaceholder.typicode.com/posts`);
         return data
})   

const initialState = {
    socialUser : {
        address: "",
        type: { value: "" },
    } ,
    loading:true,
    erroreMessage : null
  } as IinitialState

  const socialSlice = createSlice({
      name:'socialUser' ,
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