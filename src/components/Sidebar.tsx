import Link from "next/link";
import { Shirt, Home, LayoutDashboard } from "lucide-react";
import UserMenu from "./UserMenu";
import MessagesLink from "./chat/MessagesLink";

const SIDEBAR_LINKS = [
  { icon: Home, label: "Home", href: "/" },
  { icon: Shirt, label: "Merch", href: "/merch" },
];

type SidebarProps = {
  userProfile: {
    name?: string | null;
    email?: string | null;
    image?: string | null;
  } | any;
};

const Sidebar = ({ userProfile }: SidebarProps) => {
  return (
    <div className='flex lg:w-1/5 flex-col gap-3 px-2 border-r sticky left-0 top-0 h-screen'>
      <UserMenu
        name={userProfile?.name}
        email={userProfile?.email}
        image={userProfile?.image}
      />

      <nav className='flex flex-col gap-3'>
        {SIDEBAR_LINKS.map((link) => (
          <Link
            key={link.href}
            href={link.href}
            className='flex w-12 lg:w-full items-center gap-2 hover:bg-primary-foreground font-bold hover:text-primary px-2 py-1 rounded-full justify-center lg:justify-normal'
          >
            <link.icon className='w-6 h-6' />
            <span className='hidden lg:block'>{link.label}</span>
          </Link>
        ))}

        <Link
          href={"/secret-dashboard"}
          className='flex w-12 lg:w-full items-center gap-2 hover:bg-primary-foreground font-bold hover:text-primary px-2 py-1 rounded-full justify-center lg:justify-normal'
        >
          <LayoutDashboard className='w-6 h-6' />
          <span className='hidden lg:block'>Dashboard</span>
        </Link>

        <MessagesLink />
      </nav>
    </div>
  );
};
export default Sidebar;
