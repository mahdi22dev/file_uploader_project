const cheerio = require("cheerio");

export const fetchWebsite = async (url) => {
  let downloadLink = "";
  try {
    const response = await fetch(url);
    const html = await response.text();
    const $ = cheerio.load(html);
    const links = $("a");
    links.each((index, value) => {
      if ($(value).attr("href").includes("cdn")) {
        downloadLink = $(value).attr("href");
      }
    });
    return downloadLink;
  } catch (error) {
    console.error("Error fetching the website:", error);
    return null;
  }
};
