import React, {Component} from 'react'
//above is just ONE way to import things, there are other syntaxes! others are also correct

export default class Nav extends Component {
    render () {
        return(
        <nav className="navBar">
         <ul>
            <li>Home</li>
            <li>Portfoilo</li>
            <li>Contact</li>
         </ul>
        </nav>
    )
}
}
