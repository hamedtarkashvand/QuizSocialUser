import * as React from "react";
import AddIcon from "@mui/icons-material/Add";
import FormUserSettingEdite from "../components/forms/formUserSettingEdite";
import { useGetListSocial } from "./../hooks/apiHooks/socialUser/useGetListSocial";
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
  const [socialUser, { loading }] = useGetListSocial();
  const [collapse, setCollapse] = React.useState<boolean>(false);
  const { t } = useTranslation();

  const [initioalValues, setInitioalValues] =
    React.useState<IDataFormUserSetting[]>();

  React.useEffect(() => {
    console.log("setting");
  }, []);

  const handleCollapse = React.useCallback(() => {
    setCollapse((prev) => !prev);
  }, [initioalValues]);

  return (
    <Paper sx={{ borderRadius: 0, minHeight: "calc(100vh - 106px)" }}>
      <Container maxWidth="md">
        <Paper elevation={3} sx={{ padding: "20px", borderRadius: "20px" }}>
          {loading ? <h1>fetching ... </h1> : ""}
          <Typography
            component="h6"
            fontSize="0.857143rem"
            // children="مسیرهای ارتباطی"
            children={t("setting.socialRoute")}
          />
          <Button
            color="warning"
            size="small"
            sx={{ marginTop: "15px", marginBtoom: "15px" }}
            variant="text"
            onClick={handleCollapse}
            disabled={collapse}
            startIcon={<AddIcon sx={{ marginLeft: "8px" }} />}>
            {t("setting.add")}
          </Button>
          <Collapse in={collapse}>
            <FormUserSetting
              // formValues={initioalValues}
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
            {socialUser.map((dataForm: any) => {
              return (
                <FormUserSettingEdite
                  key={`${dataForm.social.value}`}
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

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === "dark" ? "#1A2027" : "#f4f6f8",
  ...theme.typography.body2,
  padding: theme.spacing(1),
  color: theme.palette.text.secondary,
}));

export default Setting;
