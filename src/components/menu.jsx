import React, { useState } from 'react';
// import { Link } from "react-router-dom";
import { Navbar, Nav, Button, Modal } from 'react-bootstrap';
import './menu.scss';


const Menu = () => {

    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    const [reset, setReset] = useState(false);
    // reset () {

    // }
    
    
    
    return (
        <div className='Menu'>
            {/* menu */}

            <Navbar className='bar' fixed="top">
                <article>
                    <Navbar.Brand href='#home'>
                        {/* logo */}
                        <img
                            className='logo '
                            src='https://s4.gifyu.com/images/triviance-logo-01.png'
                            alt='logo triviance'
                            width='100'
                            height='auto'
                        />
                    </Navbar.Brand>
                </article>
                <div className='info'>
                    <Nav.Link >
                        <Button 
                            className='reset'
                            onClick={() => setReset(true)}>
                            New Game
                        </Button>
                        {/* ----modal info juego---- */}
                        <Button
                            className='button-modal'
                            variant='primary'
                            onClick={handleShow}
                        >
                            Info
					</Button>
                    </Nav.Link>
                    {/* ----fin modal---- */}
                </div>
            </Navbar>
            {/* contenido del modal */}
            <Modal show={show} onHide={handleClose} animation={false}>
                <Modal.Header>
                    <Modal.Title>Game Rules</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <h3 className='subtitulo'>
                        Follow the instructions:
						</h3>
                    <p>
                        "Sed ut perspiciatis unde omnis iste natus error sit voluptatem
                        accusantium doloremque laudantium, totam rem aperiam, eaque ipsa
                        quae ab illo inventore veritatis et quasi architecto beatae vitae
                        dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit
                        aspernatur aut odit aut fugit, sed quia consequuntur magni dolores
                        eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam
                        est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci
                        velit, sed quia non numquam eius modi tempora incidunt ut labore
                        et dolore magnam aliquam quaerat voluptatem."
						</p>
                </Modal.Body>
                <Modal.Footer>
                    <Button variant='secondary' onClick={handleClose}>
                        Salir
						</Button>
                </Modal.Footer>
            </Modal>
        </div>
		);

};

export default Menu;