import * as React from "react";
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import Typography from "@mui/material/Typography";
import { Box, Button } from "@mui/material";
import AddCircleIcon from "@mui/icons-material/AddCircle";
import CancelIcon from "@mui/icons-material/Cancel";
export default function Faq() {
  const faqs = [
    {
      que: "Who can attend the cultural program?",
      ans: "Attendance is restricted to our college students only. Guests from other colleges are not permitted.",
    },
    {
      que: "Are there any dress code requirements?",
      ans: "Yes, traditional clothing such as dhoties and sarees is not allowed. Please dress in smart casuals.",
    },
    {
      que: "What do I need to enter the event?",
      ans: "Entry is only allowed with a valid student ID card. Please ensure you have it with you.",
    },
    {
      que: "Can I bring a guest?",
      ans: "No, this event is exclusive to our college students. No external guests are allowed.",
    },
    {
      que: "What time does the event start?",
      ans: "The event starts at 5 PM. Please arrive on time for entry.",
    },
    {
      que: "Is there a registration fee?",
      ans: "No, there is no registration fee to attend the cultural program.",
    },
    {
      que: "What if I forget my ID card?",
      ans: "Unfortunately, entry will not be permitted without a valid student ID. Please make sure to bring it.",
    },
    {
      que: "How can I contact the event organizers?",
      ans: "You can reach the event organizers  through our student council representatives.",
    },
  ];
  
  const [currentFaq, setCurrentFaq] = React.useState(faqs);
  const [expand, setExpand] = React.useState(false);
  const [expanded, setExpanded] = React.useState(false);

  const handleExpand = () => {
    if (expand) {
      setCurrentFaq(faqs.slice(0, 7));
      setExpand(false);
    } else {
      setCurrentFaq(faqs);
      setExpand(true);
    }
  };

  const handleChange = (panel) => (event, isExpanded) => {
    setExpanded(isExpanded ? panel : false);
  };

  return (
    <>
      <Box
        sx={{
          width: "100%",
          "& .MuiPaper-root.MuiAccordion-root": {
            boxShadow: "0px 12px 21px rgb(0 0 0 / 5%)",
            borderTop: "none",
            borderRadius: ".4rem",
            p: 1,
            bgcolor: "#111C3A",
            color: "#fff",
            mb: 2,
          },
          "& .MuiPaper-root.MuiAccordion-root.Mui-expanded": {
            boxShadow: "0px 12px 21px rgb(0 0 0 / 5%)",
            borderTop: "none",
            borderRadius: ".4rem",
            background: "linear-gradient(60deg, #ED1E79, #662D8C)",
            color: "#fff",
            p: 1,
          },
          "& .MuiPaper-root.MuiAccordion-root:before": {
            height: 0,
          },
          "& .MuiButtonBase-root.MuiAccordionSummary-root.Mui-expanded": {
            color: "#fff",
          },
          "& .MuiCollapse-root": {
            color: "#fff",
          },
          "& .MuiAccordionSummary-expandIconWrapper.Mui-expanded": {
            background: "transparent",
            color: "#fff",
          },
          "& .MuiAccordionSummary-expandIconWrapper": {
            background: "transparent",
            color: "#fff",
          },
          display: "flex",
          flexDirection: "column",
          gap: 1,
        }}
        data-aos="zoom-in-up"
        data-aos-duration="2000"
      >
        {currentFaq.map((i, k) => (
          <Accordion
            key={k}
            expanded={expanded === k}
            onChange={handleChange(k)}
          >
            <AccordionSummary
              expandIcon={expanded === k ? <CancelIcon /> : <AddCircleIcon />}
              aria-controls={`panel1a-content-${k}`}
              id={`panel1a-header-${k}`}
            >
              <Typography
                variant="h3"
                sx={{
                  fontSize: { xs: "1rem", xl: "1.2rem" },
                  fontWeight: 400,
                }}
              >
                {i.que}
              </Typography>
            </AccordionSummary>
            <AccordionDetails>
              <Typography
                variant="h4"
                sx={{
                  fontSize: { xs: "1rem", xl: "1.2rem" },
                  fontWeight: 400,
                }}
              >
                {i.ans}
              </Typography>
            </AccordionDetails>
          </Accordion>
        ))}
      </Box>
    </>
  );
}
