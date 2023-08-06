import { Divider, Typography, IconButton } from "@mui/material";
import FlexBetween from "components/FlexBetween";
import WidgetWrapper from "components/WidgetWrapper";
import { Box } from "@mui/material";
import "../../LoginPage.css";
import { LinkedIn, GitHub } from "@mui/icons-material";
const DevWidget = () => {

  return (
    <div id="devWidget">
      <WidgetWrapper className="moving-gradient-background">
        <FlexBetween>
          <Typography color="white" variant="h5" fontWeight="700">
            About the Dev
          </Typography>

          <Typography color="white" fontWeight="500">
            Vatsal Chawla
          </Typography>
        </FlexBetween>
        <Typography color="#dbdbdb" m="0.5rem 0">
          Pre-Final Year Student at Punjab Engineering College, Chandigarh
        </Typography>
        <img
          width="100%"
          height="auto"
          alt="skills.png"
          src="../../assets/skills.png"
          style={{ borderRadius: "0.75rem", margin: "0.75rem 0" }}
        />

        <Typography color="white" variant="h5" fontWeight="600">
          Programming Languages
        </Typography>
        <FlexBetween>
          <Typography color="white" variant="h6" fontWeight="500">
            Python
          </Typography>
          <Typography color="#dbdbdb">Proficient</Typography>
        </FlexBetween>
        <FlexBetween>
          <Typography color="white" variant="h6" fontWeight="500">
            C++
          </Typography>
          <Typography color="#dbdbdb">Familiar</Typography>
        </FlexBetween>
        <FlexBetween>
          <Typography color="white" variant="h6" fontWeight="500">
            JavaScript
          </Typography>
          <Typography color="#dbdbdb">Familiar</Typography>
        </FlexBetween>

        <Box m="0.5rem 0" />
        <Divider />
        <Box m="0.5rem 0" />
        <Typography color="white" variant="h5" fontWeight="600">
          Web Development
        </Typography>
        <FlexBetween>
          <Typography color="white" variant="h6" fontWeight="500">
            HTML, CSS
          </Typography>
        </FlexBetween>
        <FlexBetween>
          <Typography color="white" variant="h6" fontWeight="500">
            ReactJS
          </Typography>
          <Typography color="#dbdbdb">Intermediate</Typography>
        </FlexBetween>
        <FlexBetween>
          <Typography color="white" variant="h6" fontWeight="500">
            NodeJS
          </Typography>
          <Typography color="#dbdbdb">Familiar</Typography>
        </FlexBetween>
        <FlexBetween>
          <Typography color="white" variant="h6" fontWeight="500">
            ExpressJS
          </Typography>
          <Typography color="#dbdbdb">Familiar</Typography>
        </FlexBetween>
        <Box m="0.5rem 0" />
        <Divider />
        <Box m="0.5rem 0" />

        <Typography color="white" variant="h5" fontWeight="600">
          Database Management
        </Typography>
        <FlexBetween>
          <Typography color="white" variant="h6" fontWeight="500">
            SQL
          </Typography>
          <Typography color="#dbdbdb">Familiar</Typography>
        </FlexBetween>
        <FlexBetween>
          <Typography color="white" variant="h6" fontWeight="500">
            MongoDB
          </Typography>
          <Typography color="#dbdbdb">Familiar</Typography>
        </FlexBetween>

        <Box m="0.5rem 0" />
        <Divider />
        <Box m="0.5rem 0" />

        <Typography color="white" variant="h5" fontWeight="600">
          Other Skills
        </Typography>
        <FlexBetween>
          <Typography color="white" variant="h6" fontWeight="500">
            Machine Learning
          </Typography>
          <Typography color="#dbdbdb">Familiar</Typography>
        </FlexBetween>
        <FlexBetween>
          <Typography color="white" variant="h6" fontWeight="500">
            OOPs
          </Typography>
        </FlexBetween>
        <FlexBetween>
          <Typography color="white" variant="h6" fontWeight="500">
            Operating Systems
          </Typography>
        </FlexBetween>
        <Box m="0.5rem 0" />
        <Divider />
        <Box m="0.5rem 0" />
        <Box p="0rem 0">
          <Typography color="white" variant="h5" fontWeight="600">
            Social Profiles
          </Typography>

          <FlexBetween gap="1rem">
            <FlexBetween gap="1rem" alignItems="center">
              <a
                href="https://github.com/vatsal-dev"
                target="_blank"
                rel="noopener noreferrer"
              >
                <IconButton>
                  <GitHub color="white" fontSize="large" />
                </IconButton>
              </a>
              <Box>
                <Typography color="white">@vatsal-dev</Typography>
              </Box>
            </FlexBetween>
          </FlexBetween>

          <FlexBetween gap="0.5rem">
            <FlexBetween gap="1rem" alignItems="center">
              <a
                href="https://www.linkedin.com/in/vatsalchawla/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <IconButton>
                  <LinkedIn color="white" fontSize="large" />{" "}
                  {/* LinkedIn icon */}
                </IconButton>
              </a>
              <Box>
                <Typography color="white">@vatsalchawla</Typography>
              </Box>
            </FlexBetween>
          </FlexBetween>
        </Box>
      </WidgetWrapper>
    </div>
  );
};

export default DevWidget;
