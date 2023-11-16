import Image from "next/image";
import Link from "next/link";
import Logo from "./dojo-logo.png";

function Navbar() {
  return (
    <nav>
      <Image src={Logo} alt='Dojo Helpdesk Logo' width={70} quality={100} />
      <h1>Dojo helpdesk </h1>
      <Link href='/'>Dashboard</Link>
      <Link href='/tickets'>Tickets</Link>
    </nav>
  );
}

export default Navbar;
