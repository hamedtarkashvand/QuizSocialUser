import * as React from 'react'
import { Container, Typography, Paper, Box, Link } from "@mui/material";
import { useNavigate } from "react-router-dom";
import { useTranslation } from "react-i18next";
import Accordion from "../components/accordion";
function Home() {
  const { t } = useTranslation();
  const history = useNavigate();

  React.useEffect(()=>{
    console.log( 'home')
  },[])

  return (
    <>
      <Paper sx={{ borderRadius: 0 }} style={{ height: "calc(100vh - 106px)" }}>
        <Container maxWidth="md">
          <Box>
            <Typography
              lineHeight="1.75"
              fontSize="1.07143rem"
              color="currentcolor"
              component="h6">
              {t("home.boxOne.caption")}
            </Typography>
            <Typography lineHeight="1.75" fontSize="0.857143rem" component="h6">
              {t("home.boxOne.pography")}
            </Typography>
          </Box>

          <Box sx={{ margin: "20px 0" }}>
            <Typography
              lineHeight="1.75"
              fontSize="1.07143rem"
              color="currentcolor"
              component="h6">
              {t("home.boxTwo.caption")}
            </Typography>
            <Typography lineHeight="1.75" fontSize="0.857143rem" component="h6">
              {t("home.boxTwo.pography")}
              <Link
                sx={{ margin: "0 9px" }}
                component="button"
                color="rgb(255, 168, 46)"
                variant="body2"
                onClick={() => history("/settings")}>
                {t("home.boxTwo.link")}
              </Link>
              {t("home.boxTwo.pographyTow")}
            </Typography>
          </Box>

          <Box>
            <Typography
              lineHeight="1.75"
              fontSize="0.857143rem"
              color="currentcolor"
              component="h6">
              این آزمون در سه سطح طراحی شده است که در زیر شرح آنها را مشاهده
              خواهید کرد:
            </Typography>
            <Typography lineHeight="1.75" fontSize="0.857143rem" component="h6">
              لطفا یکی از سطوح زیر را انتخاب کرده و انجام دهید در نهایت محصول
              کار خود را بر روی یک repository ارسال کرده و لینک دسترسی یا فایل
              فشرده شده پروژه را جهت بررسی برای ما ارسال کنید.
            </Typography>
          </Box>

          <Box sx={{ margin: "20px 0" }}>
            <Typography
              lineHeight="1.75"
              fontSize="1.07143rem"
              color="currentcolor"
              component="h6">
              الزامات آزمون:
            </Typography>
            <Typography lineHeight="1.75" fontSize="0.857143rem" component="h6">
              لطفا ساختار نرم افزار بر پایه Typescript React و با استفاده از
              کتابخانه Material Ui پیاده سازی شود.
            </Typography>
          </Box>
          <Box>
            <Typography
              lineHeight="1.75"
              fontSize="0.857143rem"
              color="currentcolor"
              component="h6">
              نکته :
            </Typography>
            <Typography lineHeight="1.75" fontSize="0.857143rem" component="h6">
              هرچقدر محصول پیاده سازی شده توسط شما به پروژه حاضر شبیه تر باشد
              ارزش و امتیاز بیشتری خواهد داشت.
            </Typography>
          </Box>

          <Box sx={{ margin: "20px 0" }}>
            <Accordion
              data={[
                {
                  title: "سطح یک",
                  content:
                    "با توجه به الزامات ذکر شده در بالا فقط صفحه تنظیمات کاربری را بدون کن :",
                },
                {
                  title: "سطح دوم",
                  content:
                    "ه علاوه الزامات ذکر شده در بالا لطفا برای پیاده سازی پروژه از NextJS و برای پیاده سازی فورم ها از یک کتابخانه مدیریت فورم به انتخاب خود استفاده کنید و لطفا علاوه بر مفروضات سطح قبلی از مفروضات زیر نیز پیروی کنید :",
                },
                {
                    title: "سطح سوم",
                    content:
                     "ه علاوه الزامات ذکر شده در بالا لطفا برای پیاده سازی پروژه از NextJS و برای پیاده سازی فورم ها از یک کتابخانه :"
                  }
              ]}
            />
          </Box>
        </Container>
      </Paper>
    </>
  );
}

export default Home;
