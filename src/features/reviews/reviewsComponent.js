import { subscribe } from '../../core/eventBus.js';
import { reviewsStore } from './reviewsStore.js';
import { getProductName } from '../products/productComponent.js';

export function renderReviews(productId, container) {
    function update() {
        const reviews = reviewsStore.getReviewsForProduct(productId);
        const productName = getProductName(productId);

        container.innerHTML = `
      <h3>Reviews voor: ${productName}</h3>
      <ul>
        ${reviews
            .map(r => `<li><strong>${r.name}</strong>: ${r.text}</li>`)
            .join('')}
      </ul>
    `;
    }

    subscribe('REVIEW_CHANGED', changedId => {
        if (changedId === productId) {
            update();
        }
    });

    update();
}