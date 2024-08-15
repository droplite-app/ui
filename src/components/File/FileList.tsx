import React from 'react';
import FileItem, { FileItemProps } from './FileItem'; 

interface FileListProps {
  items: Array<{
    id: number;
    type: string;
    name: string;
    created_at: string;
    creator: {
      id: number;
      name: string;
    };
    children?: Array<FileItemProps['item']>; 
  }>;
  onItemClick?: (item: { id: number; type: string }) => void;
}

const FileList: React.FC<FileListProps> = ({ items, onItemClick }) => {
  return (
    <div>
      {items.map((item) => (
        <FileItem key={item.id} item={item} onClick={onItemClick} /> 
      ))}
    </div>
  );
};

export default FileList;
