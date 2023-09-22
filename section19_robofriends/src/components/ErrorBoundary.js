import React, { Component, Fragment } from 'react';

class ErrorBoundary extends Component {
    constructor(props) {
        super(props);
        this.state = {
            hasError: false
        }
    }

    // This is a new lifecycle hook that was introduced in React 16, like try-catch block
    componentDidCatch(error, info) {
        this.setState({ hasError: true });
    }

    render() {
        if (this.state.hasError) {
            return <h1 className="tc"> An error has just occurred, sorry for the inconvenience! </h1>
        }
        return <Fragment>{this.props.children}</Fragment>
    }
}

export default ErrorBoundary