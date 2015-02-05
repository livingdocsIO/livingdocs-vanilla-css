(function () { var designJSON = {
  "name": "vanilla",
  "label": "Vanilla",
  "version": "0.0.1",
  "css": [
    "./stylesheets/steez.css"
  ],
  "components": [
    {
      "name": "Title",
      "html": "<header class=\"head\">\n  <span class=\"head__dateline\" doc-editable=\"text-dateline\">Dateline</span>\n  <h1 doc-editable=\"title\" class=\"head__title\">Title</h1>\n  <div class=\"head__subline\">\n    <span class=\"head__meta head__meta--topic\" doc-editable=\"text-topic\">Topic</span>\n    <span class=\"head__meta head__meta--date\" doc-editable=\"text-date\">Date</span>\n    <span class=\"head__meta head__meta--author\">by <b class=\"head__authors-name\" doc-editable=\"text-author\">Author name<b></b></b></span>\n  </div>\n  <figure class=\"head__image\">\n    <img doc-image=\"image\" class=\"head__image-item\">\n    <figcaption doc-editable=\"text-image-caption\" class=\"head__image-caption\">Caption</figcaption>\n  </figure>\n</header>",
      "label": "Title"
    },
    {
      "name": "Rule",
      "html": "<hr class=\"rule\">",
      "label": "Rule"
    },
    {
      "name": "Paragraph",
      "html": "<p doc-editable=\"text\" class=\"paragraph\">Tell a funky story &#x2026;</p>",
      "label": "Paragraph"
    },
    {
      "name": "Title and lead",
      "html": "<header class=\"head\">\n  <span class=\"head__dateline\" doc-editable=\"text-dateline\">Dateline</span>\n  <h1 doc-editable=\"title\" class=\"head__title\">Title</h1>\n  <div class=\"head__subline\">\n    <span class=\"head__meta head__meta--topic\" doc-editable=\"text-topic\">Topic</span>\n    <span class=\"head__meta head__meta--date\" doc-editable=\"text-date\">Date</span>\n    <span class=\"head__meta head__meta--author\">by <b class=\"head__authors-name\" doc-editable=\"text-author\">Author name<b></b></b></span>\n  </div>\n</header>",
      "label": "Title and lead"
    },
    {
      "name": "Subhead",
      "html": "<h2 doc-editable=\"title\" class=\"subhead alpha\">Subhead</h2>",
      "label": "Subhead"
    },
    {
      "name": "Quote",
      "html": "<blockquote class=\"quote\">\n  <p doc-editable=\"text\" class=\"quote__text\">Quoted text</p>\n  <footer doc-editable=\"source\" class=\"quote__source\">Source (optional)</footer>\n</blockquote>",
      "styles": [
        {
          "name": "Quite",
          "type": "option",
          "value": "quote--quite"
        },
        {
          "name": "Loud",
          "type": "option",
          "value": "quote--loud"
        }
      ],
      "label": "Quote"
    },
    {
      "name": "image",
      "html": "<figure class=\"image\">\n  <img doc-image=\"image\" class=\"image__item\">\n  <figcaption doc-editable=\"caption\" class=\"image__caption\">Caption (optional)</figcaption>\n</figure>",
      "label": "Bild",
      "directives": {
        "image": {
          "imageRatios": [
            "4:3",
            "3:4",
            "3:2",
            "2:3"
          ],
          "allowOriginalRatio": true
        }
      },
      "styles": [
        {
          "name": "Normal",
          "type": "option",
          "value": "image--normal"
        },
        {
          "name": "Full width",
          "type": "option",
          "value": "image--full"
        },
        {
          "name": "Left aligned",
          "type": "option",
          "value": "image--left-aligned"
        }
      ]
    },
    {
      "name": "Two images in a row",
      "html": "<div class=\"image-row image-row--two-images\">\n  <figure class=\"image-row__item\">\n    <img doc-image=\"image-one\" class=\"image-row__image\">\n    <figcaption doc-editable=\"caption-one\" class=\"image-row__caption\">Caption</figcaption>\n  </figure>\n  <figure class=\"image-row__item\">\n    <img doc-image=\"image-two\" class=\"image-row__image\">\n    <figcaption doc-editable=\"caption-two\" class=\"image-row__caption\">Caption</figcaption>\n  </figure>\n</div>",
      "label": "Two images in a row"
    }
  ]
}; if(typeof module !== 'undefined' && module.exports) {return module.exports = designJSON;} else { this.design = this.design || {}; this.design.vanilla = designJSON;} }).call(this);