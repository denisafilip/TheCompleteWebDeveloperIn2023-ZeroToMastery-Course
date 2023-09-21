import React, {Fragment, Component} from 'react';
import CardList from "./CardList";
import SearchBox from "./SearchBox";
import './App.css';

class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            robots: [],
            searchField: ''
        }
    }

    componentDidMount() {
        fetch('https://jsonplaceholder.typicode.com/users')
            .then(response => response.json())
            .then(users => this.setState({robots: users}));
    }

    onSearchChange = (event) => {
        this.setState({searchField: event.target.value});
    }
    render() {
        const filteredRobots = this.state.robots.filter(robots => {
            return robots.name.toLowerCase().includes(this.state.searchField.toLowerCase());
        });

        return (
            <Fragment>
                <div className="tc">
                    <h1 className="f1"> RoboFriends </h1>
                    <SearchBox searchChange={this.onSearchChange}/>
                    <CardList robots={filteredRobots}/>
                </div>
            </Fragment>
        );
    }
}

export default App;