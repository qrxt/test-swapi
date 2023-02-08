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
  dataTestPrefix?: string;
}

interface BadgeValueProps {
  value: string;
  dataTestPrefix?: string;
}
function BadgeValue({ value, dataTestPrefix }: BadgeValueProps) {
  const numericValue = Number(value.replace(/,/g, ""));
  const badgeValueDataTestId = dataTestPrefix
    ? `${dataTestPrefix}-badge-value`
    : "badge-value";

  return value.length > 3 ? (
    <div
      css={[badgeCircleStyles, badgeCursorStyles]}
      title={value}
      data-testid={badgeValueDataTestId}
    >
      {formatNumber(numericValue)}
    </div>
  ) : (
    <div css={badgeCircleStyles} data-testid={badgeValueDataTestId}>
      {value}
    </div>
  );
}

function Badge(props: BadgeProps) {
  const { value, description, dataTestPrefix } = props;

  const badgeDescriptionDataTestId = dataTestPrefix
    ? `${dataTestPrefix}-badge-description`
    : "badge-description";
  return (
    <div css={badgeStyles}>
      <BadgeValue value={value} dataTestPrefix={dataTestPrefix} />
      <p css={badgeTextStyles} data-testid={badgeDescriptionDataTestId}>
        {description}
      </p>
    </div>
  );
}

export default Badge;
