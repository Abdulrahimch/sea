exports.id = 451;
exports.ids = [451];
exports.modules = {

/***/ 1957:
/***/ ((module) => {

// Exports
module.exports = {
	"navContainer": "Navbar_navContainer__XhNhB",
	"menu": "Navbar_menu__eOFUC",
	"navIcon": "Navbar_navIcon__WVdir",
	"menuContainer": "Navbar_menuContainer___p_YQ",
	"active": "Navbar_active__dvQhm",
	"icon": "Navbar_icon__Nbewu",
	"logo": "Navbar_logo__8xjov",
	"hamburgerCircle": "Navbar_hamburgerCircle__H69p2",
	"hamburgerLine": "Navbar_hamburgerLine__LGBpU",
	"hamburgerLineContainer": "Navbar_hamburgerLineContainer__9fUYw"
};


/***/ }),

/***/ 7527:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({"src":"/_next/static/media/Seaclub_Logotype_BLK_RGB.b30e6db9.svg","height":1035,"width":4234,"blurWidth":0,"blurHeight":0});

/***/ }),

/***/ 7345:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _Navbar__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6568);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_Navbar__WEBPACK_IMPORTED_MODULE_1__]);
_Navbar__WEBPACK_IMPORTED_MODULE_1__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];


const Layout = ({ children  })=>{
    return(// this background only for other pages
    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
        className: "bg-layout",
        children: [
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_Navbar__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .Z, {}),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("main", {
                children: children
            })
        ]
    }));
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Layout);

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 6568:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (/* binding */ Navbar)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(5675);
/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_image__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _src_styles_Navbar_module_css__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(1957);
/* harmony import */ var _src_styles_Navbar_module_css__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_src_styles_Navbar_module_css__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _public_assets_Seaclub_Logotype_BLK_RGB_svg__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(7527);
/* harmony import */ var framer_motion__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(6197);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var react_icons_bs__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(567);
/* harmony import */ var react_icons_bs__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react_icons_bs__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(1664);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_6__);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([framer_motion__WEBPACK_IMPORTED_MODULE_3__]);
framer_motion__WEBPACK_IMPORTED_MODULE_3__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];








function Navbar() {
    const [showMenu, setShowMenu] = (0,react__WEBPACK_IMPORTED_MODULE_4__.useState)(false);
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("nav", {
        className: (_src_styles_Navbar_module_css__WEBPACK_IMPORTED_MODULE_7___default().navContainer),
        children: [
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                children: [
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_image__WEBPACK_IMPORTED_MODULE_1___default()), {
                        src: _public_assets_Seaclub_Logotype_BLK_RGB_svg__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z,
                        alt: "seaclub logo",
                        className: (_src_styles_Navbar_module_css__WEBPACK_IMPORTED_MODULE_7___default().logo)
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                        className: `${(_src_styles_Navbar_module_css__WEBPACK_IMPORTED_MODULE_7___default().menu)} ${showMenu && (_src_styles_Navbar_module_css__WEBPACK_IMPORTED_MODULE_7___default().active)}`,
                        children: "MENU"
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                            onClick: ()=>setShowMenu(!showMenu),
                            className: (_src_styles_Navbar_module_css__WEBPACK_IMPORTED_MODULE_7___default().hamburgerCircle),
                            children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                className: (_src_styles_Navbar_module_css__WEBPACK_IMPORTED_MODULE_7___default().hamburgerLineContainer),
                                children: [
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(framer_motion__WEBPACK_IMPORTED_MODULE_3__.motion.div, {
                                        initial: {
                                            rotate: 0,
                                            y: 0
                                        },
                                        animate: showMenu ? {
                                            rotate: 45,
                                            y: 4
                                        } : {
                                            rotate: 0,
                                            y: 0
                                        },
                                        transition: {
                                            duration: 0.5
                                        },
                                        className: (_src_styles_Navbar_module_css__WEBPACK_IMPORTED_MODULE_7___default().hamburgerLine)
                                    }),
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(framer_motion__WEBPACK_IMPORTED_MODULE_3__.motion.div, {
                                        initial: {
                                            rotate: 0,
                                            y: 0
                                        },
                                        animate: showMenu ? {
                                            rotate: -45,
                                            y: -3
                                        } : {
                                            rotate: 0,
                                            y: 0
                                        },
                                        transition: {
                                            duration: 0.5
                                        },
                                        className: (_src_styles_Navbar_module_css__WEBPACK_IMPORTED_MODULE_7___default().hamburgerLine)
                                    })
                                ]
                            })
                        })
                    })
                ]
            }),
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("ul", {
                className: `${(_src_styles_Navbar_module_css__WEBPACK_IMPORTED_MODULE_7___default().menuContainer)} ${showMenu && (_src_styles_Navbar_module_css__WEBPACK_IMPORTED_MODULE_7___default().active)}`,
                children: [
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_link__WEBPACK_IMPORTED_MODULE_6___default()), {
                        href: "/",
                        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("li", {
                            children: [
                                "HOME ",
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_icons_bs__WEBPACK_IMPORTED_MODULE_5__.BsArrowRight, {
                                    className: (_src_styles_Navbar_module_css__WEBPACK_IMPORTED_MODULE_7___default().icon)
                                })
                            ]
                        })
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_link__WEBPACK_IMPORTED_MODULE_6___default()), {
                        href: "/about-us",
                        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("li", {
                            children: [
                                "ABOUT ",
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_icons_bs__WEBPACK_IMPORTED_MODULE_5__.BsArrowRight, {
                                    className: (_src_styles_Navbar_module_css__WEBPACK_IMPORTED_MODULE_7___default().icon)
                                })
                            ]
                        })
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_link__WEBPACK_IMPORTED_MODULE_6___default()), {
                        href: "product",
                        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("li", {
                            children: [
                                "PRODUCT ",
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_icons_bs__WEBPACK_IMPORTED_MODULE_5__.BsArrowRight, {
                                    className: (_src_styles_Navbar_module_css__WEBPACK_IMPORTED_MODULE_7___default().icon)
                                })
                            ]
                        })
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_link__WEBPACK_IMPORTED_MODULE_6___default()), {
                        href: "blog",
                        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("li", {
                            children: [
                                "BLOG ",
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_icons_bs__WEBPACK_IMPORTED_MODULE_5__.BsArrowRight, {
                                    className: (_src_styles_Navbar_module_css__WEBPACK_IMPORTED_MODULE_7___default().icon)
                                })
                            ]
                        })
                    })
                ]
            })
        ]
    });
}

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ })

};
;