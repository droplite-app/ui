import FolderIcon from "../../assets/Icons/FolderIcon";
import ImageIcon from "../../assets/Icons/ImageIcon";
import VideoIcon from "../../assets/Icons/VideoIcon";
import FileIcon from "../../assets/Icons/FileIcon";
import { FileListItem } from "../Interfaces/Ifile";
import { useState } from "react";

export interface FileItemProps {
  item: FileListItem;
  onClick?: (item: FileListItem) => void;
}

const FileItem = ({ item, onClick }: FileItemProps) => {
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
        return <ImageIcon className="w-6 h-6" />; // Tailwind ile boyut ayarla
      case "video":
        return <VideoIcon className="w-6 h-6" />; // Tailwind ile boyut ayarla
      default:
        return <FileIcon className="w-6 h-6" />; // Tailwind ile boyut ayarla
    }
  };

  return (
    <>
      {!isOpen && (
        <tr className="cursor-pointer" onClick={handleClick}>
          <td className="px-4 py-2">
            <div className="flex items-center">
              <div className="w-6 h-6 flex-shrink-0 flex items-center justify-center mr-4">
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
                  <div className="w-6 h-6 flex-shrink-0 flex items-center justify-center mr-4">
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
