import { useState } from "react";

export const useFileExplorer = () => {
  const [files, setFiles] = useState({
    type: "folder",
    name: "root",
    items: [],
    id: "0",
  });

  const addNode = ({ type, name, parentId }) => {
    setFiles((current) => {
      const updateItem = (current, parentId) => {
        if (current.type === "file") return false;

        if (current.id == parentId) {
          current.items.unshift({
            type,
            name,
            id: crypto.randomUUID(),
            items: [],
          });

          return true;
        }

        current.items.forEach((item) => {
          if (updateItem(item, parentId)) return true;
        });

        return false;
      };

      updateItem(current, parentId);

      return {...current};
    });
  };

  return {
    files,
    addNode,
  };
};
