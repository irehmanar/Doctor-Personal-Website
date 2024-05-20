export const settingsimg = async (file) => {
  try {
    // Fetch pre-signed URL from the server
    const response = await fetch("http://localhost:3333/s3Url", {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    });

    if (!response.ok) {
      throw new Error('Failed to fetch pre-signed URL');
    }

    const { url } = await response.json();
    console.log(`Pre-signed URL for ${file.name}:`, url);

    // Post the image to the bucket
    await fetch(url, {
      method: "PUT",
      headers: {
        "Content-Type": "multipart/form-data",
      },
      body: file,
    });

    const imageUrl = url.split('?')[0];
    console.log(`Image URL: ${imageUrl}`);

    return imageUrl;
  } catch (error) {
    console.error(`Error uploading file ${file.name}:`, error);
    throw error;
  }
};

