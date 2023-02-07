import Badge from "components/Badge";
import GenderTag from "components/GenderTag";
import Tag from "components/Tag";
import React from "react";
import { Character } from "types/people";
import {
  badgesListItemStyles,
  badgesListStyles,
  characteristicsDefinitionStyles,
  characteristicsListItemStyles,
  characteristicsListStyles,
  characteristicsValueStyles,
  characterProfileDataStyles,
  characterProfileNameStyles,
  characterProfilePicStyles,
  characterProfileStyles,
  tagsListItemStyles,
  tagsListStyles,
} from "./CharacterProfile.style";

interface CharacterProfileProps {
  character: Character;
}

function CharacterProfile(props: CharacterProfileProps) {
  const { character = {} } = props;
  const {
    mass,
    height,
    gender,
    birthYear,
    hairColor,
    skinColor,
    eyeColor,
    name,
  } = character;

  return (
    <article css={characterProfileStyles}>
      <div css={characterProfilePicStyles}>
        <ul css={tagsListStyles}>
          {gender !== "NotApplicable" && (
            <li css={tagsListItemStyles}>
              <GenderTag gender={gender} />
            </li>
          )}
          {birthYear !== "unknown" && (
            <li css={tagsListItemStyles}>
              <Tag theme="cyan">{birthYear}</Tag>
            </li>
          )}
        </ul>
      </div>

      <div css={characterProfileDataStyles}>
        <h2 css={characterProfileNameStyles}>{name}</h2>
      </div>
      <dl css={characteristicsListStyles}>
        <div css={characteristicsListItemStyles}>
          <dt css={characteristicsDefinitionStyles}>hair color:</dt>
          <dd css={characteristicsValueStyles}>{hairColor}</dd>
        </div>

        <div css={characteristicsListItemStyles}>
          <dt css={characteristicsDefinitionStyles}>skin color:</dt>
          <dd css={characteristicsValueStyles}>{skinColor}</dd>
        </div>

        <div css={characteristicsListItemStyles}>
          <dt css={characteristicsDefinitionStyles}>eye color:</dt>
          <dd css={characteristicsValueStyles}>{eyeColor}</dd>
        </div>
      </dl>

      <ul css={badgesListStyles}>
        {mass !== "unknown" && (
          <li css={badgesListItemStyles}>
            <Badge value={mass} description={"mass"} />
          </li>
        )}
        {height !== "unknown" && (
          <li css={badgesListItemStyles}>
            <Badge value={height} description={"height"} />
          </li>
        )}
      </ul>
    </article>
  );
}

export default CharacterProfile;
