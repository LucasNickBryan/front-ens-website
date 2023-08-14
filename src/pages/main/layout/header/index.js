import React from "react";
import "./styles.scss";

export default function Header(props) {
  const { BackgroundUrl } = props;

  return (
    <div className={`${!BackgroundUrl && "!h-32 bg-black opacity-90"}`}>
      <div className="HEADER_STYLES">
        <header
          className="header"
          style={{ backgroundImage: `url(${BackgroundUrl})` }}
        >
          {props.children}
        </header>
      </div>
    </div>
  );
}
