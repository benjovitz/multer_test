import express from "express"
import path from "path"
import multer from "multer"

const upload = multer({dest: "./uploads"})
const app = express()



app.get("/",  (req, res) => {
    res.sendFile(path.resolve("./index.html"))
})

app.get("/image", (req, res) => {
    const blob = path.resolve("./uploads/363741c45dbf10ec9630c30d41b5ae67")
    res.contentType("png")
    res.sendFile(blob)
})

app.post("/profile", upload.single("avatar"), (req, res) => {

    res.end()
})


app.listen(8080)