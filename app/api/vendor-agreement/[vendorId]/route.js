import { NextResponse } from 'next/server';

export async function GET(request, { params }) {
  const { vendorId } = params;

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
      return NextResponse.json(
        { error: `Failed to fetch vendor data: ${response.statusText}` },
        { status: response.status }
      );
    }

    const vendorData = await response.json();

    return NextResponse.json({
      success: true,
      data: vendorData
    });

  } catch (error) {
    console.error('Error fetching vendor data:', error);
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    );
  }
}
