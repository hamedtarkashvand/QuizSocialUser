
import FacebookIcon from "@mui/icons-material/Facebook";
import TwitterIcon from "@mui/icons-material/Twitter";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import InstagramIcon from "@mui/icons-material/Instagram";
import LanguageIcon from "@mui/icons-material/Language";
import TelegramIcon from "@mui/icons-material/Telegram";


const MyIcon = ({ icon }: { icon?: string })=> {

    const sx = {
        marginLeft: "10px",
      };

      switch (icon) {
        case "facebook":
          return <FacebookIcon sx={sx} />;
          break;
        case "twitter":
          return <TwitterIcon sx={sx} />;
          break;
        case "linkedin":
          return <LinkedInIcon sx={sx} />;
          break;
        case "instagram":
          return <InstagramIcon sx={sx} />;
          break;
        case "telegram":
          return <TelegramIcon sx={sx} />;
          break;
        case "language":
          return <LanguageIcon sx={sx} />;
          break;
        default:
          return <LanguageIcon sx={sx} />;
      }
}

export default MyIcon
