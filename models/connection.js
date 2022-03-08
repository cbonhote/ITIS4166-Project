const { DateTime } = require('luxon');

const connections = [
{
    id: '1',
    name: 'Capstone Group 19 Meeting',
    topic: 'Study',
    host: 'Bonhotel, Chase',
    date: 'Friday February 4, 2022',
    startTime: '10:00',
    endTime: '15:00',
    location: 'Bioinformatics, Rm 217',
    details: 'All members of Dr. Rudds capstone class, group 19 please meet in the classroom this Friday. We will be going over user stories for the next sprint, so please bring your laptop so we can work on the shared document. Ben, our scrum master, also has some things to say. Thank you',
},
{
    id: '2',
    name: 'Capstone Group 23 Meeting',
    topic: 'Study',
    host: 'Steffel, Valena',
    date: 'Friday February 4, 2022',
    startTime: '15:00',
    endTime: '20:00',
    location: 'Bioinformatics, Rm 217',
    details: 'Group meeting for capstone group 23'
},
{
    id: '3',
    name: 'Web Development Exercise 2 Study',
    topic: 'Study',
    host: 'Doe, John',
    date: 'Friday February 4, 2022',
    startTime: '15:00',
    endTime: '20:00',
    location: 'Library, Rm 110E',
    details: 'Group study for exercise 2 in ITIS 4166' 
},
{
    id: '4',
    name: 'National Cyber Security Conference',
    topic: 'Events',
    host: 'Doe, John',
    date: 'Friday February 4, 2022',
    startTime: '15:00',
    endTime: '10:00',
    location: 'Bank of America Stadium',
    details: 'A national cyber security conference held at the BOA stadium'
},
{
    id: '5',
    name: 'UNCC Hackathon Event',
    topic: 'Events',
    host: 'Doe, John',
    date: 'Friday February 4, 2022',
    startTime: '15:00',
    endTime: '10:00',
    location: 'Library, Rm 110A',
    details: 'Hackathon event for Charlotte Hack'
},
{
    id: '6',
    name: 'Charlotte Hack Club Meeting',
    topic: 'Events',
    host: 'Doe, John',
    date: 'Friday February 3, 2022',
    startTime: '15:00',
    endTime: '10:00',
    location: 'Library, Rm 110D',
    details: 'Charlotte Hack club will prepare for the event tmrw'
},
];

exports.find = () => connections;

exports.findById = id => connections.find(connection=>connection.id === id);