import React, {
  InputHTMLAttributes,
  memo,
  useRef,
  useState,
} from 'react';

import { fetchSearchProducts } from '../../../app/store/store';

import cls from './Input.module.scss';

type HTMLInputProps = Omit<InputHTMLAttributes<HTMLInputElement>, 'value' | 'onChange'>

interface InputProps extends HTMLInputProps {
  value?: string;
  autofocus?: boolean;
}

const Input = (props: InputProps) => {
  const {
    value,
    type = 'text',
    placeholder,
  } = props;
  const ref = useRef<HTMLInputElement>(null);

  const [inputError, setInputError] = useState(false);

  const onChangeHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    handleSubmit(e);
  };

  const isInputValidate = (value: string): boolean => {
    const regex = /^[a-zA-Z0-9 ]*$/;
    return regex.test(value);
  };

  const handleSubmit = (e: any) => {
    e.preventDefault();

    if (ref.current !== null) {
      if (isInputValidate(ref.current.value)) {
        fetchSearchProducts(ref.current.value);
        setInputError(false);
      } else {
        setInputError(true);
      }
    }
  };

  return (
    <div className={cls.InputWrapper}>
      <input
        ref={ref}
        type={type}
        value={value}
        onChange={onChangeHandler}
        className={cls.input}
        placeholder={placeholder}
      />
      {inputError && (
        <span className={cls.error}>
          Search must contain only latin characters, numbers and spaces
        </span>
      )}
    </div>
  );
};

export default memo(Input);
