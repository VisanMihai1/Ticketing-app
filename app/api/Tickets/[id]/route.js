import Ticket from "@/app/models/Ticket";
import { NextResponse } from "next/server";

export async function GET(req, { params }) {
  try {
    const { id } = params;
    
    if (!id) {
      return NextResponse.json(
        { error: "Ticket ID is required" },
        { status: 400 }
      );
    }

    const foundTicket = await Ticket.findById(id);
    
    if (!foundTicket) {
      return NextResponse.json(
        { error: "Ticket not found" },
        { status: 404 }
      );
    }

    return NextResponse.json({ foundTicket }, { status: 200 });
  } catch (err) {
    console.error("Database Error:", err);
    return NextResponse.json(
      { error: "Error fetching ticket" },
      { status: 500 }
    );
  }
}

export async function PUT(req, { params }) {
  try {
    const { id } = params;
    const body = await req.json();
    const ticketData = body.formData;

    if (!id) {
      return NextResponse.json(
        { error: "Ticket ID is required" },
        { status: 400 }
      );
    }

    if (!ticketData) {
      return NextResponse.json(
        { error: "No update data provided" },
        { status: 400 }
      );
    }

    // Required fields array - remove progress from here
    const requiredFields = ['title', 'description', 'category', 'priority', 'status'];
    
    // Check for missing fields
    const missingFields = requiredFields.filter(field => !ticketData[field]);
    
    if (missingFields.length > 0) {
      return NextResponse.json(
        { 
          error: "Missing required fields for update", 
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

    const updateTicketData = await Ticket.findByIdAndUpdate(
      id,
      { ...ticketData },
      { new: true }
    );

    if (!updateTicketData) {
      return NextResponse.json(
        { error: "Ticket not found" },
        { status: 404 }
      );
    }

    return NextResponse.json(
      { message: "Ticket updated", ticket: updateTicketData },
      { status: 200 }
    );
  } catch (err) {
    console.error("Database Error:", err);
    return NextResponse.json(
      { error: "Error updating ticket" },
      { status: 500 }
    );
  }
}

export async function DELETE(req, { params }) {
  try {
    const { id } = params;

    if (!id) {
      return NextResponse.json(
        { error: "Ticket ID is required" },
        { status: 400 }
      );
    }

    const ticket = await Ticket.findByIdAndDelete(id);

    if (!ticket) {
      return NextResponse.json(
        { error: "Ticket not found" },
        { status: 404 }
      );
    }

    return NextResponse.json(
      { message: "Ticket Deleted" },
      { status: 200 }
    );
  } catch (err) {
    console.error("Database Error:", err);
    return NextResponse.json(
      { error: "Error deleting ticket" },
      { status: 500 }
    );
  }
}