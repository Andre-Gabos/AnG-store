import React from "react";
import "./MenuItem.styles.scss";
import { withRouter } from "react-router-dom";

function MenuItem(props) {
  const menuItemClass = props.size ? `${props.size} menu-item` : 'menu-item';
  return (
    <div className={menuItemClass} onClick={() => { props.history.push(`${props.match.url}${props.linkUrl}`) }}>
      <div className="background-image" style={{
        backgroundImage: `url(${props.imgUrl})`
      }} />
      <div className="content">
        <h1 className="title">{props.title.toUpperCase()}</h1>
        <span className="subtitle">SHOP NOW</span>
      </div>
    </div>
  )
}

export default withRouter(MenuItem);