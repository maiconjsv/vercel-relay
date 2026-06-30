export default function handler(req, res) {
  const { code, error } = req.query;

  if (error) {
    return res.redirect(
      `http://localhost:5000/callback?error=${encodeURIComponent(error)}`
    );
  }

  if (!code) {
    return res.status(400).send("Missing code");
  }

  return res.redirect(
    `http://localhost:5000/callback?code=${encodeURIComponent(code)}`
  );
}