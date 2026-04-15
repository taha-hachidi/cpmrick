import { useEffect, useMemo, useRef, useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { FiChevronDown, FiClock } from 'react-icons/fi';

function generateTimeSlots() {
  const slots = [];
  for (let hour = 9; hour <= 18; hour += 1) {
    for (const minute of [0, 30]) {
      if (hour === 18 && minute > 0) continue;
      const hh = String(hour).padStart(2, '0');
      const mm = String(minute).padStart(2, '0');
      slots.push(`${hh}:${mm}`);
    }
  }
  return slots;
}

export default function TimePickerField({ label, name, value, onChange, required = false }) {
  const [open, setOpen] = useState(false);
  const rootRef = useRef(null);
  const slots = useMemo(() => generateTimeSlots(), []);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (rootRef.current && !rootRef.current.contains(event.target)) {
        setOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  return (
    <label className="field-label">
      <span>{label}</span>
      <div className={`custom-field ${open ? 'open' : ''}`} ref={rootRef}>
        <input type="hidden" name={name} value={value} required={required} />
        <button type="button" className={`custom-trigger ${!value ? 'placeholder' : ''}`} onClick={() => setOpen((prev) => !prev)}>
          <span>{value || 'Choose a time'}</span>
          <div className="trigger-icons">
            <FiClock className="trigger-icon" />
            <FiChevronDown className="trigger-icon small" />
          </div>
        </button>

        <AnimatePresence>
          {open && (
            <motion.div
              initial={{ opacity: 0, y: 8, scale: 0.98 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: 8, scale: 0.98 }}
              transition={{ duration: 0.18 }}
              className="custom-dropdown time-dropdown"
            >
              <div className="time-grid">
                {slots.map((slot) => (
                  <button
                    type="button"
                    key={slot}
                    className={`time-slot ${value === slot ? 'active' : ''}`}
                    onClick={() => {
                      onChange({ target: { name, value: slot } });
                      setOpen(false);
                    }}
                  >
                    {slot}
                  </button>
                ))}
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </label>
  );
}
