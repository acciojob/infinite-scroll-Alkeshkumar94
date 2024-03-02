//your code here!
document.addEventListener("DOMContentLoaded", function() {
  const infiList = document.getElementById("infi-list");

  // Function to add list items
  function addListItems(count) {
    for (let i = 0; i < count; i++) {
      const li = document.createElement("li");
      li.textContent = "List Item " + (i + 1);
      infiList.appendChild(li);
    }
  }

  // Add initial list items
  addListItems(10);

  // Function to check if scroll reached end of list
  function isScrolledToBottom() {
    return window.innerHeight + window.scrollY >= document.body.offsetHeight;
  }

  // Function to handle auto load more items
  function autoLoadMoreItems() {
    if (isScrolledToBottom()) {
      addListItems(2); // Add 5 more list items when scrolled to bottom
    }
  }

  // Event listener for scroll
  window.addEventListener("scroll", autoLoadMoreItems);
});
