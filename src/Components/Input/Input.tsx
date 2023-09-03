import type { RegisterOptions, UseFormRegister } from "react-hook-form"

interface Props {
  type: React.HTMLInputTypeAttribute
  errorMessage?: string,
  placeholder?: string,
  className?: string,
  name: string,
  register: UseFormRegister<any>,
  rules?: RegisterOptions,
  autoComplete?: string,
}

export default function Input({ type, errorMessage, placeholder, className, name, autoComplete, register, rules }: Props) {
  return (
    <div className={className}>
      <input
        type={type}
        {...register(name, rules)}
        className='p-3 w-full outline-none border border-gray-300 focus:border-gray-500 rounded-sm focus:gray-sm' placeholder={placeholder} />
      <div className="mt-1 text-red-600 min-h-[1.25rem] text-sm">{errorMessage}
      </div>
    </div>
  )
}
