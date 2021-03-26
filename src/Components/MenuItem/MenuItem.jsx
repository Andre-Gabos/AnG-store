import React from "react";
import "./MenuItem.styles.scss";

function MenuItem(props) {
  const menuItemClass = props.size ? `${props.size} menu-item` : 'menu-item';
  return (
    <div className={menuItemClass}>
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

export default MenuItem;