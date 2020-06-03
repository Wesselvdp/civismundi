import React, { FC } from "react";
import styled from "styled-components";
import Link from "next/link";
import EmailSubmit from "components/ui/EmailSubmit";

type T = any;

const FooterComponent: FC<T> = () => {
  return (
    // <Footer style={{ backgroundImage: "url('/images/card.svg')" }}>
    <Footer style={{ backgroundImage: "url('/images/border.png')" }}>
      <div className="container">
        <div className="col">
          {/* <input type="text" name="" id="" placeholder="Your e-mail here"/>
         <input type="submit" name="" id=""/> */}
          <EmailSubmit />
        </div>

        {/* Logo */}
        <div className="col">
          <h1>Footer</h1>
        </div>

        {/* Navigation */}
        {/* <div className="col">
          <ul role="nav">
            <li>
              <Link href="/">
                <a>Returns & exchanges</a>
              </Link>
            </li>
            <li>
              <Link href="/">
                <a>Returns & exchanges</a>
              </Link>
            </li>
            <li>
              <Link href="/">
                <a>Returns & exchanges</a>
              </Link>
            </li>
            <li>
              <Link href="/">
                <a>Returns & exchanges</a>
              </Link>
            </li>
          </ul>
        </div> */}
      </div>
    </Footer>
  );
};

const Footer = styled.footer`
  color: #000;
  text-align: left;
  border: 1px solid green;
  background-color: #eee;

  .container {
    max-width: ${({ theme }) => theme.maxWidth};
    margin-left: auto;
    margin-right: auto;
    display: flex;
    padding: 0 15px;

    .col {
      flex: 1;
    }
  }
`;

export default FooterComponent;
