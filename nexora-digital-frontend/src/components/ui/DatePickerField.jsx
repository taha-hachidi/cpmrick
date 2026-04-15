import { useEffect, useMemo, useRef, useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { FiCalendar, FiChevronLeft, FiChevronRight } from 'react-icons/fi';

const monthFormatter = new Intl.DateTimeFormat('en-US', { month: 'long', year: 'numeric' });
const dayFormatter = new Intl.DateTimeFormat('en-US', { weekday: 'short' });

function formatValue(date) {
  return date.toISOString().split('T')[0];
}

function formatDisplay(date) {
  return new Intl.DateTimeFormat('en-US', {
    month: 'short',
    day: 'numeric',
    year: 'numeric'
  }).format(date);
}

function isSameDay(a, b) {
  return a.getFullYear() === b.getFullYear() && a.getMonth() === b.getMonth() && a.getDate() === b.getDate();
}

export default function DatePickerField({ label, name, value, onChange, required = false }) {
  const [open, setOpen] = useState(false);
  const rootRef = useRef(null);
  const today = useMemo(() => {
    const now = new Date();
    now.setHours(0, 0, 0, 0);
    return now;
  }, []);
  const [visibleMonth, setVisibleMonth] = useState(() => {
    const base = value ? new Date(value) : today;
    return new Date(base.getFullYear(), base.getMonth(), 1);
  });

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (rootRef.current && !rootRef.current.contains(event.target)) {
        setOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const selectedDate = value ? new Date(`${value}T00:00:00`) : null;

  const calendarDays = useMemo(() => {
    const firstDay = new Date(visibleMonth.getFullYear(), visibleMonth.getMonth(), 1);
    const start = new Date(firstDay);
    const offset = (firstDay.getDay() + 6) % 7;
    start.setDate(firstDay.getDate() - offset);

    return Array.from({ length: 42 }, (_, index) => {
      const date = new Date(start);
      date.setDate(start.getDate() + index);
      return date;
    });
  }, [visibleMonth]);

  return (
    <label className="field-label">
      <span>{label}</span>
      <div className={`custom-field ${open ? 'open' : ''}`} ref={rootRef}>
        <input type="hidden" name={name} value={value} required={required} />
        <button type="button" className={`custom-trigger ${!value ? 'placeholder' : ''}`} onClick={() => setOpen((prev) => !prev)}>
          <span>{selectedDate ? formatDisplay(selectedDate) : 'Choose a date'}</span>
          <FiCalendar className="trigger-icon" />
        </button>

        <AnimatePresence>
          {open && (
            <motion.div
              initial={{ opacity: 0, y: 8, scale: 0.98 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: 8, scale: 0.98 }}
              transition={{ duration: 0.18 }}
              className="custom-dropdown calendar-dropdown"
            >
              <div className="calendar-header">
                <button type="button" className="calendar-nav" onClick={() => setVisibleMonth(new Date(visibleMonth.getFullYear(), visibleMonth.getMonth() - 1, 1))}>
                  <FiChevronLeft />
                </button>
                <strong>{monthFormatter.format(visibleMonth)}</strong>
                <button type="button" className="calendar-nav" onClick={() => setVisibleMonth(new Date(visibleMonth.getFullYear(), visibleMonth.getMonth() + 1, 1))}>
                  <FiChevronRight />
                </button>
              </div>
              <div className="calendar-weekdays">
                {Array.from({ length: 7 }, (_, index) => {
                  const date = new Date(2024, 0, 1 + index);
                  return <span key={index}>{dayFormatter.format(date)}</span>;
                })}
              </div>
              <div className="calendar-grid">
                {calendarDays.map((day) => {
                  const disabled = day < today;
                  const outMonth = day.getMonth() !== visibleMonth.getMonth();
                  const selected = selectedDate && isSameDay(day, selectedDate);
                  const isToday = isSameDay(day, today);

                  return (
                    <button
                      key={day.toISOString()}
                      type="button"
                      disabled={disabled}
                      className={`calendar-day ${outMonth ? 'muted' : ''} ${selected ? 'selected' : ''} ${isToday ? 'today' : ''}`}
                      onClick={() => {
                        onChange({ target: { name, value: formatValue(day) } });
                        setOpen(false);
                      }}
                    >
                      {day.getDate()}
                    </button>
                  );
                })}
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </label>
  );
}
