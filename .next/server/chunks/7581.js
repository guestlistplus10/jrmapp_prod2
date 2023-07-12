"use strict";
exports.id = 7581;
exports.ids = [7581];
exports.modules = {

/***/ 444:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(5893);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(1664);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var swiper_react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(3015);
/* harmony import */ var swiper__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(3877);
/* harmony import */ var _data_DigitalAgency_portfolio_json__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(1966);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([swiper_react__WEBPACK_IMPORTED_MODULE_3__, swiper__WEBPACK_IMPORTED_MODULE_4__]);
([swiper_react__WEBPACK_IMPORTED_MODULE_3__, swiper__WEBPACK_IMPORTED_MODULE_4__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);



//= Modules


//= Data

const swiperOptions = {
    modules: [
        swiper__WEBPACK_IMPORTED_MODULE_4__.Navigation,
        swiper__WEBPACK_IMPORTED_MODULE_4__.Pagination,
        swiper__WEBPACK_IMPORTED_MODULE_4__.Autoplay
    ],
    slidesPerView: 4,
    centeredSlides: true,
    spaceBetween: 150,
    speed: 1000,
    loop: true,
    breakpoints: {
        0: {
            slidesPerView: 1,
            spaceBetween: 30
        },
        640: {
            slidesPerView: 2,
            spaceBetween: 60
        },
        768: {
            slidesPerView: 2,
            spaceBetween: 60
        },
        1024: {
            slidesPerView: 5
        }
    },
    pagination: {
        el: ".work-carsouel .swiper-pagination",
        clickable: true
    },
    navigation: {
        nextEl: ".work-carsouel .swiper-button-next",
        prevEl: ".work-carsouel .swiper-button-prev"
    }
};
function Portfolio() {
    const [loadSwiper, setLoadSwiper] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);
    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{
        setLoadSwiper(true);
    }, []);
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("section", {
        className: "custom-row work-carsouel section-padding position-re o-hidden",
        children: [
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                className: "container",
                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                    className: "sec-lg-head mb-80",
                    children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                        className: "row",
                        children: [
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                className: "col-lg-6",
                                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h3", {
                                    children: "Releases."
                                })
                            }),
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                className: "col-lg-6 d-flex align-items-center",
                                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                    className: "full-width",
                                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                        className: "d-flex justify-content-end justify-end",
                                        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                            className: "swiper-controls arrow-out d-flex",
                                            children: [
                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                                    className: "swiper-button-prev",
                                                    tabIndex: "0",
                                                    role: "button",
                                                    "aria-label": "Previous slide",
                                                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                                        className: "left",
                                                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("svg", {
                                                            width: "20",
                                                            height: "20",
                                                            viewBox: "0 0 20 20",
                                                            fill: "none",
                                                            xmlns: "http://www.w3.org/2000/svg",
                                                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("path", {
                                                                d: "M17.2031 10.3281L11.5781 15.9531C11.535 15.9961 11.4839 16.0303 11.4276 16.0536C11.3713 16.077 11.3109 16.089 11.25 16.089C11.1891 16.089 11.1287 16.077 11.0724 16.0536C11.0161 16.0303 10.965 15.9961 10.9219 15.9531C10.8788 15.91 10.8446 15.8588 10.8213 15.8025C10.798 15.7462 10.786 15.6859 10.786 15.6249C10.786 15.564 10.798 15.5036 10.8213 15.4473C10.8446 15.391 10.8788 15.3399 10.9219 15.2968L15.7422 10.4687H3.125C3.00068 10.4687 2.88145 10.4193 2.79354 10.3314C2.70564 10.2435 2.65625 10.1242 2.65625 9.99993C2.65625 9.87561 2.70564 9.75638 2.79354 9.66847C2.88145 9.58056 3.00068 9.53118 3.125 9.53118H15.7422L10.9219 4.70305C10.8349 4.61603 10.786 4.498 10.786 4.37493C10.786 4.25186 10.8349 4.13383 10.9219 4.0468C11.0089 3.95978 11.1269 3.91089 11.25 3.91089C11.3731 3.91089 11.4911 3.95978 11.5781 4.0468L17.2031 9.6718C17.2476 9.71412 17.2829 9.76503 17.3071 9.82143C17.3313 9.87784 17.3438 9.93856 17.3438 9.99993C17.3438 10.0613 17.3313 10.122 17.3071 10.1784C17.2829 10.2348 17.2476 10.2857 17.2031 10.3281Z",
                                                                fill: "currentColor"
                                                            })
                                                        })
                                                    })
                                                }),
                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                                    className: "swiper-button-next ml-50",
                                                    tabIndex: "0",
                                                    role: "button",
                                                    "aria-label": "Next slide",
                                                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                                        className: "right",
                                                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("svg", {
                                                            width: "20",
                                                            height: "20",
                                                            viewBox: "0 0 20 20",
                                                            fill: "none",
                                                            xmlns: "http://www.w3.org/2000/svg",
                                                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("path", {
                                                                d: "M17.2031 10.3281L11.5781 15.9531C11.535 15.9961 11.4839 16.0303 11.4276 16.0536C11.3713 16.077 11.3109 16.089 11.25 16.089C11.1891 16.089 11.1287 16.077 11.0724 16.0536C11.0161 16.0303 10.965 15.9961 10.9219 15.9531C10.8788 15.91 10.8446 15.8588 10.8213 15.8025C10.798 15.7462 10.786 15.6859 10.786 15.6249C10.786 15.564 10.798 15.5036 10.8213 15.4473C10.8446 15.391 10.8788 15.3399 10.9219 15.2968L15.7422 10.4687H3.125C3.00068 10.4687 2.88145 10.4193 2.79354 10.3314C2.70564 10.2435 2.65625 10.1242 2.65625 9.99993C2.65625 9.87561 2.70564 9.75638 2.79354 9.66847C2.88145 9.58056 3.00068 9.53118 3.125 9.53118H15.7422L10.9219 4.70305C10.8349 4.61603 10.786 4.498 10.786 4.37493C10.786 4.25186 10.8349 4.13383 10.9219 4.0468C11.0089 3.95978 11.1269 3.91089 11.25 3.91089C11.3731 3.91089 11.4911 3.95978 11.5781 4.0468L17.2031 9.6718C17.2476 9.71412 17.2829 9.76503 17.3071 9.82143C17.3313 9.87784 17.3438 9.93856 17.3438 9.99993C17.3438 10.0613 17.3313 10.122 17.3071 10.1784C17.2829 10.2348 17.2476 10.2857 17.2031 10.3281Z",
                                                                fill: "currentColor"
                                                            })
                                                        })
                                                    })
                                                })
                                            ]
                                        })
                                    })
                                })
                            })
                        ]
                    })
                })
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                className: "container-fluid rest",
                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                    className: "row",
                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                        className: "col-12",
                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                            className: "work-crus work-crus3 out",
                            children: loadSwiper && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(swiper_react__WEBPACK_IMPORTED_MODULE_3__.Swiper, {
                                id: "content-carousel-container-unq-w",
                                className: "swiper-container",
                                ...swiperOptions,
                                children: _data_DigitalAgency_portfolio_json__WEBPACK_IMPORTED_MODULE_5__.map((item)=>/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(swiper_react__WEBPACK_IMPORTED_MODULE_3__.SwiperSlide, {
                                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                            className: "item",
                                            children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                                className: "img",
                                                children: [
                                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("img", {
                                                        src: `/dark/${item.image}`,
                                                        alt: ""
                                                    }),
                                                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                                        className: "cont",
                                                        children: [
                                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                                                className: "mb-5",
                                                                children: item.type
                                                            }),
                                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h6", {
                                                                className: "fz-18",
                                                                children: item.title
                                                            })
                                                        ]
                                                    }),
                                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_link__WEBPACK_IMPORTED_MODULE_2___default()), {
                                                        href: "/dark/project-details2",
                                                        className: "plink"
                                                    })
                                                ]
                                            })
                                        })
                                    }, item.id))
                            })
                        })
                    })
                })
            })
        ]
    });
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Portfolio);

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 8966:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "Z": () => (/* binding */ DigitalAgency_Services)
});

// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(5893);
// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(6689);
// EXTERNAL MODULE: ./node_modules/next/link.js
var next_link = __webpack_require__(1664);
// EXTERNAL MODULE: ./src/components/Common/StatementSplitter.jsx
var StatementSplitter = __webpack_require__(6660);
;// CONCATENATED MODULE: ./src/data/DigitalAgency/services.json
const services_namespaceObject = JSON.parse('[{"id":1,"image":"assets/imgs/serv-icons/0.png","title":"Musikproduktion","features":["Exclusive Beatproduction","Songwriting","Recording","Mix & Mastering"]},{"id":3,"image":"assets/imgs/serv-icons/1.png","title":"Visuals","features":["Color Grading & Postproduction","Musikvideos & Visuals","Social-Media Inhalte","Artworks"]},{"id":2,"image":"assets/imgs/serv-icons/2.png","title":"Vertrieb & Management","features":["Künstlerentwicklung","Künstlerbetreuung","Marketingstrategien","Vertrieb auf allen Streamingplatformen"]}]');
;// CONCATENATED MODULE: ./src/components/DigitalAgency/Services.jsx



//= Components

//= Data

function Services({ lightMode  }) {
    return /*#__PURE__*/ jsx_runtime.jsx("section", {
        className: "custom-row services section-padding",
        children: /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
            className: "container",
            children: [
                /*#__PURE__*/ jsx_runtime.jsx("div", {
                    className: "sec-lg-head mb-80",
                    children: /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                        className: "row",
                        children: [
                            /*#__PURE__*/ jsx_runtime.jsx("div", {
                                className: "col-lg-6",
                                children: /*#__PURE__*/ jsx_runtime.jsx("h3", {
                                    className: "d-slideup wow",
                                    children: /*#__PURE__*/ (0,jsx_runtime.jsxs)("span", {
                                        className: "sideup-text",
                                        children: [
                                            /*#__PURE__*/ jsx_runtime.jsx("span", {
                                                className: "up-text",
                                                children: "Vom Talent zur Marke!"
                                            }),
                                            /*#__PURE__*/ jsx_runtime.jsx("p", {
                                                children: "Juniormafia bietet eine 360-Grad-Betreuung an und deckt damit alle Punkte um die Bildung eines Artists ab."
                                            })
                                        ]
                                    })
                                })
                            }),
                            /*#__PURE__*/ jsx_runtime.jsx("div", {
                                className: "col-lg-6 d-flex align-items-center",
                                children: /*#__PURE__*/ jsx_runtime.jsx("div", {
                                    className: "full-width d-flex justify-content-end justify-end",
                                    children: /*#__PURE__*/ jsx_runtime.jsx("div", {
                                        className: "vew-all"
                                    })
                                })
                            })
                        ]
                    })
                }),
                /*#__PURE__*/ jsx_runtime.jsx("div", {
                    className: "row",
                    children: services_namespaceObject.map((item, index)=>/*#__PURE__*/ jsx_runtime.jsx("div", {
                            className: "col-lg-4",
                            children: /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                                className: `item-bord2 radius-10 wow fadeIn ${index !== services_namespaceObject.length - 1 ? "md-mb50" : ""}`,
                                "data-wow-delay": ".5s",
                                children: [
                                    /*#__PURE__*/ jsx_runtime.jsx("div", {
                                        className: "icon-img-60 mb-40",
                                        children: /*#__PURE__*/ jsx_runtime.jsx("img", {
                                            src: `${lightMode ? "/light/" : "/dark/"}${item.image}`,
                                            alt: ""
                                        })
                                    }),
                                    /*#__PURE__*/ jsx_runtime.jsx("h6", {
                                        className: "mb-30",
                                        children: /*#__PURE__*/ jsx_runtime.jsx(StatementSplitter/* default */.Z, {
                                            statement: item.title
                                        })
                                    }),
                                    /*#__PURE__*/ jsx_runtime.jsx("ul", {
                                        className: "check-list rest opacity-8",
                                        children: item.features.map((feature, idx)=>/*#__PURE__*/ (0,jsx_runtime.jsxs)("li", {
                                                className: "mb-10",
                                                children: [
                                                    /*#__PURE__*/ jsx_runtime.jsx("span", {
                                                        className: "fz-12 mr-5",
                                                        children: /*#__PURE__*/ jsx_runtime.jsx("i", {
                                                            className: "fas fa-check"
                                                        })
                                                    }),
                                                    " ",
                                                    feature
                                                ]
                                            }, idx))
                                    })
                                ]
                            })
                        }, item.id))
                })
            ]
        })
    });
}
/* harmony default export */ const DigitalAgency_Services = (Services);


/***/ }),

/***/ 1966:
/***/ ((module) => {

module.exports = JSON.parse('[{"id":1,"image":"assets/imgs/releases/caseclosed.jpg","type":"KidxDrip","title":"Case Closed"},{"id":2,"image":"assets/imgs/releases/gravity.jpg","type":"Coco","title":"Gravity"},{"id":3,"image":"assets/imgs/releases/keinwort.jpg","type":"Jeta","title":"Kein Wort"},{"id":4,"image":"assets/imgs/releases/lefaisattention.jpg","type":"Jeta","title":"Le Fais Attention"},{"id":5,"image":"assets/imgs/releases/lilsunshine.jpg","type":"Coco","title":"Lil Sunshine"},{"id":6,"image":"assets/imgs/releases/milano.jpg","type":"Coco","title":"Milano"},{"id":7,"image":"assets/imgs/releases/outofline.jpg","type":"Out of Line","title":"KidxDrip"},{"id":8,"image":"assets/imgs/releases/talkback.jpg","type":"bbyJ ft. Coco","title":"Talk Back"},{"id":9,"image":"assets/imgs/releases/tausendstiche.jpg","type":"Jeta","title":"Tausend Stiche"},{"id":10,"image":"assets/imgs/releases/tequiero.jpg","type":"Lola","title":"Te Quiero"}]');

/***/ })

};
;