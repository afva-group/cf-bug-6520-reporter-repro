/**
 * POST /api/submit
 */

export async function onRequestPost(context) {
	try {

		
		//const maxSizeValues = context.env.API_HOST;
		return new Response(JSON.stringify(context.env), { status: 200 });

	
	} catch (error) {
		return new Response("Error: " + error, { status: 400 });
	}
}