import { Paper, Typography } from "@mui/material";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import { useContext } from "react";
import { useTranslation } from "react-i18next";
import { ColorModeContext } from "../context/themContext";
import Breadcrumbs from "./breadcrumbs";
import ButtonGroup from "./buttonGroupLanguage";
import SwitchButton from "./switch";

interface IHeaderProps {
  onChangeTheme?: React.MouseEvent<HTMLElement>;
}

function Header({ onChangeTheme }: IHeaderProps) {
  const theme = useContext(ColorModeContext);
  const { t } = useTranslation();
  return (
    <Paper sx={{ borderRadius: 0, boxShadow: 0 }}>
      <Container maxWidth="md">
        <Box
          sx={{
            justifyContent: "space-between",
            display: "flex",
            alignItems: "center",
          }}>
          <Typography component="h1">{t("setting user")}</Typography>
          <Box>
          <ButtonGroup />
            <SwitchButton
              onChange={() => {
                theme.toggleColorMode();
              }}/>
          </Box>
        </Box>

        <Box
          sx={{
            boxShadow: 0,
            paddingBottom: 2,
            marginTop: 2,
            display: "flex",
            justifyContent: "start",
          }}>
          <Breadcrumbs />
        </Box>
      </Container>
    </Paper>
  );
}

export default Header;
