import { SerializedStyles } from "@emotion/react";
import React from "react";
import { cardContentStyles, cardStyles, cardTitleStyles } from "./Card.style";

interface CardProps {
  children: React.ReactNode;
  title: string;
  customStyles?: SerializedStyles;
}

function Card(props: CardProps) {
  const { children, title, customStyles } = props;

  return (
    <article css={[cardStyles, customStyles]}>
      <header css={cardTitleStyles}>{title}</header>
      <div css={cardContentStyles}>{children}</div>
    </article>
  );
}

export default Card;
