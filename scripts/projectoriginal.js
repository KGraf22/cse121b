/* W06: Programming Tasks */

/* Declare and initialize global variables */
const roomsElement = document.getElementById('room');
let roomData = {};

/* Function to display room tasks */
const displayRoomTasks = (room) => {
    if (room && room.name && room.imageUrl && room.tasks) {
        // Clear previous room tasks
        roomsElement.innerHTML = '';

    // Create a heading for the room
        const heading = document.createElement('h2');
        heading.textContent = room.name;
        roomsElement.appendChild(heading);

    // Display room image
        const image = document.createElement('img');
        image.setAttribute('src', room.imageUrl);
        image.setAttribute('alt', room.name);
        roomsElement.appendChild(image);

    // Create a list to display tasks
        const taskList = document.createElement('ul');

    // Loop through tasks and create list items
        room.tasks.forEach(task => {
            const listItem = document.createElement('li');
     
            const checkbox = document.createElement('input');
            checkbox.type = 'checkbox';
            checkbox.className = 'task-checkbox';
        
            const label = document.createElement('label');
            label.appendChild(checkbox);
            label.appendChild(document.createTextNode(task.task));

            listItem.appendChild(label);
            taskList.appendChild(listItem);
        });
    


    // Append task list to room element
        roomsElement.appendChild(taskList);
    } else {
        console.error('Room data is invalid or incomplete:', room);
    }
}
/* Function to fetch and display room data */
const fetchAndDisplayRoomData = async () => {
    try {
        // Fetch data from mock API URL
        const response = await fetch('https://run.mocky.io/v3/4098d1ea-6c59-449a-a8ff-af6dc774bfd9');

        // Check if response is successful
        if (!response.ok) {
            throw new Error('Failed to fetch room data');
        }

        // Parse JSON response
        const data = await response.json();

        // Assign room data
        roomData = data.rooms;

        console.log('Room data:', roomData);

        // Display initial room tasks (all rooms)
        displayRoomTasks(roomData.all);
    } catch (error) {
        console.error('Error fetching or displaying room data:', error);
    }
}

/* Function to filter room tasks based on user selection */
const filterRoomTasks = () => {
    // Get the value of the filter select element
    const filterValue = document.getElementById('filtered').value;

    // Display room tasks based on filter value
    displayRoomTasks(roomData[filterValue]);
}

/* Event listener for filter select element */
document.getElementById('filtered').addEventListener('change', filterRoomTasks);

// Fetch and display initial room data
fetchAndDisplayRoomData();
