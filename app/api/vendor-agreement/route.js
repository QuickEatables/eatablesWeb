import { NextResponse } from 'next/server';

export async function POST(request) {
  try {
    const body = await request.json();
    const { 
      vendorId, 
      day, 
      month, 
      year, 
      vendorName, 
      vendorAddress, 
      vendorEmail, 
      vendorPhone 
    } = body;

    // Validate required fields
    if (!vendorId || !day || !month || !year || !vendorName || !vendorAddress || !vendorEmail || !vendorPhone) {
      return NextResponse.json(
        { error: 'Missing required fields' },
        { status: 400 }
      );
    }

    // Validate email format
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(vendorEmail)) {
      return NextResponse.json(
        { error: 'Invalid email format' },
        { status: 400 }
      );
    }

    // Validate phone number (basic validation)
    const phoneRegex = /^[\+]?[0-9\s\-\(\)]{10,}$/;
    if (!phoneRegex.test(vendorPhone)) {
      return NextResponse.json(
        { error: 'Invalid phone number format' },
        { status: 400 }
      );
    }

    // Generate effective date string
    const effectiveDate = `${day} day of ${month} ${year}`;

    // Create the vendor agreement data
    const agreementData = {
      vendorId,
      effectiveDate,
      vendorName,
      vendorAddress,
      vendorEmail,
      vendorPhone,
      generatedAt: new Date().toISOString(),
      agreementVersion: '1.0'
    };

    // In a real application, you might want to:
    // - Save this to a database
    // - Generate a PDF
    // - Send email notifications
    // - Log the agreement generation

    return NextResponse.json({
      success: true,
      message: 'Vendor agreement data processed successfully',
      data: agreementData
    });

  } catch (error) {
    console.error('Error processing vendor agreement:', error);
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    );
  }
}

export async function GET(request) {
  const { searchParams } = new URL(request.url);
  const vendorId = searchParams.get('vendorId');

  if (!vendorId) {
    return NextResponse.json(
      { error: 'vendorId is required' },
      { status: 400 }
    );
  }

  try {
    // In a real application, you would fetch this from a database
    // For now, return a sample response
    const agreementData = {
      vendorId,
      effectiveDate: 'To be filled',
      vendorName: 'To be filled',
      vendorAddress: 'To be filled',
      vendorEmail: 'To be filled',
      vendorPhone: 'To be filled',
      status: 'draft'
    };

    return NextResponse.json({
      success: true,
      data: agreementData
    });

  } catch (error) {
    console.error('Error fetching vendor agreement:', error);
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    );
  }
}
