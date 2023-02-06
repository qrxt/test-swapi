import React from "react";
import Header from "components/Header";
import VisuallyHidden from "components/VisuallyHidden";

function MainPage() {
  return (
    <>
      <VisuallyHidden as="h1">
        StarWars characters list application
      </VisuallyHidden>
      <Header />
    </>
  );
}

export default MainPage;
