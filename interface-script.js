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
                const favoriteItem = favoritesContent.querySelector([data-name="${bookName}"]);
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

        document.addEventListener("DOMContentLoaded", () => {
          const profileIcon = document.getElementById("profileIcon"); // أيقونة المستخدم
          const profileSidebar = document.getElementById("profileSidebar"); // القائمة الجانبية
    
          let isSidebarOpen = false; // تتبع حالة القائمة
    
          // عند الضغط على أيقونة المستخدم
          profileIcon.addEventListener("click", () => {
            if (isSidebarOpen) {
              // إغلاق القائمة الجانبية
              profileSidebar.classList.remove("open");
            } else {
              // فتح القائمة الجانبية
              profileSidebar.classList.add("open");
            }
            isSidebarOpen = !isSidebarOpen; // قلب الحالة
          });
          });  const cartItems = [];
          const cartSection = document.getElementById('cartSection');
      
          function toggleCart() {
            if (cartSection.style.display === 'none' || cartSection.style.display === '') {
              cartSection.style.display = 'block';
            } else {
              cartSection.style.display = 'none';
            }
          }
      
          function addToCart(bookTitle) {
            const cartItemsList = document.getElementById('cartItems');
            const isCartEmpty = cartItemsList.querySelector('li') && cartItemsList.querySelector('li').textContent === 'Your cart is empty.';
      
            if (isCartEmpty) {
              cartItemsList.innerHTML = '';
            }
            
            if (!cartItems.includes(bookTitle)) {
              cartItems.push(bookTitle);
              const cartItem = document.createElement('li');
              cartItem.className = 'cart-item';
              cartItem.innerHTML = `
                <span class="cart-item-title">${bookTitle}</span>
                <span class="cart-item-remove" onclick="removeFromCart('${bookTitle}')">Remove</span>
              `;
              cartItemsList.appendChild(cartItem);
            }
          }
      
          function removeFromCart(bookTitle) {
            const cartItemsList = document.getElementById('cartItems');
            const index = cartItems.indexOf(bookTitle);
      
            if (index > -1) {
              cartItems.splice(index, 1);
              const cartItem = Array.from(cartItemsList.children).find(item => item.querySelector('.cart-item-title').textContent === bookTitle);
              if (cartItem) {
                cartItemsList.removeChild(cartItem);
              }
            }
      
            if (cartItems.length === 0) {
              cartItemsList.innerHTML = '<li>Your cart is empty.</li>';
            }
          }
          
          function openPDF(button) {
            // Get the PDF file URL from the button's data-pdf attribute
            const pdfUrl = button.getAttribute('data-pdf');
      
            // Check if the URL exists
            if (pdfUrl) {
              // Open the PDF in a new tab
              window.open(pdfUrl, '_blank'); // Opens in a new tab
              // OR use this for same-window navigation:
              // window.location.href = pdfUrl;
            } else {
              console.error('No PDF URL specified for this book.');
            }
          }
