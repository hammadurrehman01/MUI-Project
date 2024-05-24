import { useState } from "react";
import {
  AppBar,
  Avatar,
  Badge,
  Box,
  InputBase,
  Menu,
  MenuItem,
  Toolbar,
  Typography,
  styled,
} from "@mui/material";

import { Segment, Email, Notifications } from "@mui/icons-material";

const StyledToolbar = styled(Toolbar)({
  display: "flex",
  justifyContent: "space-between",
});

const Search = styled("div")(({ theme }) => ({
  backgroundColor: "white",
  padding: "0 10px",
  borderRadius: theme.shape.borderRadius,
  width: "40%",
}));

const Icons = styled(Box)(({}) => ({
  display: "flex",
  alignItems: "center",
  gap: "20px",
}));

const UserBox = styled(Box)(({ theme }) => ({
  display: "flex",
  alignItems: "center",
  gap: "10px",
}));

const Navbar = () => {
  const [open, setOpen] = useState(false);
  return (
    <AppBar position="fixed" sx={{ padding: "10px 0" }}>
      <StyledToolbar variant="h6">
        <Typography
          variant="h6"
          sx={{
            display: { xs: "none", sm: "block" },
          }}
        >
          HammadDev
        </Typography>
        <Segment
          sx={{
            display: { xs: "block", sm: "none" },
          }}
        />
        <Search>
          <InputBase placeholder="Search..."></InputBase>
        </Search>
        <Icons sx={{ display: { xs: "none", md: "flex" } }}>
          <Badge badgeContent={4} color="error" sx={{ cursor: "pointer" }}>
            <Email color="white" />
          </Badge>
          <Badge badgeContent={4} color="error" sx={{ cursor: "pointer" }}>
            <Notifications color="white" />
          </Badge>
          <Avatar
            onClick={() => setOpen(true)}
            sx={{
              width: 30,
              height: 30,
              cursor: "pointer",
            }}
            src="https://media.licdn.com/dms/image/D4D03AQFyGPprPhAn8g/profile-displayphoto-shrink_100_100/0/1711789848084?e=1721865600&v=beta&t=n7xP50scfUvh_BRkeamz1C5acP8qgwdG6FKtqpcL3X4"
          />
        </Icons>
        <UserBox sx={{ display: { xs: "flex", md: "none" } }}>
          <Avatar
            onClick={() => setOpen(true)}
            sx={{
              width: 30,
              height: 30,
              cursor: "pointer",
            }}
            src="https://media.licdn.com/dms/image/D4D03AQFyGPprPhAn8g/profile-displayphoto-shrink_100_100/0/1711789848084?e=1721865600&v=beta&t=n7xP50scfUvh_BRkeamz1C5acP8qgwdG6FKtqpcL3X4"
          />
          <Typography variant="span">Hammad01</Typography>
        </UserBox>
      </StyledToolbar>
      <Menu
        onClose={() => setOpen(false)}
        id="demo-positioned-menu"
        aria-labelledby="demo-positioned-button"
        open={open}
        anchorOrigin={{
          vertical: "top",
          horizontal: "right",
        }}
        transformOrigin={{
          vertical: "top",
          horizontal: "right",
        }}
      >
        <MenuItem>Profile</MenuItem>
        <MenuItem>My account</MenuItem>
        <MenuItem>Logout</MenuItem>
      </Menu>
    </AppBar>
  );
};

export default Navbar;
