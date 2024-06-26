import multer from "multer";
// import { BASE_URL } from "../config";
import { RequestWithExtends } from "../lib/types";
import { NextRequest } from "next/server";

const IMAGE_MAX_SIZE = 1024 * 1024 * 2;
const UPLOAD_PATH = "uploads";
const ALLOWED_FILE_TYPES = ["image/jpg", "image/jpeg", "image/png"];

const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, `./${UPLOAD_PATH}`);
  },
  filename: (req: any, file, cb) => {
    console.log(file);
    const fileName = `${Date.now()}-${file.originalname}`;
    req[file.fieldname] = `${process.env.BASE_URL}/${UPLOAD_PATH}/${fileName}`;
    cb(null, fileName);
  },
});

const fileFilter = (
  req: unknown,
  file: Express.Multer.File,
  cb: multer.FileFilterCallback
) => {
  const allowedTypes = ["image/png", "image/jpeg", "image/png"];
  if (!allowedTypes.includes(file.mimetype)) {
    const error = new Error(
      `Invalid file type: ${file.mimetype} only allowed ${allowedTypes.join(
        ", "
      )}`
    );
    return cb(error);
  }

  return cb(null, true);
};

export const upload = multer({
  storage,
  fileFilter,
  limits: {
    fileSize: IMAGE_MAX_SIZE,
    fieldSize: Number.MAX_VALUE,
  },
});
