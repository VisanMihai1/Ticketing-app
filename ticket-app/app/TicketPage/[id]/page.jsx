// ticket-app/app/TicketPage/page.jsx

import TicketForm from "../../(components)/TicketForm";

const TicketPage = ({ params }) => {
  return <TicketForm ticket={params} />;
};

export default TicketPage;
