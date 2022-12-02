import * as React from "react";
import { useDispatch, useSelector  } from "react-redux";
import AddIcon from "@mui/icons-material/Add";
import FormUserSettingEdite from "../components/forms/formUserSettingEdite";
import  {fetchSocialUser} from "./../Redux/socialUser/slices/socialSlice";

import {
  Container,
  Typography,
  Paper,
  Button,
  Collapse,
  styled,
  Box,
} from "@mui/material";
import { useTranslation } from "react-i18next";

import FormUserSetting, {
  IDataFormUserSetting,
} from "../components/forms/formUserSetting";

function Setting() {
  const [collapse, setCollapse] = React.useState<boolean>(false);
  const { t } = useTranslation();
  const dispatch = useDispatch<any>();

  const [initioalValues, setInitioalValues] =
    React.useState<IDataFormUserSetting>({
      address: "",
      type: { value: "" },
    });
  const handleCollapse = React.useCallback(() => {
    setCollapse((prev) => !prev);
  }, [initioalValues]);

  

  React.useEffect(() => {
    dispatch(fetchSocialUser())
  }, []);

  return (
    <Paper sx={{ borderRadius: 0, minHeight: "calc(100vh - 106px)" }}>
      <Container maxWidth="md">
        <Paper elevation={3} sx={{ padding: "20px", borderRadius: "20px" }}>
          <Typography
            component="h6"
            fontSize="0.857143rem"
            children="مسیرهای ارتباطی"
          />
          <Button
            color="warning"
            size="small"
            sx={{ marginTop: "15px", marginBtoom: "15px" }}
            variant="text"
            onClick={handleCollapse}
            disabled={collapse}
            startIcon={<AddIcon sx={{ marginLeft: "8px" }} />}>
            افزودن مسیر
          </Button>
          <Collapse in={collapse}>
            <FormUserSetting
              formValues={initioalValues}
              render={collapse}
              onSubmit={(data: IDataFormUserSetting, resetForm) => {
                console.log(data);
                setTimeout(() => {
                  console.log("reset");
                  resetForm();
                  handleCollapse();
                }, 1600);
              }}
              cancel={handleCollapse}
            />
          </Collapse>
          <Box>
            {listSubmitDada.map((dataForm: IDataFormUserSetting) => {
              return (
                <FormUserSettingEdite
                  key={dataForm.type.value}
                  data={dataForm}
                  onSubmitEdite={(
                    data: IDataFormUserSetting,
                    closeEditeForm
                  ) => {
                    console.log(data);
                    setTimeout(() => {
                      console.log("edite form");
                      // resetForm();
                      closeEditeForm();
                    }, 1600);
                  }}
                />
              );
            })}
          </Box>
        </Paper>
      </Container>
    </Paper>
  );
}

const listSubmitDada = [
  {
    address: "https://facebook.com/123yduی",
    type: {
      value: "facebook",
    },
  },
  {
    address: "https://twitter.com/123yduی",
    type: {
      value: "twitter",
    },
  },
];

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === "dark" ? "#1A2027" : "#f4f6f8",
  ...theme.typography.body2,
  padding: theme.spacing(1),
  color: theme.palette.text.secondary,
}));

export default Setting;
