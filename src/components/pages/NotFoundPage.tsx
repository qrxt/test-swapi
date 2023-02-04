import React from "react";
import VisuallyHidden from "components/VisuallyHidden";
import NotFoundSection from "components/NotFoundSection";

function MainPage() {
  return (
    <>
      <VisuallyHidden as="h1">Not Found!</VisuallyHidden>
      <NotFoundSection />
    </>
  );
}

export default MainPage;
