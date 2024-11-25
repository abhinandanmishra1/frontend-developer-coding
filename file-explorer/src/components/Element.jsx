import React, { useState } from "react";

export const Element = ({ files, addNode }) => {
  const {
    name,
    type,
    items,
    id,
  } = files;
  
  const [emptyElement, setEmptyElement] = React.useState({
    type: "folder",
    name: "",
    items: [],
    visible: false,
  });
  console.log({name, items})
  const [open, setOpen] = React.useState(false);

  const createElement = (type) => {
    setEmptyElement({
      type: type,
      name: "",
      items: [],
      visible: true,
    });
  };

  const handleChange = (e) => {
    setEmptyElement({
      ...emptyElement,
      name: e.target.value,
    });
  };

  const addElement = (e) => {
    if (e.key === "Enter") {
      // setChildrens(childrens => [emptyElement, ...childrens]);
      addNode({
        type: emptyElement.type,
        name: emptyElement.name,
        parentId: id,
      });
      setEmptyElement({
        type: "folder",
        name: "",
        items: [],
        visible: false,
      });
    }
  };

  if (type === "folder") {
    return (
      <div className="folder">
        <div className="folder__header">
          <p>🗂️ {name}</p>
          <span className="add-element" onClick={() => createElement("folder")}>
            📁
          </span>
          <span className="add-element" onClick={() => createElement("file")}>
            📄
          </span>
        </div>
        <div className="elements">
          {emptyElement.visible && (
            <div>
              <input
                onKeyDown={addElement}
                type="text"
                autoFocus
                onBlur={() =>
                  setEmptyElement({ ...emptyElement, visible: false })
                }
                value={emptyElement.name}
                onChange={handleChange}
              />
            </div>
          )}
          {items.map((item, index) => (
            <Element key={index} files={item} addNode={addNode} />
          ))}
        </div>
      </div>
    );
  }
  
  return <div>
    <p>📄 {name}</p>
  </div>;
};
