import axios from "axios";
// a dedicated api inside website to secure our api and key during network requests
export default async function fetchWebsiteData(req, res) {
  const { website } = req.query;
  const baseUrl = `http://api.linkpreview.net/?key=${process.env.NEXT_PUBLIC_LINK_API_KEY}&q=${website}`;
  const response = await axios.get(baseUrl);
  res.status(200).json({
    data: response.data,
  });
}
