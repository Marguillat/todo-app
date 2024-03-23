import { useState } from 'react'
import { Navbar, NavbarBrand, NavbarContent, NavbarItem, NavbarMenuToggle, NavbarMenu, NavbarMenuItem, Link, Button, Dropdown, DropdownTrigger, Avatar, DropdownMenu, DropdownItem, Image } from '@nextui-org/react'
import { useAuth } from '../hooks/authHooks'
import logo from '../img/logo.svg'

function CustomNavbar () {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const { authData, logout } = useAuth()

  const isLoggedIn = authData?.token && authData?._user

  return (
    <Navbar
      onMenuOpenChange={setIsMenuOpen}
      className='border-b-2 border-secondary shadow-[0_0_15px_0_rgba(153,200,224,0.45)]'
    >
      <NavbarContent>
        <NavbarMenuToggle
          aria-label={isMenuOpen ? 'Close menu' : 'Open menu'}
          className='sm:hidden'
        />
        <NavbarBrand>
          <Image src={logo} className='rounded-none' />
        </NavbarBrand>
      </NavbarContent>

      <NavbarContent className='hidden sm:flex gap-4' justify='center'>
        <NavbarItem>
          <Link color='foreground' href='/'>
            Todos
          </Link>
        </NavbarItem>
        <NavbarItem isActive>
          <Link href='/auth' aria-current='page'>
            Auth
          </Link>
        </NavbarItem>
      </NavbarContent>
      {
        isLoggedIn
          ? (
            <NavbarContent as='div' justify='end'>
              <Dropdown placement='bottom-end'>
                <DropdownTrigger>
                  <Avatar
                    isBordered
                    as='button'
                    className='transition-transform'
                    color='secondary'
                    name='{Jason Hughes}'
                    size='sm'
                    src='https://i.pravatar.cc/150?u=a042581f4e29026704d'
                  />
                </DropdownTrigger>
                <DropdownMenu aria-label='Profile Actions' variant='flat'>
                  <DropdownItem key='profile' className='h-14 gap-2'>
                    <p className='font-semibold'>Enregistré avec</p>
                    <p className='font-semibold'>{authData._user.email}</p>
                  </DropdownItem>
                  <DropdownItem onPress={logout} key='logout' color='danger'>
                    Log Out
                  </DropdownItem>
                </DropdownMenu>
              </Dropdown>
            </NavbarContent>
            )
          : (
            <NavbarContent justify='end'>
              <NavbarItem className='hidden lg:flex'>
                <Link href='/auth'>Login</Link>
              </NavbarItem>
              <NavbarItem>
                <Button as={Link} color='primary' href='#' variant='flat'>
                  Sign Up
                </Button>
              </NavbarItem>
            </NavbarContent>
            )
      }
      <NavbarMenu>
        <NavbarMenuItem>
          <Link
            color='foreground'
            className='w-full'
            href='/'
            size='lg'
          >
            Todos
          </Link>
        </NavbarMenuItem>
      </NavbarMenu>
    </Navbar>
  )
}

export default CustomNavbar
