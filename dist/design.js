(function() { this.design || (this.design = {}); design.livingdocsBlog = (function() { return {
  "config": {
    "version": 1,
    "namespace": "livingdocsBlog",
    "css": [
      "/stylesheets/steez.css"
    ],
    "groups": {
      "Headers": {
        "id": "Headers",
        "title": "Headers",
        "templates": [
          "head",
          "subhead"
        ]
      },
      "Image Tiles": {
        "id": "Image Tiles",
        "title": "Image Tiles",
        "templates": [
          "tiles"
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
          "lastListing",
          "listing",
          "paragraph",
          "quoteFull",
          "quoteNormal"
        ]
      },
      "images": {
        "id": "images",
        "title": "images",
        "templates": [
          "normalImage",
          "showcase",
          "threeImages",
          "twoImages"
        ]
      }
    },
    "styles": []
  },
  "templates": [
    {
      "id": "head",
      "title": "Title and lead",
      "html": "<header class=\"head\">\n  <h1 doc-editable=\"title\" class=\"head__title\">Title</h1>\n  <span class=\"head__author\">Written by <address doc-editable=\"text-author\" rel=\"author\">Author name</address></span>\n  <p doc-editable=\"text\" class=\"head__lead\">Subtitle</p>\n</header>"
    },
    {
      "id": "subhead",
      "title": "Subhead",
      "html": "<h2 doc-editable=\"title\" class=\"subhead\">Subhead</h2>"
    },
    {
      "id": "tiles",
      "title": "Tiles",
      "html": "<div class=\"tiles\"><div doc-image=\"image-one\" class=\"tiles__item tiles__item--large\"></div><div doc-image=\"image-two\" class=\"tiles__item tiles__item--small\"></div><div doc-image=\"image-three\" class=\"tiles__item tiles__item--small\"></div><div doc-image=\"image-four\" class=\"tiles__item tiles__item--small\"></div></div>"
    },
    {
      "id": "rule",
      "title": "Rule",
      "html": "<hr class=\"rule\">"
    },
    {
      "id": "lastListing",
      "title": "Last listing",
      "html": "<div class=\"list list--last\"><p doc-editable=\"text\" class=\"list__item\">List</p></div>"
    },
    {
      "id": "listing",
      "title": "Listing",
      "html": "<div class=\"list\"><p doc-editable=\"text\" class=\"list__item\">List</p></div>",
      "styles": [
        {
          "id": "Default",
          "name": "Default",
          "type": "option",
          "value": "list--default"
        },
        {
          "id": "Last",
          "name": "Last",
          "type": "option",
          "value": "list--last"
        }
      ]
    },
    {
      "id": "paragraph",
      "title": "Paragraph",
      "html": "<p doc-editable=\"text\" class=\"paragraph\">Hit it and tell a funky story …</p>"
    },
    {
      "id": "quoteFull",
      "title": "Fullscreen Quote",
      "html": "<blockquote class=\"quote-full\"><div doc-image=\"image\" class=\"quote-full__image\"> <div class=\"quote_full__background\"></div><div class=\"quote-full__content\"><p doc-editable=\"text\" class=\"quote-full__text\"></p><footer doc-editable=\"source\" class=\"quote-full__source\"></footer></div></div></blockquote>"
    },
    {
      "id": "quoteNormal",
      "title": "Normal Quote",
      "html": "<blockquote class=\"quote\"><p doc-editable=\"text\" class=\"quote__text\"></p><footer doc-editable=\"source\" class=\"quote__source\"></footer></blockquote>",
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
      "id": "normalImage",
      "title": "Normal image",
      "html": "<figure class=\"image\"><img doc-image=\"image\" class=\"image__item\"><figcaption doc-editable=\"caption\" class=\"image__caption\">Caption</figcaption></figure>"
    },
    {
      "id": "showcase",
      "title": "Showcase",
      "html": "<div class=\"showcase\"><div doc-image=\"image\" class=\"showcase__image\"></div><div class=\"showcase__content\"><h3 doc-editable=\"title\" class=\"showcase__title zeta\"></h3><p doc-editable=\"text\" class=\"showcase__text\"></p></div></div>",
      "styles": [
        {
          "id": "Left",
          "name": "Left",
          "type": "option",
          "value": "showcase--left"
        },
        {
          "id": "Right",
          "name": "Right",
          "type": "option",
          "value": "showcase--right"
        }
      ]
    },
    {
      "id": "threeImages",
      "title": "Three images in a row",
      "html": "<div class=\"image-row image-row--three-images\"><figure class=\"image-row__item\"><img doc-image=\"image-one\" class=\"image-row__image\"><figcaption doc-editable=\"caption-one\" class=\"image-row__caption\">Caption</figcaption></figure><figure class=\"image-row__item\"><img doc-image=\"image-two\" class=\"image-row__image\"><figcaption doc-editable=\"caption-two\" class=\"image-row__caption\">Caption</figcaption></figure><figure class=\"image-row__item\"><img doc-image=\"image-three\" class=\"image-row__image\"><figcaption doc-editable=\"caption-three\" class=\"image-row__caption\">Caption</figcaption></figure></div>"
    },
    {
      "id": "twoImages",
      "title": "Two images in a row",
      "html": "<div class=\"image-row image-row--two-images\"><figure class=\"image-row__item\"><img doc-image=\"image-one\" class=\"image-row__image\"><figcaption doc-editable=\"caption-one\" class=\"image-row__caption\">Caption</figcaption></figure><figure class=\"image-row__item\"><img doc-image=\"image-two\" class=\"image-row__image\"><figcaption doc-editable=\"caption-two\" class=\"image-row__caption\">Caption</figcaption></figure></div>"
    }
  ]
};})();}).call(this);