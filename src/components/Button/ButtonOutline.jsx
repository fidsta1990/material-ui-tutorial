import React from "react";
import Button from "@material-ui/core/Button";
import ButtonGroup from "@material-ui/core/ButtonGroup";
import Typography from "@material-ui/core/Typography";
const ButtonOutline = () => {
  return (
    <div>
      <Typography variant="h5" gutterBottom>
        Button Outline
      </Typography>
      <ButtonGroup style={{ marginBottom: "16px" }}>
        <Button variant="outlined">Default</Button>
        <Button variant="outlined" color="primary">
          Primary
        </Button>
        <Button variant="outlined" color="secondary">
          Secondary
        </Button>
        <Button variant="outlined" disabled>
          Disabled
        </Button>
        <Button variant="outlined" color="primary" href="#outlined-buttons">
          Link
        </Button>
      </ButtonGroup>
    </div>
  );
};

export default ButtonOutline;
