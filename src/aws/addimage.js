export const addImage = () => {
  // Initialize an object to store the selected files
  const selectedFiles = {};

  // Select all file input elements in the form
  const imageInputs = document.querySelectorAll(".file-input");
  const imageForm = document.querySelector("#aws-form");

  // Add event listeners to each file input element
  imageInputs.forEach(imageInput => {
    imageInput.addEventListener("change", event => {
      event.preventDefault();
      const files = Array.from(imageInput.files);
      if (!files.length) return;

      // Store the selected files in the object
      selectedFiles[imageInput.name] = files;
      console.log(`Files selected for ${imageInput.name}:`, files);
    });
  });

  // Handle the form's submit event
  imageForm.addEventListener("submit", async event => {
    event.preventDefault();
    try {
      // Iterate over the selected files and upload each one
      for (const inputName in selectedFiles) {
        const files = selectedFiles[inputName];
        for (const file of files) {
          console.log(`Uploading file from ${inputName}:`, file);

          // Fetch pre-signed URL from the server
          const { url } = await fetch("http://localhost:3333/s3Url", {
            method: "GET",
            headers: {
              "Content-Type": "application/json",
            }
          }).then(res => res.json());

          console.log(`Pre-signed URL for ${file.name}:`, url);

          // Post the image to the bucket
          await fetch(url, {
            method: "PUT",
            headers: {
              "Content-Type": "multipart/form-data",
            },
            body: file
          });

          const imageUrl = url.split('?')[0];

          // Display the uploaded image (optional)
          const img = document.createElement('img');
          img.src = imageUrl;
          document.body.appendChild(img); // Append image to the body or any other desired location
        }
      }

      // Additional logic after all images are uploaded
      console.log("All images have been uploaded successfully.");

    } catch (error) {
      console.error("Error uploading images:", error);
    }
  });
};
