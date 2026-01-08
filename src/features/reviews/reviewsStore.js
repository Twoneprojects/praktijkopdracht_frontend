import { publish } from '../../core/eventBus.js';
class ReviewsStore {
    constructor() {
        this.reviews = {};
    }
    addReview(productId, name, text) {
        if (!this.reviews[productId]) {
            this.reviews[productId] = [];
        }
        this.reviews[productId].push({ name, text });
        publish('REVIEW_CHANGED', productId);
    }
    getReviewsForProduct(productId) {
        return this.reviews[productId] || [];
    }
}
export const reviewsStore = new ReviewsStore();