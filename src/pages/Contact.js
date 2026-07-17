import { useState } from 'react';
import Navbar from '../components/Navbar';
import api from '../api';
import { useNavigate } from "react-router-dom";

const initialForm = { name: '', email: '', phone: '', service: 'Basic', message: '' };

export default function Contact() {
  const navigate = useNavigate();
  const [form, setForm] = useState(initialForm);
  const [status, setStatus] = useState({ state: 'idle', text: '' });

  function handleChange(e) {
    setForm({ ...form, [e.target.name]: e.target.value });
  }

  async function handleSubmit(e) {
    e.preventDefault();
    setStatus({ state: 'sending', text: '' });
    try {
      const res = await api.post('/contact', form);
      setStatus({ state: 'ok', text: res.data.message || 'Thanks! We will get back to you soon.' });
      setForm(initialForm);
    } catch (err) {
      const msg = err.response?.data?.error || 'Something went wrong. Please try again.';
      setStatus({ state: 'err', text: msg });
    }
  }

  return (
    <div>
      <Navbar />
      <div className="container section" style={{ borderTop: 'none' }}>
        <h2>Tell us about your project</h2>
        <div className="card form-card">
          <form onSubmit={handleSubmit}>
            <div className="form-field">
              <label>Your name</label>
              <input name="name" value={form.name} onChange={handleChange} required />
            </div>
            <div className="form-field">
              <label>Email</label>
              <input type="email" name="email" value={form.email} onChange={handleChange} required />
            </div>
            <div className="form-field">
              <label>Phone (optional)</label>
              <input name="phone" value={form.phone} onChange={handleChange} />
            </div>
            <div className="form-field">
              <label>Which service are you interested in?</label>
              <select name="service" value={form.service} onChange={handleChange}>
                <option>Basic</option>
                <option>Standard</option>
                <option>Premium</option>
                <option>Not sure yet</option>
              </select>
            </div>
            <div className="form-field">
              <label>Message</label>
              <textarea name="message" value={form.message} onChange={handleChange} required
                placeholder="Tell us a bit about what you need..." />
            </div>
            <button className="btn" type="submit" disabled={status.state === 'sending'}>
              {status.state === 'sending' ? 'Sending...' : 'Send message'}
            </button>
            {status.text && (
              <div className={`form-msg ${status.state === 'ok' ? 'ok' : 'err'}`}>{status.text}</div>
            )}
          </form>
        </div>
      </div>
      <div className="page-header">
    <button
        className="home-btn"
        onClick={() => navigate("/")}>
        🏠 Home
    </button>
    </div>
    </div>
  );
}
