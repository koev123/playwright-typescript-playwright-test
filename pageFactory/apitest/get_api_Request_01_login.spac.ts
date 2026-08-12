import {test, expect} from "@playwright/test"

test.skip("Create Post request using static body", async ({ request }) => {
	const requestBody = {
		user: {
			id: 265,
			name: "Koev",
			username: "+8558862087",
			email: "koevzin1@gmail.com",
			phoneNumber: "+855886208",
			gender: "Female",
			note: null,
			imageUrl: null,
			createdBy: null,
			lastModifiedBy: "+855886208",
			province: {
				id: 24,
				nameEn: "Tboung Khmum",
				nameKh: "ត្បូងឃ្មុំ",
				capital: "Suong",
				status: true,
			},
		},
	}
	const response = await request.post('https://web-api.yescarauto.com/webapi/api/v1/mobile/auth/mobile-login', { data: requestBody })
	expect(response.ok()).toBeTruthy()

	// validate
	expect(response.status()).toBe(200);
	const responseBody: any = await response.json();
	expect(responseBody).toHaveProperty("user")
	// if province is nested under user, adjust accordingly; here we check both possibilities
	if (responseBody.province) {
		expect(responseBody).toHaveProperty("province")
	} else {
		expect(responseBody.user).toHaveProperty("province")
	}
})