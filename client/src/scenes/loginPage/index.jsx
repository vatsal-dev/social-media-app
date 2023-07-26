import { Box, Typography, useTheme, useMediaQuery } from "@mui/material";
import Form from "./Form";
import "../../LoginPage.css"
const LoginPage = () => {
  const theme = useTheme();
  const isNonMobileScreens = useMediaQuery("(min-width: 1000px)");
  return (
    <Box className="moving-gradient-background" height="100%">
      <Box
        width="100%"
        //backgroundColor={theme.palette.background.alt}
        p="1rem 6%"
        textAlign="center"
      >
        <Typography fontWeight="bold" fontSize="50px" color="white" sx={{ mb: "-0.7rem" }}>
          BuZZ
        </Typography>
        <Typography fontWeight="regular" fontSize="15px" color="white">
          A Social Media App for the New Gen!
        </Typography>
      </Box>

      <Box
        width={isNonMobileScreens ? "50%" : "93%"}
        p="2rem"
        m="2rem auto"
        borderRadius="1.5rem"
        backgroundColor={theme.palette.background.alt}
      >
        <Typography
          fontWeight="500"
          variant="h6"
          sx={{
            mb: "1.5rem",
            textAlign: "center",
          }}
        >
          Login or Create a New Account to get started!
        </Typography>

        <Form />
      </Box>
    </Box>
  );
};

export default LoginPage;
