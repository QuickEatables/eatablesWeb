import { NextResponse } from 'next/server';

export async function GET(request, { params }) {
  const { vendorId } = params;

  try {
    // In a real application, you would fetch vendor data from a database
    // For now, return a sample response
    const vendorData = {
      vendorId,
      effectiveDate: 'To be filled',
      vendorName: 'To be filled',
      vendorAddress: 'To be filled',
      vendorEmail: 'To be filled',
      vendorPhone: 'To be filled',
      status: 'draft',
      retrievedAt: new Date().toISOString()
    };

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

export async function PUT(request, { params }) {
  const { vendorId } = params;

  try {
    const body = await request.json();
    const { 
      day, 
      month, 
      year, 
      vendorName, 
      vendorAddress, 
      vendorEmail, 
      vendorPhone 
    } = body;

    // Validate required fields
    if (!day || !month || !year || !vendorName || !vendorAddress || !vendorEmail || !vendorPhone) {
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

    // Update vendor agreement data
    const updatedAgreementData = {
      vendorId,
      effectiveDate,
      vendorName,
      vendorAddress,
      vendorEmail,
      vendorPhone,
      updatedAt: new Date().toISOString(),
      status: 'updated'
    };

    // In a real application, you would:
    // - Update the database record
    // - Validate the vendorId exists
    // - Handle version control
    // - Send notifications

    return NextResponse.json({
      success: true,
      message: `Vendor agreement for ${vendorId} updated successfully`,
      data: updatedAgreementData
    });

  } catch (error) {
    console.error('Error updating vendor agreement:', error);
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    );
  }
}
