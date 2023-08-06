import { Box } from "@mui/material";

const UserImage = ({ image, size = "60px", backendUrl }) => {
  return (
    <Box width={size} height={size}>
      <img
        style={{ objectFit: "cover", borderRadius: "50%" }}
        width={size}
        height={size}
        alt="user"
        src={`${backendUrl}/assets/${image}`}
      />
    </Box>
  );
};

export default UserImage;
