import { Box } from "@mui/material";
import Posts from "../pages/Posts";

const Feed = () => {
  return (
    <Box
      p={2}
      flex={4}
    >
      <Posts />
    </Box>
  );
};

export default Feed;
