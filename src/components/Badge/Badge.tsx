import React from "react";
import {
  badgeCircleStyles,
  badgeCursorStyles,
  badgeStyles,
  badgeTextStyles,
} from "./Badge.style";
import formatNumber from "lib/formatNumber";

interface BadgeProps {
  value: string;
  description: string;
}

function BadgeValue({ value }: { value: string }) {
  const numericValue = Number(value.replace(/,/g, ""));

  return value.length > 3 ? (
    <div css={[badgeCircleStyles, badgeCursorStyles]} title={value}>
      {formatNumber(numericValue)}
    </div>
  ) : (
    <div css={badgeCircleStyles}>{value}</div>
  );
}

function Badge(props: BadgeProps) {
  const { value, description } = props;

  return (
    <div css={badgeStyles}>
      <BadgeValue value={value} />
      <p css={badgeTextStyles}>{description}</p>
    </div>
  );
}

export default Badge;
