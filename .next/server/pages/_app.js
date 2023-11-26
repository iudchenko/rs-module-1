/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(() => {
var exports = {};
exports.id = "pages/_app";
exports.ids = ["pages/_app"];
exports.modules = {

/***/ "./src/components/ErrorBoundary.tsx":
/*!******************************************!*\
  !*** ./src/components/ErrorBoundary.tsx ***!
  \******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* __next_internal_client_entry_do_not_use__ default auto */ \n\nclass ErrorBoundary extends react__WEBPACK_IMPORTED_MODULE_1__.Component {\n    constructor(props){\n        super(props);\n        // Define a state variable to track whether there is an error or not\n        this.state = {\n            hasError: false\n        };\n    }\n    static getDerivedStateFromError(error) {\n        // Update state so the next render will show the fallback UI\n        return {\n            hasError: true\n        };\n    }\n    componentDidCatch(error, errorInfo) {\n        console.error({\n            error,\n            errorInfo\n        });\n    }\n    render() {\n        // Check if the error is thrown\n        if (this.state.hasError) {\n            // You can render any custom fallback UI\n            return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h2\", {\n                        children: \"Oops, there is an error!\"\n                    }, void 0, false, {\n                        fileName: \"/Users/andriiiudchenko/WORK/EDUCATION/WEB DEV/rs-school-react/sw-next-app/src/components/ErrorBoundary.tsx\",\n                        lineNumber: 35,\n                        columnNumber: 11\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                        type: \"button\",\n                        onClick: ()=>this.setState({\n                                hasError: false\n                            }),\n                        children: \"Try again?\"\n                    }, void 0, false, {\n                        fileName: \"/Users/andriiiudchenko/WORK/EDUCATION/WEB DEV/rs-school-react/sw-next-app/src/components/ErrorBoundary.tsx\",\n                        lineNumber: 36,\n                        columnNumber: 11\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/andriiiudchenko/WORK/EDUCATION/WEB DEV/rs-school-react/sw-next-app/src/components/ErrorBoundary.tsx\",\n                lineNumber: 34,\n                columnNumber: 9\n            }, this);\n        }\n        // Return children components in case of no error\n        return this.props.children;\n    }\n}\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (ErrorBoundary);\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvY29tcG9uZW50cy9FcnJvckJvdW5kYXJ5LnRzeCIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7QUFDK0Q7QUFVL0QsTUFBTUUsc0JBQXNCRCw0Q0FBU0E7SUFDbkNFLFlBQVlDLEtBQXlCLENBQUU7UUFDckMsS0FBSyxDQUFDQTtRQUVOLG9FQUFvRTtRQUNwRSxJQUFJLENBQUNDLEtBQUssR0FBRztZQUFFQyxVQUFVO1FBQU07SUFDakM7SUFFQSxPQUFPQyx5QkFBeUJDLEtBQVUsRUFBc0I7UUFDOUQsNERBQTREO1FBQzVELE9BQU87WUFBRUYsVUFBVTtRQUFLO0lBQzFCO0lBRUFHLGtCQUFrQkQsS0FBVSxFQUFFRSxTQUFjLEVBQVE7UUFDbERDLFFBQVFILEtBQUssQ0FBQztZQUFFQTtZQUFPRTtRQUFVO0lBQ25DO0lBRUFFLFNBQW9CO1FBQ2xCLCtCQUErQjtRQUMvQixJQUFJLElBQUksQ0FBQ1AsS0FBSyxDQUFDQyxRQUFRLEVBQUU7WUFDdkIsd0NBQXdDO1lBQ3hDLHFCQUNFLDhEQUFDTzs7a0NBQ0MsOERBQUNDO2tDQUFHOzs7Ozs7a0NBQ0osOERBQUNDO3dCQUNDQyxNQUFLO3dCQUNMQyxTQUFTLElBQU0sSUFBSSxDQUFDQyxRQUFRLENBQUM7Z0NBQUVaLFVBQVU7NEJBQU07a0NBQ2hEOzs7Ozs7Ozs7Ozs7UUFLUDtRQUVBLGlEQUFpRDtRQUNqRCxPQUFPLElBQUksQ0FBQ0YsS0FBSyxDQUFDZSxRQUFRO0lBQzVCO0FBQ0Y7QUFFQSxpRUFBZWpCLGFBQWFBLEVBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9zdy1uZXh0LWFwcC8uL3NyYy9jb21wb25lbnRzL0Vycm9yQm91bmRhcnkudHN4P2Y2MGEiXSwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2UgY2xpZW50XCI7XG5pbXBvcnQgUmVhY3QsIHsgQ29tcG9uZW50LCBSZWFjdE5vZGUsIEVycm9ySW5mbyB9IGZyb20gXCJyZWFjdFwiO1xuXG5pbnRlcmZhY2UgRXJyb3JCb3VuZGFyeVByb3BzIHtcbiAgY2hpbGRyZW46IFJlYWN0Tm9kZTtcbn1cblxuaW50ZXJmYWNlIEVycm9yQm91bmRhcnlTdGF0ZSB7XG4gIGhhc0Vycm9yOiBib29sZWFuO1xufVxuXG5jbGFzcyBFcnJvckJvdW5kYXJ5IGV4dGVuZHMgQ29tcG9uZW50PEVycm9yQm91bmRhcnlQcm9wcywgRXJyb3JCb3VuZGFyeVN0YXRlPiB7XG4gIGNvbnN0cnVjdG9yKHByb3BzOiBFcnJvckJvdW5kYXJ5UHJvcHMpIHtcbiAgICBzdXBlcihwcm9wcyk7XG5cbiAgICAvLyBEZWZpbmUgYSBzdGF0ZSB2YXJpYWJsZSB0byB0cmFjayB3aGV0aGVyIHRoZXJlIGlzIGFuIGVycm9yIG9yIG5vdFxuICAgIHRoaXMuc3RhdGUgPSB7IGhhc0Vycm9yOiBmYWxzZSB9O1xuICB9XG5cbiAgc3RhdGljIGdldERlcml2ZWRTdGF0ZUZyb21FcnJvcihlcnJvcjogYW55KTogRXJyb3JCb3VuZGFyeVN0YXRlIHtcbiAgICAvLyBVcGRhdGUgc3RhdGUgc28gdGhlIG5leHQgcmVuZGVyIHdpbGwgc2hvdyB0aGUgZmFsbGJhY2sgVUlcbiAgICByZXR1cm4geyBoYXNFcnJvcjogdHJ1ZSB9O1xuICB9XG5cbiAgY29tcG9uZW50RGlkQ2F0Y2goZXJyb3I6IGFueSwgZXJyb3JJbmZvOiBhbnkpOiB2b2lkIHtcbiAgICBjb25zb2xlLmVycm9yKHsgZXJyb3IsIGVycm9ySW5mbyB9KTtcbiAgfVxuXG4gIHJlbmRlcigpOiBSZWFjdE5vZGUge1xuICAgIC8vIENoZWNrIGlmIHRoZSBlcnJvciBpcyB0aHJvd25cbiAgICBpZiAodGhpcy5zdGF0ZS5oYXNFcnJvcikge1xuICAgICAgLy8gWW91IGNhbiByZW5kZXIgYW55IGN1c3RvbSBmYWxsYmFjayBVSVxuICAgICAgcmV0dXJuIChcbiAgICAgICAgPGRpdj5cbiAgICAgICAgICA8aDI+T29wcywgdGhlcmUgaXMgYW4gZXJyb3IhPC9oMj5cbiAgICAgICAgICA8YnV0dG9uXG4gICAgICAgICAgICB0eXBlPVwiYnV0dG9uXCJcbiAgICAgICAgICAgIG9uQ2xpY2s9eygpID0+IHRoaXMuc2V0U3RhdGUoeyBoYXNFcnJvcjogZmFsc2UgfSl9XG4gICAgICAgICAgPlxuICAgICAgICAgICAgVHJ5IGFnYWluP1xuICAgICAgICAgIDwvYnV0dG9uPlxuICAgICAgICA8L2Rpdj5cbiAgICAgICk7XG4gICAgfVxuXG4gICAgLy8gUmV0dXJuIGNoaWxkcmVuIGNvbXBvbmVudHMgaW4gY2FzZSBvZiBubyBlcnJvclxuICAgIHJldHVybiB0aGlzLnByb3BzLmNoaWxkcmVuO1xuICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IEVycm9yQm91bmRhcnk7XG4iXSwibmFtZXMiOlsiUmVhY3QiLCJDb21wb25lbnQiLCJFcnJvckJvdW5kYXJ5IiwiY29uc3RydWN0b3IiLCJwcm9wcyIsInN0YXRlIiwiaGFzRXJyb3IiLCJnZXREZXJpdmVkU3RhdGVGcm9tRXJyb3IiLCJlcnJvciIsImNvbXBvbmVudERpZENhdGNoIiwiZXJyb3JJbmZvIiwiY29uc29sZSIsInJlbmRlciIsImRpdiIsImgyIiwiYnV0dG9uIiwidHlwZSIsIm9uQ2xpY2siLCJzZXRTdGF0ZSIsImNoaWxkcmVuIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/components/ErrorBoundary.tsx\n");

/***/ }),

/***/ "./src/pages/_app.tsx":
/*!****************************!*\
  !*** ./src/pages/_app.tsx ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   App: () => (/* binding */ App),\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _styles_globals_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @/styles/globals.css */ \"./src/styles/globals.css\");\n/* harmony import */ var _styles_globals_css__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_styles_globals_css__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _components_ErrorBoundary__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @/components/ErrorBoundary */ \"./src/components/ErrorBoundary.tsx\");\n/* harmony import */ var _redux_store__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../redux/store */ \"./src/redux/store.ts\");\n\n\n\nconst { default: AbortController } = __webpack_require__(/*! abort-controller */ \"abort-controller\");\nconst { default: fetch, Headers, Request, Response } = __webpack_require__(/*! node-fetch */ \"node-fetch\");\nObject.assign(globalThis, {\n    fetch,\n    Headers,\n    Request,\n    Response,\n    AbortController\n});\n// const { wrapper } = require(\"../redux/store\");\n\nfunction App({ Component, pageProps }) {\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_ErrorBoundary__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(Component, {\n            ...pageProps\n        }, void 0, false, {\n            fileName: \"/Users/andriiiudchenko/WORK/EDUCATION/WEB DEV/rs-school-react/sw-next-app/src/pages/_app.tsx\",\n            lineNumber: 22,\n            columnNumber: 7\n        }, this)\n    }, void 0, false, {\n        fileName: \"/Users/andriiiudchenko/WORK/EDUCATION/WEB DEV/rs-school-react/sw-next-app/src/pages/_app.tsx\",\n        lineNumber: 21,\n        columnNumber: 5\n    }, this);\n}\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_redux_store__WEBPACK_IMPORTED_MODULE_3__.wrapper.withRedux(App));\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvcGFnZXMvX2FwcC50c3giLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7O0FBQThCO0FBRXlCO0FBRXZELE1BQU0sRUFBRUMsU0FBU0MsZUFBZSxFQUFFLEdBQUdDLG1CQUFPQSxDQUFDLDBDQUFrQjtBQUMvRCxNQUFNLEVBQUVGLFNBQVNHLEtBQUssRUFBRUMsT0FBTyxFQUFFQyxPQUFPLEVBQUVDLFFBQVEsRUFBRSxHQUFHSixtQkFBT0EsQ0FBQyw4QkFBWTtBQUUzRUssT0FBT0MsTUFBTSxDQUFDQyxZQUFZO0lBQ3hCTjtJQUNBQztJQUNBQztJQUNBQztJQUNBTDtBQUNGO0FBRUEsaURBQWlEO0FBQ1I7QUFFbEMsU0FBU1UsSUFBSSxFQUFFQyxTQUFTLEVBQUVDLFNBQVMsRUFBWTtJQUNwRCxxQkFDRSw4REFBQ2QsaUVBQWFBO2tCQUNaLDRFQUFDYTtZQUFXLEdBQUdDLFNBQVM7Ozs7Ozs7Ozs7O0FBRzlCO0FBRUEsaUVBQWVILGlEQUFPQSxDQUFDSSxTQUFTLENBQUNILElBQUlBLEVBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9zdy1uZXh0LWFwcC8uL3NyYy9wYWdlcy9fYXBwLnRzeD9mOWQ2Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBcIkAvc3R5bGVzL2dsb2JhbHMuY3NzXCI7XG5pbXBvcnQgdHlwZSB7IEFwcFByb3BzIH0gZnJvbSBcIm5leHQvYXBwXCI7XG5pbXBvcnQgRXJyb3JCb3VuZGFyeSBmcm9tIFwiQC9jb21wb25lbnRzL0Vycm9yQm91bmRhcnlcIjtcblxuY29uc3QgeyBkZWZhdWx0OiBBYm9ydENvbnRyb2xsZXIgfSA9IHJlcXVpcmUoXCJhYm9ydC1jb250cm9sbGVyXCIpO1xuY29uc3QgeyBkZWZhdWx0OiBmZXRjaCwgSGVhZGVycywgUmVxdWVzdCwgUmVzcG9uc2UgfSA9IHJlcXVpcmUoXCJub2RlLWZldGNoXCIpO1xuXG5PYmplY3QuYXNzaWduKGdsb2JhbFRoaXMsIHtcbiAgZmV0Y2gsXG4gIEhlYWRlcnMsXG4gIFJlcXVlc3QsXG4gIFJlc3BvbnNlLFxuICBBYm9ydENvbnRyb2xsZXIsXG59KTtcblxuLy8gY29uc3QgeyB3cmFwcGVyIH0gPSByZXF1aXJlKFwiLi4vcmVkdXgvc3RvcmVcIik7XG5pbXBvcnQgeyB3cmFwcGVyIH0gZnJvbSBcIi4uL3JlZHV4L3N0b3JlXCI7XG5cbmV4cG9ydCBmdW5jdGlvbiBBcHAoeyBDb21wb25lbnQsIHBhZ2VQcm9wcyB9OiBBcHBQcm9wcykge1xuICByZXR1cm4gKFxuICAgIDxFcnJvckJvdW5kYXJ5PlxuICAgICAgPENvbXBvbmVudCB7Li4ucGFnZVByb3BzfSAvPlxuICAgIDwvRXJyb3JCb3VuZGFyeT5cbiAgKTtcbn1cblxuZXhwb3J0IGRlZmF1bHQgd3JhcHBlci53aXRoUmVkdXgoQXBwKTtcbiJdLCJuYW1lcyI6WyJFcnJvckJvdW5kYXJ5IiwiZGVmYXVsdCIsIkFib3J0Q29udHJvbGxlciIsInJlcXVpcmUiLCJmZXRjaCIsIkhlYWRlcnMiLCJSZXF1ZXN0IiwiUmVzcG9uc2UiLCJPYmplY3QiLCJhc3NpZ24iLCJnbG9iYWxUaGlzIiwid3JhcHBlciIsIkFwcCIsIkNvbXBvbmVudCIsInBhZ2VQcm9wcyIsIndpdGhSZWR1eCJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/pages/_app.tsx\n");

/***/ }),

/***/ "./src/redux/api/apiSlice.ts":
/*!***********************************!*\
  !*** ./src/redux/api/apiSlice.ts ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   apiSlice: () => (/* binding */ apiSlice),\n/* harmony export */   useGetCharacterQuery: () => (/* binding */ useGetCharacterQuery),\n/* harmony export */   useGetCharactersQuery: () => (/* binding */ useGetCharactersQuery)\n/* harmony export */ });\n/* harmony import */ var _reduxjs_toolkit_query_react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @reduxjs/toolkit/query/react */ \"@reduxjs/toolkit/query/react\");\n/* harmony import */ var _reduxjs_toolkit_query_react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_reduxjs_toolkit_query_react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _utils_constants__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../utils/constants */ \"./src/utils/constants.tsx\");\n/* harmony import */ var _utils_helpers__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../utils/helpers */ \"./src/utils/helpers.ts\");\n\n\n\nconst apiSlice = (0,_reduxjs_toolkit_query_react__WEBPACK_IMPORTED_MODULE_0__.createApi)({\n    reducerPath: \"api\",\n    baseQuery: (0,_reduxjs_toolkit_query_react__WEBPACK_IMPORTED_MODULE_0__.fetchBaseQuery)({\n        baseUrl: _utils_constants__WEBPACK_IMPORTED_MODULE_1__.API_URL\n    }),\n    tagTypes: [\n        \"characters\",\n        \"details\"\n    ],\n    endpoints: (builder)=>({\n            getCharacters: builder.query({\n                query: ({ searchTerm = \"\", page = 1 })=>(0,_utils_helpers__WEBPACK_IMPORTED_MODULE_2__.formatURL)(searchTerm, page)\n            }),\n            getCharacter: builder.query({\n                query: (id)=>`/${id}`,\n                providesTags: [\n                    \"details\"\n                ]\n            })\n        })\n});\nconst { useGetCharactersQuery, useGetCharacterQuery } = apiSlice;\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvcmVkdXgvYXBpL2FwaVNsaWNlLnRzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7QUFBeUU7QUFDekI7QUFDQTtBQUV6QyxNQUFNSSxXQUFXSix1RUFBU0EsQ0FBQztJQUNoQ0ssYUFBYTtJQUNiQyxXQUFXTCw0RUFBY0EsQ0FBQztRQUFFTSxTQUFTTCxxREFBT0E7SUFBQztJQUM3Q00sVUFBVTtRQUFDO1FBQWM7S0FBVTtJQUNuQ0MsV0FBVyxDQUFDQyxVQUFhO1lBQ3ZCQyxlQUFlRCxRQUFRRSxLQUFLLENBQUM7Z0JBQzNCQSxPQUFPLENBQUMsRUFBRUMsYUFBYSxFQUFFLEVBQUVDLE9BQU8sQ0FBQyxFQUFFLEdBQUtYLHlEQUFTQSxDQUFDVSxZQUFZQztZQUNsRTtZQUNBQyxjQUFjTCxRQUFRRSxLQUFLLENBQUM7Z0JBQzFCQSxPQUFPLENBQUNJLEtBQU8sQ0FBQyxDQUFDLEVBQUVBLEdBQUcsQ0FBQztnQkFDdkJDLGNBQWM7b0JBQUM7aUJBQVU7WUFDM0I7UUFDRjtBQUNGLEdBQUc7QUFFSSxNQUFNLEVBQUVDLHFCQUFxQixFQUFFQyxvQkFBb0IsRUFBRSxHQUFHZixTQUFTIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vc3ctbmV4dC1hcHAvLi9zcmMvcmVkdXgvYXBpL2FwaVNsaWNlLnRzPzI5MjgiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgY3JlYXRlQXBpLCBmZXRjaEJhc2VRdWVyeSB9IGZyb20gXCJAcmVkdXhqcy90b29sa2l0L3F1ZXJ5L3JlYWN0XCI7XG5pbXBvcnQgeyBBUElfVVJMIH0gZnJvbSBcIi4uLy4uL3V0aWxzL2NvbnN0YW50c1wiO1xuaW1wb3J0IHsgZm9ybWF0VVJMIH0gZnJvbSBcIi4uLy4uL3V0aWxzL2hlbHBlcnNcIjtcblxuZXhwb3J0IGNvbnN0IGFwaVNsaWNlID0gY3JlYXRlQXBpKHtcbiAgcmVkdWNlclBhdGg6IFwiYXBpXCIsXG4gIGJhc2VRdWVyeTogZmV0Y2hCYXNlUXVlcnkoeyBiYXNlVXJsOiBBUElfVVJMIH0pLFxuICB0YWdUeXBlczogW1wiY2hhcmFjdGVyc1wiLCBcImRldGFpbHNcIl0sXG4gIGVuZHBvaW50czogKGJ1aWxkZXIpID0+ICh7XG4gICAgZ2V0Q2hhcmFjdGVyczogYnVpbGRlci5xdWVyeSh7XG4gICAgICBxdWVyeTogKHsgc2VhcmNoVGVybSA9IFwiXCIsIHBhZ2UgPSAxIH0pID0+IGZvcm1hdFVSTChzZWFyY2hUZXJtLCBwYWdlKSxcbiAgICB9KSxcbiAgICBnZXRDaGFyYWN0ZXI6IGJ1aWxkZXIucXVlcnkoe1xuICAgICAgcXVlcnk6IChpZCkgPT4gYC8ke2lkfWAsXG4gICAgICBwcm92aWRlc1RhZ3M6IFtcImRldGFpbHNcIl0sXG4gICAgfSksXG4gIH0pLFxufSk7XG5cbmV4cG9ydCBjb25zdCB7IHVzZUdldENoYXJhY3RlcnNRdWVyeSwgdXNlR2V0Q2hhcmFjdGVyUXVlcnkgfSA9IGFwaVNsaWNlO1xuIl0sIm5hbWVzIjpbImNyZWF0ZUFwaSIsImZldGNoQmFzZVF1ZXJ5IiwiQVBJX1VSTCIsImZvcm1hdFVSTCIsImFwaVNsaWNlIiwicmVkdWNlclBhdGgiLCJiYXNlUXVlcnkiLCJiYXNlVXJsIiwidGFnVHlwZXMiLCJlbmRwb2ludHMiLCJidWlsZGVyIiwiZ2V0Q2hhcmFjdGVycyIsInF1ZXJ5Iiwic2VhcmNoVGVybSIsInBhZ2UiLCJnZXRDaGFyYWN0ZXIiLCJpZCIsInByb3ZpZGVzVGFncyIsInVzZUdldENoYXJhY3RlcnNRdWVyeSIsInVzZUdldENoYXJhY3RlclF1ZXJ5Il0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/redux/api/apiSlice.ts\n");

/***/ }),

/***/ "./src/redux/loading/loading.ts":
/*!**************************************!*\
  !*** ./src/redux/loading/loading.ts ***!
  \**************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @reduxjs/toolkit */ \"@reduxjs/toolkit\");\n/* harmony import */ var _reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _api_apiSlice__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../api/apiSlice */ \"./src/redux/api/apiSlice.ts\");\n\n\nconst { endpoints } = _api_apiSlice__WEBPACK_IMPORTED_MODULE_1__.apiSlice;\nconst { getCharacters, getCharacter } = endpoints;\nconst loadingSlice = (0,_reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__.createSlice)({\n    name: \"loading\",\n    initialState: {\n        getCharactersLoading: false,\n        getCharacterLoading: false\n    },\n    reducers: {},\n    extraReducers: (builder)=>{\n        builder.addMatcher(getCharacters.matchPending, (state)=>{\n            state.getCharactersLoading = true;\n        }).addMatcher(getCharacters.matchFulfilled, (state)=>{\n            state.getCharactersLoading = false;\n        }).addMatcher(getCharacters.matchRejected, (state)=>{\n            state.getCharactersLoading = false;\n        }).addMatcher(getCharacter.matchPending, (state)=>{\n            state.getCharacterLoading = true;\n        }).addMatcher(getCharacter.matchFulfilled, (state)=>{\n            state.getCharacterLoading = false;\n        }).addMatcher(getCharacter.matchRejected, (state)=>{\n            state.getCharacterLoading = false;\n        });\n    }\n});\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (loadingSlice.reducer);\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvcmVkdXgvbG9hZGluZy9sb2FkaW5nLnRzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7QUFBK0M7QUFDSjtBQUUzQyxNQUFNLEVBQUVFLFNBQVMsRUFBRSxHQUFHRCxtREFBUUE7QUFDOUIsTUFBTSxFQUFFRSxhQUFhLEVBQUVDLFlBQVksRUFBRSxHQUFHRjtBQUV4QyxNQUFNRyxlQUFlTCw2REFBV0EsQ0FBQztJQUMvQk0sTUFBTTtJQUNOQyxjQUFjO1FBQ1pDLHNCQUFzQjtRQUN0QkMscUJBQXFCO0lBQ3ZCO0lBQ0FDLFVBQVUsQ0FBQztJQUNYQyxlQUFlLENBQUNDO1FBQ2RBLFFBQ0dDLFVBQVUsQ0FBQ1YsY0FBY1csWUFBWSxFQUFFLENBQUNDO1lBQ3ZDQSxNQUFNUCxvQkFBb0IsR0FBRztRQUMvQixHQUNDSyxVQUFVLENBQUNWLGNBQWNhLGNBQWMsRUFBRSxDQUFDRDtZQUN6Q0EsTUFBTVAsb0JBQW9CLEdBQUc7UUFDL0IsR0FDQ0ssVUFBVSxDQUFDVixjQUFjYyxhQUFhLEVBQUUsQ0FBQ0Y7WUFDeENBLE1BQU1QLG9CQUFvQixHQUFHO1FBQy9CLEdBQ0NLLFVBQVUsQ0FBQ1QsYUFBYVUsWUFBWSxFQUFFLENBQUNDO1lBQ3RDQSxNQUFNTixtQkFBbUIsR0FBRztRQUM5QixHQUNDSSxVQUFVLENBQUNULGFBQWFZLGNBQWMsRUFBRSxDQUFDRDtZQUN4Q0EsTUFBTU4sbUJBQW1CLEdBQUc7UUFDOUIsR0FDQ0ksVUFBVSxDQUFDVCxhQUFhYSxhQUFhLEVBQUUsQ0FBQ0Y7WUFDdkNBLE1BQU1OLG1CQUFtQixHQUFHO1FBQzlCO0lBQ0o7QUFDRjtBQUVBLGlFQUFlSixhQUFhYSxPQUFPLEVBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9zdy1uZXh0LWFwcC8uL3NyYy9yZWR1eC9sb2FkaW5nL2xvYWRpbmcudHM/NzdkOCJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBjcmVhdGVTbGljZSB9IGZyb20gJ0ByZWR1eGpzL3Rvb2xraXQnO1xuaW1wb3J0IHsgYXBpU2xpY2UgfSBmcm9tICcuLi9hcGkvYXBpU2xpY2UnO1xuXG5jb25zdCB7IGVuZHBvaW50cyB9ID0gYXBpU2xpY2U7XG5jb25zdCB7IGdldENoYXJhY3RlcnMsIGdldENoYXJhY3RlciB9ID0gZW5kcG9pbnRzO1xuXG5jb25zdCBsb2FkaW5nU2xpY2UgPSBjcmVhdGVTbGljZSh7XG4gIG5hbWU6ICdsb2FkaW5nJyxcbiAgaW5pdGlhbFN0YXRlOiB7XG4gICAgZ2V0Q2hhcmFjdGVyc0xvYWRpbmc6IGZhbHNlLFxuICAgIGdldENoYXJhY3RlckxvYWRpbmc6IGZhbHNlLFxuICB9LFxuICByZWR1Y2Vyczoge30sXG4gIGV4dHJhUmVkdWNlcnM6IChidWlsZGVyKSA9PiB7XG4gICAgYnVpbGRlclxuICAgICAgLmFkZE1hdGNoZXIoZ2V0Q2hhcmFjdGVycy5tYXRjaFBlbmRpbmcsIChzdGF0ZSkgPT4ge1xuICAgICAgICBzdGF0ZS5nZXRDaGFyYWN0ZXJzTG9hZGluZyA9IHRydWU7XG4gICAgICB9KVxuICAgICAgLmFkZE1hdGNoZXIoZ2V0Q2hhcmFjdGVycy5tYXRjaEZ1bGZpbGxlZCwgKHN0YXRlKSA9PiB7XG4gICAgICAgIHN0YXRlLmdldENoYXJhY3RlcnNMb2FkaW5nID0gZmFsc2U7XG4gICAgICB9KVxuICAgICAgLmFkZE1hdGNoZXIoZ2V0Q2hhcmFjdGVycy5tYXRjaFJlamVjdGVkLCAoc3RhdGUpID0+IHtcbiAgICAgICAgc3RhdGUuZ2V0Q2hhcmFjdGVyc0xvYWRpbmcgPSBmYWxzZTtcbiAgICAgIH0pXG4gICAgICAuYWRkTWF0Y2hlcihnZXRDaGFyYWN0ZXIubWF0Y2hQZW5kaW5nLCAoc3RhdGUpID0+IHtcbiAgICAgICAgc3RhdGUuZ2V0Q2hhcmFjdGVyTG9hZGluZyA9IHRydWU7XG4gICAgICB9KVxuICAgICAgLmFkZE1hdGNoZXIoZ2V0Q2hhcmFjdGVyLm1hdGNoRnVsZmlsbGVkLCAoc3RhdGUpID0+IHtcbiAgICAgICAgc3RhdGUuZ2V0Q2hhcmFjdGVyTG9hZGluZyA9IGZhbHNlO1xuICAgICAgfSlcbiAgICAgIC5hZGRNYXRjaGVyKGdldENoYXJhY3Rlci5tYXRjaFJlamVjdGVkLCAoc3RhdGUpID0+IHtcbiAgICAgICAgc3RhdGUuZ2V0Q2hhcmFjdGVyTG9hZGluZyA9IGZhbHNlO1xuICAgICAgfSk7XG4gIH0sXG59KTtcblxuZXhwb3J0IGRlZmF1bHQgbG9hZGluZ1NsaWNlLnJlZHVjZXI7XG4iXSwibmFtZXMiOlsiY3JlYXRlU2xpY2UiLCJhcGlTbGljZSIsImVuZHBvaW50cyIsImdldENoYXJhY3RlcnMiLCJnZXRDaGFyYWN0ZXIiLCJsb2FkaW5nU2xpY2UiLCJuYW1lIiwiaW5pdGlhbFN0YXRlIiwiZ2V0Q2hhcmFjdGVyc0xvYWRpbmciLCJnZXRDaGFyYWN0ZXJMb2FkaW5nIiwicmVkdWNlcnMiLCJleHRyYVJlZHVjZXJzIiwiYnVpbGRlciIsImFkZE1hdGNoZXIiLCJtYXRjaFBlbmRpbmciLCJzdGF0ZSIsIm1hdGNoRnVsZmlsbGVkIiwibWF0Y2hSZWplY3RlZCIsInJlZHVjZXIiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/redux/loading/loading.ts\n");

/***/ }),

/***/ "./src/redux/search/search.ts":
/*!************************************!*\
  !*** ./src/redux/search/search.ts ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   changePage: () => (/* binding */ changePage),\n/* harmony export */   changePerPage: () => (/* binding */ changePerPage),\n/* harmony export */   changeViewMode: () => (/* binding */ changeViewMode),\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__),\n/* harmony export */   searchFor: () => (/* binding */ searchFor),\n/* harmony export */   searchSlice: () => (/* binding */ searchSlice)\n/* harmony export */ });\n/* harmony import */ var _reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @reduxjs/toolkit */ \"@reduxjs/toolkit\");\n/* harmony import */ var _reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _utils_constants__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../utils/constants */ \"./src/utils/constants.tsx\");\n\n\nconst initialState = {\n    searchTerm: \"\",\n    perPage: _utils_constants__WEBPACK_IMPORTED_MODULE_1__.ITEMS_PER_PAGE_MEDIUM,\n    currentPage: 1,\n    viewModeDetailsOpen: false\n};\nconst searchSlice = (0,_reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__.createSlice)({\n    name: \"search\",\n    initialState,\n    reducers: {\n        searchFor: (state, action)=>{\n            state.searchTerm = action.payload;\n        },\n        changePerPage: (state, action)=>{\n            state.perPage = action.payload;\n        },\n        changePage: (state, action)=>{\n            state.currentPage = action.payload;\n        },\n        changeViewMode: (state, action)=>{\n            state.viewModeDetailsOpen = action.payload;\n        }\n    }\n});\n// Action creators are generated for each case reducer function\nconst { searchFor, changePerPage, changeViewMode, changePage } = searchSlice.actions;\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (searchSlice.reducer);\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvcmVkdXgvc2VhcmNoL3NlYXJjaC50cyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7QUFBK0M7QUFDZTtBQUc5RCxNQUFNRSxlQUE2QjtJQUNqQ0MsWUFBWTtJQUNaQyxTQUFTSCxtRUFBcUJBO0lBQzlCSSxhQUFhO0lBQ2JDLHFCQUFxQjtBQUN2QjtBQUVPLE1BQU1DLGNBQWNQLDZEQUFXQSxDQUFDO0lBQ3JDUSxNQUFNO0lBQ05OO0lBQ0FPLFVBQVU7UUFDUkMsV0FBVyxDQUFDQyxPQUFPQztZQUNqQkQsTUFBTVIsVUFBVSxHQUFHUyxPQUFPQyxPQUFPO1FBQ25DO1FBQ0FDLGVBQWUsQ0FBQ0gsT0FBT0M7WUFDckJELE1BQU1QLE9BQU8sR0FBR1EsT0FBT0MsT0FBTztRQUNoQztRQUNBRSxZQUFZLENBQUNKLE9BQU9DO1lBQ2xCRCxNQUFNTixXQUFXLEdBQUdPLE9BQU9DLE9BQU87UUFDcEM7UUFDQUcsZ0JBQWdCLENBQUNMLE9BQU9DO1lBQ3RCRCxNQUFNTCxtQkFBbUIsR0FBR00sT0FBT0MsT0FBTztRQUM1QztJQUNGO0FBQ0YsR0FBRztBQUVILCtEQUErRDtBQUN4RCxNQUFNLEVBQUVILFNBQVMsRUFBRUksYUFBYSxFQUFFRSxjQUFjLEVBQUVELFVBQVUsRUFBRSxHQUNuRVIsWUFBWVUsT0FBTyxDQUFDO0FBRXRCLGlFQUFlVixZQUFZVyxPQUFPLEVBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9zdy1uZXh0LWFwcC8uL3NyYy9yZWR1eC9zZWFyY2gvc2VhcmNoLnRzP2U1N2YiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgY3JlYXRlU2xpY2UgfSBmcm9tIFwiQHJlZHV4anMvdG9vbGtpdFwiO1xuaW1wb3J0IHsgSVRFTVNfUEVSX1BBR0VfTUVESVVNIH0gZnJvbSBcIi4uLy4uL3V0aWxzL2NvbnN0YW50c1wiO1xuaW1wb3J0IHsgSVNlYXJjaFN0YXRlIH0gZnJvbSBcIi4uLy4uL3R5cGVzL3R5cGVzXCI7XG5cbmNvbnN0IGluaXRpYWxTdGF0ZTogSVNlYXJjaFN0YXRlID0ge1xuICBzZWFyY2hUZXJtOiBcIlwiLFxuICBwZXJQYWdlOiBJVEVNU19QRVJfUEFHRV9NRURJVU0sXG4gIGN1cnJlbnRQYWdlOiAxLFxuICB2aWV3TW9kZURldGFpbHNPcGVuOiBmYWxzZSxcbn07XG5cbmV4cG9ydCBjb25zdCBzZWFyY2hTbGljZSA9IGNyZWF0ZVNsaWNlKHtcbiAgbmFtZTogXCJzZWFyY2hcIixcbiAgaW5pdGlhbFN0YXRlLFxuICByZWR1Y2Vyczoge1xuICAgIHNlYXJjaEZvcjogKHN0YXRlLCBhY3Rpb24pID0+IHtcbiAgICAgIHN0YXRlLnNlYXJjaFRlcm0gPSBhY3Rpb24ucGF5bG9hZDtcbiAgICB9LFxuICAgIGNoYW5nZVBlclBhZ2U6IChzdGF0ZSwgYWN0aW9uKSA9PiB7XG4gICAgICBzdGF0ZS5wZXJQYWdlID0gYWN0aW9uLnBheWxvYWQ7XG4gICAgfSxcbiAgICBjaGFuZ2VQYWdlOiAoc3RhdGUsIGFjdGlvbikgPT4ge1xuICAgICAgc3RhdGUuY3VycmVudFBhZ2UgPSBhY3Rpb24ucGF5bG9hZDtcbiAgICB9LFxuICAgIGNoYW5nZVZpZXdNb2RlOiAoc3RhdGUsIGFjdGlvbikgPT4ge1xuICAgICAgc3RhdGUudmlld01vZGVEZXRhaWxzT3BlbiA9IGFjdGlvbi5wYXlsb2FkO1xuICAgIH0sXG4gIH0sXG59KTtcblxuLy8gQWN0aW9uIGNyZWF0b3JzIGFyZSBnZW5lcmF0ZWQgZm9yIGVhY2ggY2FzZSByZWR1Y2VyIGZ1bmN0aW9uXG5leHBvcnQgY29uc3QgeyBzZWFyY2hGb3IsIGNoYW5nZVBlclBhZ2UsIGNoYW5nZVZpZXdNb2RlLCBjaGFuZ2VQYWdlIH0gPVxuICBzZWFyY2hTbGljZS5hY3Rpb25zO1xuXG5leHBvcnQgZGVmYXVsdCBzZWFyY2hTbGljZS5yZWR1Y2VyO1xuIl0sIm5hbWVzIjpbImNyZWF0ZVNsaWNlIiwiSVRFTVNfUEVSX1BBR0VfTUVESVVNIiwiaW5pdGlhbFN0YXRlIiwic2VhcmNoVGVybSIsInBlclBhZ2UiLCJjdXJyZW50UGFnZSIsInZpZXdNb2RlRGV0YWlsc09wZW4iLCJzZWFyY2hTbGljZSIsIm5hbWUiLCJyZWR1Y2VycyIsInNlYXJjaEZvciIsInN0YXRlIiwiYWN0aW9uIiwicGF5bG9hZCIsImNoYW5nZVBlclBhZ2UiLCJjaGFuZ2VQYWdlIiwiY2hhbmdlVmlld01vZGUiLCJhY3Rpb25zIiwicmVkdWNlciJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/redux/search/search.ts\n");

/***/ }),

/***/ "./src/redux/store.ts":
/*!****************************!*\
  !*** ./src/redux/store.ts ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   makeStore: () => (/* binding */ makeStore),\n/* harmony export */   wrapper: () => (/* binding */ wrapper)\n/* harmony export */ });\n/* harmony import */ var _reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @reduxjs/toolkit */ \"@reduxjs/toolkit\");\n/* harmony import */ var _reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _api_apiSlice__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./api/apiSlice */ \"./src/redux/api/apiSlice.ts\");\n/* harmony import */ var _search_search__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./search/search */ \"./src/redux/search/search.ts\");\n/* harmony import */ var _loading_loading__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./loading/loading */ \"./src/redux/loading/loading.ts\");\n/* harmony import */ var next_redux_wrapper__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! next-redux-wrapper */ \"next-redux-wrapper\");\n/* harmony import */ var next_redux_wrapper__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(next_redux_wrapper__WEBPACK_IMPORTED_MODULE_4__);\n\n\n\n\n\nconst makeStore = ()=>(0,_reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__.configureStore)({\n        reducer: {\n            search: _search_search__WEBPACK_IMPORTED_MODULE_2__[\"default\"],\n            loading: _loading_loading__WEBPACK_IMPORTED_MODULE_3__[\"default\"],\n            [_api_apiSlice__WEBPACK_IMPORTED_MODULE_1__.apiSlice.reducerPath]: _api_apiSlice__WEBPACK_IMPORTED_MODULE_1__.apiSlice.reducer\n        },\n        middleware: (getDefaultMiddleware)=>getDefaultMiddleware().concat(_api_apiSlice__WEBPACK_IMPORTED_MODULE_1__.apiSlice.middleware)\n    });\nconst wrapper = (0,next_redux_wrapper__WEBPACK_IMPORTED_MODULE_4__.createWrapper)(makeStore, {\n    debug: false\n});\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvcmVkdXgvc3RvcmUudHMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7O0FBQWtEO0FBQ1I7QUFDTztBQUNHO0FBQ0Q7QUFFNUMsTUFBTUssWUFBWSxJQUN2QkwsZ0VBQWNBLENBQUM7UUFDYk0sU0FBUztZQUNQQyxRQUFRTCxzREFBa0JBO1lBQzFCTSxTQUFTTCx3REFBbUJBO1lBQzVCLENBQUNGLG1EQUFRQSxDQUFDUSxXQUFXLENBQUMsRUFBRVIsbURBQVFBLENBQUNLLE9BQU87UUFDMUM7UUFDQUksWUFBWSxDQUFDQyx1QkFDWEEsdUJBQXVCQyxNQUFNLENBQUNYLG1EQUFRQSxDQUFDUyxVQUFVO0lBQ3JELEdBQUc7QUFNRSxNQUFNRyxVQUFVVCxpRUFBYUEsQ0FBV0MsV0FBVztJQUFFUyxPQUFPO0FBQU0sR0FBRyIsInNvdXJjZXMiOlsid2VicGFjazovL3N3LW5leHQtYXBwLy4vc3JjL3JlZHV4L3N0b3JlLnRzP2E1YjAiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgY29uZmlndXJlU3RvcmUgfSBmcm9tIFwiQHJlZHV4anMvdG9vbGtpdFwiO1xuaW1wb3J0IHsgYXBpU2xpY2UgfSBmcm9tIFwiLi9hcGkvYXBpU2xpY2VcIjtcbmltcG9ydCBzZWFyY2hTbGljZVJlZHVjZXIgZnJvbSBcIi4vc2VhcmNoL3NlYXJjaFwiO1xuaW1wb3J0IGxvYWRpbmdTbGljZVJlZHVjZXIgZnJvbSBcIi4vbG9hZGluZy9sb2FkaW5nXCI7XG5pbXBvcnQgeyBjcmVhdGVXcmFwcGVyIH0gZnJvbSBcIm5leHQtcmVkdXgtd3JhcHBlclwiO1xuXG5leHBvcnQgY29uc3QgbWFrZVN0b3JlID0gKCkgPT5cbiAgY29uZmlndXJlU3RvcmUoe1xuICAgIHJlZHVjZXI6IHtcbiAgICAgIHNlYXJjaDogc2VhcmNoU2xpY2VSZWR1Y2VyLFxuICAgICAgbG9hZGluZzogbG9hZGluZ1NsaWNlUmVkdWNlcixcbiAgICAgIFthcGlTbGljZS5yZWR1Y2VyUGF0aF06IGFwaVNsaWNlLnJlZHVjZXIsXG4gICAgfSxcbiAgICBtaWRkbGV3YXJlOiAoZ2V0RGVmYXVsdE1pZGRsZXdhcmUpID0+XG4gICAgICBnZXREZWZhdWx0TWlkZGxld2FyZSgpLmNvbmNhdChhcGlTbGljZS5taWRkbGV3YXJlKSxcbiAgfSk7XG5cbmV4cG9ydCB0eXBlIEFwcFN0b3JlID0gUmV0dXJuVHlwZTx0eXBlb2YgbWFrZVN0b3JlPjtcbmV4cG9ydCB0eXBlIFJvb3RTdGF0ZSA9IFJldHVyblR5cGU8QXBwU3RvcmVbXCJnZXRTdGF0ZVwiXT47XG5leHBvcnQgdHlwZSBBcHBEaXNwYXRjaCA9IEFwcFN0b3JlW1wiZGlzcGF0Y2hcIl07XG5cbmV4cG9ydCBjb25zdCB3cmFwcGVyID0gY3JlYXRlV3JhcHBlcjxBcHBTdG9yZT4obWFrZVN0b3JlLCB7IGRlYnVnOiBmYWxzZSB9KTtcbiJdLCJuYW1lcyI6WyJjb25maWd1cmVTdG9yZSIsImFwaVNsaWNlIiwic2VhcmNoU2xpY2VSZWR1Y2VyIiwibG9hZGluZ1NsaWNlUmVkdWNlciIsImNyZWF0ZVdyYXBwZXIiLCJtYWtlU3RvcmUiLCJyZWR1Y2VyIiwic2VhcmNoIiwibG9hZGluZyIsInJlZHVjZXJQYXRoIiwibWlkZGxld2FyZSIsImdldERlZmF1bHRNaWRkbGV3YXJlIiwiY29uY2F0Iiwid3JhcHBlciIsImRlYnVnIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/redux/store.ts\n");

/***/ }),

/***/ "./src/utils/constants.tsx":
/*!*********************************!*\
  !*** ./src/utils/constants.tsx ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   API_URL: () => (/* binding */ API_URL),\n/* harmony export */   ITEMS_PER_PAGE_MEDIUM: () => (/* binding */ ITEMS_PER_PAGE_MEDIUM),\n/* harmony export */   ITEMS_PER_PAGE_SMALL: () => (/* binding */ ITEMS_PER_PAGE_SMALL)\n/* harmony export */ });\nconst API_URL = \"https://swapi.dev/api/people/\";\nconst ITEMS_PER_PAGE_SMALL = 5;\nconst ITEMS_PER_PAGE_MEDIUM = 10;\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvdXRpbHMvY29uc3RhbnRzLnRzeCIsIm1hcHBpbmdzIjoiOzs7Ozs7QUFBTyxNQUFNQSxVQUFVLGdDQUFnQztBQUNoRCxNQUFNQyx1QkFBdUIsRUFBRTtBQUMvQixNQUFNQyx3QkFBd0IsR0FBRyIsInNvdXJjZXMiOlsid2VicGFjazovL3N3LW5leHQtYXBwLy4vc3JjL3V0aWxzL2NvbnN0YW50cy50c3g/MjY3YyJdLCJzb3VyY2VzQ29udGVudCI6WyJleHBvcnQgY29uc3QgQVBJX1VSTCA9ICdodHRwczovL3N3YXBpLmRldi9hcGkvcGVvcGxlLyc7XG5leHBvcnQgY29uc3QgSVRFTVNfUEVSX1BBR0VfU01BTEwgPSA1O1xuZXhwb3J0IGNvbnN0IElURU1TX1BFUl9QQUdFX01FRElVTSA9IDEwO1xuIl0sIm5hbWVzIjpbIkFQSV9VUkwiLCJJVEVNU19QRVJfUEFHRV9TTUFMTCIsIklURU1TX1BFUl9QQUdFX01FRElVTSJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/utils/constants.tsx\n");

/***/ }),

/***/ "./src/utils/helpers.ts":
/*!******************************!*\
  !*** ./src/utils/helpers.ts ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   formatURL: () => (/* binding */ formatURL)\n/* harmony export */ });\nfunction formatURL(searchTerm, page) {\n    return `${searchTerm ? `?search=${searchTerm.toLowerCase().trim()}` : \"\"}${page === 1 ? \"\" : `${searchTerm ? `&` : `?`}page=${page}`}`;\n}\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvdXRpbHMvaGVscGVycy50cyIsIm1hcHBpbmdzIjoiOzs7O0FBQU8sU0FBU0EsVUFBVUMsVUFBa0IsRUFBRUMsSUFBWTtJQUN4RCxPQUFPLENBQUMsRUFBRUQsYUFBYSxDQUFDLFFBQVEsRUFBRUEsV0FBV0UsV0FBVyxHQUFHQyxJQUFJLEdBQUcsQ0FBQyxHQUFHLEdBQUcsRUFDdkVGLFNBQVMsSUFBSSxLQUFLLENBQUMsRUFBRUQsYUFBYSxDQUFDLENBQUMsQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLENBQUMsS0FBSyxFQUFFQyxLQUFLLENBQUMsQ0FDMUQsQ0FBQztBQUNKIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vc3ctbmV4dC1hcHAvLi9zcmMvdXRpbHMvaGVscGVycy50cz82OWFjIl0sInNvdXJjZXNDb250ZW50IjpbImV4cG9ydCBmdW5jdGlvbiBmb3JtYXRVUkwoc2VhcmNoVGVybTogc3RyaW5nLCBwYWdlOiBudW1iZXIpIHtcbiAgcmV0dXJuIGAke3NlYXJjaFRlcm0gPyBgP3NlYXJjaD0ke3NlYXJjaFRlcm0udG9Mb3dlckNhc2UoKS50cmltKCl9YCA6ICcnfSR7XG4gICAgcGFnZSA9PT0gMSA/ICcnIDogYCR7c2VhcmNoVGVybSA/IGAmYCA6IGA/YH1wYWdlPSR7cGFnZX1gXG4gIH1gO1xufVxuIl0sIm5hbWVzIjpbImZvcm1hdFVSTCIsInNlYXJjaFRlcm0iLCJwYWdlIiwidG9Mb3dlckNhc2UiLCJ0cmltIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/utils/helpers.ts\n");

/***/ }),

/***/ "./src/styles/globals.css":
/*!********************************!*\
  !*** ./src/styles/globals.css ***!
  \********************************/
/***/ (() => {



/***/ }),

/***/ "@reduxjs/toolkit":
/*!***********************************!*\
  !*** external "@reduxjs/toolkit" ***!
  \***********************************/
/***/ ((module) => {

"use strict";
module.exports = require("@reduxjs/toolkit");

/***/ }),

/***/ "@reduxjs/toolkit/query/react":
/*!***********************************************!*\
  !*** external "@reduxjs/toolkit/query/react" ***!
  \***********************************************/
/***/ ((module) => {

"use strict";
module.exports = require("@reduxjs/toolkit/query/react");

/***/ }),

/***/ "abort-controller":
/*!***********************************!*\
  !*** external "abort-controller" ***!
  \***********************************/
/***/ ((module) => {

"use strict";
module.exports = require("abort-controller");

/***/ }),

/***/ "next-redux-wrapper":
/*!*************************************!*\
  !*** external "next-redux-wrapper" ***!
  \*************************************/
/***/ ((module) => {

"use strict";
module.exports = require("next-redux-wrapper");

/***/ }),

/***/ "node-fetch":
/*!*****************************!*\
  !*** external "node-fetch" ***!
  \*****************************/
/***/ ((module) => {

"use strict";
module.exports = require("node-fetch");

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/***/ ((module) => {

"use strict";
module.exports = require("react");

/***/ }),

/***/ "react/jsx-dev-runtime":
/*!****************************************!*\
  !*** external "react/jsx-dev-runtime" ***!
  \****************************************/
/***/ ((module) => {

"use strict";
module.exports = require("react/jsx-dev-runtime");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__("./src/pages/_app.tsx"));
module.exports = __webpack_exports__;

})();