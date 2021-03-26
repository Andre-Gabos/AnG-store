import React from "react";
import sections from "./Directory.data";
import MenuItem from "../MenuItem/MenuItem";
import "./Directory.styles.scss";


function Directory() {
  //const {sectData, setSectData} = useState(sections);



  return (
    <div className="directory-menu">
      {sections.map(({title, imageUrl, id, size, linkUrl}) => {
        return (<MenuItem
          key={id} 
          title={title}
          imgUrl={imageUrl}
          size={size}
          linkUrl={linkUrl}
        />);
      })}
    </div>
  );
}

export default Directory;