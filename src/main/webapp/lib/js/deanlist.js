
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
                        $('.st-content').toggleClass('overlay');
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
            $('.st-content').toggleClass('overlay');
            $('#st-trigger-effects').css("pointer-events", "none");
        })

    }

    init();
    sidebarOverlay();
}
function getParameterByName(name) {
    name = name.replace(/[\[]/, "\\[").replace(/[\]]/, "\\]");
    var regex = new RegExp("[\\?&]" + name + "=([^&#]*)"),
            results = regex.exec(location.search);
    return results == null ? "" : decodeURIComponent(results[1].replace(/\+/g, " "));
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
;(function ( $, window, document, undefined ) {

	var pluginName = "scrollUpMenu";
	var defaults = {
			waitTime: 100,
			transitionTime:100,
			menuCss: { 'position': 'fixed', 'top': '0'}
	};

	var lastScrollTop = 0;				
	var $header;
	var timer;
	var pixelsFromTheTop;

	// The actual plugin constructor
	function Plugin ( element, options ) {
		this.element = element;
		this.settings = $.extend( {}, defaults, options );
		this._defaults = defaults;
		this._name = pluginName;
		this.init();
	}

	Plugin.prototype = {
		init: function () {
			
			var self = this;
			$header = $(this.element);
			$header.css(self.settings.menuCss);
			pixelsFromTheTop = $header.height();
			
			$header.next().css({ 'margin-top': pixelsFromTheTop });
		
			$(window).bind('scroll',function () {
				clearTimeout(timer);
				timer = setTimeout(function() {
					self.refresh(self.settings) 
				}, self.settings.waitTime );
			});
		},
		refresh: function (settings) { 
			// Stopped scrolling, do stuff...				   			
			var scrollTop = $(window).scrollTop();

			if (scrollTop > lastScrollTop && scrollTop > pixelsFromTheTop){ // ensure that the header doesnt disappear too early
				// downscroll
				$header.addClass("nav-up");
			} else {
				// upscroll
				$header.removeClass("nav-up");
			}
			lastScrollTop = scrollTop;
		}
	};

	$.fn[ pluginName ] = function ( options ) {
		return this.each(function() {
				if ( !$.data( this, "plugin_" + pluginName ) ) {
						$.data( this, "plugin_" + pluginName, new Plugin( this, options ) );
				}
		});
	};

})( jQuery, window, document );