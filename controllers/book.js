const { uploadCloudinary } = require("../helpers/uploadCloudinary");

const createBook = async (req, res) => {
    // const { title, number_pages, release_date, editorial, lenguage} = req.body;
    // const { tempFilePath } = req.files.file;
    
    // try {
    //     const image = await uploadCloudinary(tempFilePath);
        
    // } catch (error) {
        
    // }

    return res.json({ 
        msg: 'Hola mundo'
    })
}


module.exports = {
    createBook
}