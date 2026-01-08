import { reviewsStore } from './reviewsStore.js';
import { renderReviews } from './reviewsComponent.js';

export function initReviewsFeature() {
    const form = document.querySelector('[data-review-form]');

    // Render reviews voor alle producten
    document.querySelectorAll('[data-reviews]').forEach(container => {
        const productId = container.dataset.reviews;
        renderReviews(productId, container);
    });

    form.addEventListener('submit', e => {
        e.preventDefault();

        const productId = form.querySelector('[name="product"]').value;
        const name = form.querySelector('[name="name"]').value;
        const text = form.querySelector('[name="review"]').value;

        reviewsStore.addReview(productId, name, text);
        form.reset();
    });
}