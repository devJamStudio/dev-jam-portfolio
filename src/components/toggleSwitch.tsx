import React, { ChangeEvent, useState } from "react";
import styled from "styled-components";

const Label = styled.label`
  display: flex;
  align-items: center;
  gap: 10px;
  cursor: pointer;
`;

const Switch = styled.div`
  position: relative;
  width: 60px;
  height: 28px;
  background: #b3b3b3;
  border-radius: 32px;
  padding: 4px;
  transition: 300ms all;

  &:before {
    transition: 300ms all;
    content: "";
    position: absolute;
    width: 28px;
    height: 28px;
    border-radius: 35px;
    top: 50%;
    left: 4px;
    background:  rgb(250 249 246 );
    transform: translate(0, -50%);
    background-size:80%;
    background-repeat:no-repeat;
    background-position:center;
    background-image: url("data:image/svg+xml,%3Csvg id='Warstwa_2' data-name='Warstwa 2' xmlns='http://www.w3.org/2000/svg' viewBox='0 0 105.14 105.14'%3E%3Cdefs%3E%3Cstyle%3E .cls-1 %7B stroke-width: 0px; %7D %3C/style%3E%3C/defs%3E%3Cg id='ICON'%3E%3Cg%3E%3Cg%3E%3Cpath class='cls-1' d='m52.57,16.78c-1.81,0-3.27-1.46-3.27-3.27V3.27c0-1.8,1.46-3.27,3.27-3.27s3.27,1.46,3.27,3.27v10.24c0,1.8-1.46,3.27-3.27,3.27Z'/%3E%3Cpath class='cls-1' d='m52.57,105.14c-1.81,0-3.27-1.46-3.27-3.27v-10.46c0-1.8,1.46-3.27,3.27-3.27s3.27,1.46,3.27,3.27v10.46c0,1.8-1.46,3.27-3.27,3.27Z'/%3E%3Cpath class='cls-1' d='m101.88,55.84h-10.39c-1.81,0-3.27-1.46-3.27-3.27s1.46-3.27,3.27-3.27h10.39c1.81,0,3.27,1.46,3.27,3.27s-1.46,3.27-3.27,3.27Z'/%3E%3Cpath class='cls-1' d='m13.53,55.84H3.27c-1.81,0-3.27-1.46-3.27-3.27s1.46-3.27,3.27-3.27h10.26c1.81,0,3.27,1.46,3.27,3.27s-1.46,3.27-3.27,3.27Z'/%3E%3Cpath class='cls-1' d='m80.11,28.3c-.84,0-1.67-.32-2.31-.96-1.28-1.28-1.28-3.35,0-4.62l7.32-7.32c1.28-1.28,3.35-1.28,4.62,0,1.28,1.28,1.28,3.35,0,4.62l-7.32,7.32c-.64.64-1.47.96-2.31.96Z'/%3E%3Cpath class='cls-1' d='m17.71,90.7c-.84,0-1.67-.32-2.31-.96-1.28-1.28-1.28-3.35,0-4.62l7.32-7.32c1.28-1.28,3.35-1.28,4.62,0,1.28,1.28,1.28,3.35,0,4.62l-7.32,7.32c-.64.64-1.47.96-2.31.96Z'/%3E%3Cpath class='cls-1' d='m87.44,90.7c-.84,0-1.67-.32-2.31-.96l-7.38-7.38c-1.28-1.28-1.28-3.35,0-4.62,1.28-1.28,3.35-1.28,4.62,0l7.38,7.38c1.28,1.28,1.28,3.35,0,4.62-.64.64-1.47.96-2.31.96Z'/%3E%3Cpath class='cls-1' d='m24.94,28.21c-.84,0-1.67-.32-2.31-.96l-7.23-7.23c-1.28-1.28-1.28-3.35,0-4.62,1.28-1.28,3.35-1.28,4.62,0l7.23,7.23c1.28,1.28,1.28,3.35,0,4.62-.64.64-1.47.96-2.31.96Z'/%3E%3C/g%3E%3Ccircle class='cls-1' cx='52.57' cy='52.57' r='25.82'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E");
  }
`;

const Input = styled.input`
  opacity: 0;
  position: absolute;

  &:checked + ${Switch} {
    background: grey;

    &:before {
      transform: translate(32px, -50%);
      background-size:80%;
      background-repeat:no-repeat;
      background-position:center;
      background-image: url("data:image/svg+xml,%3Csvg id='Warstwa_2' data-name='Warstwa 2' xmlns='http://www.w3.org/2000/svg' viewBox='0 0 99.76 94.76'%3E%3Cdefs%3E%3Cstyle%3E .cls-1 %7B stroke-width: 0px; %7D %3C/style%3E%3C/defs%3E%3Cg id='ICON'%3E%3Cg%3E%3Cpath class='cls-1' d='m99.74,48.76c-.3-10.26-4.13-20.17-10.8-27.91-6.54-7.59-15.53-12.83-25.31-14.74-.28-.05-.57-.08-.85-.08-1.63,0-3.11.92-3.86,2.4-.75,1.47-.61,3.2.36,4.53,4.52,6.19,7.16,13.53,7.63,21.22,1.37,22.16-15.55,41.31-37.68,42.68h-.08c-1.82.11-3.35,1.3-3.91,3.03-.55,1.71-.02,3.55,1.37,4.69,7.98,6.57,18.06,10.19,28.38,10.19h0c1.13,0,2.27-.04,3.4-.13,11.47-.86,22.06-6.08,29.83-14.69,7.77-8.61,11.86-19.69,11.53-31.18Z'/%3E%3Cpath class='cls-1' d='m40.48,31.53c-1.72-.1-3.21,1.2-3.33,2.92l-.15,2.28-2.28-.15c-1.71-.1-3.21,1.2-3.33,2.92-.11,1.72,1.19,3.21,2.92,3.33l2.28.15-.15,2.28c-.11,1.72,1.19,3.21,2.92,3.33.07,0,.14,0,.21,0,1.64,0,3.01-1.27,3.12-2.93l.15-2.28,2.28.15c.07,0,.14,0,.21,0,1.64,0,3.01-1.27,3.12-2.93.11-1.72-1.19-3.21-2.92-3.33l-2.28-.15.15-2.28c.11-1.72-1.19-3.21-2.92-3.33Z'/%3E%3Cpath class='cls-1' d='m27.53,14.27c.62.76,1.52,1.15,2.42,1.15.7,0,1.4-.23,1.98-.71l2.62-2.14,2.14,2.62c.62.76,1.52,1.15,2.42,1.15.7,0,1.4-.23,1.98-.71,1.34-1.09,1.54-3.07.44-4.4l-2.14-2.62,2.62-2.14c1.34-1.09,1.54-3.07.44-4.4-1.09-1.34-3.06-1.54-4.4-.44l-2.62,2.14-2.14-2.62c-1.09-1.34-3.06-1.54-4.4-.44-1.34,1.09-1.54,3.07-.44,4.4l2.14,2.62-2.62,2.14c-1.34,1.09-1.54,3.07-.44,4.4Z'/%3E%3Cpath class='cls-1' d='m17.78,45.29l-4.46.66-.66-4.46c-.25-1.71-1.84-2.88-3.55-2.64-1.71.25-2.89,1.85-2.64,3.56l.66,4.46-4.46.66c-1.71.25-2.89,1.85-2.64,3.55.23,1.55,1.57,2.67,3.09,2.67.15,0,.31-.01.46-.03l4.46-.66.66,4.46c.23,1.55,1.57,2.67,3.09,2.67.15,0,.31-.01.46-.03,1.71-.25,2.89-1.85,2.64-3.56l-.66-4.46,4.46-.66c1.71-.25,2.89-1.85,2.64-3.55-.25-1.71-1.84-2.88-3.55-2.64Z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E");    }
  }
`;

interface ToggleSwitchProps {
  checked: boolean;
  onChange?: (isChecked: boolean) => void;
}

const ToggleSwitch: React.FC<ToggleSwitchProps> = ({ checked, onChange }) => {
  const [isChecked, setIsChecked] = useState(checked);

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    const newChecked = e.target.checked;
    setIsChecked(newChecked);
    if (onChange) {
      onChange(newChecked);
    }
  };

  return (
    <Label>
      <Input checked={isChecked} type="checkbox" onChange={handleChange} />
      <Switch />
    </Label>
  );
};

export default ToggleSwitch;
