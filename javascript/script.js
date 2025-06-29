import AtivaTab from "/javascript/ativa-tab.js";
import AtivaAcordion from "/javascript/ativa-acordion.js";
import ScrollSuave from "/javascript/scroll-suave.js";
import AnimaScroll from "/javascript/anima-scroll.js";
import Modal from "/javascript/modal.js";
import Tooltip from "/javascript/tooltip.js";
import DropdownMenu from "/javascript/dropdown-menu.js";
import MenuMobile from "/javascript/menu-mobile.js";
import Funcionamento from "/javascript/funcionamento.js";
import criarAnimais from "/javascript/fetch-animais.js";
import fetchBitcoin from "/javascript/fetch-bitcoin.js";
import SlideNav from "/javascript/slides.js";

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

criarAnimais("/javascript/animaisAPI.json", ".numeros-animais");

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
