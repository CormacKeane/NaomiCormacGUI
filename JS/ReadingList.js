function showReadingList() {
    const list = JSON.parse(localStorage.getItem("readingList") || "[]");
    let html = '<div class="reading-list-title">Your Reading List</div>';
    
    if (list.length === 0) {
      html += '<div style="text-align:center;color:#4682b4;">Nothing here yet! Add something cute 💙</div>';
    } else {
      html += '<ul>';
      list.forEach((item, idx) => {
        html += `<li>${item} <button class="remove-btn" onclick="removeFromReadingList(${idx})" title="Remove">&#10006;</button></li>`;
      });
      html += '</ul>';
    }

    document.getElementById("reading-list").innerHTML = html;
  }

  function addToReadingList() {
    const input = document.getElementById("reading-input");
    const newItem = input.value.trim();
    if (!newItem) return;

    const list = JSON.parse(localStorage.getItem("readingList") || "[]");
    list.push(newItem);
    localStorage.setItem("readingList", JSON.stringify(list));
    input.value = "";

    showReadingList();
  }

  function removeFromReadingList(idx) {
    const list = JSON.parse(localStorage.getItem("readingList") || "[]");
    list.splice(idx, 1);
    localStorage.setItem("readingList", JSON.stringify(list));
    showReadingList();
  }

  window.addEventListener("DOMContentLoaded", showReadingList);