import { Divider, Typography, useTheme } from "@mui/material";
import FlexBetween from "components/FlexBetween";
import WidgetWrapper from "components/WidgetWrapper";
import { Box, useMediaQuery } from "@mui/material";
const SkillsWidget = () => {
  const { palette } = useTheme();
  const dark = palette.neutral.dark;
  const main = palette.neutral.main;
  const medium = palette.neutral.medium;

  // Replace the following skills with your own list of skills

  return (
    <WidgetWrapper className="moving-gradient-background">
      <FlexBetween>
        <Typography color="white" variant="h5" fontWeight="700">
          About the Project
        </Typography>

        <Typography color="white" fontWeight="500">
          Tech Stack
        </Typography>
      </FlexBetween>
      <Typography color="#dbdbdb" m="0.5rem 0">
        A modern social media app built with the MERN stack.
      </Typography>
      <img
        width="100%"
        height="auto"
        alt="MERN Stack"
        src="https://miro.medium.com/v2/resize:fit:678/1*l2tlJsFNg2tH6QizegKkqA.png"
        style={{ borderRadius: "0.75rem", margin: "0.75rem 0" }}
      />

      <Typography color="white" variant="h5" fontWeight="600">
        Frontend
      </Typography>
      <FlexBetween>
        <Typography color="white" variant="h6" fontWeight="500">
          HTML
        </Typography>
      </FlexBetween>
      <FlexBetween>
        <Typography color="white" variant="h6" fontWeight="500">
          CSS
        </Typography>
        <Typography color="#dbdbdb">MaterialUI</Typography>
      </FlexBetween>
      <FlexBetween>
        <Typography color="white" variant="h6" fontWeight="500">
          JavaScript
        </Typography>
        <Typography color="#dbdbdb">ReactJS</Typography>
      </FlexBetween>

      <Box m="0.5rem 0" />
      <Divider />
      <Box m="0.5rem 0" />
      <Typography color="white" variant="h5" fontWeight="600">
        Backend
      </Typography>
      <FlexBetween>
        <Typography color="white" variant="h6" fontWeight="500">
          MongoDB
        </Typography>
      </FlexBetween>
      <FlexBetween>
        <Typography color="white" variant="h6" fontWeight="500">
          NodeJS
        </Typography>
      </FlexBetween>
      <FlexBetween>
        <Typography color="white" variant="h6" fontWeight="500">
          ExpressJS
        </Typography>
      </FlexBetween>

      <Box m="0.5rem 0" />

      {/* <Box p="0rem 0"  >
        <Typography fontSize="1rem" color={main} fontWeight="500" mb="0.5rem">
          Social Profiles
        </Typography>

        <FlexBetween gap="1rem" mb="0.5rem">
          <FlexBetween gap="1rem">
            <img src="../assets/twitter.png" alt="twitter" />
            <Box>
              <Typography color={main} fontWeight="500">
                Twitter
              </Typography>
              <Typography color={medium}>Social Network</Typography>
            </Box>
          </FlexBetween>
          
        </FlexBetween>

        <FlexBetween gap="1rem">
          <FlexBetween gap="1rem">
            <img src="../assets/linkedin.png" alt="linkedin" />
            <Box>
              <Typography color={main} fontWeight="500">
                Linkedin
              </Typography>
              <Typography color={medium}>Network Platform</Typography>
            </Box>
          </FlexBetween>
          
        </FlexBetween>
      </Box> */}
    </WidgetWrapper>
  );
};

export default SkillsWidget;
