import { Skeleton } from '@/components/Skeleton'

export function RequestSkeleton() {
  return (
    <Skeleton size="lg" className="flex flex-col justify-between">
      <div>
        <Skeleton variant="line" size="xs" className="mb-3 max-w-[80%]" />

        <div className="flex flex-col gap-5">
          <div className="flex flex-col gap-2">
            <Skeleton variant="line" className="max-w-[10rem]" />
            <Skeleton variant="line" className="max-w-[5rem]" />
            <Skeleton variant="line" className="max-w-[10rem]" />
          </div>

          <Skeleton variant="line" quantity={4} />

          <Skeleton variant="line" size="xs" className="max-w-[70%]" />

          <Skeleton variant="line" quantity={3} />
        </div>
      </div>

      <Skeleton variant="line" size="xs" />
    </Skeleton>
  )
}
