import express from "express"
import path from "path"

//__________________________________________
import multer from "multer"

const storage = multer.diskStorage({
    destination: function (req, file, cb) {
      cb(null, './uploads')
    },
    filename: function (req, file, cb) {
      console.log(file)
      const parts = file.originalname.split(".")
      const ext = parts[parts.length - 1]
      //gem billede streng for user
      cb(null, req.params.id + "." + ext)
    }
  })
  
  const upload = multer({ storage: storage })
//__________________________________________
const app = express()



app.get("/",  (req, res) => {
    res.sendFile(path.resolve("./index.html"))
})

app.get("/image", (req, res) => {
    //find user på id og tag billede streng fra user
    const blob = path.resolve("./uploads/1.png")
    res.sendFile(blob)
})

app.post("/upload/:id", upload.single("file"), (req, res) => {
    console.log(req.file)
    res.end()
})


app.listen(8080)