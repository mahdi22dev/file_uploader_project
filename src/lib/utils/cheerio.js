const url = "https://anonfiles.com/W6g3yc57z4/error_txt";
async function fetchWebsite(url) {
  try {
    const response = await fetch(url);

    if (!response.data) {
      console.error("Error fetching the website:", error);
    }
    const $ = cheerio.load(response.data);
    const xpath = '//*[@id="download-url"]';
    const link = $(xpath).attr("href");
    return link;
  } catch (error) {
    console.error("Error fetching the website:", error);
    return null;
  }
}
