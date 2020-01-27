import React, { Component } from 'react';
import { Link } from 'react-router-dom';
// import PageNotFound from '../assets/images/PageNotFound';
class NotFoundPage extends Component{
    render(){
        return <div>
            <h1>404 Page noto found!</h1>
            <p style={{textAlign:"center"}}>
              <Link to="/">Go to Home </Link>
            </p>
          </div>;
          // http://collectui.com/designers/AmyHao/404-page
    }
}
export default NotFoundPage;