import type { APIRoute } from 'astro';

export const prerender = false;

export const GET: APIRoute = async ({ params }) => {
	const { riderId } = params;

	if (!riderId) {
		return new Response(
			JSON.stringify({
				success: false,
				error: 'Rider ID is required',
			}),
			{
				status: 400,
				headers: {
					'Content-Type': 'application/json',
				},
			},
		);
	}

	try {
		const apiUrl = `https://us-central1-eatables-je4cvo.cloudfunctions.net/getRiderInfo?riderId=${encodeURIComponent(
			riderId,
		)}`;

		const response = await fetch(apiUrl, {
			method: 'GET',
			headers: {
				'Content-Type': 'application/json',
			},
		});

		if (!response.ok) {
			return new Response(
				JSON.stringify({
					success: false,
					error: `Failed to fetch rider data: ${response.statusText}`,
				}),
				{
					status: response.status,
					headers: {
						'Content-Type': 'application/json',
					},
				},
			);
		}

		const riderData = await response.json();

		return new Response(
			JSON.stringify({
				success: true,
				data: riderData,
			}),
			{
				status: 200,
				headers: {
					'Content-Type': 'application/json',
				},
			},
		);
	} catch (error) {
		console.error('Error fetching rider data:', error);
		return new Response(
			JSON.stringify({
				success: false,
				error: 'Internal server error',
			}),
			{
				status: 500,
				headers: {
					'Content-Type': 'application/json',
				},
			},
		);
	}
};