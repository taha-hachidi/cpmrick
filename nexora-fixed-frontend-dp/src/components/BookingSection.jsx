import { useMemo, useState } from "react";
import { motion } from "framer-motion";
import {
  FiCalendar,
  FiCheck,
  FiClock,
  FiLoader,
  FiMail,
  FiPhone,
  FiUser,
  FiBriefcase,
  FiZap
} from "react-icons/fi";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { toast } from "react-toastify";
import api from "../lib/api";
import SectionTitle from "./SectionTitle";
import { bookingTypes } from "../data/content";

const initialState = {
  fullName: "",
  email: "",
  phone: "",
  company: "",
  consultationType: "",
  preferredDate: "",
  preferredTime: "",
  notes: ""
};

const timeSlots = [
  "09:00",
  "09:30",
  "10:00",
  "10:30",
  "11:00",
  "11:30",
  "14:00",
  "14:30",
  "15:00",
  "15:30",
  "16:00",
  "16:30"
];

function formatServerError(error) {
  return (
    error?.response?.data?.message ||
    error?.response?.data?.error ||
    "Unable to book this consultation right now."
  );
}

function toDateOnlyString(date) {
  if (!date) return "";
  const year = date.getFullYear();
  const month = `${date.getMonth() + 1}`.padStart(2, "0");
  const day = `${date.getDate()}`.padStart(2, "0");
  return `${year}-${month}-${day}`;
}

export default function BookingSection() {
  const [form, setForm] = useState(initialState);
  const [loading, setLoading] = useState(false);

  const minDate = useMemo(() => {
    const now = new Date();
    now.setHours(0, 0, 0, 0);
    return now;
  }, []);

  const selectedDateObject = useMemo(() => {
    if (!form.preferredDate) return null;
    const [year, month, day] = form.preferredDate.split("-").map(Number);
    return new Date(year, month - 1, day);
  }, [form.preferredDate]);

  const handleChange = (event) => {
    const { name, value } = event.target;
    setForm((prev) => ({ ...prev, [name]: value }));
  };

  const setConsultationType = (value) => {
    setForm((prev) => ({ ...prev, consultationType: value }));
  };

  const setPreferredTime = (value) => {
    setForm((prev) => ({ ...prev, preferredTime: value }));
  };

  const setPreferredDate = (date) => {
    setForm((prev) => ({
      ...prev,
      preferredDate: toDateOnlyString(date)
    }));
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    if (!form.consultationType) {
      toast.error("Please choose a consultation type.");
      return;
    }

    if (!form.preferredDate) {
      toast.error("Please choose a preferred date.");
      return;
    }

    if (!form.preferredTime) {
      toast.error("Please choose a preferred time.");
      return;
    }

    const payload = {
      ...form,
      preferredDate: String(form.preferredDate).slice(0, 10),
      preferredTime: String(form.preferredTime).slice(0, 5)
    };

    setLoading(true);

    try {
      await api.post("/bookings", payload);
      toast.success("Your consultation has been booked.");
      setForm(initialState);
    } catch (error) {
      console.error("Booking failed:", error?.response?.data || error);
      toast.error(formatServerError(error));
    } finally {
      setLoading(false);
    }
  };

  return (
    <section id="booking" className="section booking-section">
      <div className="container two-col booking-layout booking-layout-premium">
        <motion.div
          initial={{ opacity: 0, x: -28 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.65 }}
          className="booking-showcase"
        >
          <SectionTitle
            eyebrow="Consultation"
            title="Book a strategic call with a polished premium experience"
            description="Choose the right consultation type, pick a suitable date and time, and send a clean request that works perfectly with your backend."
          />

          <div className="booking-panel booking-panel-premium glass-card">
            <div className="booking-panel-chip">
              <FiZap />
              <span>High-value strategy session</span>
            </div>

            <div className="booking-panel-top">
              <strong>Discovery call</strong>
              <span>30 to 45 minutes</span>
            </div>

            <p className="booking-panel-copy">
              Ideal for founders, startups, and growing businesses that want a
              clear action plan before building or scaling a product.
            </p>

            <ul>
              <li>Need analysis and opportunity mapping</li>
              <li>Technical and product-level recommendations</li>
              <li>MVP roadmap and execution priorities</li>
              <li>Budget range and delivery recommendations</li>
            </ul>
          </div>
        </motion.div>

        <motion.form
          initial={{ opacity: 0, x: 28 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.65 }}
          className="glass-card form-card booking-form-premium"
          onSubmit={handleSubmit}
        >
          <div className="booking-form-head">
            <span className="booking-badge">Consultation request</span>
            <h3>Reserve your slot</h3>
            <p>
              Smooth, visual, and premium — without sacrificing reliability.
            </p>
          </div>

          <div className="form-grid">
            <label className="field-label premium-label">
              <span>Full name</span>
              <div className="premium-input-wrap">
                <FiUser />
                <input
                  name="fullName"
                  value={form.fullName}
                  onChange={handleChange}
                  placeholder="Your full name"
                  required
                />
              </div>
            </label>

            <label className="field-label premium-label">
              <span>Email</span>
              <div className="premium-input-wrap">
                <FiMail />
                <input
                  type="email"
                  name="email"
                  value={form.email}
                  onChange={handleChange}
                  placeholder="your@email.com"
                  required
                />
              </div>
            </label>

            <label className="field-label premium-label">
              <span>Phone</span>
              <div className="premium-input-wrap">
                <FiPhone />
                <input
                  name="phone"
                  value={form.phone}
                  onChange={handleChange}
                  placeholder="Optional"
                />
              </div>
            </label>

            <label className="field-label premium-label">
              <span>Company / activity</span>
              <div className="premium-input-wrap">
                <FiBriefcase />
                <input
                  name="company"
                  value={form.company}
                  onChange={handleChange}
                  placeholder="Your company or project"
                />
              </div>
            </label>
          </div>

          <div className="premium-label">
            <span>Consultation type</span>
            <div className="consultation-chip-grid">
              {bookingTypes.map((item) => {
                const active = form.consultationType === item;
                return (
                  <button
                    key={item}
                    type="button"
                    className={`consultation-chip ${active ? "active" : ""}`}
                    onClick={() => setConsultationType(item)}
                  >
                    <span>{item}</span>
                    {active && <FiCheck />}
                  </button>
                );
              })}
            </div>
          </div>

          <div className="booking-date-time-grid">
            <div className="premium-label">
              <span>Preferred date</span>
              <div className="premium-datepicker-shell">
                <DatePicker
                  selected={selectedDateObject}
                  onChange={setPreferredDate}
                  minDate={minDate}
                  placeholderText="Select a date"
                  dateFormat="dd/MM/yyyy"
                  className="custom-datepicker"
                  calendarClassName="premium-datepicker-pop"
                  dayClassName={() => "premium-day"}
                />
                <FiCalendar className="premium-datepicker-icon" />
              </div>
            </div>

            <div className="premium-label">
              <span>Preferred time</span>
              <div className="time-slot-grid">
                {timeSlots.map((slot) => {
                  const active = form.preferredTime === slot;
                  return (
                    <button
                      key={slot}
                      type="button"
                      className={`time-slot ${active ? "active" : ""}`}
                      onClick={() => setPreferredTime(slot)}
                    >
                      <FiClock />
                      <span>{slot}</span>
                    </button>
                  );
                })}
              </div>
            </div>
          </div>

          <label className="field-label premium-label">
            <span>Notes / context</span>
            <textarea
              name="notes"
              rows="5"
              placeholder="Tell us what you want to build, the stage you are in, and the outcome you want."
              value={form.notes}
              onChange={handleChange}
            />
          </label>

          <button className="btn btn-primary full premium-submit" type="submit" disabled={loading}>
            {loading ? (
              <>
                <FiLoader className="spin" />
                Booking...
              </>
            ) : (
              "Book consultation"
            )}
          </button>
        </motion.form>
      </div>
    </section>
  );
}