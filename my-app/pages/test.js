import React, { useState, useRef } from 'react';
const axios = require('axios').default;
const [answer, setAnswer] = useState([])


const url = "https://api.chess.com/pub/player/";
const val = "/games/";
const parse = date.split("-");
const year = parse[0] + "/";
const month = parse[1];
const month_dict = {
    '01': 'January',
    '02': 'February',
    '03': 'March',
    '04': 'April',
    '05': 'May',
    '06': 'June',
    '07': 'July',
    '08': 'August',
    '09': 'September',
    '10': 'October',
    '11': 'November',
    '12': 'December'
};

const query = url + username + val + year + month;



const FetchData = () => {
    axios.get(query).then((response) => {
      setAnswer(response.data);
    });
  };



// url = "https://api.chess.com/pub/player/"
// val = "/games/"
// parse = date.split("-")
// year = parse[0] + "/"
// month = parse[1]
// # {YYYY-MM}

// query = url + username + val + year + month
// response = requests.get(query)

// games = []

// if response.ok:
//     response_body = json.loads(response.content)
// for game in response_body['games']:
//     pgn = str(game['pgn'])
//     start_time_index = pgn.index('[StartTime')
//     end_time_index = pgn.index('EndTime')
//     start_end_times = pgn[start_time_index:end_time_index + 19]
//     games.append(start_end_times)

// time_diff = []

// for game in range(0, len(games)):
//     start_time = (games[game][12:20])
//     end_time = (games[game][56:64])
//     difference = datetime.strptime(end_time, "%H:%M:%S") - datetime.strptime(start_time, "%H:%M:%S")
//     time_diff.append(difference)

// total_seconds = str(sum(time_diff, timedelta()))
// length = len(total_seconds)

// if length > 8:
//     days_to_hours = total_seconds[0:2]
//     days_to_hours = days_to_hours.replace(":", "")
//     days_to_hours = days_to_hours.replace("-", "")
//     days_to_hours = (int(days_to_hours))
//     actual_hours = days_to_hours * 24
//     make_str = str(actual_hours)
//     start_index = total_seconds.find(",")
//     start_index = start_index + 1
//     rest = (total_seconds[start_index:])
//     added = int(rest[0:2])
//     hours = added + int(make_str)
//     minutes = rest[2:5]
//     minutes = minutes.replace(":", "")
//     if int(minutes) > 60:
//         minutes = int(minutes) - 60
//         hours = int(hours) + 1
//     return "Hey, " + username + " you played on chess.com for " + str(hours) + " hours and " + str(minutes) + " minutes in " + \
//            month_dict[month] + " " + year[:-1]
// else:
//     hours = total_seconds[0:2]
//     hours = hours.replace(":", "")
//     minutes = total_seconds[2:5]
//     minutes = minutes.replace(":", "")
//     if int(minutes) > 60:
//         minutes = int(minutes) - 60
//         hours = int(hours) + 1
//     return "Hey, " + username + " you played on chess.com for " + hours + " hours and " + minutes + " minutes in " + month_dict[
//         month] + " " + year[:-1]
