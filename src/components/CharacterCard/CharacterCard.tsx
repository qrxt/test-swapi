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

  console.log(birthYear);

  return (
    <Card title={name} customStyles={[characterCardStyles, customStyles]}>
      <ul css={characterCharacteristicsStyles}>
        <li css={characterCharacteristicsItemStyles}>
          <Badge value={mass} description={"mass"} />
        </li>
        <li css={characterCharacteristicsItemStyles}>
          <Badge value={height} description={"height"} />
        </li>
      </ul>
      <ul css={characterTagsStyles}>
        {gender === "NotApplicable" ? null : (
          <li css={characterTagsItemStyles}>
            <GenderTag gender={gender} />
          </li>
        )}
        <li css={characterTagsItemStyles}>
          <Tag theme="cyan">{birthYear}</Tag>
        </li>
      </ul>
    </Card>
  );
}

export default CharacterCard;
