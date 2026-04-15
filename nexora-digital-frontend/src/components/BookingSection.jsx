import { useState } from 'react';
import { motion } from 'framer-motion';
import { toast } from 'react-toastify';
import api from '../lib/api';
import SectionTitle from './SectionTitle';
import { bookingTypes } from '../data/content';
import CustomSelect from './ui/CustomSelect';
import DatePickerField from './ui/DatePickerField';
import TimePickerField from './ui/TimePickerField';

const initialState = {
  fullName: '',
  email: '',
  phone: '',
  company: '',
  consultationType: '',
  preferredDate: '',
  preferredTime: '',
  notes: ''
};

export default function BookingSection() {
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
      await api.post('/bookings', form);
      toast.success('Your consultation has been booked.');
      setForm(initialState);
    } catch (error) {
      toast.error(error?.response?.data?.message || 'Unable to book this time slot.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <section id="booking" className="section booking-section">
      <div className="container two-col booking-layout">
        <motion.div
          initial={{ opacity: 0, x: -24 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="booking-showcase"
        >
          <SectionTitle
            eyebrow="Consultation"
            title="Book a strategic call to shape your project clearly"
            description="Suggest a time slot, choose the type of support you need, and keep every inquiry organized in MySQL."
          />
          <div className="booking-panel glass-card">
            <div className="booking-panel-top">
              <strong>Discovery call</strong>
              <span>30 to 45 minutes</span>
            </div>
            <ul>
              <li>Need analysis</li>
              <li>Technical recommendation</li>
              <li>MVP / roadmap direction</li>
              <li>Realistic estimate</li>
            </ul>
          </div>
        </motion.div>

        <motion.form
          initial={{ opacity: 0, x: 24 }}
          whileInView={{ opacity: 1, x: 0 }}
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
              label="Consultation type"
              name="consultationType"
              value={form.consultationType}
              onChange={handleChange}
              required
              options={bookingTypes.map((item) => ({ value: item, label: item }))}
            />
            <DatePickerField
              label="Preferred date"
              name="preferredDate"
              value={form.preferredDate}
              onChange={handleChange}
              required
            />
            <TimePickerField
              label="Preferred time"
              name="preferredTime"
              value={form.preferredTime}
              onChange={handleChange}
              required
            />
          </div>

          <label>
            Notes / context
            <textarea name="notes" rows="5" value={form.notes} onChange={handleChange} />
          </label>

          <button className="btn btn-primary full" type="submit" disabled={loading}>
            {loading ? 'Booking...' : 'Book consultation'}
          </button>
        </motion.form>
      </div>
    </section>
  );
}
