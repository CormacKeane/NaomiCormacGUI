document.addEventListener("DOMContentLoaded", function () {
    

//accessing all label elements and storing them in a variable called stars
let stars= document.querySelectorAll(".rating label");
//acessing all div elements and storing them in a variable called books
let books=document.querySelectorAll(".rating");
//storing ratings in a local storage using an array
let ratings=[];

// checks if saved ratings exist in localStorage and restore them
let savedRatings = JSON.parse(localStorage.getItem("rating") || "[]");
for (let rating of savedRatings) {
    for (let book of books) {
        if (rating["books-id"] == book.dataset.booksid) {
            let reversedStars = Array.from(book.children).reverse();
            let index = parseInt(rating["stars"]) - 1;
            reversedStars[index].setAttribute("data-clicked", "true");
        }
    }
}
//adding an onclick event to each rating
for(let star of stars){
  
    //every time a star is clicked a function will run
    star.addEventListener("click", function(){
        //prevents user from rating the same thing twice
        let children=star.parentElement.children;
        for (let child of children){
            if(child.getAttribute("data-clicked")){
                return false;
            }
        }
        //this crerates a refrence point for if the star is clicked or not
        this.setAttribute("data-clicked","true")
        //creates a variable called rating and stores the data-ratings attribute value
        let rating=this.dataset.rating;
        let booksId=this.parentElement.dataset.booksid;
    //creating an object called data that will hold rating value and bookId
        let data={
            "stars":rating,
            "books-id":booksId
        }
        //inserting the data object in the empty ratings array
        ratings.push(data);
        localStorage.setItem("rating",JSON.stringify(ratings));
    });
}

  });
