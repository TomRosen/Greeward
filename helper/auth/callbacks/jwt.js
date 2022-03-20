import User from "@/models/User";
import { dbConnect } from "@/helper/database/dbConnect";

export default async function jwt({ token, account }) {
  console.log("JWT", token);
  if (account) {
    await dbConnect();
    const user = await User.findOne({ email: token.email });
    token.carrots = user.carrots;
  }
  return token;
}
