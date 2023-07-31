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
        console.log("download link found :" + $(value).attr("href"));
        downloadLink = $(value).attr("href");
        console.log(downloadLink);
      }
    });
    return downloadLink;
  } catch (error) {
    console.error("Error fetching the website:", error);
    return null;
  }

  // fetch(url)
  //   .then(function (response) {
  //     return response.text();
  //   })
  //   .then(function (html) {
  //     const $ = cheerio.load(html);
  //     const links = $("a");
  //     links.each((index, value) => {
  //       if ($(value).attr("href").includes("cdn")) {
  //         console.log("download link found :" + $(value).attr("href"));
  //         downloadLink = $(value).attr("href");
  //       }
  //     });
  //   })
  //   .catch(function (err) {
  //     console.log("Failed to fetch page: ", err);
  //   });
};
