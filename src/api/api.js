import axios from 'axios';

const BASE_URL = 'https://picsum.photos';

const getImages = async (id, limit) => {
	return await axios.get(`${BASE_URL}/v2/list?page=${id}&limit=${limit}`);
};

const getImageDetail = async (photoID) => {
	return await axios.get(`${BASE_URL}/id/${photoID}/info`);
};

const getImageRandom = async (photoWidth = 800, photoHeight = 800) => {
	return await axios.get(
		`${BASE_URL}/${Math.floor(photoWidth)}/${Math.floor(photoHeight)}?random=1`
	);
};

export { getImages, getImageDetail, getImageRandom };
