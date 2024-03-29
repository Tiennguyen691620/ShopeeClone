import { InputHTMLAttributes, forwardRef } from 'react'
// import { RegisterOptions, UseFormRegister } from 'react-hook-form'

interface Props extends InputHTMLAttributes<HTMLInputElement> {
  errorMessage?: string
  classNameInput?: string
  classNameError?: string
}

const InputNumber = forwardRef<HTMLInputElement, Props>(function InputNumberInner ({
  type,
  errorMessage,
  className,
  classNameInput = 'p-3 w-full outline-none border border-gray-300 focus:border-gray-500 rounded-sm focus:gray-sm',
  classNameError = 'mt-1 text-red-600 min-h-[1.25rem] text-sm',
  onChange,
  ...rest
}, ref) {
  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const {value} = event.target
    if((/^\d+$/.test(value) || value === '') && onChange) {
      onChange(event)
    }
  }
  return (
    <div className={className}>
      <input {...rest} className={classNameInput} onChange={handleChange} ref={ref} />
      <div className={classNameError}>{errorMessage}</div>
    </div>
  )
})


export default InputNumber

