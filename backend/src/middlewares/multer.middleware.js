import multer from "multer";
import crypto from "crypto";
import { pathToFileURL } from "url";


const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, '../../public/temp')
  },
  filename: function (req, file, cb) {
    const fn = crypto.randomBytes(32).toString("hex")+"."+pathToFileURL.extname(file.originalname);
    cb(null,fn)
  }
})

export const upload = multer({ storage: storage });