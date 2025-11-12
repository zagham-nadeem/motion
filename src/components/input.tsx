import { cn } from '@/lib/utils'

const InputTest = ({ placeholder, className, ...props }: React.InputHTMLAttributes<HTMLInputElement> & { placeholder: string, className?: string }) => {
  return (
    <input className={cn('bg-red-200 h-10 border border-gray-100', className)} placeholder={placeholder} {...props} />
  )
}

export default InputTest