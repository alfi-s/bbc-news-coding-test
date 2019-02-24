/*
 * This is a class that represents the html of an article
 * based on a given JSON input.
 */
class Article {

    // Preloads the data from the given JSON.
    constructor(data) {
        this.title = data.title;
        this.toRender  = [];

        for (let element of data.body) 
            this.toRender.push(this.setBody(element));
    }

    // Renders the JSON as an article.
    render() {
        $(titleTag).append(this.title);
        for(let content of this.toRender)
            $(articleTag).append(content);
        $(articleTag).append($("<hr>"));
    }

    // Parses the body and generates the html for the content.
    setBody(bodyElement) {
        const type  = bodyElement.type;
        const model = bodyElement.model;

        // Variable to be returned
        let contentToAdd = null;

        // The format of what's added depends on the type
        switch(type) {
            case "heading":
                // If the heading and the title match, dont render the heading
                if (model.text == this.title) 
                    contentToAdd = $("<h1></h1>")
                        .text(model.text)
                        .add($("<hr>"));
                else
                    contentToAdd = $("<h1></h1>").text(this.title)
                        .add($("<hr>"))
                        .add($("<h3></h3>").text(model.text));
                break;

            case "paragraph":
                contentToAdd = $("<p></p>").text(model.text);
                break;

            case "image":
                contentToAdd = $("<img>").attr({
                    src: model.url,
                    alt: model.altText,
                    height: model.height,
                    weight: model.weight
                });
                break;

            case "list":
                // Determine first the type of the list being dealt with
                const listType = (model.type == "unordered") ? "<ul></ul>" : "<ol></ol>"
                contentToAdd = $(listType);
                for(let item of model.items)
                    contentToAdd.append( $("<li></li>").text(item));
                break;
        }
        
        return contentToAdd;
    }
}

/* Stub of an GET request that gets the JSON representation of an article. */
function getArticleData(article, callback) {
    $.ajax({
        url: '/data/' + article, 
        type: 'GET',
        success: data => {
            callback(null, data)
        }
    });
}