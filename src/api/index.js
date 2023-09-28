import { USERS_SET_ONE, USERS_SET_TWO } from "../data";

// This is meant to simulate an api call
// and "randomly" selects between two data sets
export const getClients = () => {
	return new Promise((resolve) => {
		setTimeout(() => {
			if (getRandomInt(10) % 2 === 0) {
				resolve(USERS_SET_ONE);
			} else {
				resolve(USERS_SET_TWO);
			}
		}, 2000);
	});
};

function getRandomInt(max) {
	return Math.floor(Math.random() * max);
}
