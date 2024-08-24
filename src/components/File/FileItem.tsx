import React, { useState } from "react";
import FolderIcon from "../../assets/Icons/FolderIcon";
import ImageIcon from "../../assets/Icons/ImageIcon";
import VideoIcon from "../../assets/Icons/VideoIcon";
import FileIcon from "../../assets/Icons/FileIcon";

export interface FileItemProps {
  item: {
    id: number;
    type: string;
    name: string;
    created_at: string;
    creator: {
      id: number;
      name: string;
    };
    children?: Array<FileItemProps["item"]>;
  };
  onClick?: (item: FileItemProps["item"]) => void;
}

const FileItem: React.FC<FileItemProps> = ({ item, onClick }) => {
  const [isOpen, setIsOpen] = useState(false);

  const hasChildren = item.children && item.children.length > 0;

  const handleClick = () => {
    if (hasChildren) {
      setIsOpen(!isOpen);
    }
    if (onClick) {
      onClick(item);
    }
  };

  const getIcon = (type: string) => {
    switch (type) {
      case "folder":
        return <FolderIcon />;
      case "picture":
        return <ImageIcon />;
      case "video":
        return <VideoIcon />;
      default:
        return <FileIcon />;
    }
  };

  return (
    <>
      {!isOpen && (
        <tr className="cursor-pointer" onClick={handleClick}>
          <td className="px-4 py-2">
            <div className="flex items-center">
              <div className="w-8 flex-shrink-0 mr-6"> {/* Boşluk artırıldı */}
                {getIcon(item.type)}
              </div>
              <span>{item.name}</span>
            </div>
          </td>

          <td className="hidden lg:table-cell px-4 py-2 text-center">
            {item.created_at}
          </td>
          <td className="hidden lg:table-cell px-4 py-2 text-center">
            {item.creator.name}
          </td>
        </tr>
      )}

      {isOpen && hasChildren && (
        <>
          {item.children?.map((child) => (
            <tr key={child.id} className="cursor-pointer">
              <td className="px-4 py-2">
                <div className="flex items-center">
                  <div className="w-8 flex-shrink-0 mr-6"> {/* Boşluk artırıldı */}
                    {getIcon(child.type)}
                  </div>
                  <span>{child.name}</span>
                </div>
              </td>

              <td className="hidden lg:table-cell px-4 py-2 text-center">
                {child.created_at}
              </td>
              <td className="hidden lg:table-cell px-4 py-2 text-center">
                {child.creator.name}
              </td>
            </tr>
          ))}
        </>
      )}
    </>
  );
};

export default FileItem;
