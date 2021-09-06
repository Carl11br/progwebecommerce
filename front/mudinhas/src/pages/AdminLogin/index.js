import React, { useState, useEffect } from 'react'; 
import api from '../../services/api'
//import UserLogin from '../../components/User/Login/Login'
//import './styles.css';
export default function AdminLogin() 
{
    return(
        <html>
          <body>
            <h1>Login</h1>
            <form action="/login" method="POST">
              <input name="username" type="text" /><br />
              <input name="password" type="password" /><br />
              <input type="submit" value="Login" />
            </form>
            <p>
              <a href="/users/forgot">Esqueceu sua senha?</a> | <a href="/users/signup">Não possui cadastro?</a>
            </p>
          </body>
        </html>
    );
    
}