
let listOfArticles = [
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
    "Praesent bibendum nec velit a fringilla. Nulla facilisi",
    "Vestibulum posuere orci ullamcorper nisi porta, sit amet tempus nibh porta",
    "Maecenas venenatis lorem ut erat dictum, sed varius est porta",
    "Nulla nibh erat, pharetra at ultricies nec, tincidunt luctus arcu"
]

function rankingComponent(articles) {
    let contentToAdd = $("<ul></ul>").sortable()
    for(let article of articles)
        contentToAdd.append($("<li></li>").text(article).attr("id", article));
    return contentToAdd;
}

$(document).ready(() => {
    contentToAdd = rankingComponent(listOfArticles);
    $("#content").append(contentToAdd);
    $("#submit").click(() => {
        //console.log(contentToAdd.sortable('toArray').toString()); 
    });
});