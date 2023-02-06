import React from "react";
import { badgeCircleStyles, badgeStyles, badgeTextStyles } from "./Badge.style";

interface BadgeProps {
  value: string | number;
  description: string;
}

function Badge(props: BadgeProps) {
  const { value, description } = props;
  return (
    <div css={badgeStyles}>
      <div css={badgeCircleStyles}>{value}</div>
      <p css={badgeTextStyles}>{description}</p>
    </div>
  );
}

export default Badge;
