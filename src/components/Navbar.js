import React, {useState} from 'react'
import {Collapse, Navbar, NavbarToggler, NavbarBrand, Nav, NavItem, NavLink, Container} from 'reactstrap'


const NavbarComponent = () => {
    const [isOpen, setIsOpen] = useState(false)
    const toggle = () =>{
        setIsOpen(!isOpen)
    }
    return ( 
        <div>
             <Navbar color="dark" dark expand="sm" className="mb-5">
                 <Container>
                     <NavbarBrand href="/">Shopping List</NavbarBrand>
                     <NavbarToggler onClick={toggle}/>
                     <Collapse isOpen={isOpen} navbar>
                         <Nav className="ml-auto" navbar>
                             <NavItem>
                                 <NavLink href="/">Home</NavLink>
                             </NavItem>
                         </Nav>
                     </Collapse>
                 </Container>
             </Navbar>
         </div>
     );
}
 
export default NavbarComponent;

// class NavbarComponent extends React.Component {
//     state = {
//         isOpen: false
//     }
//      toggle =  () =>{
//         this.setState({
//             isOpen: !this.state.isOpen
//         })
//     }

//     render(){
//         return(
//         <div>
//             <Navbar color="dark" dark expand="sm" className="mb-5">
//                 <Container>
//                     <NavbarBrand href="/">Shopping List</NavbarBrand>
//                     <NavbarToggler onClick={this.toggle}/>
//                     <Collapse isOpen={this.state.isOpen} navbar>
//                         <Nav className="ml-auto" navbar>
//                             <NavItem>
//                                 <NavLink href="/">Home</NavLink>
//                             </NavItem>
//                         </Nav>
//                     </Collapse>
//                 </Container>
//             </Navbar>
//         </div>


//         )
//     }
// }


// export default NavbarComponent