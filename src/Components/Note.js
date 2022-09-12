import * as React from "react";
import axios from "axios";
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardHeader from "@mui/material/CardHeader";
import CardContent from "@mui/material/CardContent";
import IconButton from "@mui/material/IconButton";
import Delete from "@mui/icons-material/Clear";
import Typography from "@mui/material/Typography";
import Chip from "@mui/material/Chip";

export default function Note({
  noteHeader,
  noteBody,
  lastUpdate,
  priority,
  id,
  getData
}) {
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

  const deleteNote =(id)=>{
    axios
      .delete(`http://localhost:4000/api/notlar/${id}`, {
        headers: {
          Authorization: `Bearer ${localStorage.getItem("Token")}`,
        },
      }).then(function () {
        getData();
      });
  }

  return (
    <Box sx={{ minWidth: 275 }}>
      <Card variant="outlined">
        <React.Fragment>
          <CardHeader
            title={noteHeader}
            action={
              <IconButton onClick={()=> deleteNote(id)}>
                <Delete />
              </IconButton>
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
          {/* <CardActions>
            <Button size="small">Learn More</Button>
          </CardActions> */}
        </React.Fragment>
      </Card>
    </Box>
  );
}
