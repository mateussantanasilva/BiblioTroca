import { generateArrayWithId } from '@/utils/generate-array-with-id'
import { Skeleton } from '@/components/Skeleton'

export function SkeletonList() {
  const quantityToRepeat = generateArrayWithId(5)

  return (
    <>
      {quantityToRepeat.map((item) => {
        return (
          <Skeleton
            key={item}
            variant="card"
            size="md"
            className="flex flex-col justify-between"
          >
            <div>
              <Skeleton variant="line" size="xs" className="mb-3 max-w-[60%]" />
              <Skeleton variant="line" quantity={4} />
            </div>

            <Skeleton variant="line" size="xs" />
          </Skeleton>
        )
      })}
    </>
  )
}
