import multer from "multer";
import crypto from "crypto";
import path from "path";

const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null,path.resolve("public/temp"))
  },
  filename: function (req, file, cb) {
    const fn = crypto.randomBytes(32).toString("hex")+path.extname(file.originalname);
    cb(null,fn)
  }
})

export const upload = multer({ storage: storage });