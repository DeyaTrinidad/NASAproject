const BASE_URL = 'https://api.nasa.gov/planetary/apod';
const API_KEY = 'api_key=t6DwZgp9FbxOvDNJeqXlI8zvZmDudZRyP5vSH4Nu';

export async function getPictureOfTheDay() {
	const data = await getData(`${BASE_URL}?${API_KEY}`);
	return data;
}

export async function getPicture(date) {
	const data = await getData(`${BASE_URL}?${API_KEY}&date=${date}`);
	return data;
}

export async function getPicturesRange(startDate, endDate) {
	const data = await getData(`${BASE_URL}?${API_KEY}&start_date=${startDate}&end_date=${endDate}`);
	return data;
}

export async function getRandomPictures(count = 1) {
	const data = await getData(`${BASE_URL}?${API_KEY}&count=${count}`);
	return data;
}

export async function getData(url) {
	try {
		const response = await fetch(url);
		const data = await response.json();
		return data;
	} catch (err) {
		console.error(err);
	}
}

