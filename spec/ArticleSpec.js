'use strict'

const Article = require('../js/Article.js');

describe('Article', () => {
    it('should accept object with title and body', () => {
        const article = new Article({
            title: '', 
            body: [] 
        });
        expect(article.title).toBeDefined();
        expect(article.toRender).toBeDefined();
    });

    it('should not accept an empty JSON', () => {
        expect(() => {new Article({})}).toThrowError();
    })

    it('should recognise the title of an article', () => {
        const article = new Article({
            title: 'TITLE',
            body: []
        });
        expect(article.title).toBe('TITLE');
    });

    it('should run setBody multiple times depending on body', () => {
        const article = new Article({
            title:'',
            body: []
        })
        spyOn(article,'setBody');
        article.initialise({
            title:'',
            body: [{},{},{},{}]
        });
        expect(article.toRender.length).toEqual(4);
        expect(article.setBody).toHaveBeenCalled();
        expect(article.setBody).toHaveBeenCalledTimes(4);
    });
});
