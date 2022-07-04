const app = require("express")();

const PORT = process.env.PORT || 3000;

app.get("", (req, res) => {
  res.send("I MISS YOU BAE");
});

app.listen(PORT, () => {
    console.log("listening on port " + PORT);
})