import { useState } from 'react';
import { motion } from 'framer-motion';
import { toast } from 'react-toastify';
import api from '../lib/api';
import SectionTitle from './SectionTitle';
import CustomSelect from './ui/CustomSelect';

const initialState = {
  fullName: '',
  email: '',
  phone: '',
  company: '',
  projectType: '',
  budgetRange: '',
  message: ''
};

export default function ContactSection() {
  const [form, setForm] = useState(initialState);
  const [loading, setLoading] = useState(false);

  const handleChange = (event) => {
    const { name, value } = event.target;
    setForm((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    setLoading(true);
    try {
      await api.post('/contact', form);
      toast.success('Your request has been sent successfully.');
      setForm(initialState);
    } catch (error) {
      toast.error(error?.response?.data?.message || 'Something went wrong.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <section id="contact" className="section contact-section">
      <div className="container two-col contact-layout">
        <div>
          <SectionTitle
            eyebrow="Contact"
            title="Tell us about your project and we will get back to you quickly"
            description="Share what you want to build, where your business is headed, and what kind of support you need. The form is connected to the backend and stored in MySQL."
          />
          <div className="contact-side-card glass-card">
            <strong>What you can ask for</strong>
            <ul>
              <li>Premium marketing website</li>
              <li>Business platform or dashboard</li>
              <li>Mobile application</li>
              <li>AI assistant or custom agent</li>
              <li>Internal workflow automation</li>
            </ul>
          </div>
        </div>

        <motion.form
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="glass-card form-card"
          onSubmit={handleSubmit}
        >
          <div className="form-grid">
            <label>
              Full name
              <input name="fullName" value={form.fullName} onChange={handleChange} required />
            </label>
            <label>
              Email
              <input type="email" name="email" value={form.email} onChange={handleChange} required />
            </label>
            <label>
              Phone
              <input name="phone" value={form.phone} onChange={handleChange} />
            </label>
            <label>
              Company / activity
              <input name="company" value={form.company} onChange={handleChange} />
            </label>
            <CustomSelect
              label="Project type"
              name="projectType"
              value={form.projectType}
              onChange={handleChange}
              required
              options={[
                { value: 'Premium website', label: 'Premium website', description: 'Marketing site or conversion funnel' },
                { value: 'Business web application', label: 'Business web application', description: 'Dashboard, portal, or internal platform' },
                { value: 'Mobile application', label: 'Mobile application', description: 'Native-feel mobile product' },
                { value: 'AI agent', label: 'AI agent', description: 'Assistant, chatbot, or knowledge tool' },
                { value: 'Workflow automation', label: 'Workflow automation', description: 'Automated business operations' }
              ]}
            />
            <CustomSelect
              label="Estimated budget"
              name="budgetRange"
              value={form.budgetRange}
              onChange={handleChange}
              options={[
                { value: 'Under €1,000', label: 'Under €1,000', description: 'Small focused mission' },
                { value: '€1,000 – €3,000', label: '€1,000 – €3,000', description: 'Starter product scope' },
                { value: '€3,000 – €7,000', label: '€3,000 – €7,000', description: 'Serious product build' },
                { value: '€7,000+', label: '€7,000+', description: 'High-end custom engagement' }
              ]}
            />
          </div>
          <label>
            Describe your needs
            <textarea
              name="message"
              rows="6"
              value={form.message}
              onChange={handleChange}
              required
            />
          </label>

          <button className="btn btn-primary full" type="submit" disabled={loading}>
            {loading ? 'Sending...' : 'Send request'}
          </button>
        </motion.form>
      </div>
    </section>
  );
}
