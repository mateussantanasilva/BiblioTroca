import { DropdownMenuItemProps, Item } from '@radix-ui/react-dropdown-menu'

export function DropdownItem({ children }: DropdownMenuItemProps) {
  return (
    <Item className="group relative z-10 h-11 w-full select-none font-primary text-base-140 leading-none text-black outline-none dark:text-white">
      {children}
    </Item>
  )
}
