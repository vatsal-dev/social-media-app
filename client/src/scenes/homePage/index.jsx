import { Box, useMediaQuery } from "@mui/material";
import { useSelector } from "react-redux";
import Navbar from "scenes/navbar";
import UserWidget from "scenes/widgets/UserWidget";
import MyPostWidget from "scenes/widgets/MyPostWidget";
import PostsWidget from "scenes/widgets/PostsWidget";
import AdvertWidget from "scenes/widgets/AdvertWidget";
import FriendListWidget from "scenes/widgets/FriendListWidget";
import SkillsWidget from "scenes/widgets/skillsWidget";
import DevWidget from "scenes/widgets/devWidget";
import { Typography } from "@mui/material";
import "../../LoginPage.css";
const scrollToDevWidget = () => {
  const devWidgetElement = document.getElementById("devWidget");
  if (devWidgetElement) {
    devWidgetElement.scrollIntoView({ behavior: "smooth" });
  }
};
const HomePage = () => {
  const isNonMobileScreens = useMediaQuery("(min-width:1000px)");
  const { _id, picturePath } = useSelector((state) => state.user);

  return (
    <Box>
      <Box
        className="moving-gradient-background"
        position="sticky"
        top="0"
        zIndex="50"
        backgroundColor="white"
        p="0.5rem 6%"
        display={isNonMobileScreens ? "flex" : "block"}
        gap="0.5rem"
        justifyContent="center"
        textAlign="center" // Center align the text
      >
        {/* Add an onClick handler to link to DevWidget */}
        <Typography
          variant="h6"
          style={{ cursor: "pointer", color: "white" }}
          onClick={scrollToDevWidget} // Scroll to DevWidget on click
        >
          Learn more about the Developer
        </Typography>
      </Box>
      <Navbar />
      
      <Box
        width="100%"
        padding="2rem 6%"
        display={isNonMobileScreens ? "flex" : "block"}
        gap="0.5rem"
        justifyContent="space-between"
      >
        <Box flexBasis={isNonMobileScreens ? "26%" : undefined}>
          <UserWidget userId={_id} picturePath={picturePath} />
          <Box m="1rem 0" />
          <SkillsWidget />
        </Box>
        <Box
          flexBasis={isNonMobileScreens ? "42%" : undefined}
          mt={isNonMobileScreens ? undefined : "2rem"}
        >
          <MyPostWidget picturePath={picturePath} />
          <PostsWidget userId={_id} />
        </Box>

        <Box flexBasis="26%">
          <FriendListWidget userId={_id} />
          <Box m="1rem 0" />
          <AdvertWidget />
          <Box m="1rem 0" />
          <DevWidget />
        </Box>
      </Box>
    </Box>
  );
};

export default HomePage;
