// api requests types objects
export const getInfo = {
  link: "/api/info?id={id}",
  requestTpe: "File Info",
  response: `{
    "status": true,
    "response": {
        "url": "",
        "metadata": {
            "size": {
                "bytes": 36837,
                "readable": "35.97 KB"
            },
            "name": "Capture_PNG",
            "id": "XeU35026za"
        }
    }
}`,
};
export const postFile = {
  link: "/api/upload",
  requestTpe: "Upload File",
  response: `{
    "message": "upload done",
    "done": true,
    "results": {
        "url": "url",
        "metadata": {
            "id": "c1L5pf3bz4",
            "size": {
                "readable": "6.35 KB",
                "bytes": 6503
            },
            "name": "obj.txt"
        }
    }
}`,
};

export const code1 = (currentUrl) => {
  return `
  const url = "${currentUrl}/upload"

  const options = , {
      method: "POST",
      body: formData,
    },

   const res = await fetch(url,{options})

   const data = await res.json();

   const { id, name } = data?.results?.metadata;
    `;
};
export const code2 = (currentUrl) => {
  return `
    const url = "${currentUrl}"

    const res = await fetch(url)
  
    const data = await res.json();

     const { id, name } = info?.data?.file?.metadata;
    
    `;
};
