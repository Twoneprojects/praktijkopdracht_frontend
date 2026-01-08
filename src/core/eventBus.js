// =========================
// core/eventBus.js
// =========================

const listeners = {};
export function subscribe(event, callback) {
    if (!listeners[event]) listeners[event] = [];
    listeners[event].push(callback);
}
export function publish(event, data) {
    if (!listeners[event]) return;
    listeners[event].forEach(cb => cb(data));
}