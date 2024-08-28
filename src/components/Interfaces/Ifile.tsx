export interface FileListItem {
    id: number;
    type: string;
    name: string;
    created_at: string;
    creator: {
      id: number;
      name: string;
    };
    children?: Array<FileListItem>;
  }