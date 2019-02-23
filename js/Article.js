class Article {

    constructor(data) {
        this.title = data.title;
        this.body = data.body;
    }

    render() {
        this.setTitle();
        for(element in this.body) this.setBody(element);
    }

    setTitle() {
        $("<title>").append(this.title)
    }

    setBody(bodyElement) {
        const type  = bodyElement.type;
        const model = bodyElement.model;
        let contentToAdd = null;

        switch(type) {
            case "heading":
                contentToAdd = $("<h3></h3>").text(model.text);
                break;

            case "paragraph":
                contentToAdd = $("<p></p>").text(model.text);
                break;

            case "image":
                contentToAdd = $("<img></img>").attr({
                    src: model.url,
                    alt: model.altText,
                    height: model.height,
                    weight: model.weight
                })
                break;

            case "list":
                break;
        }

        $("#content").append(contentToAdd);
    }
}