import { Fab, Tooltip } from "@mui/material";
import AddIcon from "@mui/icons-material/Add";
import Button2 from "./Button2";

const Add = () => {
  return (
    <>
      <Tooltip title="Delete">
        <Fab variant="extended" sx={{ backgroundColor: "lightblue" }}>
          <Navigation sx={{ mr: 1 }} />
          <AddIcon />
        </Fab>
      </Tooltip>
      <Button2 />
    </>
  );
};

export default Add;
