import axios from "axios";
import { PEXELS_KEY } from "../constants";

const GetImagesPexel = async (name: any) => {


    try {
        const response = await axios.get(`https://api.pexels.com/v1/search?query=${name}&per_page=1`, {
            headers: {
                Authorization: PEXELS_KEY
            }
        });
        if (response.data.photos.length > 0) {
            return response.data.photos[0].src.landscape;
        }
    } catch (error) {
        console.error(error);
    }
}

export default GetImagesPexel