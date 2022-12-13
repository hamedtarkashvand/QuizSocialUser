import * as React from "react";
import {
  Typography,
  Paper,
  Box,
  Button,
  Grid,
  TextField,
  Autocomplete,
  styled,
  Collapse,
  Link,
} from "@mui/material";

import { useTranslation } from "react-i18next";
import MyIcon from "../myIcon";

import EditIcon from "@mui/icons-material/Edit";

import DeleteIcon from '@mui/icons-material/Delete';

import FormUserSetting, { IDataFormUserSetting } from "./formUserSetting";

interface IFormUserSettingEdite {
  data : IDataFormUserSetting,
  onSubmitEdite: (arg: IDataFormUserSetting, closeEditeForm: () => void) => void,
}

const FormUserSettingEdite = ({
  data,
  onSubmitEdite
}:IFormUserSettingEdite) => {
  const { t } = useTranslation();
  const [collapse, setCollapse] = React.useState<boolean>(false);
  const [initioalValues, setInitioalValues] =
    React.useState<IDataFormUserSetting>({
      address: "frontends",
      social: {value: "facebook"},
    });


    const handleCollapse = React.useCallback(()=>{
      setCollapse((prev) => !prev);
    },[initioalValues])

  // const handleCollapse = (): void => {
  //   setCollapse((prev) => !prev);
  // };

  React.useEffect(()=>{
     setInitioalValues(data)
  },[data])

  return (
    <Item sx={{ padding: "20px", marginTop: "10px", borderRadius: 5 }}>
      <Box>
        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
          }}>
          <Box
            sx={{
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
            }}>
            <MyIcon icon={data.social.value} />
            <Typography
              component="h6"
              fontSize="0.857143rem"
              children={t(`setting.form.icon.${data.social.value}`)}
              sx={{ margin: "10px 0" }}
            />

            <Typography
              component="h6"
              fontSize="0.657143rem"
              children={`${t('setting.form.link')} : `}
              sx={{ margin: "10px 5px" }}
            />
            <Link color="#ffa726" underline="always" href={data.address} children={data.address} />    
          </Box>
          <Box>
            <Button
              color="warning"
              size="small"
              variant="text"
              onClick={handleCollapse}
              disabled={collapse}
              startIcon={<EditIcon sx={{ marginLeft: "8px" }} />}>
              {t('setting.form.edite')}
            </Button>
            <Button
              color="error"
              size="small"
              variant="text"
              // onClick={handleCollapse}
              // disabled={collapse}
              startIcon={<DeleteIcon  />}>
               {t('setting.form.delete')}
            </Button>
          </Box>
        </Box>

        <Collapse in={collapse}>
          <FormUserSetting
            formValues={initioalValues}
            render={collapse}
            onSubmit={(data: IDataFormUserSetting) => {onSubmitEdite(data,handleCollapse)}}
            cancel={handleCollapse}
          />
        </Collapse>
      </Box>
    </Item>
  );
};

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === "dark" ? "#1A2027" : "#f4f6f8",
  ...theme.typography.body2,
  padding: theme.spacing(1),
  color: theme.palette.text.secondary,
}));



export default FormUserSettingEdite;
