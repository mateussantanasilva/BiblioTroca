import { DropdownMenuItemProps, Item } from '@radix-ui/react-dropdown-menu'

export function DropdownItem({ children }: DropdownMenuItemProps) {
  return (
    <Item className="group text-base-140 font-primary text-black leading-none h-11 w-full relative z-10 select-none outline-none">
      {children}
    </Item>
  )
}
