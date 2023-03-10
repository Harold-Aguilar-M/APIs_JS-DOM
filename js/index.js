import navHamburger from "./nav_hamburger.js";
import { clockDigital, alarm } from "./reloj.js";
import { movePointer, eventsKeyAlt } from "./eventKeyboard.js";
import { countDown } from "./count-down.js";
import { scrollTop } from "./scrollTopButton.js";
import darkMode from "./dark-mode.js";
import responsiveMedia from "./object_responsive.js";
import responsiveTester from "./tester_responsive.js";
import detectionUserDevices from "./detection_devices.js";
import statusNetwotk from "./status_network.js";
import detectWebCam from "./deteccion_web_cam.js";
import getGeolocation from "./geolocation.js";
import searchFilter from "./search_filter.js";
import giveawey from "./giveawey.js";
import slider from "./slider_responsive.js";
import scrollSpy from "./scroll_spy.js";
import smartVideo from "./intelligent_video.js";
import contactFormVlidations from "./form_validation.js";
import speechReader from "./storyteller.js";

const d = document;

d.addEventListener('DOMContentLoaded', (e) => {
    navHamburger(".button-nav", ".nav-hamburger", ".nav-hamburger a");
    clockDigital("#clock", "#play-clock", "#stop-clock");
    alarm("../assets/ringtones-iphone-8-plus.mp3","#play-alarm", "#stop-alarm");
    countDown(".count", ".mss");
    scrollTop(".btn-scroll-top");
    darkMode(".btn-dark-mode", "dark-mode");
    responsiveMedia("youtube",
    "(min-width: 1024px)",
    `<a href="https://goo.gl/maps/ELhYEZ2NVtjyJd1N9">Ver Mapa</a>`,
    `<iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1881.3308153496605!2d-99.16869369201568!3d19.42702059672191!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x85d1ff35f5bd1563%3A0x6c366f0e2de02ff7!2sEl%20%C3%81ngel%20de%20la%20Independencia!5e0!3m2!1ses-419!2smx!4v1632794361707!5m2!1ses-419!2smx" width="600" height="450" style="border:0;" allowfullscreen="" loading="lazy"></iframe>`);
    responsiveMedia("maps",
    "(min-width: 1024px)",
    `<a href="https://www.youtube.com/watch?v=6IwUl-4pAzc&list=PLvq-jIkSeTUZ6QgYYO3MwG9EMqC-KoLXA">Ver Video</a>`,
    `<iframe width="560" height="315" src="https://www.youtube.com/embed/6IwUl-4pAzc" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>`);

    responsiveTester("responsive-tester");
    detectionUserDevices("user-device");
    detectWebCam("webcam");
    getGeolocation("geolocation");
    searchFilter(".card-filter", ".card");
    giveawey("#winner-btn", ".player");
    slider();
    scrollSpy();
    smartVideo();
    contactFormVlidations();
});

d.addEventListener('keydown', (e) => {
    movePointer(e,".box", ".pointer");
    eventsKeyAlt(e);
});

statusNetwotk();
speechReader();
