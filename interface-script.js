function logout() {
	window.location.href = "index.html";
}

function searchBooks() {
	const input = document.getElementById('searchInput').value.toLowerCase();
	const books = document.querySelectorAll('.book');

	books.forEach(book => {
		const title = book.querySelector('h3').textContent.toLowerCase();
		const author = book.querySelector('p').textContent.toLowerCase();

		if (title.includes(input) || author.includes(input)) {
			book.style.display = 'block';
		} else {
			book.style.display = 'none';
		}
	});
}

let favorites = [];
let history = [];
let showOnlyFavorites = false;

// Search Functionality
function searchBooks() {
	const input = document.getElementById('searchInput').value.toLowerCase();
	const books = document.querySelectorAll('.book');

	books.forEach(book => {
		const name = book.getAttribute('data-name').toLowerCase();
		const classification = book.getAttribute('data-classification').toLowerCase();

		if (name.includes(input) || classification.includes(input)) {
			book.classList.remove('hidden');
		} else {
			book.classList.add('hidden');
		}
	});
}

// Toggle Favorites List
function toggleFavorites() {
	const favoritesList = document.getElementById('favoritesList');
	favoritesList.classList.toggle('hidden');
}

// Toggle Reading History List
function toggleHistory() {
	const historyList = document.getElementById('historyList');
	historyList.classList.toggle('hidden');
}

// Add to Reading History
function addToHistory(button) {
	const book = button.closest('.book');
	const bookName = book.getAttribute('data-name');
	const historyContent = document.getElementById('historyContent');

	// Prevent duplicates in history
	if (!history.includes(bookName)) {
		history.push(bookName);

		const historyItem = document.createElement('li');
		historyItem.setAttribute('data-name', bookName);
		historyItem.textContent = bookName;
		historyItem.onclick = () => filterHistory(bookName);
		historyContent.appendChild(historyItem);
	}
}

// Filter Reading History
function filterHistory(bookName) {
	const books = document.querySelectorAll('.book');

	books.forEach(book => {
		const name = book.getAttribute('data-name');
		if (name !== bookName) {
			book.classList.add('hidden');
		} else {
			book.classList.remove('hidden');
		}
	});
}

// Toggle Favorite Status
function toggleFavorite(button) {
	const book = button.closest('.book');
	const bookName = book.getAttribute('data-name');
	const favoritesContent = document.getElementById('favoritesContent');

	if (favorites.includes(bookName)) {
		// Remove from favorites
		favorites = favorites.filter(fav => fav !== bookName);
		button.innerHTML = '&#9825;'; // Empty heart
		button.classList.remove('favorited');

		// Remove from favorites list
		const favoriteItem = favoritesContent.querySelector(`[data-name="${bookName}"]`);
		if (favoriteItem) favoritesContent.removeChild(favoriteItem);
	} else {
		// Add to favorites (prevent duplicates)
		if (!favorites.includes(bookName)) {
			favorites.push(bookName);
			button.innerHTML = '&#9829;'; // Red heart
			button.classList.add('favorited');

			// Add to favorites list
			const favoriteItem = document.createElement('li');
			favoriteItem.setAttribute('data-name', bookName);
			favoriteItem.textContent = bookName;
			favoriteItem.onclick = () => filterFavorites(bookName);
			favoritesContent.appendChild(favoriteItem);
		}
	}
}

// Filter Favorites
let currentlyFilteredBook = null;

function filterFavorites(bookName) {
	const books = document.querySelectorAll('.book');

	if (currentlyFilteredBook === bookName) {
		// If the same book is clicked again, reset the filter
		books.forEach(book => book.classList.remove('hidden'));
		currentlyFilteredBook = null;
	} else {
		// Filter to show only the selected book
		books.forEach(book => {
			const name = book.getAttribute('data-name');
			if (name !== bookName) {
				book.classList.add('hidden');
			} else {
				book.classList.remove('hidden');
			}
		});
		currentlyFilteredBook = bookName;
	}
}

// Placeholder for Logout
function logout() {
	alert('Logging out...');
}
// Search Functionality
function searchBooks() {
	const input = document.getElementById('searchInput').value.toLowerCase(); // Get search input
	const books = document.querySelectorAll('.book'); // Get all book elements

	books.forEach(book => {
		const name = book.getAttribute('data-name').toLowerCase(); // Get book name
		const classification = book.getAttribute('data-classification').toLowerCase(); // Get book classification

		// Check if input matches name or classification
		if (name.includes(input) || classification.includes(input)) {
			book.classList.remove('hidden'); // Show book
		} else {
			book.classList.add('hidden'); // Hide book
		}
	});
}

// Placeholder for Logout
function logout() {
	alert('Logging out...');
}

document.addEventListener("DOMContentLoaded", () => {
	const profileIcon = document.getElementById("profileIcon"); 
	const profileCloseBtn = document.getElementById("closeBtn"); 
	const profileSidebar = document.getElementById("profileSidebar"); // The sidebar
	const container = document.getElementById("container"); // The main interface

	profileCloseBtn.addEventListener("click", () => {
		profileSidebar.style.transform = "translateX(100%)";
		container.classList.remove("shifted");
	});

	profileIcon.addEventListener("click", () => {
		// Open the sidebar
		profileSidebar.style.transform = "translateX(0)";
		container.classList.add("shifted");
	});
});

const profileIcon = document.getElementById("profileIcon");
const userDetails = document.getElementById("userDetails");

profileIcon.addEventListener("click", () => {
	if (userDetails.style.display === "none" || userDetails.style.display === "") {
		userDetails.style.display = "block"; // Show user details
	} else {
		userDetails.style.display = "none"; // Hide user details
	}
});
