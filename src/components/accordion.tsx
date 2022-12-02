
import {
  Accordion as MuiAccordion,
  AccordionSummary,
  AccordionDetails,
  Typography,
  Box,
  styled
} from "@mui/material";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";

interface IdataItems {
  title: string;
  content: string;
}

interface IAccordionProps {
  data: IdataItems[];
}

const Accordion = ({ data }: IAccordionProps) => {
  return (
    <Box>
      {data.map((item: IdataItems) => {
        return (
          <MyStyleMuiAccordion key={item.title} className="CAccordionSummary">
            <AccordionSummary
              expandIcon={<ExpandMoreIcon />}
              aria-controls="panel1a-content"
              id="panel1a-header">
              <Typography>{item.title}</Typography>
            </AccordionSummary>
            <AccordionDetails>
              <Typography>
                {item.content}
              </Typography>
            </AccordionDetails>
          </MyStyleMuiAccordion>
        );
      })}
    </Box>
  );
};

const MyStyleMuiAccordion = styled(MuiAccordion)(({ theme }) => ({
  "&.CAccordionSummary": {
    backgroundColor:
      theme.palette.mode === "dark" ? "rgb(32, 42, 53)" : "unset",
    backgroundImage:
      "linear-gradient(rgba(255, 255, 255, 0.05), rgba(255, 255, 255, 0.05))",
  },
}));

export default Accordion;
