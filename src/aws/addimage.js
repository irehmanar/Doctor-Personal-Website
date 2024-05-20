export const addImage = (selectedFiles, handleNewUrls) => {
  // Select all file input elements in the form
  const imageInputs = document.querySelectorAll(".file-input:not(.event-listener-attached)");

  // Add event listeners to each file input element
  imageInputs.forEach(imageInput => {
    imageInput.addEventListener("change", async event => {
      event.preventDefault();
      const files = Array.from(imageInput.files);
      if (!files.length) return;

      // Store the selected files in the object
      selectedFiles[imageInput.name] = [];
      for (const file of files) {
        try {

          // Fetch pre-signed URL from the server
          const { url } = await fetch("http://localhost:3333/s3Url", {
            method: "GET",
            headers: {
              "Content-Type": "application/json",
            }
          }).then(res => res.json());


          // Post the image to the bucket
          await fetch(url, {
            method: "PUT",
            headers: {
              "Content-Type": "multipart/form-data",
            },
            body: file
          });

          const imageUrl = url.split('?')[0];
          console.log(`Image URL: ${imageUrl}`);

          // Store the image URL
          selectedFiles[imageInput.name].push(imageUrl);

          // Call the callback with the updated URLs
          if (handleNewUrls) {
            handleNewUrls(selectedFiles);
          }

        } catch (error) {
          console.error(`Error uploading file ${file.name}:`, error);
        }
      }
      console.log(`URLs for ${imageInput.name}:`, selectedFiles[imageInput.name]);
    });

    // Mark the input as having an event listener attached
    imageInput.classList.add('event-listener-attached');
  });
};
