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
} from "@mui/material";
import { useTranslation } from "react-i18next";
import { Form, Formik, Field } from "formik";
import * as Yup from "yup";
import MyIcon from "../myIcon";

export interface ITypeSocials {
  value: string;
}

export interface IDataFormUserSetting {
  social: ITypeSocials;
  address?: string;
}

interface IFormUserSettingProps {
  titleForm?: string;
  editTableMode?: boolean;
  formValues?: IDataFormUserSetting;
  onSubmit: (arg: IDataFormUserSetting, argtwo: () => void) => void;
  cancel: () => void;
  render: boolean;
}

const FormUserSetting = ({
  titleForm,
  editTableMode = false,
  formValues = {
    address: "",
    social: { value: "" },
  },
  cancel,
  onSubmit,
  render,
}: IFormUserSettingProps) => {
  const { t, i18n } = useTranslation();

  const validationFormConnectionSchema = Yup.object().shape({
    type: Yup.object()
      .nullable()
      .required(`${i18n.t("setting.form.valdationMessages.type.required")}`),
    address: Yup.string()
      .nullable()
      .url(`${i18n.t("setting.form.valdationMessages.address.correctUrl")}`)
      .required(`${i18n.t("setting.form.valdationMessages.address.required")}`),
  });

  return (
    <Item sx={{ padding: "20px", marginTop: "10px", borderRadius: 5 }}>
      <Box>
        <Box>
          <Typography
            component="h6"
            fontSize="0.857143rem"
            children={t("setting.add")}
            sx={{ margin: "10px 0" }}
          />
        </Box>
        <Formik
          initialValues={formValues}
          enableReinitialize
          validationSchema={validationFormConnectionSchema}
          onSubmit={(values: IDataFormUserSetting, { resetForm }) =>
            onSubmit(values, resetForm)
          }>
          {({
            errors,
            touched,
            isValid,
            handleChange,
            handleBlur,
            values,
            resetForm,
            setFieldValue,
            dirty,
          }) => (
            <Form autoComplete="false">
              <Box sx={{ flexGrow: 1 }}>
                <Grid container spacing={2}>
                  <Grid item xs={4}>
                    <Field
                      component={Autocomplete}
                      // disablePortal
                      options={top100Films}
                      fullWidth={true}
                      id="Autocomplete"
                      name="type"
                      value={values.social}
                      getOptionLabel={(option: ITypeSocials) =>
                        !!option.value
                          ? t(`setting.form.autocomplete.${option.value}`)
                          : ""
                      }
                      onChange={(e: React.ChangeEvent<any>, value: any) => {
                        setFieldValue("type", value);
                      }}
                      isOptionEqualToValue={(option: any, value: any) =>
                        option.value !== value.value
                      }
                      renderInput={(params: any) => (
                        <TextField
                          {...params}
                          onBlur={handleBlur}
                          name="type"
                          error={touched.social && Boolean(errors.social)}
                          helperText={errors.social && errors.social}
                          label={t("setting.form.type")}
                        />
                      )}
                      renderOption={(
                        props: object,
                        option: ITypeSocials,
                        state: object
                      ) => (
                        <div key={option.value} {...props}>
                          {option.value ? <MyIcon icon={option.value} /> : ""}

                          {t(`setting.form.autocomplete.${option.value}`)}
                        </div>
                      )}
                    />
                  </Grid>
                  <Grid item xs={8}>
                    <Field
                      component={TextField}
                      onChange={handleChange}
                      value={values.address}
                      onBlur={handleBlur}
                      fullWidth
                      id="address"
                      label={t("setting.form.link")}
                      name="address"
                      error={touched.address && Boolean(errors.address)}
                      helperText={touched.address && errors.address}
                      variant="outlined"
                    />
                  </Grid>
                </Grid>
              </Box>

              <Box
                sx={{
                  margin: "10px 0",
                  display: "flex",
                  justifyContent: "end",
                }}>
                <Button
                  sx={{ margin: "0 5px" }}
                  color="warning"
                  size="small"
                  onClick={() => {
                    resetForm();
                    cancel();
                  }}
                  variant="outlined">
                  {t("setting.form.cancel")}
                </Button>
                <Button
                  color="warning"
                  size="small"
                  disabled={!(dirty && isValid)}
                  type="submit"
                  variant="contained"
                  // onClick={() =>  onSubmit(values , resetForm)}
                >
                  {t("setting.form.regester")}
                </Button>
              </Box>
            </Form>
          )}
        </Formik>
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

const top100Films = [
  // {value: ""},
  { value: "facebook" },
  { value: "twitter" },
  { value: "instagram" },
  { value: "linkedin" },
  { value: "language" },
  { value: "telegram" },
];

export default FormUserSetting;
