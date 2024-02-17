/* W06: Programming Tasks */

/* Declare and initialize global variables */
const roomsElement = document.getElementById('room');
const resetButton = document.getElementById('resetButton');
let roomData = {};

/* Function to display room tasks */
const displayRoomTasks = (room) => {
    if (room && room.name && room.imageUrl && room.tasks) {
        // Clear previous room tasks
        roomsElement.innerHTML = '';

        // Create a container for the room content
        const roomContentContainer = document.createElement('div');
        roomContentContainer.classList.add('room-content');

        // Create a container for the tasks list
        const tasksContainer = document.createElement('div');
        tasksContainer.classList.add('tasks-container');

        // Create a heading for the room
        const heading = document.createElement('h2');
        heading.textContent = room.name;
        tasksContainer.appendChild(heading);

        // Create a list to display tasks
        const taskList = document.createElement('ul');
        taskList.id = 'roomTasks'; // Assign an ID to the task list for styling

        // Loop through tasks and create list items
        room.tasks.forEach(task => {
            const listItem = document.createElement('li');

            const checkbox = document.createElement('input');
            checkbox.type = 'checkbox';
            checkbox.className = 'task-checkbox';
            checkbox.checked = task.status === 'Complete'; // Check if task is complete
            checkbox.addEventListener('change', () => {
                task.status = checkbox.checked ? 'Complete' : 'Incomplete'; // Update task status

                // Save updated task status to localStorage or your preferred data storage method
            });

            const label = document.createElement('label');
            label.appendChild(checkbox);
            label.appendChild(document.createTextNode(task.task));

            listItem.appendChild(label);
            taskList.appendChild(listItem);
        });

        // Append task list to tasks container
        tasksContainer.appendChild(taskList);

        // Append tasks container to room content container
        roomContentContainer.appendChild(tasksContainer);

        // Display room image
        const imageContainer = document.createElement('div');
        imageContainer.classList.add('image-container');

        const image = document.createElement('img');
        image.setAttribute('src', room.imageUrl);
        image.setAttribute('alt', room.name);
        imageContainer.appendChild(image);

        // Append image container to room content container
        roomContentContainer.appendChild(imageContainer);

        // Append room content container to rooms element
        roomsElement.appendChild(roomContentContainer);
    } else {
        console.error('Room data is invalid or incomplete:', room);
    }
}

/* Function to reset chore list */
const resetChoreList = () => {
    // Clear the currently displayed tasks
    roomsElement.innerHTML = '';
    
    // Fetch and display initial room data
    fetchAndDisplayRoomData();

    // Scroll to top after resetting
    window.scrollTo(0, 0);
}

/* Function to fetch and display room data */
const fetchAndDisplayRoomData = async () => {
    try {
        // Fetch data from mock API URL
        const response = await fetch('https://run.mocky.io/v3/2dc4f5e2-c0e7-4d08-bef5-357f8c5b8564');

        // Check if response is successful
        if (!response.ok) {
            throw new Error('Failed to fetch room data');
        }

        // Parse JSON response
        const data = await response.json();

        // Assign room data
        roomData = data.rooms;

        console.log('Room data:', roomData);

    } catch (error) {
        console.error('Error fetching or displaying room data:', error);
    }
}

/* Function to filter room tasks based on user selection */
const filterRoomTasks = () => {
    // Get the value of the filter select element
    const filterValue = document.getElementById('filtered').value;

    if (filterValue === "all") {
        // Display tasks for all rooms
        Object.values(roomData).forEach(room => {
            displayRoomTasks(room);
        });

    } else {
        // Display room tasks based on selected room
        displayRoomTasks(roomData[filterValue]);
    }
}

/* Event listener for filter select element */
document.getElementById('filtered').addEventListener('change', filterRoomTasks);

/* Event listener for reset button */
resetButton.addEventListener('click', resetChoreList);

// Fetch and display initial room data
fetchAndDisplayRoomData();
