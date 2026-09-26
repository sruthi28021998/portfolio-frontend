'use client';

import { useState } from 'react';
import { submitContact } from '../../lib/api';

export default function ContactPage() {
  const [form, setForm] = useState({ name: '', email: '', subject: '', message: '' });
  const [status, setStatus] = useState('');

  const handleChange = (e) => setForm({ ...form, [e.target.name]: e.target.value });

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus('sending');
    try {
      await submitContact(form);
      setStatus('sent');
      setForm({ name: '', email: '', subject: '', message: '' });
    } catch {
      setStatus('error');
    }
  };

  return (
    <section className="py-16 max-w-xl">
      <h1 className="text-3xl font-bold mb-8">Contact Me</h1>
      <form onSubmit={handleSubmit} className="space-y-4">
        <input name="name" placeholder="Name" value={form.name} onChange={handleChange} required className="w-full border p-3 rounded" />
        <input name="email" type="email" placeholder="Email" value={form.email} onChange={handleChange} required className="w-full border p-3 rounded" />
        <input name="subject" placeholder="Subject" value={form.subject} onChange={handleChange} className="w-full border p-3 rounded" />
        <textarea name="message" placeholder="Message" rows={5} value={form.message} onChange={handleChange} required className="w-full border p-3 rounded" />
        <button type="submit" className="bg-blue-600 text-white px-6 py-3 rounded hover:bg-blue-700">
          Send Message
        </button>
        {status === 'sent' && <p className="text-green-600">Message sent successfully!</p>}
        {status === 'error' && <p className="text-red-600">Something went wrong. Try again.</p>}
      </form>
    </section>
  );
}