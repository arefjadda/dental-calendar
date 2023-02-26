import express from "express";
import { profile } from "random-profile-generator";

const app = express();

app.get("/generate-user", (req, res) => {
  const random_user = profile();
  console.log(random_user);

  var { fullName, gender, birthday, phone, email } = random_user;
  var modified_obj = { fullName, gender, birthday, phone, email };
  console.log(modified_obj);

  res.send(modified_obj);
});

app.listen(8000, () => {
  console.log("express server runs at localhost:8000");
});
