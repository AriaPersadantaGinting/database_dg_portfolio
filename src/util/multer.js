import multer from "multer";
// Konfigurasi penyimpanan
const storage = multer.memoryStorage({});

const fileFilter = (req, file, cb) => {
  // Daftar tipe file yang diperbolehkan
  const allowedTypes = ["image/jpeg", "image/jpg", "image/png", "image/gif"];

  if (allowedTypes.includes(file.mimetype)) {
    cb(null, true); // Izinkan file
  } else {
    cb(new Error("Tipe file tidak diperbolehkan!"), false); // Tolak file
  }
};

export const upload = multer({
  storage: storage,
  fileFilter: fileFilter,
});
