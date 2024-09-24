
// app/dashboard/loading.js

import AdminAuthLayout from "@/components/Layouts/adminLayout/AdminAuthLayout";



export default function Loading() {
    return (
        <AdminAuthLayout user={{name:"Admin"}}>
        <div className="loading-container">
          <div className="spinner"></div>
        </div>
      </AdminAuthLayout>
    );
  }
  