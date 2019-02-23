
let listOfArticles = [
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
    "Praesent bibendum nec velit a fringilla. Nulla facilisi",
    "Vestibulum posuere orci ullamcorper nisi porta, sit amet tempus nibh porta",
    "Maecenas venenatis lorem ut erat dictum, sed varius est porta",
    "Nulla nibh erat, pharetra at ultricies nec, tincidunt luctus arcu"
]

function renderRankings(articles) {
    let contentToAdd = $("<ul></ul>")
    for(let article in articles)
        contentToAdd.append($("<li></li>").text(article));
    $("#content").append(contentToAdd);
}