import express from "express"
import path from "path"
import multer from "multer"

const upload = multer({dest: "./uploads"})
const app = express()



app.get("/",  (req, res) => {
    res.sendFile(path.resolve("./index.html"))
})

app.post("/profile", upload.single("avatar"), (req, res) => {

    res.end()
})

app.listen(8080)