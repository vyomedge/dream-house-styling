import AdminSidebar from "@/components/AdminSidebar/AdminSidebar";

export default function AdminLayout({ children }) {
  return (
    <div className="min-h-screen bg-gray-100">
      <AdminSidebar />

      <main className="min-h-screen ml-64">
        {children}
      </main>
    </div>
  );
}
