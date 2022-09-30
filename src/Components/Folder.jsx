import { useState } from "react";

const Folder = ({ explorer }) => {
  const [expand, setExpand] = useState(false);
  if (explorer.isFolder) {
    return (
      <div>
        <span onClick={() => setExpand(!expand)} style={{ cursor: "pointer" }}>
          {explorer.name}
          <br />
        </span>
        <div
          style={{ display: expand ? "block" : "none", paddingLeft: "20px" }}
        >
          {explorer.items.map((item) => {
            return <span>{<Folder key={item.name} explorer={item} />}</span>;
          })}
        </div>
      </div>
    );
  } else {
    return <div>{explorer.name}</div>;
  }
};
export default Folder;
