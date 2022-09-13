import * as React from "react";
import axios from "axios";
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardHeader from "@mui/material/CardHeader";
import CardContent from "@mui/material/CardContent";
import IconButton from "@mui/material/IconButton";
import ListItemText from "@mui/material/ListItemText";
import ListItemIcon from "@mui/material/ListItemIcon";
import MoreVert from "@mui/icons-material/MoreVert";
import Delete from "@mui/icons-material/Clear";
import Edit from "@mui/icons-material/Edit";
import Typography from "@mui/material/Typography";
import Chip from "@mui/material/Chip";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import EditNote from "./EditNote";

export default function Note({
  noteHeader,
  noteBody,
  lastUpdate,
  priority,
  id,
  getData,
}) {
  const [menuAnchor, setmenuAnchor] = React.useState(null);
  const [editOpen, seteditOpen] = React.useState(false);
  const menuOpen = Boolean(menuAnchor);
  const menuClick = (event) => {
    setmenuAnchor(event.currentTarget);
  };
  const menuClose = () => {
    setmenuAnchor(null);
  };
  const editClick = () => seteditOpen(true);
  const editClose = () => seteditOpen(false);
  let priorityValue;
  let priorityColor;

  switch (priority) {
    case 1:
      priorityValue = "Yüksek Öncelikli";
      priorityColor = "error";
      break;
    case 2:
      priorityValue = "Öncelikli";
      priorityColor = "warning";
      break;
    case 3:
      priorityValue = "Az Öncelikli";
      priorityColor = "success";
      break;
    default:
      break;
  }

  const deleteNote = (id) => {
    axios
      .delete(`http://localhost:4000/api/notlar/${id}`, {
        headers: {
          Authorization: `Bearer ${localStorage.getItem("Token")}`,
        },
      })
      .then(function () {
        getData();
      });
  };

  return (
    <Box sx={{ minWidth: 275 }}>
      <Card variant="outlined">
        <React.Fragment>
          <CardHeader
            title={noteHeader}
            action={
              <div>
                <IconButton onClick={menuClick}>
                  <MoreVert />
                </IconButton>
                <Menu anchorEl={menuAnchor} open={menuOpen} onClose={menuClose}>
                  <MenuItem onClick={() => editClick()}>
                    <ListItemIcon>
                      <Edit />
                    </ListItemIcon>
                    <ListItemText>Düzenle</ListItemText>
                  </MenuItem>
                  <MenuItem onClick={() => deleteNote(id)}>
                    <ListItemIcon>
                      <Delete />
                    </ListItemIcon>
                    <ListItemText>Sil</ListItemText>
                  </MenuItem>
                </Menu>
              </div>
            }
          />
          <CardContent sx={{ paddingTop: 0 }}>
            <Typography variant="body2">{noteBody}</Typography>
            <Typography
              sx={{ fontSize: 10 }}
              color="text.secondary"
              gutterBottom
            >
              {lastUpdate}
            </Typography>
            <Chip label={priorityValue} color={priorityColor} size="small" />
          </CardContent>

          <EditNote editOpen={editOpen} editClose={editClose} noteHeader={noteHeader} noteBody={noteBody} />
        </React.Fragment>
      </Card>
    </Box>
  );
}
