// Function to make data more manageable
export const transformData = (data) => {
	const months = monthMap.get(data[0].purchasePeriod);
	const headers = ["Name", ...months, "Total"];
	return { headers, users: data.map(handlePerson) };
};

const handlePerson = (person) => {
	const name = `${person.firstName} ${person.lastName}`;
	const purchaseMonth = parseInt(person.purchasePeriod.split("-")[0]); // Pulls first month
	const purchasePoints = [];

	// Iterate over every month
	for (let i = 0; i < 3; i++) {
		const points = handlePurchasePoints(purchaseMonth + i, person.purchases);
		purchasePoints.push(points);
	}

	const totalPoints = purchasePoints.reduce((acc, curr) => acc + curr, 0);
	return { name, purchasePoints, totalPoints };
};

const handlePurchasePoints = (month, purchases) => {
	const filteredMonths = purchases.filter((purchase) => {
		return parseInt(purchase.date.split("-")[0]) === month;
	});

	return filteredMonths.reduce((acc, curr) => {
		return acc + handlePointsPerPurchase(curr);
	}, 0);
};

const SINGLE_POINT = 50;
const DOUBLE_POINT = 100;

export const handlePointsPerPurchase = ({ total }) => {
	const numberTotal = Math.floor(parseInt(total));
	if (numberTotal > SINGLE_POINT) {
		if (numberTotal > DOUBLE_POINT) {
			return SINGLE_POINT + (numberTotal - DOUBLE_POINT) * 2;
		} else {
			return numberTotal - SINGLE_POINT;
		}
	}
	return 0;
};

const monthMap = new Map([
	["01-03", ["Jan", "Feb", "Mar"]],
	["02-04", ["Feb", "Mar", "Apr"]],
	["03-05", ["Mar", "Apr", "May"]],
	["04-06", ["Apr", "May", "Jun"]],
	["05-07", ["May", "Jun", "Jul"]],
	["06-08", ["Jun", "Jul", "Aug"]],
	["07-09", ["Jul", "Aug", "Sep"]],
	["08-10", ["Aug", "Sep", "Oct"]],
	["09-11", ["Sep", "Oct", "Nov"]],
	["10-12", ["Oct", "Nov", "Dec"]],
	["11-01", ["Nov", "Dec", "Jan"]],
	["12-02", ["Dec", "Jan", "Feb"]],
]);
