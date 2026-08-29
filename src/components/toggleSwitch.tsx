import React from "react";

interface ToggleSwitchProps {
  checked: boolean;
  onChange: () => void;
  /** Accessible name — the control is icon-only. */
  label: string;
}

const ToggleSwitch: React.FC<ToggleSwitchProps> = ({
  checked,
  onChange,
  label,
}) => (
  <button
    type="button"
    role="switch"
    aria-checked={checked}
    aria-label={label}
    onClick={onChange}
    className="theme-switch"
  >
    <span className="theme-switch__knob" />
  </button>
);

export default ToggleSwitch;
