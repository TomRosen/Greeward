import Greeward from "@/models/Greeward";
import { dbConnect } from "@/helper/database/dbConnect";
import User from "@/models/User";
import useSessionStorage from "@/hooks/useSessionStorage";

export default async function handler(req, res) {
  if (req.method === "POST") {
    await dbConnect();

    let { greewardID, email } = req.body;

    const greeward = await Greeward.findById(greewardID);
    const user = await User.findOne({ email });

    if (user.carrots >= greeward.carrots) {
      user.carrots = user.carrots - greeward.carrots;
      console.log(user.carrots);
      await user.save();
      res.status(200).json({ carrots: user.carrots });
    } else {
      res.status(406).json({ msg: "Not enough carrots!" });
      return;
    }
  } else {
    console.log("Invalid request type!❌");
    res.status(400).send("Invalid request type!❌");
  }
}
