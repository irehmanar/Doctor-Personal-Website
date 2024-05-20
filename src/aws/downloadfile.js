import AWS from 'aws-sdk';

    const downloadS3File = async () => {
    // Create S3 service object
    const s3 = new AWS.S3({
        accessKeyId: "AKIAQ3EGVKIJZIZQBVFJ",
        secretAccessKey: "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",
        region: 'eu-north-1'
    });

    // Specify the parameters for the object to be downloaded
    const params = {
        Bucket: "doctor-project-website",
        Key: "Prescription.pdf"
        };
        console.log(s3.getObject(params));
    try {
        // Get the object data from S3
        const data = await s3.getObject(params).promise();
        console.log(s3.URL)
        // Create a blob from the object data
        const blob = new Blob([data.Body], { type: data.ContentType });

        // Create a temporary anchor element
        const anchor = document.createElement('a');
        anchor.href = URL.createObjectURL(blob);
        anchor.download = "Prescription.pdf";
        anchor.click();

        // Cleanup
        URL.revokeObjectURL(anchor.href);
    } catch (error) {
        console.error('Error downloading file from S3:', error);
    }
    };

    export default downloadS3File;
