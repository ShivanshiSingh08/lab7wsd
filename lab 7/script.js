document.addEventListener("DOMContentLoaded", function () {
    const fetchBooksButton = document.getElementById("fetchBooks");
    const bookListDiv = document.getElementById("bookList");

    fetchBooksButton.addEventListener("click", function () {
       
        fetch("https://your-json-api-url.com/books.json") // Replace with your API URL
            .then(response => {
                if (!response.ok) {
                    throw new Error("Network response was not ok");
                }
                return response.json();
            })
            .then(data => {
                
                displayBooks(data);
            })
            .catch(error => {
                console.error("Error fetching data:", error);
            });
    });

    function displayBooks(booksData) {
       
        bookListDiv.innerHTML = "";

        if (booksData.length === 0) {
            bookListDiv.innerHTML = "No books found.";
            return;
        }

        const ul = document.createElement("ul");

        booksData.forEach(book => {
            const li = document.createElement("li");
            li.textContent = `Title: ${book.title}, Author: ${book.author}, Year: ${book.year}`;
            ul.appendChild(li);
        });

        bookListDiv.appendChild(ul);
    }
});
