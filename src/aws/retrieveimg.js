const getPresignedImageUrl = async (objectKey) => {
  try {
    const response = await fetch(`http://localhost:3000/generate-url/${objectKey}`);
    const data = await response.json();
    return data.url;
  } catch (error) {
    console.error('Error fetching URL:', error);
    return null;
  }
};

export default getPresignedImageUrl;
