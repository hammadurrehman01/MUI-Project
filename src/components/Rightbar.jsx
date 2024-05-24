import {
  Avatar,
  AvatarGroup,
  Box,
  ImageList,
  ImageListItem,
  Typography,
} from "@mui/material";
import React from "react";
import { postsData } from "../constants";
import CustomText from "../pages/CustomText";

const Rightbar = () => {
  return (
    <Box
      p={2}
      paddingRight={1}
      flex={2}
      sx={{
        display: { xs: "none", md: "block" },
      }}
    >
      <Box
        sx={{
          position: "fixed",
          top: "6rem",
        }}
      >
        <CustomText title="My Friends" />
        <AvatarGroup
          sx={{ cursor: "pointer", justifyContent: "start" }}
          max={6}
        >
          <Avatar
            alt="Remy Sharp"
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTbiBkMhBMOtv_5tt3LiebQPpIQ0f6dUm5-Xw&s"
          />
          <Avatar
            alt="Travis Howard"
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRqxRGDxScnshH0TNwWNI-0PKASBEM6nrpcaQ&s"
          />
          <Avatar
            alt="Cindy Baker"
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTUeODHKVq9WCkS9rgndct2-R5gMFER6f_tvw&s"
          />
          <Avatar
            alt="Agnes Walker"
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRUGkOustinQ05XQ1NonyBj2sYKuxkVA_KZ8g&s"
          />
          <Avatar
            alt="Trevor Henderson"
            src="https://cradlepoint.com/wp-content/uploads/2021/03/Rodeghiero-Paul-sq.jpg"
          />
          <Avatar
            alt="Trevor Henderson"
            src="https://uefconnect.uef.fi/wp-content/uploads/2019/12/371d8b2d8938359beb25d77642f6ec09_profile_file-500x500.jpg"
          />
          <Avatar
            alt="Trevor Henderson"
            src="https://geo-media.beatsource.com/image_size/500x500/7/b/4/7b450b5f-9432-4ca4-8c76-7207df22d19c.jpg"
          />
        </AvatarGroup>
        <CustomText title="Latest Photos" />
        <ImageList
          sx={{
            width: 300,
            height: 400,
            overflow: "hidden",
            cursor: "pointer",
          }}
          cols={2}
          rowHeight={140}
        >
          {postsData.map((item) => (
            <ImageListItem key={item.id}>
              <img src={item.postImage} alt="photo" />
            </ImageListItem>
          ))}
        </ImageList>
      </Box>
    </Box>
  );
};

export default Rightbar;
