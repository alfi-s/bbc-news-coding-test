
let listOfArticles = [
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
    "Praesent bibendum nec velit a fringilla. Nulla facilisi",
    "Vestibulum posuere orci ullamcorper nisi porta, sit amet tempus nibh porta",
    "Maecenas venenatis lorem ut erat dictum, sed varius est porta",
    "Nulla nibh erat, pharetra at ultricies nec, tincidunt luctus arcu"
]

function rankingComponent(articles) {
    let contentToAdd = $("<ol></ol>").sortable({
        axis: 'y',
        placeholder: "rank-item-placeholder",
        start: (event, ui) => {
            ui.item.toggleClass("rank-item-placeholder");
        },
        stop: (event, ui) => {
            ui.item.toggleClass("rank-item-placeholder");
        }
      });
    for(let article of articles)
        contentToAdd.append($("<li></li>")
            .text(article)
            .attr("id", article)
            .attr("class", "rank-item"));
    return contentToAdd;
}

$(document).ready(() => {
    contentToAdd = rankingComponent(listOfArticles);
    $(rankingClass).append(contentToAdd);
    $(submitTag).click(() => {
        console.log(contentToAdd.sortable('toArray')); 
    });
});