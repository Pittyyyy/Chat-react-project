const express = require("express");
const cors = require("cors");
const axios = require("axios");

const app = express();
app.use(express.json());
app.use(cors({ origin: true }));

app.post("/authenticate", async (req, res) => {
  const { username } = req.body;

  try {
    const r = await axios.put (
      'https://api.chatengine.io/users/', 
      {username: username, secret: username, first_name: username},
      {headers: {"private-key":"132bb403-abd7-44dc-967c-230f8c11701c"}}
    );
    return res.status(r.status).json(r.data);
  } catch (e) {
    console.error("Error:", e);
    if (e.response) {
      console.error("Response status:", e.response.status);
      console.error("Response data:", e.response.data);
      return res.status(e.response.status).json(e.response.data);
    } else {
      console.error("No response object in the error:", e);
      return res.status(500).json({ error: "Internal Server Error" });
    }
  }
});


app.listen(3001);