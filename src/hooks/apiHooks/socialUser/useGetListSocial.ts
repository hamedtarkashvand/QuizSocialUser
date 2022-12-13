import * as React from "react";
import {
  fetchSocialUser,
  IinitialState,
} from "../../../Redux/socialUser/slices/socialSlice";
import { useDispatch, useSelector } from "react-redux";
import { toast } from "react-toastify";

const useGetListSocial = () => {
  const { socialUser, loading }: any = useSelector<IinitialState>(
    ({ socialUser }) => socialUser
  );
  const dispatch = useDispatch<any>();
  React.useEffect(() => {
    fetchDate();
  }, []);

  const fetchDate = React.useCallback(() => {
    dispatch( fetchSocialUser())
    .unwrap()
    .then((payload:any) =>{
        toast.success('🦄 Wow so easy!');
    })
    .catch((error:any) => console.error("rejected", error.message));
  }, [dispatch]);

  return [socialUser, { loading }];
};
export { useGetListSocial };
