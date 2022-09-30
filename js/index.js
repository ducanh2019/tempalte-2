
$(function () {
    $(".list").find(".accordion-toggle").click(function () {
        $(this).next().toggleClass("open").slideToggle("fast");
        $(this).toggleClass("active-tab").find("a").toggleClass("active");

        $(".list .accordion-content").not($(this).next()).slideUp("fast").removeClass("open");
        $(".list .accordion-toggle").not(jQuery(this)).removeClass("active-tab").find(".link").removeClass("active");
    });
});

let scrollpos = window.scrollY
const header = document.getElementById("nav-head")
const header_height = header.offsetHeight


const add_class_on_scroll = () => header.classList.add("scrolled")
const remove_class_on_scroll = () => header.classList.remove("scrolled")


window.addEventListener('scroll', function () {
    scrollpos = window.scrollY

    if (scrollpos >= header_height) { add_class_on_scroll() }
    else { remove_class_on_scroll() }

    console.log(scrollpos)
})