import { useState } from "react";
import toast, { Toaster } from "react-hot-toast";

const API_URL = import.meta.env.VITE_API_URL;

export async function uploadFile(file: File) {
  const formData = new FormData();
  formData.append("file", file);

  try {
    const response = await fetch(`${API_URL}/upload`, {
      method: "POST",
      body: formData,
    });

    if (!response.ok) {
      throw new Error("Dosya yüklenirken hata oluştu!");
    }

    return await response.json();
  } catch (error) {
    if (error instanceof Error) {
      throw new Error(error.message);
    } else {
      throw new Error("Bilinmeyen bir hata oluştu.");
    }
  }
}

export default function FileUpload() {
  const [file, setFile] = useState<File | null>(null);

  const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    if (event.target.files && event.target.files.length > 0) {
      setFile(event.target.files[0]);
    }
  };

  const handleUpload = async () => {
    if (!file) {
      toast.error("Lütfen bir dosya seçin!");
      return;
    }

    try {
      await uploadFile(file);
      toast.success("Dosya başarıyla yüklendi!");
    } catch (error) {
      const errorMessage =
        error instanceof Error ? error.message : "Bilinmeyen bir hata oluştu.";
      toast.error(errorMessage);
    }
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
