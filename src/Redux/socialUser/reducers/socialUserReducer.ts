import { PayloadAction } from "@reduxjs/toolkit";
import { IDataFormUserSocial } from "../slices/socialSlice";

function addNewSocialUser(
  state: IDataFormUserSocial,
  action: PayloadAction<IDataFormUserSocial>
) {
  state = action.payload;
}

export default addNewSocialUser;
