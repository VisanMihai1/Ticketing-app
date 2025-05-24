import EditTicketForm from "@/app/(components)/EditTicketForm";

const getTicketById = async (id) => {
  try {
    const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL || 'http://localhost:3000'}/api/Tickets/${id}`, {
      cache: "no-store",
    });

    if (!res.ok) {
      throw new Error(`Failed to fetch ticket: ${res.status}`);
    }

    return res.json();
  } catch (error) {
    console.error("Error loading ticket:", error);
    throw error;
  }
};

let updateTicketData = {};
const TicketPage = async ({ params }) => {
  const EDITMODE = params.id === "new" ? false : true;

  if (EDITMODE) {
    updateTicketData = await getTicketById(params.id);
    updateTicketData = updateTicketData.foundTicket;
  } else {
    updateTicketData = {
      _id: "new",
    };
  }

  return <EditTicketForm ticket={updateTicketData} />;
};

export default TicketPage;
