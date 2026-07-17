import { Navigate } from 'react-router-dom';

// Wrap any admin page with this. If there is no token, the visitor is
// sent to /admin/login instead of seeing the dashboard - this is what
// makes the admin area "access for only me".
export default function RequireAuth({ children }) {
  const token = localStorage.getItem('nexusweb_admin_token');
  if (!token) {
    return <Navigate to="/admin/login" replace />;
  }
  return children;
}
