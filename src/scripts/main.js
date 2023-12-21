import '../styles/main.scss';


document.addEventListener('DOMContentLoaded', function () {
    const hamburger = document.querySelector('.hamburger');
    const aside = document.querySelector('aside');
    const wrapper = document.getElementById('wrapper');

    hamburger.addEventListener('click', function () {
        const currentIcon = hamburger.getAttribute('icon-name');
        const newIcon = (currentIcon === 'hamburger-menu') ? 'arrow-left-thick-1' : 'hamburger-menu';
        hamburger.setAttribute('icon-name', newIcon);

        // Toggle visibility of the aside
        if (aside.style.left === '0px') {
            aside.style.left = '-250px';
            wrapper.style.marginLeft = '0';
        } else {
            aside.style.left = '0';
            wrapper.style.marginLeft = '250px';
        }
    });
    

    const asideContainer = document.querySelector('aside');
    const listItems = asideContainer.querySelectorAll('.aside-item');
    let accountName = document.getElementById('account_name').textContent;

    listItems.forEach((item) => {
        item.addEventListener('click', (e) => {
            listItems.forEach((otherItem) => {
                otherItem.classList.remove('active');
            });
            item.classList.add('active');
            updateShowingInfo();
        });
    });

    document.getElementById('greetings').innerHTML = `Hello ${accountName} &#x1f44b;,`;

    fetch('/src/assets/DB.json')
        .then(response => response.json())
        .then(data => {
            const peopleData = data.people;
            createTable(peopleData);
            createNavigationButtons(peopleData);
            updateShowingInfo();
        })
        .catch(error => console.error('Error fetching data:', error));
});

let totalEntities;
let currentPage = 1;
const itemsPerPage = 8;

function createNavigationButtons(data) {
    const navigationContainer = document.getElementById('navigation');
    const totalPages = Math.ceil(data.length / itemsPerPage);
    const maxButtonsToShow = 4;

    const navList = document.createElement('ul');
    navList.classList.add('data-menu'); // Add the class for styling

    // Add previous page arrow
    const prevArrow = document.createElement('li');
    prevArrow.innerHTML = '&lt;';
    prevArrow.classList.add('data-menu-item'); // Add the class for styling
    prevArrow.addEventListener('click', () => {
        if (currentPage > 1) {
            currentPage--;
            updateTable(data);
            updateShowingInfo();
        }
    });
    navList.appendChild(prevArrow);

    // Add buttons for the first pages
    for (let i = 1; i <= Math.min(totalPages, maxButtonsToShow); i++) {
        const listItem = document.createElement('li');
        listItem.textContent = i;
        listItem.classList.add('data-menu-item'); // Add the class for styling

        if (i === currentPage) {
            listItem.classList.add('active');
        }

        listItem.addEventListener('click', () => {
            currentPage = i;
            updateTable(data);
            updateShowingInfo();
            updateActiveClass(); // Update active class after clicking
        });

        navList.appendChild(listItem);
    }

    // Add dots if there are more pages
    if (totalPages > maxButtonsToShow) {
        const dots = document.createElement('li');
        dots.textContent = '...';
        dots.style.marginLeft = '10px';
        dots.style.paddingTop = '4px';
        navList.appendChild(dots);
    }

    // Add button for the last page
    const lastPageButton = document.createElement('li');
    lastPageButton.textContent = totalPages;
    lastPageButton.classList.add('data-menu-item'); // Add the class for styling
    lastPageButton.addEventListener('click', () => {
        currentPage = totalPages;
        updateTable(data);
        updateShowingInfo();
        updateActiveClass(); // Update active class after clicking
    });
    navList.appendChild(lastPageButton);

    // Add next page arrow
    const nextArrow = document.createElement('li');
    nextArrow.innerHTML = '&gt;';
    nextArrow.classList.add('data-menu-item'); // Add the class for styling
    nextArrow.addEventListener('click', () => {
        if (currentPage < totalPages) {
            currentPage++;
            updateTable(data);
            updateShowingInfo();
            updateActiveClass(); // Update active class after clicking
        }
    });
    navList.appendChild(nextArrow);

    navigationContainer.appendChild(navList);

    // Function to update the 'active' class
    function updateActiveClass() {
        const items = navList.querySelectorAll('.data-menu-item');
        items.forEach(item => {
            item.classList.remove('active');
            if (parseInt(item.textContent) === currentPage) {
                item.classList.add('active');
            }
        });
    }
}

function createTable(data) {
    const tableContainer = document.getElementById('table-container');
    const table = document.createElement('table');
    const headerRow = table.insertRow(0);

    if (Array.isArray(data) && data.length > 0) {
        for (const key in data[0]) {
            const th = document.createElement('th');
            th.textContent = key.charAt(0).toUpperCase() + key.slice(1);
            headerRow.appendChild(th);
        }

        const startIndex = (currentPage - 1) * itemsPerPage;
        const endIndex = startIndex + itemsPerPage;

        for (let i = startIndex; i < Math.min(endIndex, data.length); i++) {
            const row = table.insertRow();
            for (const key in data[i]) {
                const cell = row.insertCell();
                if (key === 'email') {
                    const emailLink = document.createElement('a');
                    emailLink.href = 'mailto:' + data[i][key];
                    emailLink.textContent = data[i][key];
                    cell.appendChild(emailLink);
                    cell.classList.add('email-column');
                } else if (key === 'phone') {
                    const telLink = document.createElement('a');
                    telLink.href = 'tel:' + data[i][key];
                    telLink.textContent = data[i][key];
                    cell.appendChild(telLink);
                } else if (key === 'status') {
                    const statusDiv = document.createElement('div');
                    statusDiv.textContent = data[i][key];
                    statusDiv.className = 'status-info status-' + data[i][key].toLowerCase();
                    statusDiv.classList.add('status-header');
                    cell.appendChild(statusDiv);
                } else if (key === 'company') {
                    cell.textContent = data[i][key];
                    cell.classList.add('company-column');
                } else {
                    cell.textContent = data[i][key];
                }
            }
        }

        table.classList.add('custom-table');
        tableContainer.appendChild(table);

        totalEntities = data.length;
    } else {
        console.error('Invalid data format. Expected an array with at least one element.');
    }
}

function updateTable(data) {
    const tableContainer = document.getElementById('table-container');
    // Clear previous results
    tableContainer.innerHTML = '';
    createTable(data);
}

function updateShowingInfo() {
    const startIndex = (currentPage - 1) * itemsPerPage + 1;
    const endIndex = Math.min(currentPage * itemsPerPage, totalEntities);

    const showingInfoParagraph = document.getElementById('data-info');
   
    if (showingInfoParagraph) {
        showingInfoParagraph.textContent = `Showing data from ${startIndex} to ${endIndex} of ${totalEntities} entities`;
    } else {
        console.error('Paragraph not found in HTML.');
    }
}

// Add event listener for the search input
const searchInput = document.querySelector('.search-input');
searchInput.addEventListener('input', handleSearch);

function handleSearch() {
    const searchTerm = searchInput.value.toLowerCase();
    fetch('/src/assets/DB.json')
        .then(response => response.json())
        .then(data => {
            const filteredData = data.people.filter(person => {
                // Exclude 'status' property from search
                const propertiesToSearch = Object.keys(person).filter(key => key !== 'status');
                return propertiesToSearch.some(property => person[property].toLowerCase().includes(searchTerm));
            });
            updateTable(filteredData);
            updateShowingInfo();
        })
        .catch(error => console.error('Error fetching data:', error));
}
