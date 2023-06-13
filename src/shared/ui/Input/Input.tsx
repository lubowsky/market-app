import React, {
  InputHTMLAttributes,
  memo,
  useRef,
} from 'react';

import { fetchSearchProducts } from '../../../app/store/store';

import cls from './Input.module.scss';

type HTMLInputProps = Omit<InputHTMLAttributes<HTMLInputElement>, 'value' | 'onChange'>

interface InputProps extends HTMLInputProps {
  value?: string;
  onChange?: (value: string) => void;
  autofocus?: boolean;
}

const Input = (props: InputProps) => {
  const {
    value,
    onChange,
    type = 'text',
    placeholder,
  } = props;
  const ref = useRef<HTMLInputElement>(null);

  const onChangeHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    onChange?.(e.target.value);
  };

  const onSelect = (e: any) => {
    fetchSearchProducts(e.target.value);
  };

  return (
    <div className={cls.InputWrapper}>
      <input
        ref={ref}
        type={type}
        value={value}
        onChange={onChangeHandler}
        className={cls.input}
        onSelect={onSelect}
        placeholder={placeholder}
      />
    </div>
  );
};

export default memo(Input);
