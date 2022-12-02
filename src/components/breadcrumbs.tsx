import Circle from "@mui/icons-material/Circle";
import HomeIcon from "@mui/icons-material/Home";
import { Breadcrumbs as MuiBreadcrumbs , Typography } from "@mui/material";
import Link from "@mui/material/Link";
import { useTranslation } from "react-i18next";
import { useNavigate } from "react-router-dom";

  const Breadcrumbs = ()=> {
  const pathnames = window.location.pathname.split("/").filter((a) => a);
  const { t } = useTranslation();
  let history = useNavigate();
  const styleLink = {
    display: "flex",
    alignItems: "center",
    cursor: "pointer",
  };
  return (
    <div role="presentation">
      <MuiBreadcrumbs
        separator={
          <Circle
            sx={{
              mr: 0.5,
              fontSize: "10px",
            }}
            fontSize="inherit"
          />
        }
        aria-label="breadcrumb">
        {pathnames.length > 0 ? (
          <Link
            underline="none"
            sx={styleLink}
            color="inherit"
            onClick={() => history("/")}>
            <HomeIcon sx={{ mr: 0.5 }} fontSize="inherit" />

            {t("breadcrumbs.home")}
          </Link>
        ) : (
          <Typography
            sx={{ display: "flex", alignItems: "center" }}
            onClick={() => history("/")}
            color="text.primary">
            {t("breadcrumbs.home")}
          </Typography>
        )}

        {pathnames.map((path, index) => {
          const last = index === pathnames.length - 1;
          const to = `/${pathnames.slice(0, index + 1).join("/")}`;
          return last ? (
            <Typography
              key={to}
              sx={{ display: "flex", alignItems: "center" }}
              color="text.primary">
              
              {t(`breadcrumbs.${path}`)}
            </Typography>
          ) : (
            <Link
              key={to}
              sx={styleLink}
              color="inherit"
              underline="none"
              onClick={() => history(to)}>
              {t(`breadcrumbs.${path}`)}
            </Link>
          );
        })}
      </MuiBreadcrumbs>
    </div>
  );
}

export default Breadcrumbs