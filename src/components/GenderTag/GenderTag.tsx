import React from "react";
import Tag, { TagTheme } from "components/Tag/Tag";
import { Gender } from "types/people";

type ThemableGender = Exclude<Gender, "NotApplicable">;
const genderToTagTheme: Record<ThemableGender, TagTheme> = {
  [Gender.Male]: "green",
  [Gender.Female]: "magenta",
  [Gender.Unknown]: "yellow",
};

interface GenderTagProps {
  gender: ThemableGender;
}

function GenderTag(props: GenderTagProps) {
  const { gender } = props;

  return <Tag theme={genderToTagTheme[gender]}>{gender}</Tag>;
}

export default GenderTag;
