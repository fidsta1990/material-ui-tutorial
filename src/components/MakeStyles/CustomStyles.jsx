import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import SendIcon from "@material-ui/icons/Send";

import Typography from "@material-ui/core/Typography";
import Container from "@material-ui/core/Container";
import Button from "@material-ui/core/Button";

const useStyles = makeStyles({
  btn: {
    fontSize: 30,
    backgroundColor: "violet",
    "&:hover": {
      backgroundColor: "blue",
    },
  },
  title: {
    textDecoration: "underline",
    marginBottom: 20,
  },
});

const CustomStyles = () => {
  const classes = useStyles();

  return (
    <div>
      <Container>
        <Typography variant="h5" gutterBottom className={classes.title}>
          Custom Styles
        </Typography>
        <Button
          className={classes.btn}
          variant="contained"
          color="secondary"
          endIcon={<SendIcon />}
        >
          Send
        </Button>
      </Container>
    </div>
  );
};

export default CustomStyles;
