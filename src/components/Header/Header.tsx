import React from "react";
import Container from "components/Container";
import Logo from "components/Logo";
import {
  headerContentStyles,
  headerLogoStyles,
  headerStyles,
  menuItemLinkStyles,
  menuItemStyles,
  menuListStyles,
  menuStyles,
} from "./Header.style";
import { Link, useLocation } from "react-router-dom";
import { routeEntries, routeNames } from "lib/routing";

function Menu() {
  const { pathname } = useLocation();

  return (
    <nav css={menuStyles}>
      <ul css={menuListStyles}>
        {routeEntries.map(([key, route]) => {
          return (
            <li
              key={key}
              css={menuItemStyles({ isSelected: route.path === pathname })}
            >
              <Link to={route.path || ""} css={menuItemLinkStyles}>
                {routeNames[key]}
              </Link>
            </li>
          );
        })}
      </ul>
    </nav>
  );
}

function Header() {
  return (
    <header css={headerStyles}>
      <Container>
        <section css={headerContentStyles}>
          <div css={headerLogoStyles}>
            <Logo />
          </div>
          <Menu />
        </section>
      </Container>
    </header>
  );
}

export default Header;
