import Greeward from "@/models/Greeward";
import { dbConnect } from "@/helper/database/dbConnect";

export default async function handler(req, res) {
  if (req.method === "POST") {
    await dbConnect();

    let { title, description, carrots, image } = req.body;

    const greeward = new Greeward({
      title: title,
      description: description,
      carrots: carrots,
      image: image,
    });
    greeward.save().catch((err) => {
      console.log(err);
      res.status(500).json({ message: "Internal server error" });
    });

    res.status(200).send("Saved to Database");
  } else {
    console.log("Invalid request type!❌");
    res.status(400).send("Invalid request type!❌");
  }
}
