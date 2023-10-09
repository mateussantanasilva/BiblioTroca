import { Content, TooltipContentProps, Arrow } from '@radix-ui/react-tooltip'

export function TooltipContent({ children }: TooltipContentProps) {
  return (
    <Content
      sideOffset={10}
      className="select-none rounded-md bg-white px-4 py-2 font-primary text-base-140-md text-black shadow-container will-change-[transform,opacity] data-[state=delayed-open]:data-[side=bottom]:animate-slideUpAndFade data-[state=delayed-open]:data-[side=left]:animate-slideRightAndFade data-[state=delayed-open]:data-[side=right]:animate-slideLeftAndFade data-[state=delayed-open]:data-[side=top]:animate-slideDownAndFade dark:border-2 dark:border-white dark:bg-black dark:text-white"
    >
      {children}
      <Arrow className="fill-white" />
    </Content>
  )
}
