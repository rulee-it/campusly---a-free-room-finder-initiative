# Free Class Navigator - Web Version

## Overview
Free Class Navigator is a web application designed to help Sharda University students find available classrooms based on their preferences. Users can select a block, day, and time to find unoccupied classrooms for studying, group work, or other activities.

## Features
- **Simple Search Interface**: Easy-to-use dropdown selectors for block number, day, and time
- **Real-time Results**: Quick display of available classrooms based on search criteria
- **Responsive Design**: Works on desktop and mobile devices
- **Detailed Room Information**: Shows room numbers and floor information
- **Error Handling**: Gracefully handles errors and provides user feedback

## Getting Started

### Prerequisites
- Any modern web browser (Chrome, Firefox, Safari, Edge)
- No server required - runs entirely in the browser

### Installation
1. Download or clone this repository
2. No build process is required
3. Open `index.html` in your web browser to run the application

## How to Use

1. **Open the Application**:
   - Open `index.html` in your web browser

2. **Search for Available Rooms**:
   - Select a Block Number from the dropdown (Block 1, 2, 3, or 4)
   - Select a Day of the week from the dropdown (Monday through Friday)
   - Select a Time Period from the dropdown (various time slots available)
   - Click "Find Free Rooms" to search

3. **View Results**:
   - The application will display all available rooms matching your criteria
   - Each room card shows the room number and floor
   - If no rooms are available, you'll see a message indicating this

4. **Navigate Back**:
   - Use the "Back to Search" button to return to the search screen and try different criteria

## Project Structure

```
web_version/
├── css/
│   └── styles.css       # All styling for the application
├── js/
│   ├── main.js          # Core application logic
│   └── services/
│       └── roomService.js  # Room data and search functionality
├── index.html           # Main HTML structure
└── README.md            # This documentation
```

## Data Source

The application uses data based on the B.Tech CSE IV - A timetable of Sharda University. The classroom availability is determined by:

- Block number (1-4)
- Day of the week (Monday-Friday)
- Time period (9 different time slots throughout the day)

## Browser Compatibility

The application is compatible with:
- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)
- Mobile browsers (iOS Safari, Android Chrome)

## Development

This is a standalone web version of the Free Class Navigator, originally developed as a React Native mobile application. The web version uses vanilla JavaScript, HTML, and CSS to provide similar functionality without requiring a framework.

## Declaration

The present project report is my original work and has not been submitted for credit toward any other academic qualification, certificate, or degree. I hereby assure that the submitted work does not violate any existing copyright laws. The online certificate maker website described in this report was developed solely by me, with guidance from lectures and online resources as acknowledged.

---
Ashmit Naik 
© 2023 Free Class Navigator | Originally developed as a React Native app, web version created to expand access 
