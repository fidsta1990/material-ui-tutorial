import React from "react";
import Button from "@material-ui/core/Button";
import ButtonGroup from "@material-ui/core/ButtonGroup";
import Typography from "@material-ui/core/Typography";

const ButtonContain = () => {
  return (
    <div>
      <Typography variant="h5" gutterBottom>
        Contained Button
      </Typography>
      <ButtonGroup style={{ marginBottom: "16px" }}>
        <Button variant="contained">Default</Button>
        <Button variant="contained" color="primary">
          Primary
        </Button>
        <Button variant="contained" color="secondary">
          Secondary
        </Button>
        <Button variant="contained" disabled>
          Disabled
        </Button>
        <Button variant="contained" color="primary" href="#contained-buttons">
          Link
        </Button>
      </ButtonGroup>
    </div>
  );
};

export default ButtonContain;
