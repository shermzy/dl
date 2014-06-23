
function SidebarMenuEffects() {

    function hasParentClass(e, classname) {
        if (e === document)
            return false;
        if (classie.has(e, classname)) {
            return true;
        }
        return e.parentNode && hasParentClass(e.parentNode, classname);
    }

// http://coveroverflow.com/a/11381730/989439
    function mobilecheck() {
        var check = false;
        (function(a) {
            if (/(android|ipad|playbook|silk|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|iris|kindle|lge |maemo|midp|mmp|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows (ce|phone)|xda|xiino/i.test(a) || /1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i.test(a.substr(0, 4)))
                check = true
        })(navigator.userAgent || navigator.vendor || window.opera);
        return check;
    }

    function init() {

        var container = document.getElementById('st-container'),
                buttons = Array.prototype.slice.call(document.querySelectorAll('#st-trigger-effects')),
                // event type (if mobile use touch events)
                eventtype = mobilecheck() ? 'touchstart' : 'click',
                resetMenu = function() {
                    classie.remove(container, 'st-menu-open');
                },
                bodyClickFn = function(evt) {
                    if (!hasParentClass(evt.target, 'st-menu')) {
                        resetMenu();
                        document.removeEventListener(eventtype, bodyClickFn);
                        $('div.overlay').remove();
                        $('#st-trigger-effects').css("pointer-events", "auto");
                    }
                };
        buttons.forEach(function(el, i) {
            var effect = el.getAttribute('data-effect');

            el.addEventListener(eventtype, function(ev) {
                ev.stopPropagation();
                ev.preventDefault();
                container.className = 'st-container'; // clear
                classie.add(container, effect);
                setTimeout(function() {
                    classie.add(container, 'st-menu-open');
                }, 25);
                document.addEventListener(eventtype, bodyClickFn);
            });

        });


    }
    function sidebarOverlay() {

        $('#st-trigger-effects').click(function() {
            $('.st-content').prepend('<div class="overlay"></div>');
            $('#st-trigger-effects').css("pointer-events", "none");
        })

    }

    init();
    sidebarOverlay();
}
function preventCharsInput(ele) {
    ele.keypress(function(e) {
        var a = [];
        var k = e.which;

        for (i = 48; i < 58; i++)
            a.push(i);

        if (!($.inArray(k, a) >= 0))
            e.preventDefault();
    });
    $(ele).bind("paste", function(e) {
        e.preventDefault();
    });
}
function getParameterByName(name) {
    name = name.replace(/[\[]/, "\\[").replace(/[\]]/, "\\]");
    var regex = new RegExp("[\\?&]" + name + "=([^&#]*)"),
            results = regex.exec(location.search);
    return results == null ? "" : decodeURIComponent(results[1].replace(/\+/g, " "));
}
function getUrlParameter(sParam) {
    var sPageURL = window.location.search.substring(1);
    var sURLVariables = sPageURL.split('&');
    for (var i = 0; i < sURLVariables.length; i++) {
        var sParameterName = sURLVariables[i].split('=');
        if (sParameterName[0] == sParam)
        {
            return sParameterName[1];
        }
    }
}
/* Scroll to */
(function($) {
    var version = '1.4.13',
            optionOverrides = {},
            defaults = {
                exclude: [],
                excludeWithin: [],
                offset: 0,
                // one of 'top' or 'left'
                direction: 'top',
                // jQuery set of elements you wish to scroll (for $.smoothScroll).
                //  if null (default), $('html, body').firstScrollable() is used.
                scrollElement: null,
                // only use if you want to override default behavior
                scrollTarget: null,
                // fn(opts) function to be called before scrolling occurs.
                // `this` is the element(s) being scrolled
                beforeScroll: function() {
                },
                // fn(opts) function to be called after scrolling occurs.
                // `this` is the triggering element
                afterScroll: function() {
                },
                easing: 'swing',
                speed: 400,
                // coefficient for "auto" speed
                autoCoefficent: 2,
                // $.fn.smoothScroll only: whether to prevent the default click action
                preventDefault: true
            },
    getScrollable = function(opts) {
        var scrollable = [],
                scrolled = false,
                dir = opts.dir && opts.dir == 'left' ? 'scrollLeft' : 'scrollTop';

        this.each(function() {

            if (this == document || this == window) {
                return;
            }
            var el = $(this);
            if (el[dir]() > 0) {
                scrollable.push(this);
            } else {
                // if scroll(Top|Left) === 0, nudge the element 1px and see if it moves
                el[dir](1);
                scrolled = el[dir]() > 0;
                if (scrolled) {
                    scrollable.push(this);
                }
                // then put it back, of course
                el[dir](0);
            }
        });

        // If no scrollable elements, fall back to <body>,
        // if it's in the jQuery collection
        // (doing this because Safari sets scrollTop async,
        // so can't set it to 1 and immediately get the value.)
        if (!scrollable.length) {
            this.each(function(index) {
                if (this.nodeName === 'BODY') {
                    scrollable = [this];
                }
            });
        }

        // Use the first scrollable element if we're calling firstScrollable()
        if (opts.el === 'first' && scrollable.length > 1) {
            scrollable = [scrollable[0]];
        }

        return scrollable;
    },
            isTouch = 'ontouchend' in document;

    $.fn.extend({
        scrollable: function(dir) {
            var scrl = getScrollable.call(this, {dir: dir});
            return this.pushStack(scrl);
        },
        firstScrollable: function(dir) {
            var scrl = getScrollable.call(this, {el: 'first', dir: dir});
            return this.pushStack(scrl);
        },
        smoothScroll: function(options, extra) {
            options = options || {};

            if (options === 'options') {
                if (!extra) {
                    return this.first().data('ssOpts');
                }
                return this.each(function() {
                    var $this = $(this),
                            opts = $.extend($this.data('ssOpts') || {}, extra);

                    $(this).data('ssOpts', opts);
                });
            }

            var opts = $.extend({}, $.fn.smoothScroll.defaults, options),
                    locationPath = $.smoothScroll.filterPath(location.pathname);

            this
                    .unbind('click.smoothscroll')
                    .bind('click.smoothscroll', function(event) {
                        var link = this,
                                $link = $(this),
                                thisOpts = $.extend({}, opts, $link.data('ssOpts') || {}),
                                exclude = opts.exclude,
                                excludeWithin = thisOpts.excludeWithin,
                                elCounter = 0, ewlCounter = 0,
                                include = true,
                                clickOpts = {},
                                hostMatch = ((location.hostname === link.hostname) || !link.hostname),
                                pathMatch = thisOpts.scrollTarget || ($.smoothScroll.filterPath(link.pathname) || locationPath) === locationPath,
                                thisHash = escapeSelector(link.hash);

                        if (!thisOpts.scrollTarget && (!hostMatch || !pathMatch || !thisHash)) {
                            include = false;
                        } else {
                            while (include && elCounter < exclude.length) {
                                if ($link.is(escapeSelector(exclude[elCounter++]))) {
                                    include = false;
                                }
                            }
                            while (include && ewlCounter < excludeWithin.length) {
                                if ($link.closest(excludeWithin[ewlCounter++]).length) {
                                    include = false;
                                }
                            }
                        }

                        if (include) {

                            if (thisOpts.preventDefault) {
                                event.preventDefault();
                            }

                            $.extend(clickOpts, thisOpts, {
                                scrollTarget: thisOpts.scrollTarget || thisHash,
                                link: link
                            });
                            $.smoothScroll(clickOpts);
                        }
                    });

            return this;
        }
    });

    $.smoothScroll = function(options, px) {
        if (options === 'options' && typeof px === 'object') {
            return $.extend(optionOverrides, px);
        }
        var opts, $scroller, scrollTargetOffset, speed,
                scrollerOffset = 0,
                offPos = 'offset',
                scrollDir = 'scrollTop',
                aniProps = {},
                aniOpts = {},
                scrollprops = [];

        if (typeof options === 'number') {
            opts = $.extend({link: null}, $.fn.smoothScroll.defaults, optionOverrides);
            scrollTargetOffset = options;
        } else {
            opts = $.extend({link: null}, $.fn.smoothScroll.defaults, options || {}, optionOverrides);
            if (opts.scrollElement) {
                offPos = 'position';
                if (opts.scrollElement.css('position') == 'static') {
                    opts.scrollElement.css('position', 'relative');
                }
            }
        }

        scrollDir = opts.direction == 'left' ? 'scrollLeft' : scrollDir;

        if (opts.scrollElement) {
            $scroller = opts.scrollElement;
            if (!(/^(?:HTML|BODY)$/).test($scroller[0].nodeName)) {
                scrollerOffset = $scroller[scrollDir]();
            }
        } else {
            $scroller = $('html, body').firstScrollable(opts.direction);
        }

        // beforeScroll callback function must fire before calculating offset
        opts.beforeScroll.call($scroller, opts);

        scrollTargetOffset = (typeof options === 'number') ? options :
                px ||
                ($(opts.scrollTarget)[offPos]() &&
                        $(opts.scrollTarget)[offPos]()[opts.direction]) ||
                0;

        aniProps[scrollDir] = scrollTargetOffset + scrollerOffset + opts.offset;
        speed = opts.speed;

        // automatically calculate the speed of the scroll based on distance / coefficient
        if (speed === 'auto') {

            // if aniProps[scrollDir] == 0 then we'll use scrollTop() value instead
            speed = aniProps[scrollDir] || $scroller.scrollTop();

            // divide the speed by the coefficient
            speed = speed / opts.autoCoefficent;
        }

        aniOpts = {
            duration: speed,
            easing: opts.easing,
            complete: function() {
                opts.afterScroll.call(opts.link, opts);
            }
        };

        if (opts.step) {
            aniOpts.step = opts.step;
        }

        if ($scroller.length) {
            $scroller.stop().animate(aniProps, aniOpts);
        } else {
            opts.afterScroll.call(opts.link, opts);
        }
    };

    $.smoothScroll.version = version;
    $.smoothScroll.filterPath = function(string) {
        return string
                .replace(/^\//, '')
                .replace(/(?:index|default).[a-zA-Z]{3,4}$/, '')
                .replace(/\/$/, '');
    };

// default options
    $.fn.smoothScroll.defaults = defaults;

    function escapeSelector(str) {
        return str.replace(/(:|\.)/g, '\\$1');
    }

})(jQuery);

/** Used Only For Touch Devices **/
(function(window) {

    // for touch devices: add class cs-hover to the figures when touching the items
    if (Modernizr.touch) {

        // classie.js https://github.com/desandro/classie/blob/master/classie.js
        // class helper functions from bonzo https://github.com/ded/bonzo

        function classReg(className) {
            return new RegExp("(^|\\s+)" + className + "(\\s+|$)");
        }

        // classList support for class management
        // altho to be fair, the api sucks because it won't accept multiple classes at once
        var hasClass, addClass, removeClass;

        if ('classList' in document.documentElement) {
            hasClass = function(elem, c) {
                return elem.classList.contains(c);
            };
            addClass = function(elem, c) {
                elem.classList.add(c);
            };
            removeClass = function(elem, c) {
                elem.classList.remove(c);
            };
        }
        else {
            hasClass = function(elem, c) {
                return classReg(c).test(elem.className);
            };
            addClass = function(elem, c) {
                if (!hasClass(elem, c)) {
                    elem.className = elem.className + ' ' + c;
                }
            };
            removeClass = function(elem, c) {
                elem.className = elem.className.replace(classReg(c), ' ');
            };
        }

        function toggleClass(elem, c) {
            var fn = hasClass(elem, c) ? removeClass : addClass;
            fn(elem, c);
        }

        var classie = {
            // full names
            hasClass: hasClass,
            addClass: addClass,
            removeClass: removeClass,
            toggleClass: toggleClass,
            // short names
            has: hasClass,
            add: addClass,
            remove: removeClass,
            toggle: toggleClass
        };

        // transport
        if (typeof define === 'function' && define.amd) {
            // AMD
            define(classie);
        } else {
            // browser global
            window.classie = classie;
        }

        [].slice.call(document.querySelectorAll('ul.grid > li > figure')).forEach(function(el, i) {
            el.querySelector('figcaption > a').addEventListener('touchstart', function(e) {
                e.stopPropagation();
            }, false);
            el.addEventListener('touchstart', function(e) {
                classie.toggle(this, 'cs-hover');
            }, false);
        });

    }

})(window);

//image compressor

var imageCompressor = {
    /**
     * Receives an Image Object (can be JPG OR PNG) and returns a new Image Object compressed
     * @param {Image} source_img_obj The source Image Object
     * @param {Integer} quality The output quality of Image Object
     * @return {Image} result_image_obj The compressed Image Object
     */

    compress: function(source_img_obj_src, source_img_obj, quality, output_format) {

        var mime_type = "image/jpeg";
        if (output_format != undefined && output_format == "png") {
            mime_type = "image/png";
        }

        console.log(source_img_obj);
        var image = new Image;
        image.src = source_img_obj_src;

        var cvs = document.createElement('canvas');
        cvs.width = source_img_obj[0].naturalWidth;
        cvs.height = source_img_obj[0].naturalHeight;
        console.log(cvs.width + " " + cvs.height);
        var ctx = cvs.getContext("2d").drawImage(image, 0, 0);
        var newImageData = cvs.toDataURL(mime_type, quality / 100);
        var result_image_obj = new Image();
        result_image_obj.src = newImageData;
        return result_image_obj;
    },
    /**
     * Receives an Image Object and upload it to the server via ajax
     * @param {Image} compressed_img_obj The Compressed Image Object
     * @param {String} The server side url to send the POST request
     * @param {String} file_input_name The name of the input that the server will receive with the file
     * @param {String} filename The name of the file that will be sent to the server
     * @param {function} the callback to trigger when the upload is finished.
     */

    upload: function(compressed_img_obj, upload_url, file_input_name, filename, callback) {


        var cvs = document.createElement('canvas');
        cvs.width = compressed_img_obj.naturalWidth;
        cvs.height = compressed_img_obj.naturalHeight;
        var ctx = cvs.getContext("2d").drawImage(compressed_img_obj, 0, 0);

        //ADD sendAsBinary compatibilty to older browsers
        if (XMLHttpRequest.prototype.sendAsBinary === undefined) {
            XMLHttpRequest.prototype.sendAsBinary = function(string) {
                var bytes = Array.prototype.map.call(string, function(c) {
                    return c.charCodeAt(0) & 0xff;
                });
                this.send(new Uint8Array(bytes).buffer);
            };
        }

        var type = "image/jpeg";
        if (filename.substr(-4) == ".png") {
            type = "image/png";
        }

        var data = cvs.toDataURL(type);
        data = data.replace('data:' + type + ';base64,', '');

        var xhr = new XMLHttpRequest();
        xhr.open('POST', upload_url, true);
        var boundary = 'someboundary';

        xhr.setRequestHeader('Content-Type', 'multipart/form-data; boundary=' + boundary);
        xhr.sendAsBinary(['--' + boundary, 'Content-Disposition: form-data; name="' + file_input_name + '"; filename="' + filename + '"', 'Content-Type: ' + type, '', atob(data), '--' + boundary + '--'].join('\r\n'));

        xhr.onreadystatechange = function() {
            if (this.readyState == 4 && this.status == 200) {
                callback(this.responseText);
            }
        };


    }
};
// top bar scroll effect
;
(function($, window, document, undefined) {

    var pluginName = "scrollUpMenu";
    var defaults = {
        waitTime: 0,
        transitionTime: 0,
        menuCss: {'position': 'fixed', 'top': '0'}
    };

    var lastScrollTop = 0;
    var $header;
    var timer;
    var pixelsFromTheTop;

    // The actual plugin constructor
    function Plugin(element, options) {
        this.element = element;
        this.settings = $.extend({}, defaults, options);
        this._defaults = defaults;
        this._name = pluginName;
        this.init();
    }

    Plugin.prototype = {
        init: function() {

            var self = this;
            $header = $(this.element);
            $header.css(self.settings.menuCss);
            pixelsFromTheTop = $header.height();

            $header.next().css({'margin-top': pixelsFromTheTop});

            $(window).bind('scroll', function() {
                clearTimeout(timer);
                timer = setTimeout(function() {
                    self.refresh(self.settings)
                }, self.settings.waitTime);
            });
        },
        refresh: function(settings) {
            // Stopped scrolling, do stuff...				   			
            var scrollTop = $(window).scrollTop();

            if (scrollTop > lastScrollTop && scrollTop > pixelsFromTheTop) { // ensure that the header doesnt disappear too early
                // downscroll
                $header.addClass("nav-up");
            } else {
                // upscroll
                $header.removeClass("nav-up");
            }
            lastScrollTop = scrollTop;
        }
    };

    $.fn[ pluginName ] = function(options) {
        return this.each(function() {
            if (!$.data(this, "plugin_" + pluginName)) {
                $.data(this, "plugin_" + pluginName, new Plugin(this, options));
            }
        });
    };

})(jQuery, window, document);

//! moment.js
//! version : 2.6.0
//! authors : Tim Wood, Iskren Chernev, Moment.js contributors
//! license : MIT
//! momentjs.com
(function(a) {
    function b() {
        return{empty: !1, unusedTokens: [], unusedInput: [], overflow: -2, charsLeftOver: 0, nullInput: !1, invalidMonth: null, invalidFormat: !1, userInvalidated: !1, iso: !1}
    }
    function c(a, b) {
        function c() {
            ib.suppressDeprecationWarnings === !1 && "undefined" != typeof console && console.warn && console.warn("Deprecation warning: " + a)
        }
        var d = !0;
        return i(function() {
            return d && (c(), d = !1), b.apply(this, arguments)
        }, b)
    }
    function d(a, b) {
        return function(c) {
            return l(a.call(this, c), b)
        }
    }
    function e(a, b) {
        return function(c) {
            return this.lang().ordinal(a.call(this, c), b)
        }
    }
    function f() {
    }
    function g(a) {
        y(a), i(this, a)
    }
    function h(a) {
        var b = r(a), c = b.year || 0, d = b.quarter || 0, e = b.month || 0, f = b.week || 0, g = b.day || 0, h = b.hour || 0, i = b.minute || 0, j = b.second || 0, k = b.millisecond || 0;
        this._milliseconds = +k + 1e3 * j + 6e4 * i + 36e5 * h, this._days = +g + 7 * f, this._months = +e + 3 * d + 12 * c, this._data = {}, this._bubble()
    }
    function i(a, b) {
        for (var c in b)
            b.hasOwnProperty(c) && (a[c] = b[c]);
        return b.hasOwnProperty("toString") && (a.toString = b.toString), b.hasOwnProperty("valueOf") && (a.valueOf = b.valueOf), a
    }
    function j(a) {
        var b, c = {};
        for (b in a)
            a.hasOwnProperty(b) && wb.hasOwnProperty(b) && (c[b] = a[b]);
        return c
    }
    function k(a) {
        return 0 > a ? Math.ceil(a) : Math.floor(a)
    }
    function l(a, b, c) {
        for (var d = "" + Math.abs(a), e = a >= 0; d.length < b; )
            d = "0" + d;
        return(e ? c ? "+" : "" : "-") + d
    }
    function m(a, b, c, d) {
        var e = b._milliseconds, f = b._days, g = b._months;
        d = null == d ? !0 : d, e && a._d.setTime(+a._d + e * c), f && db(a, "Date", cb(a, "Date") + f * c), g && bb(a, cb(a, "Month") + g * c), d && ib.updateOffset(a, f || g)
    }
    function n(a) {
        return"[object Array]" === Object.prototype.toString.call(a)
    }
    function o(a) {
        return"[object Date]" === Object.prototype.toString.call(a) || a instanceof Date
    }
    function p(a, b, c) {
        var d, e = Math.min(a.length, b.length), f = Math.abs(a.length - b.length), g = 0;
        for (d = 0; e > d; d++)
            (c && a[d] !== b[d] || !c && t(a[d]) !== t(b[d])) && g++;
        return g + f
    }
    function q(a) {
        if (a) {
            var b = a.toLowerCase().replace(/(.)s$/, "$1");
            a = Zb[a] || $b[b] || b
        }
        return a
    }
    function r(a) {
        var b, c, d = {};
        for (c in a)
            a.hasOwnProperty(c) && (b = q(c), b && (d[b] = a[c]));
        return d
    }
    function s(b) {
        var c, d;
        if (0 === b.indexOf("week"))
            c = 7, d = "day";
        else {
            if (0 !== b.indexOf("month"))
                return;
            c = 12, d = "month"
        }
        ib[b] = function(e, f) {
            var g, h, i = ib.fn._lang[b], j = [];
            if ("number" == typeof e && (f = e, e = a), h = function(a) {
                var b = ib().utc().set(d, a);
                return i.call(ib.fn._lang, b, e || "")
            }, null != f)
                return h(f);
            for (g = 0; c > g; g++)
                j.push(h(g));
            return j
        }
    }
    function t(a) {
        var b = +a, c = 0;
        return 0 !== b && isFinite(b) && (c = b >= 0 ? Math.floor(b) : Math.ceil(b)), c
    }
    function u(a, b) {
        return new Date(Date.UTC(a, b + 1, 0)).getUTCDate()
    }
    function v(a, b, c) {
        return $(ib([a, 11, 31 + b - c]), b, c).week
    }
    function w(a) {
        return x(a) ? 366 : 365
    }
    function x(a) {
        return a % 4 === 0 && a % 100 !== 0 || a % 400 === 0
    }
    function y(a) {
        var b;
        a._a && -2 === a._pf.overflow && (b = a._a[pb] < 0 || a._a[pb] > 11 ? pb : a._a[qb] < 1 || a._a[qb] > u(a._a[ob], a._a[pb]) ? qb : a._a[rb] < 0 || a._a[rb] > 23 ? rb : a._a[sb] < 0 || a._a[sb] > 59 ? sb : a._a[tb] < 0 || a._a[tb] > 59 ? tb : a._a[ub] < 0 || a._a[ub] > 999 ? ub : -1, a._pf._overflowDayOfYear && (ob > b || b > qb) && (b = qb), a._pf.overflow = b)
    }
    function z(a) {
        return null == a._isValid && (a._isValid = !isNaN(a._d.getTime()) && a._pf.overflow < 0 && !a._pf.empty && !a._pf.invalidMonth && !a._pf.nullInput && !a._pf.invalidFormat && !a._pf.userInvalidated, a._strict && (a._isValid = a._isValid && 0 === a._pf.charsLeftOver && 0 === a._pf.unusedTokens.length)), a._isValid
    }
    function A(a) {
        return a ? a.toLowerCase().replace("_", "-") : a
    }
    function B(a, b) {
        return b._isUTC ? ib(a).zone(b._offset || 0) : ib(a).local()
    }
    function C(a, b) {
        return b.abbr = a, vb[a] || (vb[a] = new f), vb[a].set(b), vb[a]
    }
    function D(a) {
        delete vb[a]
    }
    function E(a) {
        var b, c, d, e, f = 0, g = function(a) {
            if (!vb[a] && xb)
                try {
                    require("./lang/" + a)
                } catch (b) {
                }
            return vb[a]
        };
        if (!a)
            return ib.fn._lang;
        if (!n(a)) {
            if (c = g(a))
                return c;
            a = [a]
        }
        for (; f < a.length; ) {
            for (e = A(a[f]).split("-"), b = e.length, d = A(a[f + 1]), d = d ? d.split("-") : null; b > 0; ) {
                if (c = g(e.slice(0, b).join("-")))
                    return c;
                if (d && d.length >= b && p(e, d, !0) >= b - 1)
                    break;
                b--
            }
            f++
        }
        return ib.fn._lang
    }
    function F(a) {
        return a.match(/\[[\s\S]/) ? a.replace(/^\[|\]$/g, "") : a.replace(/\\/g, "")
    }
    function G(a) {
        var b, c, d = a.match(Bb);
        for (b = 0, c = d.length; c > b; b++)
            d[b] = cc[d[b]] ? cc[d[b]] : F(d[b]);
        return function(e) {
            var f = "";
            for (b = 0; c > b; b++)
                f += d[b]instanceof Function ? d[b].call(e, a) : d[b];
            return f
        }
    }
    function H(a, b) {
        return a.isValid() ? (b = I(b, a.lang()), _b[b] || (_b[b] = G(b)), _b[b](a)) : a.lang().invalidDate()
    }
    function I(a, b) {
        function c(a) {
            return b.longDateFormat(a) || a
        }
        var d = 5;
        for (Cb.lastIndex = 0; d >= 0 && Cb.test(a); )
            a = a.replace(Cb, c), Cb.lastIndex = 0, d -= 1;
        return a
    }
    function J(a, b) {
        var c, d = b._strict;
        switch (a) {
            case"Q":
                return Nb;
            case"DDDD":
                return Pb;
            case"YYYY":
            case"GGGG":
            case"gggg":
                return d ? Qb : Fb;
            case"Y":
            case"G":
            case"g":
                return Sb;
            case"YYYYYY":
            case"YYYYY":
            case"GGGGG":
            case"ggggg":
                return d ? Rb : Gb;
            case"S":
                if (d)
                    return Nb;
            case"SS":
                if (d)
                    return Ob;
            case"SSS":
                if (d)
                    return Pb;
            case"DDD":
                return Eb;
            case"MMM":
            case"MMMM":
            case"dd":
            case"ddd":
            case"dddd":
                return Ib;
            case"a":
            case"A":
                return E(b._l)._meridiemParse;
            case"X":
                return Lb;
            case"Z":
            case"ZZ":
                return Jb;
            case"T":
                return Kb;
            case"SSSS":
                return Hb;
            case"MM":
            case"DD":
            case"YY":
            case"GG":
            case"gg":
            case"HH":
            case"hh":
            case"mm":
            case"ss":
            case"ww":
            case"WW":
                return d ? Ob : Db;
            case"M":
            case"D":
            case"d":
            case"H":
            case"h":
            case"m":
            case"s":
            case"w":
            case"W":
            case"e":
            case"E":
                return Db;
            case"Do":
                return Mb;
            default:
                return c = new RegExp(R(Q(a.replace("\\", "")), "i"))
        }
    }
    function K(a) {
        a = a || "";
        var b = a.match(Jb) || [], c = b[b.length - 1] || [], d = (c + "").match(Xb) || ["-", 0, 0], e = +(60 * d[1]) + t(d[2]);
        return"+" === d[0] ? -e : e
    }
    function L(a, b, c) {
        var d, e = c._a;
        switch (a) {
            case"Q":
                null != b && (e[pb] = 3 * (t(b) - 1));
                break;
            case"M":
            case"MM":
                null != b && (e[pb] = t(b) - 1);
                break;
            case"MMM":
            case"MMMM":
                d = E(c._l).monthsParse(b), null != d ? e[pb] = d : c._pf.invalidMonth = b;
                break;
            case"D":
            case"DD":
                null != b && (e[qb] = t(b));
                break;
            case"Do":
                null != b && (e[qb] = t(parseInt(b, 10)));
                break;
            case"DDD":
            case"DDDD":
                null != b && (c._dayOfYear = t(b));
                break;
            case"YY":
                e[ob] = ib.parseTwoDigitYear(b);
                break;
            case"YYYY":
            case"YYYYY":
            case"YYYYYY":
                e[ob] = t(b);
                break;
            case"a":
            case"A":
                c._isPm = E(c._l).isPM(b);
                break;
            case"H":
            case"HH":
            case"h":
            case"hh":
                e[rb] = t(b);
                break;
            case"m":
            case"mm":
                e[sb] = t(b);
                break;
            case"s":
            case"ss":
                e[tb] = t(b);
                break;
            case"S":
            case"SS":
            case"SSS":
            case"SSSS":
                e[ub] = t(1e3 * ("0." + b));
                break;
            case"X":
                c._d = new Date(1e3 * parseFloat(b));
                break;
            case"Z":
            case"ZZ":
                c._useUTC = !0, c._tzm = K(b);
                break;
            case"w":
            case"ww":
            case"W":
            case"WW":
            case"d":
            case"dd":
            case"ddd":
            case"dddd":
            case"e":
            case"E":
                a = a.substr(0, 1);
            case"gg":
            case"gggg":
            case"GG":
            case"GGGG":
            case"GGGGG":
                a = a.substr(0, 2), b && (c._w = c._w || {}, c._w[a] = b)
        }
    }
    function M(a) {
        var b, c, d, e, f, g, h, i, j, k, l = [];
        if (!a._d) {
            for (d = O(a), a._w && null == a._a[qb] && null == a._a[pb] && (f = function(b) {
                var c = parseInt(b, 10);
                return b ? b.length < 3 ? c > 68 ? 1900 + c : 2e3 + c : c : null == a._a[ob] ? ib().weekYear() : a._a[ob]
            }, g = a._w, null != g.GG || null != g.W || null != g.E?h = _(f(g.GG), g.W || 1, g.E, 4, 1):(i = E(a._l), j = null != g.d?X(g.d, i):null != g.e?parseInt(g.e, 10) + i._week.dow:0, k = parseInt(g.w, 10) || 1, null != g.d && j < i._week.dow && k++, h = _(f(g.gg), k, j, i._week.doy, i._week.dow)), a._a[ob] = h.year, a._dayOfYear = h.dayOfYear), a._dayOfYear && (e = null == a._a[ob]?d[ob]:a._a[ob], a._dayOfYear > w(e) && (a._pf._overflowDayOfYear = !0), c = W(e, 0, a._dayOfYear), a._a[pb] = c.getUTCMonth(), a._a[qb] = c.getUTCDate()), b = 0; 3 > b && null == a._a[b]; ++b)
                a._a[b] = l[b] = d[b];
            for (; 7 > b; b++)
                a._a[b] = l[b] = null == a._a[b] ? 2 === b ? 1 : 0 : a._a[b];
            l[rb] += t((a._tzm || 0) / 60), l[sb] += t((a._tzm || 0) % 60), a._d = (a._useUTC ? W : V).apply(null, l)
        }
    }
    function N(a) {
        var b;
        a._d || (b = r(a._i), a._a = [b.year, b.month, b.day, b.hour, b.minute, b.second, b.millisecond], M(a))
    }
    function O(a) {
        var b = new Date;
        return a._useUTC ? [b.getUTCFullYear(), b.getUTCMonth(), b.getUTCDate()] : [b.getFullYear(), b.getMonth(), b.getDate()]
    }
    function P(a) {
        a._a = [], a._pf.empty = !0;
        var b, c, d, e, f, g = E(a._l), h = "" + a._i, i = h.length, j = 0;
        for (d = I(a._f, g).match(Bb) || [], b = 0; b < d.length; b++)
            e = d[b], c = (h.match(J(e, a)) || [])[0], c && (f = h.substr(0, h.indexOf(c)), f.length > 0 && a._pf.unusedInput.push(f), h = h.slice(h.indexOf(c) + c.length), j += c.length), cc[e] ? (c ? a._pf.empty = !1 : a._pf.unusedTokens.push(e), L(e, c, a)) : a._strict && !c && a._pf.unusedTokens.push(e);
        a._pf.charsLeftOver = i - j, h.length > 0 && a._pf.unusedInput.push(h), a._isPm && a._a[rb] < 12 && (a._a[rb] += 12), a._isPm === !1 && 12 === a._a[rb] && (a._a[rb] = 0), M(a), y(a)
    }
    function Q(a) {
        return a.replace(/\\(\[)|\\(\])|\[([^\]\[]*)\]|\\(.)/g, function(a, b, c, d, e) {
            return b || c || d || e
        })
    }
    function R(a) {
        return a.replace(/[-\/\\^$*+?.()|[\]{}]/g, "\\$&")
    }
    function S(a) {
        var c, d, e, f, g;
        if (0 === a._f.length)
            return a._pf.invalidFormat = !0, void(a._d = new Date(0 / 0));
        for (f = 0; f < a._f.length; f++)
            g = 0, c = i({}, a), c._pf = b(), c._f = a._f[f], P(c), z(c) && (g += c._pf.charsLeftOver, g += 10 * c._pf.unusedTokens.length, c._pf.score = g, (null == e || e > g) && (e = g, d = c));
        i(a, d || c)
    }
    function T(a) {
        var b, c, d = a._i, e = Tb.exec(d);
        if (e) {
            for (a._pf.iso = !0, b = 0, c = Vb.length; c > b; b++)
                if (Vb[b][1].exec(d)) {
                    a._f = Vb[b][0] + (e[6] || " ");
                    break
                }
            for (b = 0, c = Wb.length; c > b; b++)
                if (Wb[b][1].exec(d)) {
                    a._f += Wb[b][0];
                    break
                }
            d.match(Jb) && (a._f += "Z"), P(a)
        } else
            ib.createFromInputFallback(a)
    }
    function U(b) {
        var c = b._i, d = yb.exec(c);
        c === a ? b._d = new Date : d ? b._d = new Date(+d[1]) : "string" == typeof c ? T(b) : n(c) ? (b._a = c.slice(0), M(b)) : o(c) ? b._d = new Date(+c) : "object" == typeof c ? N(b) : "number" == typeof c ? b._d = new Date(c) : ib.createFromInputFallback(b)
    }
    function V(a, b, c, d, e, f, g) {
        var h = new Date(a, b, c, d, e, f, g);
        return 1970 > a && h.setFullYear(a), h
    }
    function W(a) {
        var b = new Date(Date.UTC.apply(null, arguments));
        return 1970 > a && b.setUTCFullYear(a), b
    }
    function X(a, b) {
        if ("string" == typeof a)
            if (isNaN(a)) {
                if (a = b.weekdaysParse(a), "number" != typeof a)
                    return null
            } else
                a = parseInt(a, 10);
        return a
    }
    function Y(a, b, c, d, e) {
        return e.relativeTime(b || 1, !!c, a, d)
    }
    function Z(a, b, c) {
        var d = nb(Math.abs(a) / 1e3), e = nb(d / 60), f = nb(e / 60), g = nb(f / 24), h = nb(g / 365), i = 45 > d && ["s", d] || 1 === e && ["m"] || 45 > e && ["mm", e] || 1 === f && ["h"] || 22 > f && ["hh", f] || 1 === g && ["d"] || 25 >= g && ["dd", g] || 45 >= g && ["M"] || 345 > g && ["MM", nb(g / 30)] || 1 === h && ["y"] || ["yy", h];
        return i[2] = b, i[3] = a > 0, i[4] = c, Y.apply({}, i)
    }
    function $(a, b, c) {
        var d, e = c - b, f = c - a.day();
        return f > e && (f -= 7), e - 7 > f && (f += 7), d = ib(a).add("d", f), {week: Math.ceil(d.dayOfYear() / 7), year: d.year()}
    }
    function _(a, b, c, d, e) {
        var f, g, h = W(a, 0, 1).getUTCDay();
        return c = null != c ? c : e, f = e - h + (h > d ? 7 : 0) - (e > h ? 7 : 0), g = 7 * (b - 1) + (c - e) + f + 1, {year: g > 0 ? a : a - 1, dayOfYear: g > 0 ? g : w(a - 1) + g}
    }
    function ab(b) {
        var c = b._i, d = b._f;
        return null === c || d === a && "" === c ? ib.invalid({nullInput: !0}) : ("string" == typeof c && (b._i = c = E().preparse(c)), ib.isMoment(c) ? (b = j(c), b._d = new Date(+c._d)) : d ? n(d) ? S(b) : P(b) : U(b), new g(b))
    }
    function bb(a, b) {
        var c;
        return"string" == typeof b && (b = a.lang().monthsParse(b), "number" != typeof b) ? a : (c = Math.min(a.date(), u(a.year(), b)), a._d["set" + (a._isUTC ? "UTC" : "") + "Month"](b, c), a)
    }
    function cb(a, b) {
        return a._d["get" + (a._isUTC ? "UTC" : "") + b]()
    }
    function db(a, b, c) {
        return"Month" === b ? bb(a, c) : a._d["set" + (a._isUTC ? "UTC" : "") + b](c)
    }
    function eb(a, b) {
        return function(c) {
            return null != c ? (db(this, a, c), ib.updateOffset(this, b), this) : cb(this, a)
        }
    }
    function fb(a) {
        ib.duration.fn[a] = function() {
            return this._data[a]
        }
    }
    function gb(a, b) {
        ib.duration.fn["as" + a] = function() {
            return+this / b
        }
    }
    function hb(a) {
        "undefined" == typeof ender && (jb = mb.moment, mb.moment = a ? c("Accessing Moment through the global scope is deprecated, and will be removed in an upcoming release.", ib) : ib)
    }
    for (var ib, jb, kb, lb = "2.6.0", mb = "undefined" != typeof global ? global : this, nb = Math.round, ob = 0, pb = 1, qb = 2, rb = 3, sb = 4, tb = 5, ub = 6, vb = {}, wb = {_isAMomentObject: null, _i: null, _f: null, _l: null, _strict: null, _isUTC: null, _offset: null, _pf: null, _lang: null}, xb = "undefined" != typeof module && module.exports, yb = /^\/?Date\((\-?\d+)/i, zb = /(\-)?(?:(\d*)\.)?(\d+)\:(\d+)(?:\:(\d+)\.?(\d{3})?)?/, Ab = /^(-)?P(?:(?:([0-9,.]*)Y)?(?:([0-9,.]*)M)?(?:([0-9,.]*)D)?(?:T(?:([0-9,.]*)H)?(?:([0-9,.]*)M)?(?:([0-9,.]*)S)?)?|([0-9,.]*)W)$/, Bb = /(\[[^\[]*\])|(\\)?(Mo|MM?M?M?|Do|DDDo|DD?D?D?|ddd?d?|do?|w[o|w]?|W[o|W]?|Q|YYYYYY|YYYYY|YYYY|YY|gg(ggg?)?|GG(GGG?)?|e|E|a|A|hh?|HH?|mm?|ss?|S{1,4}|X|zz?|ZZ?|.)/g, Cb = /(\[[^\[]*\])|(\\)?(LT|LL?L?L?|l{1,4})/g, Db = /\d\d?/, Eb = /\d{1,3}/, Fb = /\d{1,4}/, Gb = /[+\-]?\d{1,6}/, Hb = /\d+/, Ib = /[0-9]*['a-z\u00A0-\u05FF\u0700-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]+|[\u0600-\u06FF\/]+(\s*?[\u0600-\u06FF]+){1,2}/i, Jb = /Z|[\+\-]\d\d:?\d\d/gi, Kb = /T/i, Lb = /[\+\-]?\d+(\.\d{1,3})?/, Mb = /\d{1,2}/, Nb = /\d/, Ob = /\d\d/, Pb = /\d{3}/, Qb = /\d{4}/, Rb = /[+-]?\d{6}/, Sb = /[+-]?\d+/, Tb = /^\s*(?:[+-]\d{6}|\d{4})-(?:(\d\d-\d\d)|(W\d\d$)|(W\d\d-\d)|(\d\d\d))((T| )(\d\d(:\d\d(:\d\d(\.\d+)?)?)?)?([\+\-]\d\d(?::?\d\d)?|\s*Z)?)?$/, Ub = "YYYY-MM-DDTHH:mm:ssZ", Vb = [["YYYYYY-MM-DD", /[+-]\d{6}-\d{2}-\d{2}/], ["YYYY-MM-DD", /\d{4}-\d{2}-\d{2}/], ["GGGG-[W]WW-E", /\d{4}-W\d{2}-\d/], ["GGGG-[W]WW", /\d{4}-W\d{2}/], ["YYYY-DDD", /\d{4}-\d{3}/]], Wb = [["HH:mm:ss.SSSS", /(T| )\d\d:\d\d:\d\d\.\d+/], ["HH:mm:ss", /(T| )\d\d:\d\d:\d\d/], ["HH:mm", /(T| )\d\d:\d\d/], ["HH", /(T| )\d\d/]], Xb = /([\+\-]|\d\d)/gi, Yb = ("Date|Hours|Minutes|Seconds|Milliseconds".split("|"), {Milliseconds: 1, Seconds: 1e3, Minutes: 6e4, Hours: 36e5, Days: 864e5, Months: 2592e6, Years: 31536e6}), Zb = {ms: "millisecond", s: "second", m: "minute", h: "hour", d: "day", D: "date", w: "week", W: "isoWeek", M: "month", Q: "quarter", y: "year", DDD: "dayOfYear", e: "weekday", E: "isoWeekday", gg: "weekYear", GG: "isoWeekYear"}, $b = {dayofyear: "dayOfYear", isoweekday: "isoWeekday", isoweek: "isoWeek", weekyear: "weekYear", isoweekyear: "isoWeekYear"}, _b = {}, ac = "DDD w W M D d".split(" "), bc = "M D H h m s w W".split(" "), cc = {M: function() {
            return this.month() + 1
        }, MMM: function(a) {
            return this.lang().monthsShort(this, a)
        }, MMMM: function(a) {
            return this.lang().months(this, a)
        }, D: function() {
            return this.date()
        }, DDD: function() {
            return this.dayOfYear()
        }, d: function() {
            return this.day()
        }, dd: function(a) {
            return this.lang().weekdaysMin(this, a)
        }, ddd: function(a) {
            return this.lang().weekdaysShort(this, a)
        }, dddd: function(a) {
            return this.lang().weekdays(this, a)
        }, w: function() {
            return this.week()
        }, W: function() {
            return this.isoWeek()
        }, YY: function() {
            return l(this.year() % 100, 2)
        }, YYYY: function() {
            return l(this.year(), 4)
        }, YYYYY: function() {
            return l(this.year(), 5)
        }, YYYYYY: function() {
            var a = this.year(), b = a >= 0 ? "+" : "-";
            return b + l(Math.abs(a), 6)
        }, gg: function() {
            return l(this.weekYear() % 100, 2)
        }, gggg: function() {
            return l(this.weekYear(), 4)
        }, ggggg: function() {
            return l(this.weekYear(), 5)
        }, GG: function() {
            return l(this.isoWeekYear() % 100, 2)
        }, GGGG: function() {
            return l(this.isoWeekYear(), 4)
        }, GGGGG: function() {
            return l(this.isoWeekYear(), 5)
        }, e: function() {
            return this.weekday()
        }, E: function() {
            return this.isoWeekday()
        }, a: function() {
            return this.lang().meridiem(this.hours(), this.minutes(), !0)
        }, A: function() {
            return this.lang().meridiem(this.hours(), this.minutes(), !1)
        }, H: function() {
            return this.hours()
        }, h: function() {
            return this.hours() % 12 || 12
        }, m: function() {
            return this.minutes()
        }, s: function() {
            return this.seconds()
        }, S: function() {
            return t(this.milliseconds() / 100)
        }, SS: function() {
            return l(t(this.milliseconds() / 10), 2)
        }, SSS: function() {
            return l(this.milliseconds(), 3)
        }, SSSS: function() {
            return l(this.milliseconds(), 3)
        }, Z: function() {
            var a = -this.zone(), b = "+";
            return 0 > a && (a = -a, b = "-"), b + l(t(a / 60), 2) + ":" + l(t(a) % 60, 2)
        }, ZZ: function() {
            var a = -this.zone(), b = "+";
            return 0 > a && (a = -a, b = "-"), b + l(t(a / 60), 2) + l(t(a) % 60, 2)
        }, z: function() {
            return this.zoneAbbr()
        }, zz: function() {
            return this.zoneName()
        }, X: function() {
            return this.unix()
        }, Q: function() {
            return this.quarter()
        }}, dc = ["months", "monthsShort", "weekdays", "weekdaysShort", "weekdaysMin"]; ac.length; )
        kb = ac.pop(), cc[kb + "o"] = e(cc[kb], kb);
    for (; bc.length; )
        kb = bc.pop(), cc[kb + kb] = d(cc[kb], 2);
    for (cc.DDDD = d(cc.DDD, 3), i(f.prototype, {set:function(a) {
        var b, c;
        for (c in a)
            b = a[c], "function" == typeof b ? this[c] = b : this["_" + c] = b
    }, _months:"January_February_March_April_May_June_July_August_September_October_November_December".split("_"), months:function(a) {
        return this._months[a.month()]
    }, _monthsShort:"Jan_Feb_Mar_Apr_May_Jun_Jul_Aug_Sep_Oct_Nov_Dec".split("_"), monthsShort:function(a) {
        return this._monthsShort[a.month()]
    }, monthsParse:function(a) {
        var b, c, d;
        for (this._monthsParse || (this._monthsParse = []), b = 0; 12 > b; b++)
            if (this._monthsParse[b] || (c = ib.utc([2e3, b]), d = "^" + this.months(c, "") + "|^" + this.monthsShort(c, ""), this._monthsParse[b] = new RegExp(d.replace(".", ""), "i")), this._monthsParse[b].test(a))
                return b
    }, _weekdays:"Sunday_Monday_Tuesday_Wednesday_Thursday_Friday_Saturday".split("_"), weekdays:function(a) {
        return this._weekdays[a.day()]
    }, _weekdaysShort:"Sun_Mon_Tue_Wed_Thu_Fri_Sat".split("_"), weekdaysShort:function(a) {
        return this._weekdaysShort[a.day()]
    }, _weekdaysMin:"Su_Mo_Tu_We_Th_Fr_Sa".split("_"), weekdaysMin:function(a) {
        return this._weekdaysMin[a.day()]
    }, weekdaysParse:function(a) {
        var b, c, d;
        for (this._weekdaysParse || (this._weekdaysParse = []), b = 0; 7 > b; b++)
            if (this._weekdaysParse[b] || (c = ib([2e3, 1]).day(b), d = "^" + this.weekdays(c, "") + "|^" + this.weekdaysShort(c, "") + "|^" + this.weekdaysMin(c, ""), this._weekdaysParse[b] = new RegExp(d.replace(".", ""), "i")), this._weekdaysParse[b].test(a))
                return b
    }, _longDateFormat:{LT:"h:mm A", L:"MM/DD/YYYY", LL:"MMMM D YYYY", LLL:"MMMM D YYYY LT", LLLL:"dddd, MMMM D YYYY LT"}, longDateFormat:function(a) {
        var b = this._longDateFormat[a];
        return!b && this._longDateFormat[a.toUpperCase()] && (b = this._longDateFormat[a.toUpperCase()].replace(/MMMM|MM|DD|dddd/g, function(a) {
            return a.slice(1)
        }), this._longDateFormat[a] = b), b
    }, isPM:function(a) {
        return"p" === (a + "").toLowerCase().charAt(0)
    }, _meridiemParse:/[ap]\.?m?\.?/i, meridiem:function(a, b, c) {
        return a > 11 ? c ? "pm" : "PM" : c ? "am" : "AM"
    }, _calendar:{sameDay:"[Today at] LT", nextDay:"[Tomorrow at] LT", nextWeek:"dddd [at] LT", lastDay:"[Yesterday at] LT", lastWeek:"[Last] dddd [at] LT", sameElse:"L"}, calendar:function(a, b) {
        var c = this._calendar[a];
        return"function" == typeof c ? c.apply(b) : c
    }, _relativeTime:{future:"in %s", past:"%s ago", s:"a few seconds", m:"a minute", mm:"%d minutes", h:"an hour", hh:"%d hours", d:"a day", dd:"%d days", M:"a month", MM:"%d months", y:"a year", yy:"%d years"}, relativeTime:function(a, b, c, d) {
        var e = this._relativeTime[c];
        return"function" == typeof e ? e(a, b, c, d) : e.replace(/%d/i, a)
    }, pastFuture:function(a, b) {
        var c = this._relativeTime[a > 0 ? "future" : "past"];
        return"function" == typeof c ? c(b) : c.replace(/%s/i, b)
    }, ordinal:function(a) {
        return this._ordinal.replace("%d", a)
    }, _ordinal:"%d", preparse:function(a) {
        return a
    }, postformat:function(a) {
        return a
    }, week:function(a) {
        return $(a, this._week.dow, this._week.doy).week
    }, _week:{dow:0, doy:6}, _invalidDate:"Invalid date", invalidDate:function() {
        return this._invalidDate
    }}), ib = function(c, d, e, f) {
        var g;
        return"boolean" == typeof e && (f = e, e = a), g = {}, g._isAMomentObject = !0, g._i = c, g._f = d, g._l = e, g._strict = f, g._isUTC = !1, g._pf = b(), ab(g)
    }, ib.suppressDeprecationWarnings = !1, ib.createFromInputFallback = c("moment construction falls back to js Date. This is discouraged and will be removed in upcoming major release. Please refer to https://github.com/moment/moment/issues/1407 for more info.", function(a) {
        a._d = new Date(a._i)
    }), ib.utc = function(c, d, e, f) {
        var g;
        return"boolean" == typeof e && (f = e, e = a), g = {}, g._isAMomentObject = !0, g._useUTC = !0, g._isUTC = !0, g._l = e, g._i = c, g._f = d, g._strict = f, g._pf = b(), ab(g).utc()
    }, ib.unix = function(a) {
        return ib(1e3 * a)
    }, ib.duration = function(a, b) {
        var c, d, e, f = a, g = null;
        return ib.isDuration(a) ? f = {ms: a._milliseconds, d: a._days, M: a._months} : "number" == typeof a ? (f = {}, b ? f[b] = a : f.milliseconds = a) : (g = zb.exec(a)) ? (c = "-" === g[1] ? -1 : 1, f = {y: 0, d: t(g[qb]) * c, h: t(g[rb]) * c, m: t(g[sb]) * c, s: t(g[tb]) * c, ms: t(g[ub]) * c}) : (g = Ab.exec(a)) && (c = "-" === g[1] ? -1 : 1, e = function(a) {
            var b = a && parseFloat(a.replace(",", "."));
            return(isNaN(b) ? 0 : b) * c
        }, f = {y: e(g[2]), M: e(g[3]), d: e(g[4]), h: e(g[5]), m: e(g[6]), s: e(g[7]), w: e(g[8])}), d = new h(f), ib.isDuration(a) && a.hasOwnProperty("_lang") && (d._lang = a._lang), d
    }, ib.version = lb, ib.defaultFormat = Ub, ib.momentProperties = wb, ib.updateOffset = function() {
    }, ib.lang = function(a, b) {
        var c;
        return a ? (b ? C(A(a), b) : null === b ? (D(a), a = "en") : vb[a] || E(a), c = ib.duration.fn._lang = ib.fn._lang = E(a), c._abbr) : ib.fn._lang._abbr
    }, ib.langData = function(a) {
        return a && a._lang && a._lang._abbr && (a = a._lang._abbr), E(a)
    }, ib.isMoment = function(a) {
        return a instanceof g || null != a && a.hasOwnProperty("_isAMomentObject")
    }, ib.isDuration = function(a) {
        return a instanceof h
    }, kb = dc.length - 1; kb >= 0; --kb)
        s(dc[kb]);
    ib.normalizeUnits = function(a) {
        return q(a)
    }, ib.invalid = function(a) {
        var b = ib.utc(0 / 0);
        return null != a ? i(b._pf, a) : b._pf.userInvalidated = !0, b
    }, ib.parseZone = function() {
        return ib.apply(null, arguments).parseZone()
    }, ib.parseTwoDigitYear = function(a) {
        return t(a) + (t(a) > 68 ? 1900 : 2e3)
    }, i(ib.fn = g.prototype, {clone: function() {
            return ib(this)
        }, valueOf: function() {
            return+this._d + 6e4 * (this._offset || 0)
        }, unix: function() {
            return Math.floor(+this / 1e3)
        }, toString: function() {
            return this.clone().lang("en").format("ddd MMM DD YYYY HH:mm:ss [GMT]ZZ")
        }, toDate: function() {
            return this._offset ? new Date(+this) : this._d
        }, toISOString: function() {
            var a = ib(this).utc();
            return 0 < a.year() && a.year() <= 9999 ? H(a, "YYYY-MM-DD[T]HH:mm:ss.SSS[Z]") : H(a, "YYYYYY-MM-DD[T]HH:mm:ss.SSS[Z]")
        }, toArray: function() {
            var a = this;
            return[a.year(), a.month(), a.date(), a.hours(), a.minutes(), a.seconds(), a.milliseconds()]
        }, isValid: function() {
            return z(this)
        }, isDSTShifted: function() {
            return this._a ? this.isValid() && p(this._a, (this._isUTC ? ib.utc(this._a) : ib(this._a)).toArray()) > 0 : !1
        }, parsingFlags: function() {
            return i({}, this._pf)
        }, invalidAt: function() {
            return this._pf.overflow
        }, utc: function() {
            return this.zone(0)
        }, local: function() {
            return this.zone(0), this._isUTC = !1, this
        }, format: function(a) {
            var b = H(this, a || ib.defaultFormat);
            return this.lang().postformat(b)
        }, add: function(a, b) {
            var c;
            return c = "string" == typeof a ? ib.duration(+b, a) : ib.duration(a, b), m(this, c, 1), this
        }, subtract: function(a, b) {
            var c;
            return c = "string" == typeof a ? ib.duration(+b, a) : ib.duration(a, b), m(this, c, -1), this
        }, diff: function(a, b, c) {
            var d, e, f = B(a, this), g = 6e4 * (this.zone() - f.zone());
            return b = q(b), "year" === b || "month" === b ? (d = 432e5 * (this.daysInMonth() + f.daysInMonth()), e = 12 * (this.year() - f.year()) + (this.month() - f.month()), e += (this - ib(this).startOf("month") - (f - ib(f).startOf("month"))) / d, e -= 6e4 * (this.zone() - ib(this).startOf("month").zone() - (f.zone() - ib(f).startOf("month").zone())) / d, "year" === b && (e /= 12)) : (d = this - f, e = "second" === b ? d / 1e3 : "minute" === b ? d / 6e4 : "hour" === b ? d / 36e5 : "day" === b ? (d - g) / 864e5 : "week" === b ? (d - g) / 6048e5 : d), c ? e : k(e)
        }, from: function(a, b) {
            return ib.duration(this.diff(a)).lang(this.lang()._abbr).humanize(!b)
        }, fromNow: function(a) {
            return this.from(ib(), a)
        }, calendar: function() {
            var a = B(ib(), this).startOf("day"), b = this.diff(a, "days", !0), c = -6 > b ? "sameElse" : -1 > b ? "lastWeek" : 0 > b ? "lastDay" : 1 > b ? "sameDay" : 2 > b ? "nextDay" : 7 > b ? "nextWeek" : "sameElse";
            return this.format(this.lang().calendar(c, this))
        }, isLeapYear: function() {
            return x(this.year())
        }, isDST: function() {
            return this.zone() < this.clone().month(0).zone() || this.zone() < this.clone().month(5).zone()
        }, day: function(a) {
            var b = this._isUTC ? this._d.getUTCDay() : this._d.getDay();
            return null != a ? (a = X(a, this.lang()), this.add({d: a - b})) : b
        }, month: eb("Month", !0), startOf: function(a) {
            switch (a = q(a)) {
                case"year":
                    this.month(0);
                case"quarter":
                case"month":
                    this.date(1);
                case"week":
                case"isoWeek":
                case"day":
                    this.hours(0);
                case"hour":
                    this.minutes(0);
                case"minute":
                    this.seconds(0);
                case"second":
                    this.milliseconds(0)
            }
            return"week" === a ? this.weekday(0) : "isoWeek" === a && this.isoWeekday(1), "quarter" === a && this.month(3 * Math.floor(this.month() / 3)), this
        }, endOf: function(a) {
            return a = q(a), this.startOf(a).add("isoWeek" === a ? "week" : a, 1).subtract("ms", 1)
        }, isAfter: function(a, b) {
            return b = "undefined" != typeof b ? b : "millisecond", +this.clone().startOf(b) > +ib(a).startOf(b)
        }, isBefore: function(a, b) {
            return b = "undefined" != typeof b ? b : "millisecond", +this.clone().startOf(b) < +ib(a).startOf(b)
        }, isSame: function(a, b) {
            return b = b || "ms", +this.clone().startOf(b) === +B(a, this).startOf(b)
        }, min: function(a) {
            return a = ib.apply(null, arguments), this > a ? this : a
        }, max: function(a) {
            return a = ib.apply(null, arguments), a > this ? this : a
        }, zone: function(a, b) {
            var c = this._offset || 0;
            return null == a ? this._isUTC ? c : this._d.getTimezoneOffset() : ("string" == typeof a && (a = K(a)), Math.abs(a) < 16 && (a = 60 * a), this._offset = a, this._isUTC = !0, c !== a && (!b || this._changeInProgress ? m(this, ib.duration(c - a, "m"), 1, !1) : this._changeInProgress || (this._changeInProgress = !0, ib.updateOffset(this, !0), this._changeInProgress = null)), this)
        }, zoneAbbr: function() {
            return this._isUTC ? "UTC" : ""
        }, zoneName: function() {
            return this._isUTC ? "Coordinated Universal Time" : ""
        }, parseZone: function() {
            return this._tzm ? this.zone(this._tzm) : "string" == typeof this._i && this.zone(this._i), this
        }, hasAlignedHourOffset: function(a) {
            return a = a ? ib(a).zone() : 0, (this.zone() - a) % 60 === 0
        }, daysInMonth: function() {
            return u(this.year(), this.month())
        }, dayOfYear: function(a) {
            var b = nb((ib(this).startOf("day") - ib(this).startOf("year")) / 864e5) + 1;
            return null == a ? b : this.add("d", a - b)
        }, quarter: function(a) {
            return null == a ? Math.ceil((this.month() + 1) / 3) : this.month(3 * (a - 1) + this.month() % 3)
        }, weekYear: function(a) {
            var b = $(this, this.lang()._week.dow, this.lang()._week.doy).year;
            return null == a ? b : this.add("y", a - b)
        }, isoWeekYear: function(a) {
            var b = $(this, 1, 4).year;
            return null == a ? b : this.add("y", a - b)
        }, week: function(a) {
            var b = this.lang().week(this);
            return null == a ? b : this.add("d", 7 * (a - b))
        }, isoWeek: function(a) {
            var b = $(this, 1, 4).week;
            return null == a ? b : this.add("d", 7 * (a - b))
        }, weekday: function(a) {
            var b = (this.day() + 7 - this.lang()._week.dow) % 7;
            return null == a ? b : this.add("d", a - b)
        }, isoWeekday: function(a) {
            return null == a ? this.day() || 7 : this.day(this.day() % 7 ? a : a - 7)
        }, isoWeeksInYear: function() {
            return v(this.year(), 1, 4)
        }, weeksInYear: function() {
            var a = this._lang._week;
            return v(this.year(), a.dow, a.doy)
        }, get: function(a) {
            return a = q(a), this[a]()
        }, set: function(a, b) {
            return a = q(a), "function" == typeof this[a] && this[a](b), this
        }, lang: function(b) {
            return b === a ? this._lang : (this._lang = E(b), this)
        }}), ib.fn.millisecond = ib.fn.milliseconds = eb("Milliseconds", !1), ib.fn.second = ib.fn.seconds = eb("Seconds", !1), ib.fn.minute = ib.fn.minutes = eb("Minutes", !1), ib.fn.hour = ib.fn.hours = eb("Hours", !0), ib.fn.date = eb("Date", !0), ib.fn.dates = c("dates accessor is deprecated. Use date instead.", eb("Date", !0)), ib.fn.year = eb("FullYear", !0), ib.fn.years = c("years accessor is deprecated. Use year instead.", eb("FullYear", !0)), ib.fn.days = ib.fn.day, ib.fn.months = ib.fn.month, ib.fn.weeks = ib.fn.week, ib.fn.isoWeeks = ib.fn.isoWeek, ib.fn.quarters = ib.fn.quarter, ib.fn.toJSON = ib.fn.toISOString, i(ib.duration.fn = h.prototype, {_bubble: function() {
            var a, b, c, d, e = this._milliseconds, f = this._days, g = this._months, h = this._data;
            h.milliseconds = e % 1e3, a = k(e / 1e3), h.seconds = a % 60, b = k(a / 60), h.minutes = b % 60, c = k(b / 60), h.hours = c % 24, f += k(c / 24), h.days = f % 30, g += k(f / 30), h.months = g % 12, d = k(g / 12), h.years = d
        }, weeks: function() {
            return k(this.days() / 7)
        }, valueOf: function() {
            return this._milliseconds + 864e5 * this._days + this._months % 12 * 2592e6 + 31536e6 * t(this._months / 12)
        }, humanize: function(a) {
            var b = +this, c = Z(b, !a, this.lang());
            return a && (c = this.lang().pastFuture(b, c)), this.lang().postformat(c)
        }, add: function(a, b) {
            var c = ib.duration(a, b);
            return this._milliseconds += c._milliseconds, this._days += c._days, this._months += c._months, this._bubble(), this
        }, subtract: function(a, b) {
            var c = ib.duration(a, b);
            return this._milliseconds -= c._milliseconds, this._days -= c._days, this._months -= c._months, this._bubble(), this
        }, get: function(a) {
            return a = q(a), this[a.toLowerCase() + "s"]()
        }, as: function(a) {
            return a = q(a), this["as" + a.charAt(0).toUpperCase() + a.slice(1) + "s"]()
        }, lang: ib.fn.lang, toIsoString: function() {
            var a = Math.abs(this.years()), b = Math.abs(this.months()), c = Math.abs(this.days()), d = Math.abs(this.hours()), e = Math.abs(this.minutes()), f = Math.abs(this.seconds() + this.milliseconds() / 1e3);
            return this.asSeconds() ? (this.asSeconds() < 0 ? "-" : "") + "P" + (a ? a + "Y" : "") + (b ? b + "M" : "") + (c ? c + "D" : "") + (d || e || f ? "T" : "") + (d ? d + "H" : "") + (e ? e + "M" : "") + (f ? f + "S" : "") : "P0D"
        }});
    for (kb in Yb)
        Yb.hasOwnProperty(kb) && (gb(kb, Yb[kb]), fb(kb.toLowerCase()));
    gb("Weeks", 6048e5), ib.duration.fn.asMonths = function() {
        return(+this - 31536e6 * this.years()) / 2592e6 + 12 * this.years()
    }, ib.lang("en", {ordinal: function(a) {
            var b = a % 10, c = 1 === t(a % 100 / 10) ? "th" : 1 === b ? "st" : 2 === b ? "nd" : 3 === b ? "rd" : "th";
            return a + c
        }}), xb ? module.exports = ib : "function" == typeof define && define.amd ? (define("moment", function(a, b, c) {
        return c.config && c.config() && c.config().noGlobal === !0 && (mb.moment = jb), ib
    }), hb(!0)) : hb()
}).call(this);

// Livestamp.js / v1.1.2 / (c) 2012 Matt Bradley / MIT License
(function(d, g) {
    var h = 1E3, i = !1, e = d([]), j = function(b, a) {
        var c = b.data("livestampdata");
        "number" == typeof a && (a *= 1E3);
        b.removeAttr("data-livestamp").removeData("livestamp");
        a = g(a);
        g.isMoment(a) && !isNaN(+a) && (c = d.extend({}, {original: b.contents()}, c), c.moment = g(a), b.data("livestampdata", c).empty(), e.push(b[0]))
    }, k = function() {
        i || (f.update(), setTimeout(k, h))
    }, f = {update: function() {
            d("[data-livestamp]").each(function() {
                var a = d(this);
                j(a, a.data("livestamp"))
            });
            var b = [];
            e.each(function() {
                var a = d(this), c = a.data("livestampdata");
                if (void 0 === c)
                    b.push(this);
                else if (g.isMoment(c.moment)) {
                    var e = a.html(), c = c.moment.fromNow();
                    if (e != c) {
                        var f = d.Event("change.livestamp");
                        a.trigger(f, [e, c]);
                        f.isDefaultPrevented() || a.html(c)
                    }
                }
            });
            e = e.not(b)
        }, pause: function() {
            i = !0
        }, resume: function() {
            i = !1;
            k()
        }, interval: function(b) {
            if (void 0 === b)
                return h;
            h = b
        }}, l = {add: function(b, a) {
            "number" == typeof a && (a *= 1E3);
            a = g(a);
            g.isMoment(a) && !isNaN(+a) && (b.each(function() {
                j(d(this), a)
            }), f.update());
            return b
        }, destroy: function(b) {
            e = e.not(b);
            b.each(function() {
                var a =
                        d(this), c = a.data("livestampdata");
                if (void 0 === c)
                    return b;
                a.html(c.original ? c.original : "").removeData("livestampdata")
            });
            return b
        }, isLivestamp: function(b) {
            return void 0 !== b.data("livestampdata")
        }};
    d.livestamp = f;
    d(function() {
        f.resume()
    });
    d.fn.livestamp = function(b, a) {
        l[b] || (a = b, b = "add");
        return l[b](this, a)
    }
})(jQuery, moment);


/**
 * gnmenu.js v1.0.0
 * http://www.codrops.com
 *
 * Licensed under the MIT license.
 * http://www.opensource.org/licenses/mit-license.php
 * 
 * Copyright 2013, Codrops
 * http://www.codrops.com
 */
;
(function(window) {

    'use strict';

    // http://stackoverflow.com/a/11381730/989439
    function mobilecheck() {
        var check = false;
        (function(a) {
            if (/(android|ipad|playbook|silk|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|iris|kindle|lge |maemo|midp|mmp|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows (ce|phone)|xda|xiino/i.test(a) || /1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i.test(a.substr(0, 4)))
                check = true
        })(navigator.userAgent || navigator.vendor || window.opera);
        return check;
    }

    function gnMenu(el, options) {
        this.el = el;
        this._init();
    }

    gnMenu.prototype = {
        _init: function() {
            this.trigger = this.el.querySelector('a.gn-icon-menu');
            this.menu = this.el.querySelector('nav.gn-menu-wrapper');
            this.isMenuOpen = false;
            this.scroller = $('.gn-scroller');
            this.eventtype = mobilecheck() ? 'touchstart' : 'click';
            this._initEvents();

            var self = this;
            this.bodyClickFn = function() {
                self._closeMenu();
                this.removeEventListener(self.eventtype, self.bodyClickFn);
            };
        },
        _initEvents: function() {
            var self = this;

            if (!mobilecheck()) {
                //this.trigger.addEventListener( 'mouseover', function(ev) { self._openIconMenu(); } );
                //this.trigger.addEventListener( 'mouseout', function(ev) { self._closeIconMenu(); } );

                this.menu.addEventListener('mouseover', function(ev) {

                    self._openMenu();

                    document.addEventListener(self.eventtype, self.bodyClickFn);
                    //    $('.content').toggleClass("slideright150");
                });
                this.menu.addEventListener('mouseout', function(ev) {

                    self._closeMenu();

                    document.removeEventListener(self.eventtype, self.bodyClickFn);

                });

            }


            this.menu.addEventListener(this.eventtype, function(ev) {
                ev.stopPropagation();
            });
        },
        _openIconMenu: function() {
            //classie.add( this.menu, 'gn-open-part' );
        },
        _closeIconMenu: function() {
            //classie.remove( this.menu, 'gn-open-part' );
        },
        _openMenu: function() {
            if (this.isMenuOpen)
                return;
            //classie.add( this.trigger, 'gn-selected' );

            this.isMenuOpen = true;
            //	classie.add( this.menu, 'gn-open-all' );
            $('nav.gn-menu-wrapper').addClass("gn-open-all");


        },
        _closeMenu: function() {
            if (!this.isMenuOpen)
                return;
            //classie.remove( this.trigger, 'gn-selected' );

            this.isMenuOpen = false;
            //classie.remove(this.menu, 'gn-open-all');
            $('nav.gn-menu-wrapper').removeClass("gn-open-all");
            // $('.content').toggleClass("slideright150");

        }
    }

    // add to global namespace
    window.gnMenu = gnMenu;

})(window);

/*! Copyright (c) 2011 Piotr Rochala (http://rocha.la)
 * Dual licensed under the MIT (http://www.opensource.org/licenses/mit-license.php)
 * and GPL (http://www.opensource.org/licenses/gpl-license.php) licenses.
 *
 * Version: 1.3.0
 *
 */
(function($) {

    jQuery.fn.extend({
        slimScroll: function(options) {

            var defaults = {
                // width in pixels of the visible scroll area
                width: 'auto',
                // height in pixels of the visible scroll area
                height: '250px',
                // width in pixels of the scrollbar and rail
                size: '7px',
                // scrollbar color, accepts any hex/color value
                color: '#000',
                // scrollbar position - left/right
                position: 'right',
                // distance in pixels between the side edge and the scrollbar
                distance: '1px',
                // default scroll position on load - top / bottom / $('selector')
                start: 'top',
                // sets scrollbar opacity
                opacity: .4,
                // enables always-on mode for the scrollbar
                alwaysVisible: false,
                // check if we should hide the scrollbar when user is hovering over
                disableFadeOut: false,
                // sets visibility of the rail
                railVisible: false,
                // sets rail color
                railColor: '#333',
                // sets rail opacity
                railOpacity: .2,
                // whether  we should use jQuery UI Draggable to enable bar dragging
                railDraggable: true,
                // defautlt CSS class of the slimscroll rail
                railClass: 'slimScrollRail',
                // defautlt CSS class of the slimscroll bar
                barClass: 'slimScrollBar',
                // defautlt CSS class of the slimscroll wrapper
                wrapperClass: 'slimScrollDiv',
                // check if mousewheel should scroll the window if we reach top/bottom
                allowPageScroll: false,
                // scroll amount applied to each mouse wheel step
                wheelStep: 20,
                // scroll amount applied when user is using gestures
                touchScrollStep: 200,
                // sets border radius
                borderRadius: '7px',
                // sets border radius of the rail
                railBorderRadius: '7px'
            };

            var o = $.extend(defaults, options);

            // do it for every element that matches selector
            this.each(function() {

                var isOverPanel, isOverBar, isDragg, queueHide, touchDif,
                        barHeight, percentScroll, lastScroll,
                        divS = '<div></div>',
                        minBarHeight = 30,
                        releaseScroll = false;

                // used in event handlers and for better minification
                var me = $(this);

                // ensure we are not binding it again
                if (me.parent().hasClass(o.wrapperClass))
                {
                    // start from last bar position
                    var offset = me.scrollTop();

                    // find bar and rail
                    bar = me.parent().find('.' + o.barClass);
                    rail = me.parent().find('.' + o.railClass);

                    getBarHeight();

                    // check if we should scroll existing instance
                    if ($.isPlainObject(options))
                    {
                        // Pass height: auto to an existing slimscroll object to force a resize after contents have changed
                        if ('height' in options && options.height == 'auto') {
                            me.parent().css('height', 'auto');
                            me.css('height', 'auto');
                            var height = me.parent().parent().height();
                            me.parent().css('height', height);
                            me.css('height', height);
                        }

                        if ('scrollTo' in options)
                        {
                            // jump to a static point
                            offset = parseInt(o.scrollTo);
                        }
                        else if ('scrollBy' in options)
                        {
                            // jump by value pixels
                            offset += parseInt(o.scrollBy);
                        }
                        else if ('destroy' in options)
                        {
                            // remove slimscroll elements
                            bar.remove();
                            rail.remove();
                            me.unwrap();
                            return;
                        }

                        // scroll content by the given offset
                        scrollContent(offset, false, true);
                    }

                    return;
                }

                // optionally set height to the parent's height
                o.height = (o.height == 'auto') ? me.parent().height() : o.height;

                // wrap content
                var wrapper = $(divS)
                        .addClass(o.wrapperClass)
                        .css({
                            position: 'relative',
                            overflow: 'hidden',
                            width: o.width,
                            height: o.height
                        });

                // update style for the div
                me.css({
                    overflow: 'hidden',
                    width: o.width,
                    height: o.height
                });

                // create scrollbar rail
                var rail = $(divS)
                        .addClass(o.railClass)
                        .css({
                            width: o.size,
                            height: '100%',
                            position: 'absolute',
                            top: 0,
                            display: (o.alwaysVisible && o.railVisible) ? 'block' : 'none',
                            'border-radius': o.railBorderRadius,
                            background: o.railColor,
                            opacity: o.railOpacity,
                            zIndex: 90
                        });

                // create scrollbar
                var bar = $(divS)
                        .addClass(o.barClass)
                        .css({
                            background: o.color,
                            width: o.size,
                            position: 'absolute',
                            top: 0,
                            opacity: o.opacity,
                            display: o.alwaysVisible ? 'block' : 'none',
                            'border-radius': o.borderRadius,
                            BorderRadius: o.borderRadius,
                            MozBorderRadius: o.borderRadius,
                            WebkitBorderRadius: o.borderRadius,
                            zIndex: 99
                        });

                // set position
                var posCss = (o.position == 'right') ? {right: o.distance} : {left: o.distance};
                rail.css(posCss);
                bar.css(posCss);

                // wrap it
                me.wrap(wrapper);

                // append to parent div
                me.parent().append(bar);
                me.parent().append(rail);

                // make it draggable and no longer dependent on the jqueryUI
                if (o.railDraggable) {
                    bar.bind("mousedown", function(e) {
                        var $doc = $(document);
                        isDragg = true;
                        t = parseFloat(bar.css('top'));
                        pageY = e.pageY;

                        $doc.bind("mousemove.slimscroll", function(e) {
                            currTop = t + e.pageY - pageY;
                            bar.css('top', currTop);
                            scrollContent(0, bar.position().top, false);// scroll content
                        });

                        $doc.bind("mouseup.slimscroll", function(e) {
                            isDragg = false;
                            hideBar();
                            $doc.unbind('.slimscroll');
                        });
                        return false;
                    }).bind("selectstart.slimscroll", function(e) {
                        e.stopPropagation();
                        e.preventDefault();
                        return false;
                    });
                }

                // on rail over
                rail.hover(function() {
                    showBar();
                }, function() {
                    hideBar();
                });

                // on bar over
                bar.hover(function() {
                    isOverBar = true;
                }, function() {
                    isOverBar = false;
                });

                // show on parent mouseover
                me.hover(function() {
                    isOverPanel = true;
                    showBar();
                    hideBar();
                }, function() {
                    isOverPanel = false;
                    hideBar();
                });

                // support for mobile
                me.bind('touchstart', function(e, b) {
                    if (e.originalEvent.touches.length)
                    {
                        // record where touch started
                        touchDif = e.originalEvent.touches[0].pageY;
                    }
                });

                me.bind('touchmove', function(e) {
                    // prevent scrolling the page if necessary
                    if (!releaseScroll)
                    {
                        e.originalEvent.preventDefault();
                    }
                    if (e.originalEvent.touches.length)
                    {
                        // see how far user swiped
                        var diff = (touchDif - e.originalEvent.touches[0].pageY) / o.touchScrollStep;
                        // scroll content
                        scrollContent(diff, true);
                        touchDif = e.originalEvent.touches[0].pageY;
                    }
                });

                // set up initial height
                getBarHeight();

                // check start position
                if (o.start === 'bottom')
                {
                    // scroll content to bottom
                    bar.css({top: me.outerHeight() - bar.outerHeight()});
                    scrollContent(0, true);
                }
                else if (o.start !== 'top')
                {
                    // assume jQuery selector
                    scrollContent($(o.start).position().top, null, true);

                    // make sure bar stays hidden
                    if (!o.alwaysVisible) {
                        bar.hide();
                    }
                }

                // attach scroll events
                attachWheel();

                function _onWheel(e)
                {
                    // use mouse wheel only when mouse is over
                    if (!isOverPanel) {
                        return;
                    }

                    var e = e || window.event;

                    var delta = 0;
                    if (e.wheelDelta) {
                        delta = -e.wheelDelta / 120;
                    }
                    if (e.detail) {
                        delta = e.detail / 3;
                    }

                    var target = e.target || e.srcTarget || e.srcElement;
                    if ($(target).closest('.' + o.wrapperClass).is(me.parent())) {
                        // scroll content
                        scrollContent(delta, true);
                    }

                    // stop window scroll
                    if (e.preventDefault && !releaseScroll) {
                        e.preventDefault();
                    }
                    if (!releaseScroll) {
                        e.returnValue = false;
                    }
                }

                function scrollContent(y, isWheel, isJump)
                {
                    releaseScroll = false;
                    var delta = y;
                    var maxTop = me.outerHeight() - bar.outerHeight();

                    if (isWheel)
                    {
                        // move bar with mouse wheel
                        delta = parseInt(bar.css('top')) + y * parseInt(o.wheelStep) / 100 * bar.outerHeight();

                        // move bar, make sure it doesn't go out
                        delta = Math.min(Math.max(delta, 0), maxTop);

                        // if scrolling down, make sure a fractional change to the
                        // scroll position isn't rounded away when the scrollbar's CSS is set
                        // this flooring of delta would happened automatically when
                        // bar.css is set below, but we floor here for clarity
                        delta = (y > 0) ? Math.ceil(delta) : Math.floor(delta);

                        // scroll the scrollbar
                        bar.css({top: delta + 'px'});
                    }

                    // calculate actual scroll amount
                    percentScroll = parseInt(bar.css('top')) / (me.outerHeight() - bar.outerHeight());
                    delta = percentScroll * (me[0].scrollHeight - me.outerHeight());

                    if (isJump)
                    {
                        delta = y;
                        var offsetTop = delta / me[0].scrollHeight * me.outerHeight();
                        offsetTop = Math.min(Math.max(offsetTop, 0), maxTop);
                        bar.css({top: offsetTop + 'px'});
                    }

                    // scroll content
                    me.scrollTop(delta);

                    // fire scrolling event
                    me.trigger('slimscrolling', ~~delta);

                    // ensure bar is visible
                    showBar();

                    // trigger hide when scroll is stopped
                    hideBar();
                }

                function attachWheel()
                {
                    if (window.addEventListener)
                    {
                        this.addEventListener('DOMMouseScroll', _onWheel, false);
                        this.addEventListener('mousewheel', _onWheel, false);
                        this.addEventListener('MozMousePixelScroll', _onWheel, false);
                    }
                    else
                    {
                        document.attachEvent("onmousewheel", _onWheel)
                    }
                }

                function getBarHeight()
                {
                    // calculate scrollbar height and make sure it is not too small
                    barHeight = Math.max((me.outerHeight() / me[0].scrollHeight) * me.outerHeight(), minBarHeight);
                    bar.css({height: barHeight + 'px'});

                    // hide scrollbar if content is not long enough
                    var display = barHeight == me.outerHeight() ? 'none' : 'block';
                    bar.css({display: display});
                }

                function showBar()
                {
                    // recalculate bar height
                    getBarHeight();
                    clearTimeout(queueHide);

                    // when bar reached top or bottom
                    if (percentScroll == ~~percentScroll)
                    {
                        //release wheel
                        releaseScroll = o.allowPageScroll;

                        // publish approporiate event
                        if (lastScroll != percentScroll)
                        {
                            var msg = (~~percentScroll == 0) ? 'top' : 'bottom';
                            me.trigger('slimscroll', msg);
                        }
                    }
                    else
                    {
                        releaseScroll = false;
                    }
                    lastScroll = percentScroll;

                    // show only when required
                    if (barHeight >= me.outerHeight()) {
                        //allow window scroll
                        releaseScroll = true;
                        return;
                    }
                    bar.stop(true, true).fadeIn('fast');
                    if (o.railVisible) {
                        rail.stop(true, true).fadeIn('fast');
                    }
                }

                function hideBar()
                {
                    // only hide when options allow it
                    if (!o.alwaysVisible)
                    {
                        queueHide = setTimeout(function() {
                            if (!(o.disableFadeOut && isOverPanel) && !isOverBar && !isDragg)
                            {
                                bar.fadeOut('slow');
                                rail.fadeOut('slow');
                            }
                        }, 1000);
                    }
                }

            });

            // maintain chainability
            return this;
        }
    });

    jQuery.fn.extend({
        slimscroll: jQuery.fn.slimScroll
    });

})(jQuery);
