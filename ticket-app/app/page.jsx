// ticket-app/app/page.jsx

import TicketCard from "./(components)/TicketCard";

const Dashboard = () => {
  return (
    <div className="lg:grid grid-cols-2 xl:grid-cols-4">
      <TicketCard />
      <TicketCard />
      <TicketCard />
      <TicketCard />
    </div>
  );
};

export default Dashboard;
