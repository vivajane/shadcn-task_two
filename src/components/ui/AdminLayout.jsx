import { Avatar, AvatarImage, AvatarFallback } from "./avatar";
import Link from "next/link";
import { MdOutlineDashboard } from "react-icons/md";

const AdminLayout = ({ children }) => {
  return (
    <div className="flex  h-screen">
      {/* Sidebar */}
      <aside className="w-64 md:text-base text-xs bg-gray-900 text-white p-4">
        <div className="flex py-5 gap-3 items-center"><MdOutlineDashboard/>
        <h2 className="text-xl font-bold">Admin Dashboard</h2></div>
        <nav>
          <ul className="py-5 space-y-4 mb-20">
            <li>
              <div className="flex gap-2 items-center">
                <Avatar className="w-4 text-xs text-black h-4">
                  <AvatarImage src="" />
                  <AvatarFallback >ov</AvatarFallback>
                </Avatar>
               <Link href="/overview">Overview</Link>
              </div>
            </li>
            <li>
              <div className="flex gap-2 items-center">
                <Avatar className="w-4 text-xs text-black h-4">
                  <AvatarImage src="" />
                  <AvatarFallback >in</AvatarFallback>
                </Avatar>
                <Link href="/overview">Interviews</Link>
              </div>
            </li>
            <li>
              <div className="flex gap-2 items-center">
                <Avatar className="w-4 text-xs text-black h-4">
                  <AvatarImage src="" />
                  <AvatarFallback >up</AvatarFallback>
                </Avatar>
                <Link href="/overview">User Profile</Link>
              </div>
            </li>
          </ul>
          <ul className="py-5 space-y-4">
            <li>
              <div className="flex gap-2 items-center">
                <Avatar className="w-4 text-xs text-black h-4">
                  <AvatarImage src="" />
                  <AvatarFallback >ac</AvatarFallback>
                </Avatar>
                <Link href="/overview">Account</Link>
              </div>
            </li>
            <li>
              <div className="flex gap-2 items-center">
                <Avatar className="w-4 text-xs text-black h-4">
                  <AvatarImage src="" />
                  <AvatarFallback >bl</AvatarFallback>
                </Avatar>
                <Link href="/overview">Blogs</Link>
              </div>
            </li>
            <li>
              <div className="flex gap-2 items-center">
                <Avatar className="w-4 text-xs text-black h-4">
                  <AvatarImage src="" />
                  <AvatarFallback >so</AvatarFallback>
                </Avatar>
                <Link href="/overview">Socials</Link>
              </div>
            </li>
          </ul>
        </nav>
      </aside>

      {/* Main Content */}
      <main className="flex-1 p-6 bg-gray-100">{children}</main>
    </div>
  );
};

export default AdminLayout;
