'use client';

import { ChevronDownIcon } from '@aics-client/design-system/icons';
import React, { useState, useRef, useEffect } from 'react';


import * as styles from './select.css';

interface Option {
  label: string;
  value: string;
}

interface SelectProps {
  options: Option[];
  placeholder?: string;
  value?: string;
  onChange?: (value: string) => void;
  label?: string;
  message?: string;
}

function Select({
  options,
  placeholder,
  value,
  onChange,
  label,
  message,
}: SelectProps) {
  const [open, setOpen] = useState(false);
  const [selected, setSelected] = useState<string | undefined>(value);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (ref.current && !ref.current.contains(event.target as Node)) {
        setOpen(false);
      }
    }
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const handleSelect = (value: string) => {
    setSelected(value);
    setOpen(false);
    onChange?.(value);
  };

  useEffect(() => {
    setSelected(value);
  }, [value]);

  return (
    <div className={styles.selectWrapper}>
      {label && (
        <label htmlFor='select-button' className={styles.label}>
          {label}
        </label>
      )}
      <div ref={ref} className={styles.selectContainer}>
        <button
          id='select-button'
          type='button'
          onClick={() => setOpen(prev => !prev)}
          className={styles.selectButton}
        >
          <span>
            {options.find(option => option.value === selected)?.label ||
              placeholder}
          </span>
          <ChevronDownIcon size={'1rem'} />
        </button>
        {open && (
          <ul className={styles.dropdownList}>
            {options.map(option => (
              <li
                key={option.value}
                onClick={() => handleSelect(option.value)}
                onKeyDown={e => {
                  if (e.key === 'Enter' || e.key === ' ') {
                    setOpen(prev => !prev);
                  }
                }}
                className={`${styles.dropdownItem} ${selected === option.value ? styles.selectedItem : ''}`}
              >
                {option.label}
              </li>
            ))}
          </ul>
        )}
      </div>
      {message && <p className={styles.message}>{message}</p>}
    </div>
  );
}

export default Select;
