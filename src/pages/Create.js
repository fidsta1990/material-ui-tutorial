import React from "react";
import Typograph from "../components/Typography/Typograph";
import { ButtonOutline, ButtonContain, Icons } from "../components/Button";
import TextFields from "../components/TextField/TextFields";
import MakeStyles from "../components/MakeStyles/CustomStyles";
import Container from "@material-ui/core/Container";

export default function Create() {
  return (
    <div>
      <Container>
        <Typograph />
        <ButtonOutline />
        <ButtonContain />
      </Container>
        <Icons />
        <br />
        <TextFields />
        <br />
        <MakeStyles />
        
    </div>
  );
}
