import axios from 'axios'

export let getAthlesInClub = () => {

    axios.defaults.headers.common['Authorization'] = "Bearer 168ff390c8dbdea5cc4fd15ff015c8f48e28d3e1";
    return axios.get('https://www.strava.com/api/v3/clubs/142942/members')
    .then((result) => {
        return result.data
    })
}

export let getActivitiesInClub = () => {
    axios.defaults.headers.common['Authorization'] = "Bearer 168ff390c8dbdea5cc4fd15ff015c8f48e28d3e1";
    return axios.get('https://www.strava.com/api/v3/clubs/142942/activities')
    .then((result) => {
        return result.data
    })
}
export let getAthletActivities = (athletId) => {

}
