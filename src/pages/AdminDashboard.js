import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import api from '../api';
import jsPDF from 'jspdf';
import autoTable from 'jspdf-autotable';

export default function AdminDashboard() {
  const [submissions, setSubmissions] = useState([]);
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();

  useEffect(() => {
    loadSubmissions();
  }, []);

  async function loadSubmissions() {
    setLoading(true);
    try {
      const res = await api.get('/admin/submissions');
      setSubmissions(res.data);
    } catch (err) {
      console.error(err);
    } finally {
      setLoading(false);
    }
  }

  async function updateStatus(id, status) {
    await api.patch(`/admin/submissions/${id}`, { status });
    loadSubmissions();
  }

  async function deleteSubmission(id) {
    if (!window.confirm('Delete this submission?')) return;
    await api.delete(`/admin/submissions/${id}`);
    loadSubmissions();
  }

  function logout() {
    localStorage.removeItem('nexusweb_admin_token');
    navigate('/admin/login');
  }

  // Builds a PDF of every submission currently loaded and downloads it.
  function exportPdf() {
    const doc = new jsPDF();
    doc.setFontSize(16);
    doc.text('NexusWeb — Contact Form Submissions', 14, 16);
    doc.setFontSize(10);
    doc.text(`Exported ${new Date().toLocaleString()}`, 14, 22);

    autoTable(doc, {
      startY: 28,
      head: [['Date', 'Name', 'Email', 'Phone', 'Service', 'Message', 'Status']],
      body: submissions.map((s) => [
        new Date(s.createdAt).toLocaleDateString(),
        s.name,
        s.email,
        s.phone || '-',
        s.service || '-',
        s.message,
        s.status
      ]),
      styles: { fontSize: 8, cellWidth: 'wrap' },
      columnStyles: { 5: { cellWidth: 60 } }
    });

    doc.save(`nexusweb-submissions-${Date.now()}.pdf`);
  }

  return (
    <div className="admin-shell">
      <div className="admin-topbar">
        <div className="brand">Nexus<span style={{ color: 'var(--cyan)' }}>Web</span> Admin</div>
        <button className="btn secondary" onClick={logout}>Log out</button>
      </div>

      <div className="admin-page">
        <div className="admin-actions">
          <button className="btn" onClick={exportPdf} disabled={submissions.length === 0}>
            Export as PDF
          </button>
          <button className="btn secondary" onClick={loadSubmissions}>Refresh</button>
        </div>

        {loading ? (
          <p>Loading submissions...</p>
        ) : submissions.length === 0 ? (
          <p>No submissions yet.</p>
        ) : (
          <table>
            <thead>
              <tr>
                <th>Date</th><th>Name</th><th>Email</th><th>Phone</th>
                <th>Service</th><th>Message</th><th>Status</th><th></th>
              </tr>
            </thead>
            <tbody>
              {submissions.map((s) => (
                <tr key={s._id}>
                  <td>{new Date(s.createdAt).toLocaleDateString()}</td>
                  <td>{s.name}</td>
                  <td>{s.email}</td>
                  <td>{s.phone || '-'}</td>
                  <td>{s.service || '-'}</td>
                  <td style={{ maxWidth: 260 }}>{s.message}</td>
                  <td>
                    <select
                      value={s.status}
                      onChange={(e) => updateStatus(s._id, e.target.value)}
                      style={{ background: 'var(--bg-2)', color: 'var(--ink)', border: '1px solid var(--line)', borderRadius: 6, padding: '4px 6px' }}
                    >
                      <option value="new">new</option>
                      <option value="contacted">contacted</option>
                      <option value="closed">closed</option>
                    </select>
                  </td>
                  <td>
                    <button className="btn secondary" onClick={() => deleteSubmission(s._id)}>Delete</button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        )}
      </div>
    </div>
  );
}
