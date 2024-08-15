import React, { useState } from "react";

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

const FolderIcon = () => (
  <svg
    width="54"
    height="53"
    viewBox="0 0 54 53"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M23.8275 9.3275C22.9725 8.4725 21.825 8 20.6325 8H9C6.525 8 4.5225 10.025 4.5225 12.5L4.5 39.5C4.5 41.975 6.525 44 9 44H45C47.475 44 49.5 41.975 49.5 39.5V17C49.5 14.525 47.475 12.5 45 12.5H27L23.8275 9.3275Z"
      fill="#7DD3FC"
    />
  </svg>
);

const ImageIcon = () => (
  <svg
    width="40"
    height="34"
    viewBox="0 0 40 34"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M33.75 0.5H6.25C4.7918 0.501592 3.39378 1.08157 2.36267 2.11267C1.33157 3.14378 0.751592 4.5418 0.75 6V28C0.751592 29.4582 1.33157 30.8562 2.36267 31.8873C3.39378 32.9184 4.7918 33.4984 6.25 33.5H33.75C35.2082 33.4984 36.6062 32.9184 37.6373 31.8873C38.6684 30.8562 39.2484 29.4582 39.25 28V6C39.2484 4.5418 38.6684 3.14378 37.6373 2.11267C36.6062 1.08157 35.2082 0.501592 33.75 0.5ZM26.875 6C27.6908 6 28.4884 6.24193 29.1667 6.69519C29.8451 7.14845 30.3738 7.79269 30.686 8.54643C30.9982 9.30018 31.0799 10.1296 30.9207 10.9297C30.7616 11.7299 30.3687 12.4649 29.7918 13.0418C29.2149 13.6187 28.4799 14.0116 27.6797 14.1707C26.8796 14.3299 26.0502 14.2482 25.2964 13.936C24.5427 13.6238 23.8984 13.0951 23.4452 12.4167C22.9919 11.7384 22.75 10.9408 22.75 10.125C22.7511 9.03133 23.1861 7.98278 23.9594 7.20944C24.7328 6.4361 25.7813 6.00114 26.875 6ZM6.25 30.75C5.52065 30.75 4.82118 30.4603 4.30546 29.9445C3.78973 29.4288 3.5 28.7293 3.5 28V22.188L11.6503 14.9435C12.4367 14.2461 13.4594 13.8747 14.51 13.9051C15.5606 13.9354 16.5602 14.3652 17.305 15.1068L22.8866 20.6764L12.813 30.75H6.25ZM36.5 28C36.5 28.7293 36.2103 29.4288 35.6945 29.9445C35.1788 30.4603 34.4793 30.75 33.75 30.75H16.7026L27.1371 20.3155C27.8759 19.6872 28.8134 19.3411 29.7832 19.3386C30.753 19.3361 31.6923 19.6773 32.4343 20.3017L36.5 23.6894V28Z"
      fill="#14B8A6"
    />
  </svg>
);

const VideoIcon = () => (
  <svg
    width="46"
    height="32"
    viewBox="0 0 46 32"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M7.25 0.25C5.45979 0.25 3.7429 0.961159 2.47703 2.22703C1.21116 3.4929 0.5 5.20979 0.5 7V25C0.5 26.7902 1.21116 28.5071 2.47703 29.773C3.7429 31.0388 5.45979 31.75 7.25 31.75H29.75C31.5402 31.75 33.2571 31.0388 34.523 29.773C35.7888 28.5071 36.5 26.7902 36.5 25V21.4315L41.6592 26.5908C41.9739 26.9053 42.3748 27.1195 42.8112 27.2063C43.2476 27.2931 43.6999 27.2485 44.111 27.0783C44.522 26.908 44.8734 26.6197 45.1207 26.2498C45.3679 25.8799 45.4999 25.4449 45.5 25V7C45.4999 6.55506 45.3679 6.12014 45.1207 5.75022C44.8734 5.3803 44.522 5.09198 44.111 4.92172C43.6999 4.75147 43.2476 4.70691 42.8112 4.79369C42.3748 4.88046 41.9739 5.09468 41.6592 5.40925L36.5 10.5685V7C36.5 5.20979 35.7888 3.4929 34.523 2.22703C33.2571 0.961159 31.5402 0.25 29.75 0.25H7.25Z"
      fill="#C084FC"
    />
  </svg>
);

const FileIcon = () => (
  <svg
    width="44"
    height="44"
    viewBox="0 0 44 44"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M22 3.66666L22.2145 3.67949C22.6237 3.72775 23.0048 3.91247 23.2962 4.20384C23.5875 4.49522 23.7722 4.87626 23.8205 5.28549L23.8333 5.49999V12.8333L23.8425 13.1083C23.9081 13.9813 24.2839 14.802 24.9019 15.422C25.5199 16.0421 26.3394 16.4205 27.2122 16.489L27.5 16.5H34.8333L35.0478 16.5128C35.4571 16.5611 35.8381 16.7458 36.1295 17.0372C36.4209 17.3286 36.6056 17.7096 36.6538 18.1188L36.6667 18.3333V34.8333C36.6668 36.2362 36.1307 37.5861 35.1683 38.6068C34.2059 39.6275 32.8898 40.2419 31.4893 40.3242L31.1667 40.3333H12.8333C11.4305 40.3334 10.0806 39.7974 9.05987 38.835C8.03916 37.8725 7.42481 36.5565 7.34251 35.156L7.33334 34.8333V9.16666C7.33327 7.76377 7.86927 6.41388 8.8317 5.39318C9.79412 4.37248 11.1102 3.75813 12.5107 3.67582L12.8333 3.66666H22Z"
      fill="#F472B6"
    />
    <path
      d="M34.8333 12.8333H27.5L27.4982 5.49817L34.8333 12.8333Z"
      fill="#F472B6"
    />
  </svg>
);

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
      {/* Ana klasör bilgilerini sadece klasör kapalıyken göster */}
      {!isOpen && (
        <tr
          className="cursor-pointer"
          onClick={handleClick}
        >
          <td className="px-4 py-2">
            <div className="flex items-center space-x-2">
              {getIcon(item.type)}
              <span>{item.name}</span>
            </div>
          </td>
          <td className="px-4 py-2 text-center">{item.created_at}</td>
          <td className="px-4 py-2 text-center">{item.creator.name}</td>
        </tr>
      )}

      {/* Eğer klasör açıksa sadece alt öğeleri göster */}
      {isOpen && hasChildren && (
        <>
          {item.children?.map((child) => (
            <tr key={child.id} className="cursor-pointer">
              <td className="px-4 py-2">
                <div className="flex items-center space-x-2">
                  {getIcon(child.type)}
                  <span>{child.name}</span>
                </div>
              </td>
              <td className="px-4 py-2 text-center">{child.created_at}</td>
              <td className="px-4 py-2 text-center">{child.creator.name}</td>
            </tr>
          ))}
        </>
      )}
    </>
  );
};

export default FileItem;
