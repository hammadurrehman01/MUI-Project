import {
  Avatar,
  Card,
  CardActions,
  CardContent,
  CardHeader,
  CardMedia,
  Checkbox,
  IconButton,
  Typography,
} from "@mui/material";
import { MoreVert, Favorite, Share, FavoriteBorder } from "@mui/icons-material";
import { red } from "@mui/material/colors";
import { postsData } from "../constants";

const Posts = () => {
  return (
    <>
      {postsData.map((post) => (
        <Card key={post.id} sx={{ maxWidth: "80%", margin: "25px auto" }}>
          <>
            <CardHeader
              avatar={
                <Avatar
                  sx={{ bgcolor: red[500] }}
                  aria-label="recipe"
                  src={post.dp}
                />
              }
              action={
                <IconButton aria-label="settings">
                  <MoreVert />
                </IconButton>
              }
              title={post.fullName}
              subheader={post.date}
            />
            <CardMedia
              component="img"
              height="20%"
              image={post.postImage}
              alt="Post"
            />
            <CardContent>
              <Typography variant="body2" color="text.secondary">
                {post.description}
              </Typography>
            </CardContent>
            <CardActions disableSpacing>
              <IconButton aria-label="add to favorites">
                <Checkbox
                  icon={<FavoriteBorder />}
                  checkedIcon={<Favorite sx={{ color: "#d32f2f" }} />}
                />
              </IconButton>
              <IconButton aria-label="share">
                <Share />
              </IconButton>
            </CardActions>
          </>
        </Card>
      ))}
    </>
  );
};

export default Posts;
