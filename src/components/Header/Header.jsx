// library import
 
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  UncontrolledDropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
  NavbarText,
} from 'reactstrap';


// CSS import
import './Header.css';
// Context import



function Header(props) {
  const [isOpen, setIsOpen] = useState(false);
  
  const toggle = () => setIsOpen(!isOpen);
  
  

  return (
    <div>
      <Navbar {...props}>
        <NavbarBrand id="title">
          <Link to="/">ZapKart</Link>

        </NavbarBrand>
        <NavbarToggler onClick={toggle} />
        <Collapse isOpen={isOpen} navbar>
          <Nav className="ms-auto" navbar>
            <UncontrolledDropdown nav inNavbar style={{marginRight: '2rem'}}>
              <DropdownToggle nav caret>
                Options
              </DropdownToggle>
              <DropdownMenu right>
              <DropdownItem>Cart</DropdownItem>
                <DropdownItem>Settings</DropdownItem>
                <DropdownItem divider />
                <DropdownItem>
                  LogOut
                </DropdownItem>
              </DropdownMenu>
            </UncontrolledDropdown>
             <NavbarText>UserName</NavbarText>
          </Nav>
        </Collapse>
      </Navbar>
    </div>
  );
}

export default Header;