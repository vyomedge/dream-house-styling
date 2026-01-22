import { Box, Typography } from "@mui/material";
import PhoneIcon from "@mui/icons-material/Phone";
const AddressBar = () => {
  return (
    <Box sx={{  color:"#606872", padding: '2px 20px', fontSize: '14px', display: 'flex', justifyContent: 'space-between', alignItems: 'center'  , fontFamily:"Inter"}}>
      <Typography variant="body2">
      Office No.421, 4th Floor, Lodha Supremus -II, Wagle Road No.22,  Next to New Passport Office, Wagle Estate, Thane West – 400604
      </Typography>
      <Typography variant="body2" sx={{ display: 'flex',   fontSize: '14px' ,alignItems: 'center' , fontFamily:"Inter" }}>
        <PhoneIcon fontSize="small" />+91 83558 96311
      </Typography>
    </Box>
  );
};

export default AddressBar;
