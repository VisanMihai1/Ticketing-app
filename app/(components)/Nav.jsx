import { faHome, faTicket } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Link from "next/link";

const Nav = () => {
  return (
    <nav className="flex justify-between items-center bg-nav p-4">
      <div className="flex items-center space-x-4">
        <Link href="/">
          <FontAwesomeIcon icon={faHome} className="icon" />
        </Link>
        <Link href="/TicketPage/new">
          <FontAwesomeIcon icon={faTicket} className="icon" />
        </Link>
      </div>
      
      <div className="text-lg font-semibold text-text-light">
        Inovații Verzi IT Center
      </div>

      <div className="text-text-light">
        <p>visanmihai21@stud.ase.ro</p>
      </div>
    </nav>
  );
};

export default Nav;