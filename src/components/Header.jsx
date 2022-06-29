import React from 'react';
import { Nav } from 'react-bootstrap';

const Header = ({titulo}) => {
    return (  

        <div>

            <h2> {titulo} </h2>
            
            <Nav className='header'
                activeKey="/home"
                onSelect={(selectedKey) => alert(`selected ${selectedKey}`)}
            >
                <Nav.Item className='item'>
                    <Nav.Link className='link' href="/home">Incio</Nav.Link>
                </Nav.Item>
                <Nav.Item className='item'>
                    <Nav.Link className='link' eventKey="link-1">Productos</Nav.Link>
                </Nav.Item>
                <Nav.Item className='item'>
                    <Nav.Link className='link' eventKey="link-2">Ubicacion</Nav.Link>
                </Nav.Item>
                <Nav.Item className='item'>
                    <Nav.Link className='link' eventKey="link-3">Contacto</Nav.Link>
                </Nav.Item>
            </Nav>
        </div>

    );
}
 
export default Header;