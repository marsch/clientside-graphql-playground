module.exports = { contents: "\"use strict\";\n\nObject.defineProperty(exports, \"__esModule\", { value: true });\nvar graphql_1 = require(\"graphql\");\nvar UserType = new graphql_1.GraphQLObjectType({\n    name: 'User',\n    fields: function fields() {\n        return {\n            email: { type: graphql_1.GraphQLString },\n            id: { type: graphql_1.GraphQLString }\n        };\n    }\n});\nvar QueryType = new graphql_1.GraphQLObjectType({\n    name: 'Query',\n    description: 'The root of all... queries',\n    fields: function fields() {\n        return {\n            getUser: {\n                type: new graphql_1.GraphQLList(UserType),\n                resolve: function resolve(root) {\n                    return new Promise(function (resolve, reject) {\n                        resolve([]);\n                    });\n                }\n            }\n        };\n    }\n});\nexports.graphqlSchema = new graphql_1.GraphQLSchema({\n    query: QueryType\n});",
dependencies: ["graphql"],
sourceMap: "{\"version\":3,\"sources\":[\"local-graphql/schema.js\"],\"names\":[\"Object\",\"defineProperty\",\"exports\",\"value\",\"graphql_1\",\"require\",\"UserType\",\"GraphQLObjectType\",\"name\",\"fields\",\"email\",\"type\",\"GraphQLString\",\"id\",\"QueryType\",\"description\",\"getUser\",\"GraphQLList\",\"resolve\",\"root\",\"Promise\",\"reject\",\"graphqlSchema\",\"GraphQLSchema\",\"query\"],\"mappings\":\"AAAA;;AACAA,OAAOC,cAAP,CAAsBC,OAAtB,EAA+B,YAA/B,EAA6C,EAAEC,OAAO,IAAT,EAA7C;AACA,IAAMC,YAAYC,QAAQ,SAAR,CAAlB;AACA,IAAMC,WAAW,IAAIF,UAAUG,iBAAd,CAAgC;AAC7CC,UAAM,MADuC;AAE7CC,YAAQ;AAAA,eAAO;AACXC,mBAAO,EAAEC,MAAMP,UAAUQ,aAAlB,EADI;AAEXC,gBAAI,EAAEF,MAAMP,UAAUQ,aAAlB;AAFO,SAAP;AAAA;AAFqC,CAAhC,CAAjB;AAOA,IAAME,YAAY,IAAIV,UAAUG,iBAAd,CAAgC;AAC9CC,UAAM,OADwC;AAE9CO,iBAAa,4BAFiC;AAG9CN,YAAQ;AAAA,eAAO;AACXO,qBAAS;AACLL,sBAAM,IAAIP,UAAUa,WAAd,CAA0BX,QAA1B,CADD;AAELY,yBAAS,iBAACC,IAAD,EAAU;AACf,2BAAO,IAAIC,OAAJ,CAAY,UAACF,OAAD,EAAUG,MAAV,EAAqB;AACpCH,gCAAQ,EAAR;AACH,qBAFM,CAAP;AAGH;AANI;AADE,SAAP;AAAA;AAHsC,CAAhC,CAAlB;AAcAhB,QAAQoB,aAAR,GAAwB,IAAIlB,UAAUmB,aAAd,CAA4B;AAChDC,WAAOV;AADyC,CAA5B,CAAxB\",\"file\":\"local-graphql/schema.js\",\"sourcesContent\":[\"\\\"use strict\\\";\\nObject.defineProperty(exports, \\\"__esModule\\\", { value: true });\\nconst graphql_1 = require(\\\"graphql\\\");\\nconst UserType = new graphql_1.GraphQLObjectType({\\n    name: 'User',\\n    fields: () => ({\\n        email: { type: graphql_1.GraphQLString },\\n        id: { type: graphql_1.GraphQLString }\\n    })\\n});\\nconst QueryType = new graphql_1.GraphQLObjectType({\\n    name: 'Query',\\n    description: 'The root of all... queries',\\n    fields: () => ({\\n        getUser: {\\n            type: new graphql_1.GraphQLList(UserType),\\n            resolve: (root) => {\\n                return new Promise((resolve, reject) => {\\n                    resolve([]);\\n                });\\n            }\\n        }\\n    }),\\n});\\nexports.graphqlSchema = new graphql_1.GraphQLSchema({\\n    query: QueryType,\\n});\\n\"]}",
headerContent: undefined,
mtime: 1491333320000
};