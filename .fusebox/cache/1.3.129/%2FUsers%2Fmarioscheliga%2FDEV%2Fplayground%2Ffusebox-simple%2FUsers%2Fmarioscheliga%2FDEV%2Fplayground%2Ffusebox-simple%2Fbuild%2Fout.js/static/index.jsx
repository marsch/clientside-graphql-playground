module.exports = { contents: "\"use strict\";\n\nvar _templateObject = _taggedTemplateLiteral([\"\\n  query {\\n    getUser {\\n      id\\n      email\\n    }\\n  }\\n\"], [\"\\n  query {\\n    getUser {\\n      id\\n      email\\n    }\\n  }\\n\"]);\n\nfunction _taggedTemplateLiteral(strings, raw) { return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }\n\nObject.defineProperty(exports, \"__esModule\", { value: true });\nvar React = require('react');\nvar ReactDOM = require('react-dom');\nvar gql = require('graphql-tag');\nvar react_apollo_1 = require(\"react-apollo\");\nvar apollo_client_1 = require(\"apollo-client\");\nvar localInterface_1 = require(\"./localInterface\");\nvar schema_1 = require(\"./local-graphql/schema\");\nvar localNetworkInterface = localInterface_1.createLocalNetworkInterface({\n    schema: schema_1.graphqlSchema\n});\nconsole.log('localNetworkInterface', localNetworkInterface);\nvar client = new apollo_client_1.default({\n    networkInterface: localNetworkInterface\n});\nconsole.log('reactdom', ReactDOM);\nvar App = function App() {\n    return React.createElement(react_apollo_1.ApolloProvider, { client: client }, React.createElement(UserListConnected, null));\n};\nvar UserList = function UserList(_ref) {\n    var _ref$data = _ref.data,\n        loading = _ref$data.loading,\n        getUser = _ref$data.getUser;\n\n    if (loading) {\n        return React.createElement(\"div\", null, \"Loading...\");\n    } else {\n        console.log('getUser??', getUser);\n        return React.createElement(\"ul\", null, getUser.map(function (user) {\n            return React.createElement(\"li\", { key: user.id }, user.email);\n        }));\n    }\n};\nvar UserListConnected = react_apollo_1.graphql(gql(_templateObject))(UserList);\nReactDOM.render(React.createElement(App, null), document.getElementById('root'));",
dependencies: ["react","react-dom","graphql-tag","react-apollo","apollo-client","./localInterface","./local-graphql/schema"],
sourceMap: "{\"version\":3,\"sources\":[\"index.jsx\"],\"names\":[\"Object\",\"defineProperty\",\"exports\",\"value\",\"React\",\"require\",\"ReactDOM\",\"gql\",\"react_apollo_1\",\"apollo_client_1\",\"localInterface_1\",\"schema_1\",\"localNetworkInterface\",\"createLocalNetworkInterface\",\"schema\",\"graphqlSchema\",\"console\",\"log\",\"client\",\"default\",\"networkInterface\",\"App\",\"createElement\",\"ApolloProvider\",\"UserListConnected\",\"UserList\",\"data\",\"loading\",\"getUser\",\"map\",\"key\",\"user\",\"id\",\"email\",\"graphql\",\"render\",\"document\",\"getElementById\"],\"mappings\":\"AAAA;;;;;;AACAA,OAAOC,cAAP,CAAsBC,OAAtB,EAA+B,YAA/B,EAA6C,EAAEC,OAAO,IAAT,EAA7C;AACA,IAAMC,QAAQC,QAAQ,OAAR,CAAd;AACA,IAAMC,WAAWD,QAAQ,WAAR,CAAjB;AACA,IAAME,MAAMF,QAAQ,aAAR,CAAZ;AACA,IAAMG,iBAAiBH,QAAQ,cAAR,CAAvB;AACA,IAAMI,kBAAkBJ,QAAQ,eAAR,CAAxB;AACA,IAAMK,mBAAmBL,QAAQ,kBAAR,CAAzB;AACA,IAAMM,WAAWN,QAAQ,wBAAR,CAAjB;AACA,IAAMO,wBAAwBF,iBAAiBG,2BAAjB,CAA6C;AACvEC,YAAQH,SAASI;AADsD,CAA7C,CAA9B;AAGAC,QAAQC,GAAR,CAAY,uBAAZ,EAAqCL,qBAArC;AACA,IAAMM,SAAS,IAAIT,gBAAgBU,OAApB,CAA4B;AACvCC,sBAAkBR;AADqB,CAA5B,CAAf;AAGAI,QAAQC,GAAR,CAAY,UAAZ,EAAwBX,QAAxB;AACA,IAAMe,MAAM,SAANA,GAAM,GAAM;AACd,WAAQjB,MAAMkB,aAAN,CAAoBd,eAAee,cAAnC,EAAmD,EAAEL,QAAQA,MAAV,EAAnD,EACJd,MAAMkB,aAAN,CAAoBE,iBAApB,EAAuC,IAAvC,CADI,CAAR;AAEH,CAHD;AAIA,IAAMC,WAAW,SAAXA,QAAW,OAAoC;AAAA,yBAAjCC,IAAiC;AAAA,QAAzBC,OAAyB,aAAzBA,OAAyB;AAAA,QAAhBC,OAAgB,aAAhBA,OAAgB;;AACjD,QAAID,OAAJ,EAAa;AACT,eAAOvB,MAAMkB,aAAN,CAAoB,KAApB,EAA2B,IAA3B,EAAiC,YAAjC,CAAP;AACH,KAFD,MAGK;AACDN,gBAAQC,GAAR,CAAY,WAAZ,EAAyBW,OAAzB;AACA,eAAQxB,MAAMkB,aAAN,CAAoB,IAApB,EAA0B,IAA1B,EAAgCM,QAAQC,GAAR,CAAY;AAAA,mBAAQzB,MAAMkB,aAAN,CAAoB,IAApB,EAA0B,EAAEQ,KAAKC,KAAKC,EAAZ,EAA1B,EAA4CD,KAAKE,KAAjD,CAAR;AAAA,SAAZ,CAAhC,CAAR;AACH;AACJ,CARD;AASA,IAAMT,oBAAoBhB,eAAe0B,OAAf,CAAuB3B,GAAvB,mBAOvBkB,QAPuB,CAA1B;AAQAnB,SAAS6B,MAAT,CAAgB/B,MAAMkB,aAAN,CAAoBD,GAApB,EAAyB,IAAzB,CAAhB,EAAgDe,SAASC,cAAT,CAAwB,MAAxB,CAAhD\",\"file\":\"index.jsx\",\"sourcesContent\":[\"\\\"use strict\\\";\\nObject.defineProperty(exports, \\\"__esModule\\\", { value: true });\\nconst React = require('react');\\nconst ReactDOM = require('react-dom');\\nconst gql = require('graphql-tag');\\nconst react_apollo_1 = require(\\\"react-apollo\\\");\\nconst apollo_client_1 = require(\\\"apollo-client\\\");\\nconst localInterface_1 = require(\\\"./localInterface\\\");\\nconst schema_1 = require(\\\"./local-graphql/schema\\\");\\nconst localNetworkInterface = localInterface_1.createLocalNetworkInterface({\\n    schema: schema_1.graphqlSchema\\n});\\nconsole.log('localNetworkInterface', localNetworkInterface);\\nconst client = new apollo_client_1.default({\\n    networkInterface: localNetworkInterface\\n});\\nconsole.log('reactdom', ReactDOM);\\nconst App = () => {\\n    return (React.createElement(react_apollo_1.ApolloProvider, { client: client },\\n        React.createElement(UserListConnected, null)));\\n};\\nconst UserList = ({ data: { loading, getUser } }) => {\\n    if (loading) {\\n        return React.createElement(\\\"div\\\", null, \\\"Loading...\\\");\\n    }\\n    else {\\n        console.log('getUser??', getUser);\\n        return (React.createElement(\\\"ul\\\", null, getUser.map(user => React.createElement(\\\"li\\\", { key: user.id }, user.email))));\\n    }\\n};\\nconst UserListConnected = react_apollo_1.graphql(gql `\\n  query {\\n    getUser {\\n      id\\n      email\\n    }\\n  }\\n`)(UserList);\\nReactDOM.render(React.createElement(App, null), document.getElementById('root'));\\n\"]}",
headerContent: undefined,
mtime: 1491332947000
};