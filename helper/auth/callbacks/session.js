export default async function session({ session, user, token }) {
  if (token) {
    session.user.carrots = token.carrots;
  }
  console.log("SESSION", session);
  return session;
}
