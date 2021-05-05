import React from "react";
import Typograph from "../components/Typography/Typograph";
import { ButtonOutline, ButtonContain, Icons } from "../components/Button";
import MakeStyles from "../components/MakeStyles/CustomStyles";
import Container from "@material-ui/core/Container";

export default function Create() {
  return (
    <div>
      <Container>
        <Typograph />
        <ButtonOutline />
        <ButtonContain />
        <Icons />
        <br />
        <MakeStyles />
      </Container>
    </div>
  );
}
