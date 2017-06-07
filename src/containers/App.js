//@flow
import React, { Component } from 'react';
import UserRow from '../components/UserRow'
import Wrapper from '../components/Wrapper'
import { getAthlesInClub, getActivitiesInClub } from '../utils/api'

class App extends Component {

    state = {
        users: [],
        activities: []
    }

    componentDidMount(){
        getAthlesInClub()
        .then((users) => {
            getActivitiesInClub()
            .then((activities) => {
                this.setState({
                    users,
                    activities
                })
            })
        })
    }

    getUserRuns = (userId: number) => {
        return this.state.activities.filter((activity, activityIndex) => {
            return activity.athlete.id === userId && activity.type === "Run"
        })
    }
    getUserBikes = (userId: number) => {
        return this.state.activities.filter((activity, activityIndex) => {
            return activity.athlete.id === userId && activity.type === "Ride"
        })
    }

    getTotalDistance = (activities: Array<Object>) => {
        return activities.reduce((a, b) => a + b.distance, 0) / 1000;
    }

    sortUserRuns = (type?: string) => {
        let newArray = []
        this.state.users.map((user, userIndex) => {
            let userActivities
            if(type === "Run"){
                userActivities = this.getUserRuns(user.id)
            }
            else {
                userActivities = this.getUserBikes(user.id)
            }

            let totalDistance = this.getTotalDistance(userActivities)
            newArray.push({
                athlete: user,
                userActivities,
                totalDistance: Math.round(totalDistance)
            })
        })

        newArray.sort((a, b) => {
            return b.totalDistance - a.totalDistance
        })

        return newArray
    }

  render() {

      let userRuns = this.sortUserRuns("Run").map((user, index) => {
          return <UserRow
              key={ index }
              place={ index+1 }
              user={ user.athlete }
              activities={ user.userActivities }
              totalLength={ user.totalDistance }
          />
      })

    return (
      <Wrapper>
          { userRuns }
      </Wrapper>
    );
  }
}

export default App;
