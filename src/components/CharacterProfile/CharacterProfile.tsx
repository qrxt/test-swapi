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
  dataTestPrefix?: string;
}

function CharacterProfile(props: CharacterProfileProps) {
  const { character } = props;
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
    <article
      css={characterProfileStyles}
      data-testid="character-profile-wrapper"
    >
      <div
        css={characterProfilePicStyles(gender)}
        data-testid="character-profile-pic"
      >
        <ul css={tagsListStyles} data-testid="character-profile-tags">
          {gender !== "NotApplicable" && (
            <li css={tagsListItemStyles} data-testid="character-profile-tag">
              <GenderTag gender={gender} />
            </li>
          )}
          {birthYear !== "unknown" && (
            <li css={tagsListItemStyles} data-testid="character-profile-tag">
              <Tag theme="cyan">{birthYear}</Tag>
            </li>
          )}
        </ul>
      </div>

      <div css={characterProfileDataStyles}>
        <h2
          css={characterProfileNameStyles}
          data-testid="character-profile-name"
        >
          {name}
        </h2>
        <dl css={characteristicsListStyles}>
          <div css={characteristicsListItemStyles}>
            <dt
              css={characteristicsDefinitionStyles}
              data-testid="character-profile-hair-color-name"
            >
              hair color:
            </dt>
            <dd
              css={characteristicsValueStyles}
              data-testid="character-profile-hair-color-value"
            >
              {hairColor}
            </dd>
          </div>

          <div css={characteristicsListItemStyles}>
            <dt
              css={characteristicsDefinitionStyles}
              data-testid="character-profile-skin-color-name"
            >
              skin color:
            </dt>
            <dd
              css={characteristicsValueStyles}
              data-testid="character-profile-skin-color-value"
            >
              {skinColor}
            </dd>
          </div>

          <div css={characteristicsListItemStyles}>
            <dt
              css={characteristicsDefinitionStyles}
              data-testid="character-profile-eye-color-name"
            >
              eye color:
            </dt>
            <dd
              css={characteristicsValueStyles}
              data-testid="character-profile-eye-color-value"
            >
              {eyeColor}
            </dd>
          </div>
        </dl>

        <ul css={badgesListStyles}>
          {mass !== "unknown" && (
            <li css={badgesListItemStyles}>
              <Badge value={String(mass)} description={"mass"} />
            </li>
          )}
          {height !== "unknown" && (
            <li css={badgesListItemStyles}>
              <Badge value={String(height)} description={"height"} />
            </li>
          )}
        </ul>
      </div>
    </article>
  );
}

export default CharacterProfile;
