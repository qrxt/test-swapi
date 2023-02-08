import React from "react";
import { css, SerializedStyles } from "@emotion/react";
import Badge from "components/Badge";
import Card from "components/Card";
import GenderTag from "components/GenderTag";
import Tag from "components/Tag";
import { Character } from "types/people";
import {
  characterCardStyles,
  characterCharacteristicsItemStyles,
  characterCharacteristicsStyles,
  characterTagsItemStyles,
  characterTagsStyles,
} from "./CharacterCard.style";

interface CharacterCardProps {
  character: Character;
  customStyles?: SerializedStyles;
}

function CharacterCard(props: CharacterCardProps) {
  const { character, customStyles = css`` } = props;
  const { name, mass, height, gender, birthYear } = character;

  return (
    <Card title={name} customStyles={[characterCardStyles, customStyles]}>
      <ul css={characterCharacteristicsStyles}>
        {mass !== "unknown" && (
          <li css={characterCharacteristicsItemStyles}>
            <Badge value={String(mass)} description={"mass"} />
          </li>
        )}
        {height !== "unknown" && (
          <li css={characterCharacteristicsItemStyles}>
            <Badge value={String(height)} description={"height"} />
          </li>
        )}
      </ul>

      <ul css={characterTagsStyles}>
        {gender !== "NotApplicable" && (
          <li css={characterTagsItemStyles}>
            <GenderTag gender={gender} />
          </li>
        )}
        {birthYear !== "unknown" && (
          <li css={characterTagsItemStyles}>
            <Tag theme="cyan">{birthYear}</Tag>
          </li>
        )}
      </ul>
    </Card>
  );
}

export default CharacterCard;
