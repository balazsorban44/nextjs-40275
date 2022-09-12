export default function handler(req) {
  console.log(Object.fromEntries(req.headers.entries()))
  return Response.json({ text: "Hello" })
}

export const config = {
  runtime: "experimental-edge",
}
