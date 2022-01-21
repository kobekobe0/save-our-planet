import React from 'react'
import { Component } from 'react'
import firebase from 'firebase'
import { firebaseConfig } from '../firebase.js'
import { Popup } from './progress.component'
import { Card } from 'react-bootstrap'
import { Button, Form } from 'react-bootstrap'
import './contribute.css'
import { motion } from 'framer-motion'

const app = firebase.initializeApp(firebaseConfig)

export class Contribute extends Component {
    constructor() {
        super()

        this.database = app.database().ref().child('title')

        this.openPopup = this.openPopup.bind(this)

        this.state = {
            initialValue: 0, //from firebase
            value: 0, //from input
            valueBtn: 0, // sum of the two
            displayValue: 0,
            buttonPopup: false,
            setButtonPopup: false,
        }
    }

    componentDidMount() {
        this.database.on('value', (snap) => {
            const passedData = snap.val()
            const funds = parseInt(Object.values(passedData))
            this.setState({
                initialValue: funds,
            })
        })
    }

    getValue = (event) => {
        this.setState({ value: parseInt(event.target.value) })
    }

    handleClick = () => {
        const stateValue = this.state.value
        const stateTitle = this.state.initialValue
        const addedData = stateValue + stateTitle
        this.setState({
            valueBtn: addedData,
            displayValue: addedData,
            value: 0,
        })
        firebase.database().ref().child('title').set({
            initialValue: addedData,
        })
    }

    openPopup = () => {
        const bP = this.state.buttonPopup
        const sBP = this.state.setButtonPopup
        this.setState({
            buttonPopup: !bP,
            setButtonPopup: !sBP,
            value: 0,
        })
    }

    render() {
        const added = this.state.initialValue
        const toDisplay = added

        const energy = added / 50
        const energyToDivide = energy / 30
        const energyToDisplay = energyToDivide.toFixed(2)

        const trees = added * 0.3
        const treesToDisplay = Math.round(trees)

        return (
            <motion.div
                className="cards-container"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
            >
                <h1>Be a Patron</h1>
                <br />
                <div className="upperSection">
                    <div className="leftUpper">
                        <img src="serene.jpg" alt="" srcset="" />
                    </div>

                    <div className="rightUpper">
                        <p className="patronText">
                            Lorem ipsum, dolor sit amet consectetur adipisicing
                            elit. Ex, sit accusantium maiores ipsam nam dolorem
                            culpa accusamus praesentium eos impedit eligendi
                            vero voluptate ad consequuntur, totam ducimus illo,
                            dolores est amet ea consectetur doloremque.
                            Necessitatibus minus odit tenetur corrupti sunt
                            accusantium, quasi facere doloribus exercitationem
                            dolorem beatae. Sint, maxime modi?
                        </p>
                        <br />
                        <p className="patronText">
                            Lorem ipsum, dolor sit amet consectetur adipisicing
                            elit. Ex, sit accusantium maiores ipsam nam dolorem
                            culpa accusamus praesentium eos impedit eligendi
                            vero voluptate ad consequuntur, totam ducimus illo,
                            dolores est amet ea consectetur doloremque. Lorem
                            ipsum, dolor sit amet consectetur adipisicing elit.
                            Ipsam sequi maiores quae dignissimos ex, iusto eius
                            sint dolorum ab maxime possimus, laboriosam earum
                            totam quam nisi error alias voluptates adipisci.
                        </p>
                        <br />
                        <Button
                            variant="primary"
                            size="lg"
                            className="donateBtn"
                            onClick={this.openPopup}
                        >
                            Donate
                        </Button>
                    </div>
                </div>
                <br />
                <br />

                <div className="lowerSection">
                    <h1 className="lowerSectionTitle">Progress</h1>

                    <div className="cards">
                        <Card
                            className="card-individual"
                            style={{ width: '18rem' }}
                        >
                            <Card.Img variant="top" src="img3.jpg" />
                            <Card.Body>
                                <Card.Title Style="font-weight: lighter">
                                    Funds Collected
                                </Card.Title>
                                <Card.Text Style="font-size: 3rem">
                                    $ {toDisplay}
                                </Card.Text>
                            </Card.Body>
                        </Card>

                        <Card style={{ width: '18rem' }}>
                            <Card.Img variant="top" src="img1.png" />
                            <Card.Body>
                                <Card.Title Style="font-weight: lighter">
                                    Renewable Energy Generated
                                </Card.Title>
                                <Card.Text Style="font-size: 3rem">
                                    {energyToDisplay} GW
                                </Card.Text>
                            </Card.Body>
                        </Card>

                        <Card style={{ width: '18rem' }}>
                            <Card.Img variant="top" src="img2.jpg" />
                            <Card.Body>
                                <Card.Title Style="font-weight: lighter">
                                    Trees Planted
                                </Card.Title>
                                <Card.Text Style="font-size: 3rem">
                                    {treesToDisplay}
                                </Card.Text>
                            </Card.Body>
                        </Card>
                    </div>
                </div>

                <Popup
                    trigger={this.state.buttonPopup}
                    setTrigger={this.openPopup}
                >
                    <h2>Donation</h2>
                    <Form.Control
                        onChange={this.getValue}
                        type="number"
                        placeholder="Enter Amount"
                    />
                    <Button variant="primary" onClick={this.handleClick}>
                        Submit
                    </Button>
                </Popup>

                <div className="footer">
                    <p>Powered by Firebase</p>
                </div>
            </motion.div>
        )
    }
}
