import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <App/>
);

// import React, { useState } from 'react';
// import ReactDOM from 'react-dom';
// import { Container, Button, Alert } from 'react-bootstrap';
// import { CSSTransition } from 'react-transition-group';
//
// import './index.css';
//
// function Example() {
//   const [showMessage, setShowMessage] = useState(false);
//   return (
//     <Container style={{ paddingTop: '2rem' }}>
//
//         <Button
//           onClick={() => setShowMessage(true)}
//           size="lg"
//         >
//           Show Message
//         </Button>
//
//       <CSSTransition
//         in={showMessage}
//         timeout={300}
//         classNames="alert"
//         unmountOnExit
//       >
//         <h1>True</h1>
//       </CSSTransition>
//     </Container>
//   );
// }
//
// ReactDOM.render(
//   <Example />,
//   document.getElementById('root')
// );
