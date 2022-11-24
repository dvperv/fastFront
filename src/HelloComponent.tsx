import React from "react";
import axios from "axios";

export class HelloComponent extends React.Component<any, any>{
    // @ts-ignore
    constructor(props) {
        super(props);
        this.state = {
            error: null,
            isLoaded: false,
            hello: null
        }
    }

    componentDidMount() {
        axios
            .get('http://localhost:8000')
            .then(result => result.data)
            .then(data => this.setState({
                isLoaded: true,
                hello: data.Hello
            }))
            .catch(error => {
                this.setState({
                    error: error,
                    isLoaded: true
                })
            })
    }

    render() {
        const { error, isLoaded, hello } = this.state;
        if (error) {
            return <div>Error: {error.message}</div>;
        } else if (!isLoaded) {
            return <div>Loading...</div>;
        } else {
            return (
                <div>
                    {hello}
                </div>
            );
        }
    }
}
