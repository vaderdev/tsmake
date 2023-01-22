export const code_api = `import express from "express";

app = express();

app.get("/", (req, res) => {
    res.json("hello")
})

app.listen(8000, () => console.log("running on http://localhost:8000/"))`;
