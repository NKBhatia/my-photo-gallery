import { useState } from "react";
import { Dialog } from "@headlessui/react";

const images = [
  "IMG_0154.jpeg",
  "IMG_6694.jpeg",
  "IMG_6780.jpeg",
  "IMG_6791.jpeg",
  "IMG_6853.jpeg",
  "IMG_6879.jpeg",
  "IMG_7098.jpeg",
  "IMG_7107.jpeg",
  "IMG_7156.jpeg",
  "IMG_7197.jpeg",
];

export default function Home() {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  return (
    <div className="min-h-screen py-10 px-4">
      <h1 className="text-4xl font-bold text-center mb-10">My Photo Gallery</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 max-w-6xl mx-auto">
        {images.map((img, idx) => (
          <div key={idx} className="cursor-pointer" onClick={() => setSelectedImage(img)}>
            <img
              src={`/images/${img}`}
              alt={`Photo ${idx + 1}`}
              className="w-full h-64 object-cover rounded shadow-lg"
            />
          </div>
        ))}
      </div>

      <Dialog open={!!selectedImage} onClose={() => setSelectedImage(null)} className="relative z-50">
        <div className="fixed inset-0 bg-black/70" aria-hidden="true" />
        <div className="fixed inset-0 flex items-center justify-center p-4">
          <Dialog.Panel className="max-w-4xl w-full">
            {selectedImage && (
              <img src={`/images/${selectedImage}`} alt="Full size" className="w-full h-auto rounded" />
            )}
          </Dialog.Panel>
        </div>
      </Dialog>
    </div>
  );
}
