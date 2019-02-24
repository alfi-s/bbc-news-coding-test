
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
        cursor: 'move',
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
            .addClass("rank-item"));
    return contentToAdd;
}

$(document).ready(() => {
    contentToAdd = rankingComponent(listOfArticles);
    $(rankingClass).append(contentToAdd);
    $(submitTag).click(() => {

        //In practice, this will send a POST request to the server.
        sendRankings( 
            '/send', // endpoint to be used in practice
            contentToAdd.sortable('toArray'), // Send array of articles ranked.
            response => {
                $("#submit").replaceWith(
                    $("<p></p>")
                        .text("Thank you for your feedback.")
                        .addClass("thank-you"));
                console.log('rankings sent');
                console.log(response);
            },
            error => {
                console.log(error);
            });
    });
});