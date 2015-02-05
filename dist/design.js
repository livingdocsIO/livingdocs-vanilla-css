(function() { this.design || (this.design = {}); design.vanilla = (function() { return {
  "config": {
    "version": 1,
    "namespace": "vanilla",
    "css": [
      "/stylesheets/steez.css"
    ],
    "groups": {
      "Headers": {
        "id": "Headers",
        "title": "Headers",
        "templates": [
          "headPicture",
          "head",
          "subhead"
        ]
      },
      "Spacing": {
        "id": "Spacing",
        "title": "Spacing",
        "templates": [
          "rule"
        ]
      },
      "Text": {
        "id": "Text",
        "title": "Text",
        "templates": [
          "paragraph",
          "quote"
        ]
      },
      "images": {
        "id": "images",
        "title": "images",
        "templates": [
          "image",
          "twoImages"
        ]
      }
    },
    "styles": []
  },
  "templates": [
    {
      "id": "headPicture",
      "title": "Title",
      "html": "<header class=\"head\">\n  <span class=\"head__dateline\" doc-editable=\"text-dateline\">Dateline</span>\n  <h1 doc-editable=\"title\" class=\"head__title\">Title</h1>\n  <div class=\"head__subline\">\n    <span class=\"head__meta head__meta--topic\" doc-editable=\"text-topic\">Topic</span>\n    <span class=\"head__meta head__meta--date\" doc-editable=\"text-date\">Date</span>\n    <span class=\"head__meta head__meta--author\">by <b class=\"head__authors-name\" doc-editable=\"text-author\">Author name<b></b></b></span>\n  </div>\n  <figure class=\"head__image\">\n    <img doc-image=\"image\" class=\"head__image-item\">\n    <figcaption doc-editable=\"text-image-caption\" class=\"head__image-caption\">Caption</figcaption>\n  </figure>\n</header>"
    },
    {
      "id": "head",
      "title": "Title and lead",
      "html": "<header class=\"head\">\n  <span class=\"head__dateline\" doc-editable=\"text-dateline\">Dateline</span>\n  <h1 doc-editable=\"title\" class=\"head__title\">Title</h1>\n  <div class=\"head__subline\">\n    <span class=\"head__meta head__meta--topic\" doc-editable=\"text-topic\">Topic</span>\n    <span class=\"head__meta head__meta--date\" doc-editable=\"text-date\">Date</span>\n    <span class=\"head__meta head__meta--author\">by <b class=\"head__authors-name\" doc-editable=\"text-author\">Author name<b></b></b></span>\n  </div>\n</header>"
    },
    {
      "id": "subhead",
      "title": "Subhead",
      "html": "<h2 doc-editable=\"title\" class=\"subhead alpha\">Subhead</h2>"
    },
    {
      "id": "rule",
      "title": "Rule",
      "html": "<hr class=\"rule\">"
    },
    {
      "id": "paragraph",
      "title": "Paragraph",
      "html": "<p doc-editable=\"text\" class=\"paragraph\">Tell a funky story …</p>"
    },
    {
      "id": "quote",
      "title": "Quote",
      "html": "<blockquote class=\"quote\">\n  <p doc-editable=\"text\" class=\"quote__text\">Quoted text</p>\n  <footer doc-editable=\"source\" class=\"quote__source\">Source (optional)</footer>\n</blockquote>",
      "styles": [
        {
          "id": "Quite",
          "name": "Quite",
          "type": "option",
          "value": "quote--quite"
        },
        {
          "id": "Loud",
          "name": "Loud",
          "type": "option",
          "value": "quote--loud"
        }
      ]
    },
    {
      "id": "image",
      "title": "image",
      "html": "<figure class=\"image\">\n  <img doc-image=\"image\" class=\"image__item\">\n  <figcaption doc-editable=\"caption\" class=\"image__caption\">Caption (optional)</figcaption>\n</figure>",
      "styles": [
        {
          "id": "Normal",
          "name": "Normal",
          "type": "option",
          "value": "image--normal"
        },
        {
          "id": "Full width",
          "name": "Full width",
          "type": "option",
          "value": "image--full"
        },
        {
          "id": "Left aligned",
          "name": "Left aligned",
          "type": "option",
          "value": "image--left-aligned"
        }
      ]
    },
    {
      "id": "twoImages",
      "title": "Two images in a row",
      "html": "<div class=\"image-row image-row--two-images\">\n  <figure class=\"image-row__item\">\n    <img doc-image=\"image-one\" class=\"image-row__image\">\n    <figcaption doc-editable=\"caption-one\" class=\"image-row__caption\">Caption</figcaption>\n  </figure>\n  <figure class=\"image-row__item\">\n    <img doc-image=\"image-two\" class=\"image-row__image\">\n    <figcaption doc-editable=\"caption-two\" class=\"image-row__caption\">Caption</figcaption>\n  </figure>\n</div>"
    }
  ]
};})();}).call(this);