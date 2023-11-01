import React, {Component} from 'react'
//above is just ONE way to import things, there are other syntaxes! others are also correct
let date = new Date()
    let singleUser = {
        name: 'Aiyuma',
        time: date.toDateString(), 
        // this line, "date class" above supplies the current real date to your page, automatically, when called, below.
    }

export default class Section extends Component {
    render () {
        return(
            <section className="welcomeSection">
            <h1>Welcome, {singleUser.name}</h1>
            <p>Today's date is: {singleUser.time}</p>
          </section>  
    )
}
}