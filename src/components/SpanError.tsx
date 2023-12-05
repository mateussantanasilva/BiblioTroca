import { DetailedHTMLProps, HTMLAttributes } from 'react'

export function SpanError({
  children,
}: DetailedHTMLProps<HTMLAttributes<HTMLSpanElement>, HTMLSpanElement>) {
  return <span className="text-sm-140-md text-red-500">{children}</span>
}
