import React from "react";
import { css } from "@emotion/react";
import Badge from "components/Badge";
import Card from "components/Card";
import Tag from "components/Tag";
import { charactersSectionStyles } from "./CharactersSection.style";

function CharactersSection() {
  return (
    <section css={charactersSectionStyles}>
      <Card
        title="Jango Fef"
        customStyles={css`
          display: flex;
          width: 350px;
          margin: 30px;
        `}
      >
        <Tag theme="yellow">male</Tag>
      </Card>
    </section>
  );
}

export default CharactersSection;
