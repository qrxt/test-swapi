import React from "react";
import Header from "components/Header";
import MainSection from "components/MainSection";
import VisuallyHidden from "components/VisuallyHidden";

function MainPage() {
  return (
    <>
      <VisuallyHidden as="h1">
        StarWars characters list application
      </VisuallyHidden>
      <Header />
      <MainSection />
    </>
  );
}

export default MainPage;
