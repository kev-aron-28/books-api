const cloudinary = require("cloudinary").v2;
cloudinary.config(process.env.CLOUDINARY_URL);

const uploadCloudinary = async (file) => {
    try {
        const { secure_url } = await cloudinary.uploader.upload(file);
        return secure_url
    } catch (error) {
        return 'Could not upload file';
    }
}

module.exports = {
    uploadCloudinary
}