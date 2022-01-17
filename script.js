window.onload = function(){
    const stack = document.querySelector(".stack");
const grid = document.querySelector(".grid");
const article = document.getElementsByTagName("article");

stack.addEventListener('click', function(){
    for(i = 0; i < article.length; i++)
        article[i].classList.add("stack");
})

grid.addEventListener('click', function(){
    for(i = 0; i < article.length; i++)
        article[i].classList.remove("stack");
})
}
