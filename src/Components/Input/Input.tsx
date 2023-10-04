import { InputHTMLAttributes } from 'react'
import type { RegisterOptions, UseFormRegister } from 'react-hook-form'

interface Props extends InputHTMLAttributes<HTMLInputElement> {
  errorMessage?: string
  classNameInput?: string
  classNameError?: string
  register?: UseFormRegister<any>
  rules?: RegisterOptions
}

export default function Input({
  // type,
  errorMessage,
  className,
  name,
  // autoComplete,
  register,
  rules,
  classNameInput = 'p-3 w-full outline-none border border-gray-300 focus:border-gray-500 rounded-sm focus:gray-sm',
  classNameError = 'mt-1 text-red-600 min-h-[1.25rem] text-sm',
  ...rest
}: Props) {
  const result = register && name ? register(name, rules) : {}
  return (
    <div className={className}>
      <input {...rest} {...result} className={classNameInput} />
      <div className={classNameError}>{errorMessage}</div>
    </div>
  )
}
