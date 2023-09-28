import { handlePointsPerPurchase } from "..";

describe("Utils", () => {
	it.each`
		total   | expectedPoints
		${20}   | ${0}
		${50}   | ${0}
		${51}   | ${1}
		${99}   | ${49}
		${100}  | ${50}
		${101}  | ${52}
		${2000} | ${3850}
	`(
		"should handle points correctly per purchase - $total : $expectedPoints",
		({ total, expectedPoints }) => {
			const result = handlePointsPerPurchase({ total });

			expect(result).toEqual(expectedPoints);
		}
	);
});
