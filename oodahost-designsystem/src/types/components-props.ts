import React from 'react'

export interface BaseComponentProps {
  className?: string
  children?: React.ReactNode
}

export interface BaseButtonProps extends Omit<React.ButtonHTMLAttributes<HTMLButtonElement>, 'type'> {
  className?: string
}

export interface BaseInputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  className?: string
}

export type Size = 'sm' | 'md' | 'lg'
export type Variant = 'primary' | 'secondary' | 'ghost' | 'outline'
export type InputType = 'text' | 'email' | 'password' | 'textarea'