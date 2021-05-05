import React from "react";
import Typography from "@material-ui/core/Typography";

const Typograph = () => {
  return (
    <div>
      {/* default p tag */}
      <Typography>Hello</Typography>
      {/* Overrides the behavior of variant mapping, on console will show h2 tag instead of h6 */}
      <Typography variant="h6" component="h2" gutterBottom color="textPrimary">
        Create a new note (gutterBottom prop added, creates margin on bottom)
      </Typography>

      <Typography variant="h3" color="primary" gutterBottom>
        h3 tag with primary color
      </Typography>
    </div>
  );
};

export default Typograph;
