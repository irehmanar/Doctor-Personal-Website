export const addImage = () => {
  const imageInput = document.querySelector("#file-input");

  imageInput.addEventListener("change", async event => {
    event.preventDefault();
    const file = imageInput.files[0];

    // Secure url from server
    const { url } = await fetch("http://localhost:3333/s3Url", {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      }
    }).then(res => res.json());
        
        console.log(url)
    // post image to the bucket
    await fetch(url, {
      method: "PUT",
      headers: {
        "Content-Type": "multipart/form-data"
      },
      body: file
      })

    const imageUrl = url.split('?')[0]
    console.log(imageUrl)

    const img = document.createElement('img')
    img.src = imageUrl
    // Do with this image as u want now
    });
};
