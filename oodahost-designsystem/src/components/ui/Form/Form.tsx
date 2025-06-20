import React, { useState } from 'react';
import validator from 'validator';
import { Input } from '@/components/ui/InputEXAMPLE/Input';
import { ButtonLightmode } from '../Button/Button-Lightmode';

/*export const FormContactUs = () => {
//const FormContactUs = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [emailError, setEmailError] = useState('');
    const [passwordError, setPasswordError] = useState('');
    const [isSubmitting, setIsSubmitting] = useState(false);

    const validateEmail = (value: string): string => {
        if (value.trim() === '') return 'Email cannot be empty.';
        if (!validator.isEmail(value)) return 'Invalid email.';
        return '';
      };
};*/

//export default FormContactUs;
export const FormSignUp = () => {
//const FormLogIn = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [emailError, setEmailError] = useState('');
  const [passwordError, setPasswordError] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);

  const validateEmail = (value: string): string => {
    if (value.trim() === '') return 'Email cannot be empty.';
    if (!validator.isEmail(value)) return 'Invalid email.';
    return '';
  };

  const validatePassword = (value: string): string => {
    if (value.trim() === '') return 'Password cannot be empty.';
    if (value.length < 8) return 'Password must be at least 8 characters long.';
    return '';
  };

  const handleEmailChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const val = e.target.value;
    setEmail(val);
    setEmailError(validateEmail(val));
  };
  
  const handlePasswordChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const val = e.target.value;
    setPassword(val);
    setPasswordError(validatePassword(val));
  };

  const handleEmailBlur = () => {
    setEmailError(validateEmail(email));
  };

  const handlePasswordBlur = () => {
    setPasswordError(validatePassword(password));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    const emailErr = validateEmail(email);
    const passwordErr = validatePassword(password);

    setEmailError(emailErr);
    setPasswordError(passwordErr);

    if (emailErr || passwordErr) {
      console.log('Formulario tiene errores de validación.');
      return;
    }

    setIsSubmitting(true);
    try {
      console.log('Sending data:', { email, password });
      await new Promise(resolve => setTimeout(resolve, 2000));
      console.log('Form submitted successfully!');
      setEmail('');
      setPassword('');
    } catch (err) {
      console.error('Error submitting the form:', err);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <Input
        id="input-email"
        label="Email"
        type="email"
        value={email}
        onChange={handleEmailChange}
        onBlur={handleEmailBlur}
        error={emailError}
        placeholder="example@email.com"
      />

      <Input
        id="input-password"
        label="Password"
        type="password"
        value={password}
        onChange={handlePasswordChange}
        onBlur={handlePasswordBlur}
        error={passwordError}
        placeholder="••••••••"
      />

      <ButtonLightmode
        variant="primaryTextOnly"
        type="submit"
        disabled={isSubmitting}
        style={{ marginTop: '20px', padding: '10px 20px', cursor: 'pointer' }}
      >
        {isSubmitting ? 'Sending...' : 'Sign Up'}
      </ButtonLightmode>
    </form>
  );
};

//export default FormLogIn;