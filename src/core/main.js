// =========================
// core/main.js
// =========================

// CSS + Bootstrap
import '../scss/styles.scss';
import * as bootstrap from 'bootstrap';

// Features
import {initReviewsFeature} from "../features/reviews/index.js";

// =========================
// AppMain (bootstrap)
// =========================


// Als de pagina geladen is, starten we de app
document.addEventListener('DOMContentLoaded', () => {
   initReviewsFeature();
});
