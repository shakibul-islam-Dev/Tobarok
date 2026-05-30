import Sidebar from "@/app/Components/SideBar";

export default function DashboardLayout({ children }) {
  return (
    <div className="flex h-screen">
      {/* বামে সাইডবার স্থির থাকবে */}
      <aside className="w-64 text-white"></aside>
      <Sidebar></Sidebar>
      {/* ডানে ভেতরের পেজগুলো পরিবর্তন হবে */}
      <main className="flex-1 overflow-y-auto p-2 bg-gray-100">{children}</main>
    </div>
  );
}
