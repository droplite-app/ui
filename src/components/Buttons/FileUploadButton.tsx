import { useState } from "react";
import toast, { Toaster } from "react-hot-toast";

const API_URL = import.meta.env.VITE_API_URL;

export default function FileUpload() {
  const [file, setFile] = useState<File | null>(null);

  const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    if (event.target.files && event.target.files.length > 0) {
      setFile(event.target.files[0]);
    }
  };

  const handleUpload = () => {
    if (!file) {
      toast.error("please select a file!");
      return;
    }

    const formData = new FormData();
    formData.append("file", file);

    fetch(`${API_URL}/`, {
      method: "POST",
      body: formData,
    }).then((response) => {
      if (response.ok) {
        toast.success("Dosya başarıyla yüklendi!");
      } else {
        toast.error("Dosya yüklenirken bir hata oluştu!");
      }
    });
  };

  return (
    <div className="flex flex-col items-center p-4 border rounded-lg shadow-md w-64">
      <label className="mb-2 cursor-pointer">
        <input type="file" onChange={handleFileChange} className="hidden" />
        <div className="px-4 py-2 bg-gray-100 rounded-lg border border-gray-300 text-gray-600 hover:bg-gray-200">
          Dosya Seç
        </div>
      </label>
      {file && <p className="text-sm text-gray-600 mt-2">{file.name}</p>}
      <button
        onClick={handleUpload}
        className="mt-2 px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600"
      >
        Yükle
      </button>
      <Toaster />
    </div>
  );
}
