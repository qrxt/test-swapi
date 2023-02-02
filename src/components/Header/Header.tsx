import Logo from "components/Logo";
import React from "react";
import { headerContentStyles, headerStyles } from "./Header.style";

function Header() {
  return (
    <header css={headerStyles}>
      <section css={headerContentStyles}>
        <Logo />
      </section>
    </header>
  );
}

export default Header;
