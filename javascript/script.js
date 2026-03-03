import AtivaTab from "./ativa-tab.js";
import AtivaAcordion from "./ativa-acordion.js";
import ScrollSuave from "./scroll-suave.js";
import AnimaScroll from "./anima-scroll.js";
import Modal from "./modal.js";
import Tooltip from "./tooltip.js";
import DropdownMenu from "./dropdown-menu.js";
import MenuMobile from "./menu-mobile.js";
import Funcionamento from "./funcionamento.js";
import criarAnimais from "./fetch-animais.js";
import fetchBitcoin from "./fetch-bitcoin.js";
import SlideNav from "./slides.js";

const scrollSuave = new ScrollSuave("[data-menu='suave'] a[href^='#']");
scrollSuave.init();

const ativaAcordion = new AtivaAcordion("[data-anime='acordion'] dt");
ativaAcordion.init();

const ativaTab = new AtivaTab("[data-tab='menu'] li", "[data-tab='conteudo'] .animais-animal");
ativaTab.init();

const modal = new Modal("[data-modal='abrir']", "[data-modal='fechar']", "[data-modal='conteudo']");
modal.init();

const tooltip = new Tooltip("[data-tooltip]");
tooltip.init();

criarAnimais("./animaisAPI.json", ".numeros-animais");

fetchBitcoin("https://blockchain.info/ticker", ".bitcoin");

const animaScroll = new AnimaScroll("[data-anime='scroll']");
animaScroll.init();

const dropdownMenu = new DropdownMenu("[data-dropdown]");
dropdownMenu.init();

const menuMobile = new MenuMobile("[data-menu='botao']", "[data-menu='lista']");
menuMobile.init();

const funcionamento = new Funcionamento("[data-semana], [data-horario]");
funcionamento.init();

const slide = new SlideNav(".wrapper", ".slide");
slide.init();
slide.addControle();
