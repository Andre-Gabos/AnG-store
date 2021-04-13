import React from "react";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect"
import { selectDirectorySections } from "../../Redux/Directory/directory.selectors";
import MenuItem from "../MenuItem/MenuItem";
import "./Directory.styles.scss";


function Directory({ sections }) {
  //const {sectData, setSectData} = useState(sections);



  return (
    <div className="directory-menu">
      {sections.map(({ title, imageUrl, id, size, linkUrl }) => {
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

const mapStateToProps = createStructuredSelector({
  sections: selectDirectorySections
});

export default connect(mapStateToProps)(Directory);