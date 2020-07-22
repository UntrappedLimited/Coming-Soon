!function($, window, document) {
    "use strict";
    $.fn.scrollUp = function(options) {
        $.data(document.body, "scrollUp") || ($.data(document.body, "scrollUp", !0),
        $.fn.scrollUp.init(options))
    }
    ,
    $.fn.scrollUp.init = function(options) {
        var o = $.fn.scrollUp.settings = $.extend({}, $.fn.scrollUp.defaults, options), triggerVisible = !1, animIn, animOut, animSpeed, scrollDis, scrollEvent, scrollTarget, $self;
        switch ($self = o.scrollTrigger ? $(o.scrollTrigger) : $("<a/>", {
            id: o.scrollName,
            href: "#top"
        }),
        o.scrollTitle && $self.attr("title", o.scrollTitle),
        $self.appendTo("body"),
        o.scrollImg || o.scrollTrigger || $self.html(o.scrollText),
        $self.css({
            display: "none",
            position: "fixed",
            zIndex: o.zIndex
        }),
        o.activeOverlay && $("<div/>", {
            id: o.scrollName + "-active"
        }).css({
            position: "absolute",
            top: o.scrollDistance + "px",
            width: "100%",
            borderTop: "1px dotted" + o.activeOverlay,
            zIndex: o.zIndex
        }).appendTo("body"),
        o.animation) {
        case "fade":
            animIn = "fadeIn",
            animOut = "fadeOut",
            animSpeed = o.animationSpeed;
            break;
        case "slide":
            animIn = "slideDown",
            animOut = "slideUp",
            animSpeed = o.animationSpeed;
            break;
        default:
            animIn = "show",
            animOut = "hide",
            animSpeed = 0
        }
        scrollDis = "top" === o.scrollFrom ? o.scrollDistance : $(document).height() - $(window).height() - o.scrollDistance,
        scrollEvent = $(window).scroll((function() {
            $(window).scrollTop() > scrollDis ? triggerVisible || ($self[animIn](animSpeed),
            triggerVisible = !0) : triggerVisible && ($self[animOut](animSpeed),
            triggerVisible = !1)
        }
        )),
        o.scrollTarget ? "number" == typeof o.scrollTarget ? scrollTarget = o.scrollTarget : "string" == typeof o.scrollTarget && (scrollTarget = Math.floor($(o.scrollTarget).offset().top)) : scrollTarget = 0,
        $self.click((function(e) {
            e.preventDefault(),
            $("html, body").animate({
                scrollTop: scrollTarget
            }, o.scrollSpeed, o.easingType)
        }
        ))
    }
    ,
    $.fn.scrollUp.defaults = {
        scrollName: "scrollUp",
        scrollDistance: 300,
        scrollFrom: "top",
        scrollSpeed: 300,
        easingType: "linear",
        animation: "fade",
        animationSpeed: 200,
        scrollTrigger: !1,
        scrollTarget: !1,
        scrollText: "Scroll to top",
        scrollTitle: !1,
        scrollImg: !1,
        activeOverlay: !1,
        zIndex: 2147483647
    },
    $.fn.scrollUp.destroy = function(scrollEvent) {
        $.removeData(document.body, "scrollUp"),
        $("#" + $.fn.scrollUp.settings.scrollName).remove(),
        $("#" + $.fn.scrollUp.settings.scrollName + "-active").remove(),
        $.fn.jquery.split(".")[1] >= 7 ? $(window).off("scroll", scrollEvent) : $(window).unbind("scroll", scrollEvent)
    }
    ,
    $.scrollUp = $.fn.scrollUp
}(jQuery, window, document);
