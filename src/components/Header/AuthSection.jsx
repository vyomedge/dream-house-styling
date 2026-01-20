import { useState } from "react";
import { Box, Modal, IconButton } from "@mui/material";
import { TbMessageQuestion } from "react-icons/tb";
// import ContactForm from "../ContactUs/ContactForm"; // adjust path if needed
import CloseIcon from "@mui/icons-material/Close"; // Import CloseIcon
const AuthSection = () => {
  const [open, setOpen] = useState(false);

  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  const hide = true;

  return (
    <>
      <Box sx={{ display: "flex", alignItems: "center", ml: 2 }}>
        <IconButton onClick={handleOpen}>
          <TbMessageQuestion color="#1976d2" sx={{ color: "#606872" }} />
        </IconButton>
      </Box>

      <Modal open={open} onClose={handleClose}>
        <Box
          sx={{
            position: "absolute",
            top: "50%",
            left: "50%",
            transform: "translate(-50%, -50%)",
            bgcolor: "background.paper",
            boxShadow: 24,
            borderRadius: 2,

            width: { xs: "90%", sm: 500 },
            // height:{xs:"90%", sm:"500"}
          }}
        >
          {/* Close Button */}
          <IconButton
            onClick={handleClose}
            sx={{
              position: "absolute",
              top: 12,
              right: 12,
              bgcolor: "#f0f0f0",
              "&:hover": { bgcolor: "#e0e0e0" },
              boxShadow: 1,
            }}
            size="small"
          >
            <CloseIcon />
          </IconButton>
          {/* <ContactForm onClose={handleClose} hide={hide} /> */}
        </Box>
      </Modal>
    </>
  );
};

export default AuthSection;
