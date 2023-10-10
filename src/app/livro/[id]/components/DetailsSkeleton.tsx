import { Skeleton } from '@/components/Skeleton'

export function DetailsSkeleton() {
  return (
    <Skeleton size="lg">
      <Skeleton variant="line" size="xs" className="mb-2 max-w-sm" />
      <Skeleton variant="line" className="mb-3 max-w-[10rem]" />

      <div className="flex flex-col gap-5">
        <Skeleton variant="line" quantity={2} className="max-w-[5.25rem]" />

        <div className="flex gap-20">
          <Skeleton variant="line" quantity={2} className="w-[5rem]" />
          <Skeleton variant="line" quantity={2} className="w-[5rem]" />
        </div>

        <div className="flex flex-col gap-2">
          <Skeleton variant="line" className="max-w-[5.25rem]" />
          <Skeleton variant="line" className="max-w-[6.75rem]" />
        </div>

        <div className="flex flex-col gap-2">
          <Skeleton variant="line" className="max-w-[5.25rem]" />
          <Skeleton variant="line" className="max-w-md" />
        </div>

        <div className="flex flex-col gap-2">
          <Skeleton variant="line" className="max-w-[5.25rem]" />
          <Skeleton variant="line" quantity={4} />
        </div>
      </div>
    </Skeleton>
  )
}
