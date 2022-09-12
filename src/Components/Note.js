import * as React from "react";
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Chip from '@mui/material/Chip';

export default function Note({ noteHeader, noteBody, lastUpdate, priority }) {
    let priorityValue;
    let priorityColor;

        switch (priority) {
            case 1:
                priorityValue =  'Yüksek Öncelikli'
                priorityColor = 'error'
                break
            case 2:
                priorityValue= 'Öncelikli'
                priorityColor = 'warning'
                break
            case 3:
                priorityValue= 'Az Öncelikli'
                priorityColor = 'success'
                break
            default:
                break;
        }

  return (
    <Box sx={{ minWidth: 275 }}>
      <Card variant="outlined">
        <React.Fragment>
          <CardContent>
            <Typography variant="h5" component="div">
              {noteHeader}
            </Typography>
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
