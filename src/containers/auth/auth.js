import React, { Component } from 'react'
import {
    Button, Form, FormGroup, Label, Input,
    Card, CardBody
} from 'reactstrap'
import { connect } from 'react-redux'
import * as classes from './auth.module.css'
import * as action from '../../store/actions/actions'
import { NotificationContainer, NotificationManager } from 'react-notifications'

class Auth extends Component {

    state = {
        email: '',
        password: '',
        feedback: false,
    }

    createNotification = (message) => {
        NotificationManager.error(message)
    }

    onChangeHandler = (event) => {
        this.setState({ [event.target.name]: event.target.value })
    }

    checkPattern() {
        this.setState({
            feedback: true
        })
        setTimeout(function () {
            this.setState({ feedback: false })
        }.bind(this), 1500);
    }

    onClickHandler = (event) => {
        const pattern = /[a-zA-Z0-9]+[\.]?([a-zA-Z0-9]+)?[\@][a-z]{3,9}[\.][a-z]{2,5}/;
        if (this.state.email === "" || this.state.password === "") {
            this.createNotification("Please fill all fields")
        }
        else if (!pattern.test(this.state.email)) {
            this.checkPattern();
        }
        else {
            this.props.onAuth(this.state.email, this.state.password, () => {
                if (this.props.isAuthenticated) this.props.history.push('/employees')
                else this.createNotification(this.props.errorMessage)
            })
        }

    }

    render() {

        let emailError = this.state.feedback ?
            <p className={classes.validation}>Email format is incorrect</p>
            : null

        return (
            <div className={classes.bg}>
                <NotificationContainer />
                <Card className={classes.logincard}>
                    <CardBody>
                        <p>Enter your login credentials</p>
                        <Form >
                            <FormGroup>
                                <Label for="email">Email</Label>
                                <Input type="email" ref={el => this.inputTitle = el} value={this.state.email} onChange={this.onChangeHandler} name="email" id="email" placeholder="Enter your Email Id" />
                            </FormGroup>
                            {emailError}
                            <FormGroup>
                                <Label for="password">Password</Label>
                                <Input type="password" value={this.state.password} onChange={this.onChangeHandler} name="password" id="password" placeholder="Enter your password" />
                            </FormGroup>
                            <Button onClick={this.onClickHandler} color="primary">Submit</Button>
                        </Form>
                    </CardBody>
                </Card>
            </div>

        )
    }
}

const mapStatetoProps = state => {
    return {
        isAuthenticated: state.isAuthenticated,
        errorMessage: state.errorMessage,
        loading: state.loading
    }
}

const mapDispatchtoProps = dispatch => {
    return {
        onAuth: (email, password, cb) => dispatch(action.auth(email, password, cb))
    }
}

export default connect(mapStatetoProps, mapDispatchtoProps)(Auth)