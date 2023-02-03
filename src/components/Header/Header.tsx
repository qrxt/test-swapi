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
import { Link } from "react-router-dom";

function Menu() {
  return (
    <nav css={menuStyles}>
      <ul css={menuListStyles}>
        <li css={menuItemStyles({ isSelected: true })}>
          <Link to="#" css={menuItemLinkStyles}>
            Home
          </Link>
        </li>
        <li css={menuItemStyles()}>
          <Link to="#" css={menuItemLinkStyles}>
            Characters
          </Link>
        </li>
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
