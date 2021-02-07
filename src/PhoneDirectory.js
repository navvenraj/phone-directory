
import React, { Component } from 'react';
import AddSubscriber from './AddSubscriber';
import ShowSubscribers from './ShowSubscribers';



class PhoneDirectory extends Component {
    constructor() {
        super();
        this.state = {
            subscribersList: [{
                id: 1,
                name: 'Shipa baat',
                phone: '9444044733'
            },

            {
                id: 2,
                name: 'Shipa',
                phone: '9444044734'
            }

            ] //we going to maintain all our subscriber list in this subcriberlist[] component and dumb component will render from here.
        }
    }

    addSubscriberHandler = (newSubscriber) => {
        let subscribersList = this.state.subscribersList;
        if (subscribersList.length > 0) {
            newSubscriber.id = subscribersList[subscribersList.length - 1].id + 1;
        } else {
            newSubscriber.id = 1;
        }
        subscribersList.push(newSubscriber);
        this.setState({ subscribersList: subscribersList });
        console.log("Phone directory");
        console.log(this.state.subscribersList);
    }

    render() {
        return (
            
            //<AddSubscriber addSubscriberHandler={this.addSubscriberHandler}/>
            <ShowSubscribers subscribersList = {this.state.subscribersList}/>
        )
    }

}
export default PhoneDirectory;