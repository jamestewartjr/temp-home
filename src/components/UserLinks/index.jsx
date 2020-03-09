import React, { Component } from "react";
import { IconButton } from '@material-ui/core';
import SOCIAL from '../../constants/social';

import "./UserLinks.scss";

class UserLinks extends Component {
  getLinkElements() {
    const { labeled} = this.props;
    return (
    // userLinks.map(link => (
      // <Button
      //   color="secondary"
      //   key={link.label}
      //   className={link.iconClassName}
      //   href={`${link.url}`}
      // >
      //   {labeled ? link.label : ""}
      // </Button>
      // )
      // <IconButton key={link.label} aria-label={link.label}  href={`${link.url}`}>
      //   <link.iconClassName />
      // </IconButton>
      <ul className="horizontal-links">
        {SOCIAL.map(s => (
          <li key={s.kind}>
            <a className="u-no-box-shadow" style={{ textDecoration: "none" }} href={s.url}>
              <IconButton aria-label={s.kind}>
                <s.icon />
              </IconButton>
            </a>
          </li>
          ))}
      </ul>
      
    // )
    );
  }

  render() {
    const { config: { userLinks } } = this.props;
    if (!userLinks) {
      return null;
    }
    return <div className="user-links">{this.getLinkElements()}</div>;
  }
}

export default UserLinks;
