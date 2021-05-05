import React, { useState } from "react";
import TextField from "@material-ui/core/TextField";
import Container from "@material-ui/core/Container";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";
import Button from "@material-ui/core/Button";
const useStyles = makeStyles({
  field: {
    marginTop: 20,
    display: "block",
    marginBottom: 20,
  },
});

const TextFields = () => {
  const classes = useStyles();
  const [title, setTitle] = useState("");
  const [details, setDetails] = useState("");
  const [titleError, setTitleError] = useState(false);
  const [detailsError, setDetailsError] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setTitleError(false);
    setDetailsError(false);
    if (title === "") {
      setTitleError(true);
      // setTimeout(() => setTitleError(false), 3000);
    }
    if (details === "") {
      setDetailsError(true);
      // setTimeout(() => setDetailsError(false), 3000);
    }

    if (title && details) {
      console.log(title, details);
    }
  };

  return (
    <Container>
      <Typography variant="h6" component="h2" gutterBottom color="textPrimary">
        Text Field
      </Typography>
      {/* noValidate turns off google validate fields */}
      {/* required just adds an asterisk, no validation added */}
      <form noValidate autoComplete="off" onSubmit={handleSubmit}>
        <TextField
          onChange={(e) => setTitle(e.target.value)}
          label="Note Title"
          variant="outlined"
          color="secondary"
          fullWidth
          required
          className={classes.field}
          error={titleError}
        />
        <TextField
          label="Details"
          variant="outlined"
          color="secondary"
          multiline
          rows={4}
          fullWidth
          required
          error={detailsError}
          className={classes.field}
          onChange={(e) => setDetails(e.target.value)}
        />
        <Button type="submit" variant="contained" color="primary">
          Secondary
        </Button>
      </form>
    </Container>
  );
};

export default TextFields;
