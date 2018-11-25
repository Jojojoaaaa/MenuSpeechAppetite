import axios from 'react-native-axios';

const instance = axios.create({
	//baseURL: url.MAIN_URL
});

export default instance;