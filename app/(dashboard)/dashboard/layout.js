import Sidebar from "@/app/Components/SideBar";

export default function DashboardLayout({ children }) {
  return (
    <div className="flex flex-col md:flex-row min-h-screen bg-gray-50">
      {/* সাইডবার এরিয়া */}
      <div className="shrink-0">
        <Sidebar />
      </div>

      <main className="flex-1 flex items-start justify-center p-4 sm:p-6 md:p-8 pt-6 sm:pt-10 pb-24 md:pb-8">
        <div className="w-full max-w-[1320px] mx-auto">{children}</div>
      </main>
    </div>
  );
}
