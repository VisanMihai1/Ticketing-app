import Ticket from "@/app/models/Ticket";
import { NextResponse } from "next/server";

export async function GET(request, { params }) {
  const { id } = params;

  const foundTicket = await Ticket.findOne({ _id: id });
  return NextResponse.json({ foundTicket }, { status: 200 });
}

export async function PUT(req, { params }) {
  try {
    const { id } = params;
    const body = await req.json();
    const ticketData = body.formData;

    if (!id) {
      return NextResponse.json({ message: "Ticket ID is required" }, { status: 400 });
    }

    const updateTicketData = await Ticket.findByIdAndUpdate(
      id,
      {
        ...ticketData,
      },
      { new: true } 
    );

    if (!updateTicketData) {
      return NextResponse.json({ message: "Ticket not found" }, { status: 404 });
    }

    return NextResponse.json({ message: "Ticket updated", ticket: updateTicketData }, { status: 200 });
  } catch (error) {
    console.log("Error updating ticket:", error);
    return NextResponse.json({ message: "Error updating ticket", error: error.message }, { status: 500 });
  }
}

export async function DELETE(req, { params }) {
  try {
    const { id } = params;

    await Ticket.findByIdAndDelete(id);
    return NextResponse.json({ message: "Ticket Deleted" }, { status: 200 });
  } catch (error) {
    console.log(error);
    return NextResponse.json({ message: "Error", error }, { status: 500 });
  }
}
