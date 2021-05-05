import React from "react";
import AcUnitOutlinedIcon from "@material-ui/icons/AcUnitOutlined";
import SendIcon from "@material-ui/icons/Send";
import MailIcon from '@material-ui/icons/Mail';
import Typography from "@material-ui/core/Typography";
import Container from "@material-ui/core/Container";
import Button from "@material-ui/core/Button";

const Icons = () => {
  return (
    <div>
      <Container gutterBottom>
        <Typography variant="h5" gutterBottom>
          Icons
        </Typography>
        <AcUnitOutlinedIcon color="secondary" fontSize="small" />
        {/* medium by default fontsize */}
        <AcUnitOutlinedIcon color="secondary" />
        <AcUnitOutlinedIcon color="primary" fontSize="large" />
      </Container>
      <Container gutterBottom>
        <Typography variant="h5" gutterBottom>
          Button Icon
        </Typography>
        <Button
          variant="contained"
          color="primary"
          startIcon={<SendIcon />}
          endIcon={<MailIcon/>}
        >Send</Button>
        <Button
          variant="contained"
          color="primary"
          startIcon={<SendIcon />}
        >Send</Button>
        <Button
          variant="contained"
          color="primary"
          endIcon={<MailIcon/>}
        >Send</Button>
      </Container>
    </div>
  );
};

export default Icons;
