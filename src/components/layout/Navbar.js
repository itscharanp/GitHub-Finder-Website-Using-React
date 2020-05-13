import React, { Component } from 'react';
import PropTypes from 'prop-types';
// to preserve the states of pages while switching b/w routes
import { Link } from 'react-router-dom';

export class Navbar extends Component {
  static deafultProps = {
    title: 'Github finder',
    icon: 'fab fa-github',
  };

  // It makes sure to give the warning if the data is overwritten from the parent component
  static propTypes = {
    title: PropTypes.string.isRequired,
    icon: PropTypes.string.isRequired,
  };

  render() {
    return (
      <nav className='navbar bg-primary'>
        <h3>
          <i className={this.props.icon} /> {this.props.title}
        </h3>
        <ul>
          <li>
            <Link to='/'> Home </Link>
          </li>
          <li>
            <Link to='/about'>About</Link>
          </li>
        </ul>
      </nav>
    );
  }
}

export default Navbar;
