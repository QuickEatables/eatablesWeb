import type { APIRoute } from 'astro';

export const prerender = false;

export const GET: APIRoute = async ({ params, request }) => {
  const { vendorId } = params;

  if (!vendorId) {
    return new Response(
      JSON.stringify({ 
        success: false, 
        error: 'Vendor ID is required' 
      }),
      { 
        status: 400,
        headers: {
          'Content-Type': 'application/json'
        }
      }
    );
  }

  try {
    // Fetch vendor data from external API
    const apiUrl = `https://us-central1-eatables-je4cvo.cloudfunctions.net/getVendorInfo?vendorId=${vendorId}`;
    
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
          error: `Failed to fetch vendor data: ${response.statusText}` 
        }),
        { 
          status: response.status,
          headers: {
            'Content-Type': 'application/json'
          }
        }
      );
    }

    const vendorData = await response.json();

    return new Response(
      JSON.stringify({
        success: true,
        data: vendorData
      }),
      {
        status: 200,
        headers: {
          'Content-Type': 'application/json'
        }
      }
    );

  } catch (error) {
    console.error('Error fetching vendor data:', error);
    return new Response(
      JSON.stringify({ 
        success: false,
        error: 'Internal server error' 
      }),
      { 
        status: 500,
        headers: {
          'Content-Type': 'application/json'
        }
      }
    );
  }
};