import Ticket from "@/app/models/Ticket";
import { NextResponse } from "next/server";

export async function GET() {
  try {
    const tickets = await Ticket.find();
    return NextResponse.json({ tickets }, { status: 200 });
  } catch (err) {
    console.error("Database Error:", err);
    return NextResponse.json(
      { error: "Failed to fetch tickets" },
      { status: 500 }
    );
  }
}

export async function POST(req) {
  try {
    const body = await req.json();
    const ticketData = body.formData;

    if (!ticketData) {
      return NextResponse.json(
        { error: "No ticket data provided" },
        { status: 400 }
      );
    }

    // Required fields array - progress removed from here
    const requiredFields = ['title', 'description', 'category', 'priority', 'status'];
    
    // Check for missing fields
    const missingFields = requiredFields.filter(field => !ticketData[field]);
    
    if (missingFields.length > 0) {
      return NextResponse.json(
        { 
          error: "Missing required fields", 
          missingFields: missingFields 
        },
        { status: 400 }
      );
    }

    // Validate progress separately since 0 is a valid value
    if (typeof ticketData.progress !== 'number' || ticketData.progress < 0 || ticketData.progress > 100) {
      return NextResponse.json(
        { error: "Progress must be a number between 0 and 100" },
        { status: 400 }
      );
    }

    const newTicket = await Ticket.create(ticketData);
    return NextResponse.json(
      { message: "Ticket Created", ticket: newTicket },
      { status: 201 }
    );
  } catch (err) {
    console.error("Database Error:", err);
    return NextResponse.json(
      { error: "Error creating ticket" },
      { status: 500 }
    );
  }
}