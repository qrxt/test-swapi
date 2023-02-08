import React from "react";
import CharacterProfile from "./CharacterProfile";
import { render } from "@testing-library/react";
import { Character, Gender } from "types/people";
import characterProfile from "../../../__tests__/locators/characterProfile";

const character: Character = {
  name: "Lord Lorem I",

  // badges
  height: 180,
  mass: 90,

  // characteristics
  eyeColor: "red",
  hairColor: "black",
  skinColor: "white",

  // tags
  birthYear: "-999",
  gender: Gender.Male,
};

describe("CharacterProfile Component", () => {
  test("Should render correctly (layout test)", async () => {
    const result = render(<CharacterProfile character={character} />);
    const profile = characterProfile(result.baseElement);

    expect(profile.wrapper()).toBeInTheDocument();
    expect(profile.name()).toHaveTextContent("Lord Lorem I");

    // Check characteristics section
    expect(profile.eyeColorName()).toHaveTextContent("eye color");
    expect(profile.eyeColorValue()).toHaveTextContent("red");

    expect(profile.skinColorName()).toHaveTextContent("skin color");
    expect(profile.skinColorValue()).toHaveTextContent("white");

    expect(profile.hairColorName()).toHaveTextContent("hair color");
    expect(profile.hairColorValue()).toHaveTextContent("black");

    // Pic
    expect(profile.profilePic()).toBeInTheDocument();

    // Check badges section
    const badgeTexts = profile
      .badgeDescriptions()
      .map((badgeText) => badgeText.textContent);
    ["mass", "height"].forEach((badgeText) =>
      expect(badgeTexts.includes(badgeText)).toBeTruthy()
    );

    const badgeValues = profile
      .badgeValues()
      .map((badgeValue) => badgeValue.textContent);
    ["90", "180"].forEach((badgeValue) =>
      expect(badgeValues.includes(badgeValue)).toBeTruthy()
    );

    // Check tags section
    expect(profile.tagsWrapper()).toBeInTheDocument();
    const tagTexts = profile.tags().map((tag) => tag.textContent);
    expect(tagTexts).toEqual(["male", "-999"]);
  });
});
