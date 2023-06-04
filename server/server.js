import express from "express"
const app = express()

app.get("/api", (req,res) => {
    res.json({
        "users": ['jay','gol']
    })
})

app.listen(5000, () => {
    console.log("server started on port 5000")
})