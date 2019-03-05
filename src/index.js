/* eslint-disable import/no-named-as-default */
/* eslint-disable import/no-named-as-default-member */
import React from 'react';
import ReactDOM from 'react-dom';
import Main from './components/Main';
import 'bulma/bulma.sass';
// eslint-disable-next-line import/no-extraneous-dependencies
import '@fortawesome/fontawesome-free/js/all';
import './styles/index.css';

const App = () => {
  return <Main />;
};

ReactDOM.render(<App />, document.getElementById('root'));
