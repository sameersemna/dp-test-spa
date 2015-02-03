/*bower*/

    /*"angular-resource": "~1.2.0",
    "angular-cookies": "~1.2.0",
    "angular-sanitize": "~1.2.0",    
    "angular-animate": "~1.2.0",
    */


/*Main Menu*/
(function(jQuery) {

    jQuery.fn.colorchange = function(options) {
        var settings = jQuery.extend({
            background: "",
            color: ""
        }, options)
        return this.css({
            "background": settings.background,
            "color": settings.color
        });
    }

    jQuery.fn.positions = function(options) {
        var settings = jQuery.extend({
            top: "0",
            left: "10"
        }, options)
        return this.css({
            "top": settings.top + "%",
            "left": settings.left + "%"
        });
    }




    jQuery.fn.borderradius = function(options) {
        var settings = jQuery.extend({
            topleft: "4px",
            topright: "4px",
            bottomleft: "4px",
            bottomright: "4px"
        }, options)
        return this.css({
            "border-bottom-right-radius": settings.bottomright,
            "border-bottom-left-radius": settings.bottomleft,
            "border-top-right-radius": settings.topright,
            "border-top-left-radius": settings.topleft
        }).css({
            "-webkit-border-bottom-right-radius": settings.bottomright,
            "-webkit-border-bottom-left-radius": settings.bottomleft,
            "-webkit-border-top-right-radius": settings.topright,
            "-webkit-border-top-left-radius": settings.topleft
        }).css({
            "-moz-border-bottom-right-radius": settings.bottomright,
            "-moz-border-bottom-left-radius": settings.bottomleft,
            "-moz-border-top-right-radius": settings.topright,
            "-moz-border-top-left-radius": settings.topleft
        }).css({
            "-o-border-bottom-right-radius": settings.bottomright,
            "-o-border-bottom-left-radius": settings.bottomleft,
            "-o-border-top-right-radius": settings.topright,
            "-o-border-top-left-radius": settings.topleft
        }).css({
            "-ms-border-bottom-right-radius": settings.bottomright,
            "-ms-border-bottom-left-radius": settings.bottomleft,
            "-ms-border-top-right-radius": settings.topright,
            "-ms-border-top-left-radius": settings.topleft
        })
    };


    jQuery.fn.boxshadow = function(options) {
        var settings = jQuery.extend({
            horizontal: "1px",
            vertical: "1px",
            blurs: "1px",
            spread: "1px",
            color: "#000000"
        }, options);
        var h = settings.horizontal;
        var v = settings.vertical;
        var b = settings.blurs;
        var s = settings.spread;
        var c = settings.color;

        /*var h="4px";
	var b="3px";
	var s="3px";
	var v="3px";
	var c="rgba(0,0,0,0.3)";*/
        var shadow = h + " " + v + " " + b + " " + s + " " + c
        return this.css("box-shadow", shadow).css("-webkit-box-shadow", shadow).css("-moz-box-shadow", shadow).css("-o-box-shadow", shadow).css("-ms-box-shadow", shadow).css("-o-box-shadow", shadow)

    };


    jQuery.fn.innerboxshadow = function(options) {
        var settings = jQuery.extend({
            horizontal: "1px",
            vertical: "1px",
            blurs: "1px",
            spread: "1px",
            color: "#000000"
        }, options);
        var h = settings.horizontal;
        var v = settings.vertical;
        var b = settings.blurs;
        var s = settings.spread;
        var c = settings.color;


        var shadow = h + " " + v + " " + b + " " + s + " " + c + " " + "inset"
        return this.css("box-shadow", shadow).css("-webkit-box-shadow", shadow).css("-moz-box-shadow", shadow).css("-ms-box-shadow", shadow).css("-o-box-shadow", shadow)

    };



    jQuery.fn.Rotate = function(options) {
        var settings = jQuery.extend({
            methods: "rotateY",
            degree: "360deg"
        }, options)
        return this.css({
            "transform": settings.methods + "(" + settings.degree + ")",
            "-webkit-transform": settings.methods + "(" + settings.degree + ")",
            "-moz-transform": settings.methods + "(" + settings.degree + ")",
            "-ms-transform": settings.methods + "(" + settings.degree + ")",
            "-o-transform": settings.methods + "(" + settings.degree + ")"
        })


    } /*rotate plugin ends here...................*/


    jQuery.fn.Translated = function(options) {
        var settings = jQuery.extend({
            xaxis: "0px",
            yaxis: "0px"
        }, options)
        return this.css({
            "transform": "translate(" + settings.xaxis + "," + settings.yaxis + ")",
            "-webkit-transform": "translate(" + settings.xaxis + "," + settings.yaxis + ")",
            "-moz-transform": "translate(" + settings.xaxis + "," + settings.yaxis + ")",
            "-o-transform": "translate(" + settings.xaxis + "," + settings.yaxis + ")",
            "-ms-transform": "translate(" + settings.xaxis + "," + settings.yaxis + ")"
        })
    }


    jQuery.fn.Skew = function(options) {
        var settings = jQuery.extend({
            xaxis: "0",
            yaxis: "0"
        }, options)
        return this.css({
            "transform": "skew(" + settings.xaxis + "deg" + "," + settings.yaxis + "deg)",
            "-webkit-transform": "skew(" + settings.xaxis + "deg," + settings.yaxis + "deg)",
            "-moz-transform": "translate(" + settings.xaxis + "deg," + settings.yaxis + "deg)",
            "-o-transform": "translate(" + settings.xaxis + "deg," + settings.yaxis + "deg)",
            "-ms-transform": "translate(" + settings.xaxis + "deg," + settings.yaxis + "deg)"
        })
    }

    jQuery.fn.Scale = function(options) {
        var settings = jQuery.extend({
            xaxis: "0",
            yaxis: "0"
        }, options)
        return this.css({
            "transform": "scale(" + settings.xaxis + "," + settings.yaxis + ")",
            "-webkit-transform": "scale(" + settings.xaxis + "," + settings.yaxis + ")",
            "-moz-transform": "scale(" + settings.xaxis + "," + settings.yaxis + ")",
            "-o-transform": "scale(" + settings.xaxis + "," + settings.yaxis + ")",
            "-ms-transform": "scale(" + settings.xaxis + "," + settings.yaxis + ")"
        })
    }



    jQuery.fn.completetransform = function(options) {
        var settings = jQuery.extend({
            Txaxis: "0",
            Tyaxis: "0",
            Skxaxis: "0",
            Skyaxis: "0",
            degree: "0",
            Sxaxis: "0",
            Syaxis: "0"
        }, options)
        var translate = "translate(" + settings.Txaxis + "px," + settings.Tyaxis + "px)";
        var skew = "skew(" + settings.Skxaxis + "deg," + settings.Skyaxis + "deg)";
        var rotate = "rotate(" + settings.degree + "deg)";
        var scale = "scale(" + settings.Sxaxis + "," + settings.Syaxis + ")";

        return this.css({
            "-webkit-transform": scale + " " + rotate + " " + translate + " " + skew,
            "transform": scale + " " + rotate + " " + translate + " " + skew,
            "-moz-transform": scale + " " + rotate + " " + translate + " " + skew,
            "-o-transform": scale + " " + rotate + " " + translate + " " + skew,
            "-ms-transform": scale + " " + rotate + " " + translate + " " + skew
        })
    }


    jQuery.fn.megamenubar = function(options) {
        var settings = jQuery.extend({
            themecolor: "#FF5604",
            backgroundColor: "#000000",
            textcolor: "#868686",
            hovercolor: "#FF5604",
            dropdownbackground: "#000000",
            dropdowntextcolor: "#868686"
        }, options)

        jQuery("div.banner,section.socialmediacontainer").colorchange({
            background: settings.themecolor
        })
        jQuery("nav.menu,#submit").colorchange({
            background: settings.backgroundColor
        })
        jQuery("section.linkitem ul#firstul").css("border-bottom-color", settings.themecolor)
        jQuery("section.linkitem ul li a").colorchange({
            color: settings.textcolor
        })
        jQuery("section.linkitem ul li a").hover(function() {
            jQuery(this).css("color", settings.hovercolor)

        }, function() {
            jQuery(this).css("color", settings.textcolor)
        })

        jQuery("section.linkitem ul#firstul,section.linkitem ul#secondul li,section.linkitem ul ul li,section.linkitem ul ul#contactus").colorchange({
            background: settings.dropdownbackground
        })

        jQuery("section.linkitem ul#firstul p,section.linkitem ul#secondul li a,section.linkitem ul ul li a,section.linkitem ul#firstul h3").colorchange({
            color: settings.dropdowntextcolor
        })


        /*-----------------------------------------------------------------------------SEARCH BOX ANIMATION--------------------------------------------------------------------------*/
        function SearchBoxExpansion(str, str1, str3) {
            jQuery(str).on("mouseover", function() {
                jQuery(str1).css({
                    "width": "120px",
                    "height": "24px"
                })

            })
            jQuery(str3).on("mouseleave", function() {
                jQuery(str1).css({
                    "width": "0px",
                    "height": "24px"
                })


            })
        }

        SearchBoxExpansion("div.searchicon", "div.search", "section.searchbox")

        SearchBoxExpansion("div.searchicon", "div.search", "section.searchbox9")


        /*-----------------------------------------------------------------------------MENUBAR DROPDOWN--------------------------------------------------------------------------*/

        jQuery("section.linkitem ul li").mouseover(function() {
            jQuery(this).children('ul').slideDown("slow");

        })
        jQuery("section.linkitem  ul li").mouseleave(function() {
            /*jQuery('ul',this).stop(true,true).slideUp("slow")*/
            jQuery(this).children('ul').stop(true, true).fadeOut("slow");
        })


        /*--------------------------------------------------------------------------'thirdul' icon animation----------------------------------------------------------------------*/

        jQuery("section.linkitem ul li ul#thirdul li").mouseover(function() {
            jQuery(this).children("div").find("img").Scale({
                xaxis: 0.6,
                yaxis: 0.6
            })

        })
        jQuery("section.linkitem ul li ul#thirdul li,section.linkitem ul li ul#thirdul li ul li,section.linkitem ul li ul#thirdul li ul li ul li").mouseleave(function() {
            /*jQuery('ul',this).stop(true,true).slideUp("slow")*/
            jQuery(this).children("div").find("img").Scale({
                xaxis: 0.8,
                yaxis: 0.8
            })
        })


        /*-----------------------------------------------------------------------RESPONSIVE----------------------------------------------------------------------------------------*/



        jQuery("div.responsiveicon").on("click", function() /*RESPONSIVE*/ {
            jQuery("section.linkitem>ul").slideDown("slow")

        })



    } /*megamenubar plugin ends here*/


}(jQuery));



jQuery(document).ready(function() {
    //jQuery("nav.menubar").megamenubar();
    console.log('docready');
});
