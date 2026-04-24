import { useEffect, useRef, useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { FiChevronDown } from 'react-icons/fi';

export default function CustomSelect({
  label,
  name,
  value,
  onChange,
  options,
  placeholder = 'Select',
  required = false
}) {
  const [open, setOpen] = useState(false);
  const rootRef = useRef(null);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (rootRef.current && !rootRef.current.contains(event.target)) {
        setOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const selectedLabel = options.find((option) => option.value === value)?.label || value || placeholder;

  return (
    <label className="field-label">
      <span>{label}</span>
      <div className={`custom-field ${open ? 'open' : ''}`} ref={rootRef}>
        <input type="hidden" name={name} value={value} required={required} />
        <button
          type="button"
          className={`custom-trigger ${!value ? 'placeholder' : ''}`}
          onClick={() => setOpen((prev) => !prev)}
          aria-expanded={open}
        >
          <span>{selectedLabel}</span>
          <FiChevronDown className="trigger-icon" />
        </button>

        <AnimatePresence>
          {open && (
            <motion.div
              initial={{ opacity: 0, y: 8, scale: 0.98 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: 8, scale: 0.98 }}
              transition={{ duration: 0.18 }}
              className="custom-dropdown"
            >
              {options.map((option) => (
                <button
                  type="button"
                  key={option.value}
                  className={`dropdown-option ${value === option.value ? 'active' : ''}`}
                  onClick={() => {
                    onChange({ target: { name, value: option.value } });
                    setOpen(false);
                  }}
                >
                  <span>{option.label}</span>
                  {option.description ? <small>{option.description}</small> : null}
                </button>
              ))}
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </label>
  );
}
