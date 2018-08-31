// function sleep(miliseconds) {
//     var currentTime = new Date().getTime();
 
//     while (currentTime + miliseconds >= new Date().getTime()) {
//     }
//  }

//  sleep(10000);

 
var PortletTools = {
    init: function(idportlet) {
        var e, t, o, n, r, f;
        console.log(idportlet);
        toastr.options.showDuration = 1e3, (e = new mPortlet(idportlet)).on("beforeCollapse", function(e) {
            setTimeout(function() {
                toastr.info("Before collapse event fired!")
            }, 100)
        }), e.on("afterCollapse", function(e) {
            setTimeout(function() {
                toastr.warning("Before collapse event fired!")
            }, 2e3)
        }), e.on("beforeExpand", function(e) {
            setTimeout(function() {
                toastr.info("Before expand event fired!")
            }, 100)
        }), e.on("afterExpand", function(e) {
            setTimeout(function() {
                toastr.warning("After expand event fired!")
            }, 2e3)
        }), e.on("beforeRemove", function(e) {
            return toastr.info("Before remove event fired!"), confirm("Are you sure to remove this portlet ?")
        }), e.on("afterRemove", function(e) {
            setTimeout(function() {
                toastr.warning("After remove event fired!")
            }, 2e3)
        }), e.on("reload", function(e) {
            toastr.info("Leload event fired!"), mApp.block(e.getSelf(), {
                overlayColor: "#ffffff",
                type: "loader",
                state: "accent",
                opacity: .3,
                size: "lg"
            }), setTimeout(function() {
                mApp.unblock(e.getSelf())
            }, 2e3)
        }), e.on("afterFullscreenOn", function(e) {
            var t = $(e.getBody()).find("> .m-scrollable");
            t.data("original-height", t.data("max-height")), t.css("height", "100%"), t.css("max-height", "100%"), mApp.initScroller(t, {})
        }), e.on("afterFullscreenOff", function(e) {
            toastr.warning("After fullscreen off event fired!");
            var t = $(e.getBody()).find("> .m-scrollable");
            t.css("height", t.data("original-height")), t.data("max-height", t.data("original-height")), mApp.initScroller(t, {})
        })
    }
};

function portletInitJS(idportlet){
    PortletTools.init(idportlet)
}

// jQuery(document).ready(function() {
//    PortletTools.init(idportlet)
// });
