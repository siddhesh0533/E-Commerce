import {v2 as cloudinary} from 'cloudinary';

const connectCloudinary = () => {

    cloudinary.config({
        cloud_name: process.env.CLOUDINORY_NAME,  
        api_key: process.env.CLOUDINORY_API_KEY,
        api_secret: process.env.CLOUDINORY_SECRET_KEY,    
    });
      
}

export default connectCloudinary;
