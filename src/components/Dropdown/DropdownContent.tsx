import {
  Content,
  DropdownMenuContentProps,
  Arrow,
} from '@radix-ui/react-dropdown-menu'

export function DropdownContent({ children }: DropdownMenuContentProps) {
  return (
    <Content
      className="relative z-10 mr-6 w-40 rounded-lg bg-white shadow-container will-change-[opacity,transform] data-[side=bottom]:animate-slideUpAndFade data-[side=left]:animate-slideRightAndFade data-[side=right]:animate-slideLeftAndFade data-[side=top]:animate-slideDownAndFade dark:border-2 dark:border-white dark:bg-black"
      sideOffset={10}
    >
      {children}
      <Arrow className="fill-white" />
    </Content>
  )
}
