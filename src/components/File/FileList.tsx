import React from "react";
import FileItem from "./FileItem";
import { FileListItem } from "./Ifile";

interface FileListProps {
  items: Array<FileListItem>
  onItemClick?: (item: { id: number; type: string; name: string }) => void;
}

const FileList: React.FC<FileListProps> = ({ items, onItemClick }) => {
  return (
    <div className="overflow-x-auto">
      <table className="min-w-full table-auto">
        <thead className="hidden lg:table-header-group bg-blue-50">
          <tr>
            <th className="w-2/5 px-4 py-2 text-left">Name</th>
            <th className="w-1/5 px-4 py-2 text-center">Modified</th>
            <th className="w-1/5 px-4 py-2 text-center">User</th>
          </tr>
        </thead>
        <tbody>
          {items.map((item) => (
            <FileItem key={item.id} item={item} onClick={onItemClick} />
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default FileList;
