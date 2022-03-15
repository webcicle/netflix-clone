import React from "react";
import { FaqContainer } from "./containers/faqs.js";
import { JumbotronContainer } from "./containers/jumbotron";
import { FooterContainer } from "./containers/footer";

function App() {
  return (
    <>
      <JumbotronContainer />
      <FaqContainer />
      <FooterContainer />
    </>
  );
}

export default App;

