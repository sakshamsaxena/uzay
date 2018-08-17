define({ "api": [
  {
    "type": "get",
    "url": "/blog/id/:id",
    "title": "Get a Blog Post",
    "name": "GetBlogPostByID",
    "group": "Blog",
    "permission": [
      {
        "name": "Public"
      }
    ],
    "parameter": {
      "fields": {
        "URL Parameters": [
          {
            "group": "URL Parameters",
            "type": "Number",
            "optional": false,
            "field": "id",
            "description": "<p>Blog Post ID</p>"
          }
        ],
        "Query String": [
          {
            "group": "Query String",
            "type": "String",
            "allowedValues": [
              "true",
              "false"
            ],
            "optional": true,
            "field": "includeComments",
            "defaultValue": "false",
            "description": "<p>Option to specifiy whether to include comments in the payload or not.</p>"
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP /1.1 200 OK\n{\n  \"sample\": true\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "examples": [
        {
          "title": "Error-Response:",
          "content": "HTTP /1.1 404 NOT FOUND\n{\n  \"sample\": false\n}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "routes/Blog.js",
    "groupTitle": "Blog"
  },
  {
    "type": "get",
    "url": "/blog/tag/:tag",
    "title": "Get Posts By Tag Name",
    "name": "GetBlogPostsByTagName",
    "group": "Blog",
    "permission": [
      {
        "name": "Public"
      }
    ],
    "parameter": {
      "fields": {
        "URL Parameters": [
          {
            "group": "URL Parameters",
            "type": "String",
            "optional": false,
            "field": "tag",
            "description": "<p>Tag Name</p>"
          }
        ],
        "Query String": [
          {
            "group": "Query String",
            "type": "String",
            "allowedValues": [
              "true",
              "false"
            ],
            "optional": true,
            "field": "includeComments",
            "defaultValue": "false",
            "description": "<p>Option to specifiy whether to include comments in the payload or not.</p>"
          },
          {
            "group": "Query String",
            "type": "Number",
            "allowedValues": [
              "YYYYMMDD"
            ],
            "optional": true,
            "field": "startDate",
            "description": "<p>Option to specifiy the date from when the blog posts should be searched.</p>"
          },
          {
            "group": "Query String",
            "type": "Number",
            "allowedValues": [
              "YYYYMMDD"
            ],
            "optional": true,
            "field": "endDate",
            "description": "<p>Option to specifiy the date till when the blog posts should be searched.</p>"
          },
          {
            "group": "Query String",
            "type": "Number",
            "allowedValues": [
              "1-100"
            ],
            "optional": true,
            "field": "limit",
            "defaultValue": "20",
            "description": "<p>Option to specifiy how many results should be returned in one request.</p>"
          },
          {
            "group": "Query String",
            "type": "Number",
            "allowedValues": [
              "1-100"
            ],
            "optional": true,
            "field": "offset",
            "defaultValue": "0",
            "description": "<p>Option to specifiy which page of results to return.</p>"
          },
          {
            "group": "Query String",
            "type": "String",
            "allowedValues": [
              "date",
              "likes",
              "dislikes",
              "views",
              "commentcount"
            ],
            "optional": true,
            "field": "orderby",
            "defaultValue": "date",
            "description": "<p>Option to specifiy the order basis of the returned posts.</p>"
          },
          {
            "group": "Query String",
            "type": "String",
            "allowedValues": [
              "d",
              "a"
            ],
            "optional": true,
            "field": "direction",
            "defaultValue": "d",
            "description": "<p>Option to specifiy whether to display results in increasing or decreasing order of order basis.</p>"
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP /1.1 200 OK\n{\n  \"sample\": true\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "examples": [
        {
          "title": "Error-Response:",
          "content": "HTTP /1.1 404 NOT FOUND\n{\n  \"sample\": false\n}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "routes/Blog.js",
    "groupTitle": "Blog"
  },
  {
    "type": "get",
    "url": "/blog/id/:id/comment/:cid",
    "title": "Get a Comment",
    "name": "GetCommentByID",
    "group": "Blog",
    "permission": [
      {
        "name": "Public"
      }
    ],
    "parameter": {
      "fields": {
        "URL Parameter": [
          {
            "group": "URL Parameter",
            "type": "Number",
            "optional": false,
            "field": "id",
            "description": "<p>Blog Post ID</p>"
          },
          {
            "group": "URL Parameter",
            "type": "Number",
            "optional": false,
            "field": "cid",
            "description": "<p>Comment ID</p>"
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP /1.1 200 OK\n{\n  \"sample\": true\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "examples": [
        {
          "title": "Error-Response:",
          "content": "HTTP /1.1 404 NOT FOUND\n{\n  \"sample\": false\n}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "routes/Blog.js",
    "groupTitle": "Blog"
  },
  {
    "type": "patch",
    "url": "/blog/id/:id/dislike",
    "title": "Dislike a Blog Post",
    "name": "PatchDislikeOnBlogPost",
    "group": "Blog",
    "permission": [
      {
        "name": "Needs Authentication"
      }
    ],
    "header": {
      "fields": {
        "Headers": [
          {
            "group": "Headers",
            "type": "String",
            "optional": false,
            "field": "Autorization:Bearer",
            "description": "<p>Example : <code>Autorization: Bearer TOKEN</code>, where TOKEN is your Bearer Token</p>"
          }
        ]
      }
    },
    "parameter": {
      "fields": {
        "URL Parameter": [
          {
            "group": "URL Parameter",
            "type": "Number",
            "optional": false,
            "field": "id",
            "description": "<p>Blog Post ID</p>"
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP /1.1 200 OK\n{\n  \"sample\": true\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "examples": [
        {
          "title": "Error-Response:",
          "content": "HTTP /1.1 404 NOT FOUND\n{\n  \"sample\": false\n}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "routes/Blog.js",
    "groupTitle": "Blog"
  },
  {
    "type": "patch",
    "url": "/blog/id/:id/comment/:cid/dislike",
    "title": "Dislike a Comment",
    "name": "PatchDislikeOnBlogPostComment",
    "group": "Blog",
    "permission": [
      {
        "name": "Needs Authentication"
      }
    ],
    "header": {
      "fields": {
        "Headers": [
          {
            "group": "Headers",
            "type": "String",
            "optional": false,
            "field": "Autorization:Bearer",
            "description": "<p>Example : <code>Autorization: Bearer TOKEN</code>, where TOKEN is your Bearer Token</p>"
          }
        ]
      }
    },
    "parameter": {
      "fields": {
        "URL Parameter": [
          {
            "group": "URL Parameter",
            "type": "Number",
            "optional": false,
            "field": "id",
            "description": "<p>Blog Post ID</p>"
          },
          {
            "group": "URL Parameter",
            "type": "Number",
            "optional": false,
            "field": "cid",
            "description": "<p>Comment ID</p>"
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP /1.1 200 OK\n{\n  \"sample\": true\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "examples": [
        {
          "title": "Error-Response:",
          "content": "HTTP /1.1 404 NOT FOUND\n{\n  \"sample\": false\n}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "routes/Blog.js",
    "groupTitle": "Blog"
  },
  {
    "type": "patch",
    "url": "/blog/id/:id/like",
    "title": "Like a Blog Post",
    "name": "PatchLikeOnBlogPost",
    "group": "Blog",
    "permission": [
      {
        "name": "Needs Authentication"
      }
    ],
    "header": {
      "fields": {
        "Headers": [
          {
            "group": "Headers",
            "type": "String",
            "optional": false,
            "field": "Autorization:Bearer",
            "description": "<p>Example : <code>Autorization: Bearer TOKEN</code>, where TOKEN is your Bearer Token</p>"
          }
        ]
      }
    },
    "parameter": {
      "fields": {
        "URL Parameter": [
          {
            "group": "URL Parameter",
            "type": "Number",
            "optional": false,
            "field": "id",
            "description": "<p>Blog Post ID</p>"
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP /1.1 200 OK\n{\n  \"sample\": true\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "examples": [
        {
          "title": "Error-Response:",
          "content": "HTTP /1.1 404 NOT FOUND\n{\n  \"sample\": false\n}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "routes/Blog.js",
    "groupTitle": "Blog"
  },
  {
    "type": "patch",
    "url": "/blog/id/:id/comment/:cid/like",
    "title": "Like a Comment",
    "name": "PatchLikeOnBlogPostComment",
    "group": "Blog",
    "permission": [
      {
        "name": "Needs Authentication"
      }
    ],
    "header": {
      "fields": {
        "Headers": [
          {
            "group": "Headers",
            "type": "String",
            "optional": false,
            "field": "Autorization:Bearer",
            "description": "<p>Example : <code>Autorization: Bearer TOKEN</code>, where TOKEN is your Bearer Token</p>"
          }
        ]
      }
    },
    "parameter": {
      "fields": {
        "URL Parameter": [
          {
            "group": "URL Parameter",
            "type": "Number",
            "optional": false,
            "field": "id",
            "description": "<p>Blog Post ID</p>"
          },
          {
            "group": "URL Parameter",
            "type": "Number",
            "optional": false,
            "field": "cid",
            "description": "<p>Comment ID</p>"
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP /1.1 200 OK\n{\n  \"sample\": true\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "examples": [
        {
          "title": "Error-Response:",
          "content": "HTTP /1.1 404 NOT FOUND\n{\n  \"sample\": false\n}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "routes/Blog.js",
    "groupTitle": "Blog"
  },
  {
    "type": "post",
    "url": "/blog/id/:id/comment",
    "title": "Post a New Comment",
    "name": "PostCommentToBlogPost",
    "group": "Blog",
    "permission": [
      {
        "name": "Needs Authentication"
      }
    ],
    "header": {
      "fields": {
        "Headers": [
          {
            "group": "Headers",
            "type": "String",
            "optional": false,
            "field": "Autorization:Bearer",
            "description": "<p>Example : <code>Autorization: Bearer TOKEN</code>, where TOKEN is your Bearer Token</p>"
          }
        ]
      }
    },
    "parameter": {
      "fields": {
        "URL Parameter": [
          {
            "group": "URL Parameter",
            "type": "Number",
            "optional": false,
            "field": "id",
            "description": "<p>Blog Post ID</p>"
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP /1.1 200 OK\n{\n  \"sample\": true\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "examples": [
        {
          "title": "Error-Response:",
          "content": "HTTP /1.1 404 NOT FOUND\n{\n  \"sample\": false\n}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "routes/Blog.js",
    "groupTitle": "Blog"
  }
] });
