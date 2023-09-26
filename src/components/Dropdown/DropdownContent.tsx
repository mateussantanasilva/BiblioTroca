import {
  Content,
  DropdownMenuContentProps,
} from '@radix-ui/react-dropdown-menu'

export function DropdownContent({ children }: DropdownMenuContentProps) {
  return (
    <Content
      className="w-48 mr-6 relative z-10 bg-white rounded-lg shadow-container will-change-[opacity,transform] data-[side=top]:animate-slideDownAndFade data-[side=right]:animate-slideLeftAndFade data-[side=bottom]:animate-slideUpAndFade data-[side=left]:animate-slideRightAndFade"
      sideOffset={10}
    >
      {children}
    </Content>
  )
}
