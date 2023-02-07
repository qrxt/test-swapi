import React from "react";
import Header from "components/Header";
import VisuallyHidden from "components/VisuallyHidden";
import CharactersSection from "components/CharactersSection";

function CharactersPage() {
  return (
    <>
      <VisuallyHidden as="h1">
        StarWars characters list application
      </VisuallyHidden>
      <Header />
      <CharactersSection />
    </>
  );
}

export default CharactersPage;
