export default function handler(req, res) {
  console.log(req.getHeaders())
  res.status(200).json({ text: "Hello" })
}
