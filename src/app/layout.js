
import AdminLayout from "@/components/ui/AdminLayout";
import "./globals.css";


export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
      >
        <AdminLayout>{children}</AdminLayout>
       
      </body>
    </html>
  );
}
