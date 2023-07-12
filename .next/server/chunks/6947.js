"use strict";
exports.id = 6947;
exports.ids = [6947];
exports.modules = {

/***/ 8366:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (/* binding */ loadBackgroudImages)
/* harmony export */ });
function loadBackgroudImages() {
    let backgroudImages = document.querySelectorAll("[data-background]");
    if (backgroudImages.length > 0) {
        backgroudImages.forEach((element)=>{
            let image = element.dataset.background;
            element.style.backgroundImage = `url('${image}')`;
        });
    }
}


/***/ }),

/***/ 5996:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "Z": () => (/* binding */ OnePage_Team)
});

// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(5893);
// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(6689);
;// CONCATENATED MODULE: ./src/data/OnePage/team.json
const team_namespaceObject = JSON.parse('[{"id":1,"picture":"/dark/assets/imgs/jrmwebimg/mitglieder/coco.jpg","position":"Gründer","name":"Coco"},{"id":2,"picture":"/dark/assets/imgs/jrmwebimg/mitglieder/tristan.jpg","position":"Gründer","name":"Guestlist +10"},{"id":3,"picture":"/dark/assets/imgs/jrmwebimg/mitglieder/dimi.jpg","position":"A&R","name":"Dimi"}]');
// EXTERNAL MODULE: ./node_modules/next/link.js
var next_link = __webpack_require__(1664);
var link_default = /*#__PURE__*/__webpack_require__.n(next_link);
;// CONCATENATED MODULE: ./src/components/OnePage/Team.jsx


//= Data


function Team() {
    return /*#__PURE__*/ jsx_runtime.jsx("section", {
        className: "team section-padding",
        children: /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
            className: "container",
            children: [
                /*#__PURE__*/ jsx_runtime.jsx("div", {
                    className: "sec-head mb-80",
                    children: /*#__PURE__*/ jsx_runtime.jsx("div", {
                        className: "row",
                        children: /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                            className: "col-lg-8",
                            children: [
                                /*#__PURE__*/ jsx_runtime.jsx("h6", {
                                    className: "sub-title opacity-8 wow fadeInUp",
                                    children: "Juniormafia"
                                }),
                                /*#__PURE__*/ jsx_runtime.jsx("h2", {
                                    className: "d-rotate wow",
                                    children: /*#__PURE__*/ jsx_runtime.jsx("span", {
                                        className: "rotate-text",
                                        children: "Meet our Team."
                                    })
                                })
                            ]
                        })
                    })
                }),
                /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                    className: "row md-marg",
                    children: [
                        team_namespaceObject.map((member)=>/*#__PURE__*/ jsx_runtime.jsx("div", {
                                className: "col-lg-3 col-md-6",
                                children: /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                                    className: "item mb-50",
                                    children: [
                                        /*#__PURE__*/ jsx_runtime.jsx("div", {
                                            className: "img",
                                            children: /*#__PURE__*/ jsx_runtime.jsx("img", {
                                                src: member.picture,
                                                alt: ""
                                            })
                                        }),
                                        /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                                            className: "info mt-20",
                                            children: [
                                                /*#__PURE__*/ jsx_runtime.jsx("span", {
                                                    className: "fz-12 opacity-8",
                                                    children: member.position
                                                }),
                                                /*#__PURE__*/ jsx_runtime.jsx("h6", {
                                                    className: "fz-18",
                                                    children: member.name
                                                })
                                            ]
                                        })
                                    ]
                                })
                            }, member.id)),
                        /*#__PURE__*/ jsx_runtime.jsx("div", {
                            className: "col-lg-3 col-md-6",
                            children: /*#__PURE__*/ jsx_runtime.jsx("div", {
                                className: "item-join valign",
                                children: /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                                    className: "full-width",
                                    children: [
                                        /*#__PURE__*/ (0,jsx_runtime.jsxs)("h6", {
                                            className: "text-u ls2",
                                            children: [
                                                "Werde ",
                                                /*#__PURE__*/ jsx_runtime.jsx("br", {}),
                                                " Mitglied"
                                            ]
                                        }),
                                        /*#__PURE__*/ (0,jsx_runtime.jsxs)((link_default()), {
                                            href: "/jrmwebsite/contact",
                                            className: "arrow mt-30",
                                            children: [
                                                /*#__PURE__*/ jsx_runtime.jsx("span", {
                                                    className: "circle",
                                                    children: /*#__PURE__*/ jsx_runtime.jsx("svg", {
                                                        width: "18",
                                                        height: "18",
                                                        viewBox: "0 0 18 18",
                                                        fill: "none",
                                                        xmlns: "http://www.w3.org/2000/svg",
                                                        children: /*#__PURE__*/ jsx_runtime.jsx("path", {
                                                            d: "M13.922 4.5V11.8125C13.922 11.9244 13.8776 12.0317 13.7985 12.1108C13.7193 12.1899 13.612 12.2344 13.5002 12.2344C13.3883 12.2344 13.281 12.1899 13.2018 12.1108C13.1227 12.0317 13.0783 11.9244 13.0783 11.8125V5.51953L4.79547 13.7953C4.71715 13.8736 4.61092 13.9176 4.50015 13.9176C4.38939 13.9176 4.28316 13.8736 4.20484 13.7953C4.12652 13.717 4.08252 13.6108 4.08252 13.5C4.08252 13.3892 4.12652 13.283 4.20484 13.2047L12.4806 4.92188H6.18765C6.07577 4.92188 5.96846 4.87743 5.88934 4.79831C5.81023 4.71919 5.76578 4.61189 5.76578 4.5C5.76578 4.38811 5.81023 4.28081 5.88934 4.20169C5.96846 4.12257 6.07577 4.07813 6.18765 4.07812H13.5002C13.612 4.07813 13.7193 4.12257 13.7985 4.20169C13.8776 4.28081 13.922 4.38811 13.922 4.5Z",
                                                            fill: "currentColor"
                                                        })
                                                    })
                                                }),
                                                /*#__PURE__*/ jsx_runtime.jsx("span", {
                                                    className: "fz-12 text-u ml-10",
                                                    children: "Bewirb dich"
                                                })
                                            ]
                                        })
                                    ]
                                })
                            })
                        })
                    ]
                })
            ]
        })
    });
}
/* harmony default export */ const OnePage_Team = (Team);


/***/ }),

/***/ 7513:
/***/ ((module) => {

module.exports = JSON.parse('{"v":"ThemesCamp","a":"https://themeforest.net/user/themescamp"}');

/***/ })

};
;