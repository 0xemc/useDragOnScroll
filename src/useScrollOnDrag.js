"use strict";
exports.__esModule = true;
var react_1 = require("react");
/**
 * This hook provides drag and scroll functionality for different elements within the DOM.
 * e.g A drag event on one "source" element can create a scroll event on another "target" element
 *
 * 1. Assign the return value of this hook to the `ref` attribute of the *drag* source element
 * 2. Provide the `id`, when calling the hook, of the element/container in which to scroll as a response to drag events
 *
 * @param scrollableContainerId {string} - the id of the element which to scroll in response to drag
 * @returns {(element: HTMLElement) => void} - a call back to be assigned to the ref attribute of the
 * element from which to listen for drag events.
 *
 * Note: This hook is an adapted version of https://htmldom.dev/drag-to-scroll/
 */
var useScrollOnDrag = function (scrollableContainerId) {
    return (0, react_1.useCallback)(function (target) {
        var mouseDownHandler = function (e) {
            /** Find the target scroll container within the dom */
            var scrollableContainer = document.getElementById(scrollableContainerId);
            /** Temporary local state for the duration of this callback */
            var state = {
                // The current scroll
                left: (scrollableContainer === null || scrollableContainer === void 0 ? void 0 : scrollableContainer.scrollLeft) || 0,
                top: (scrollableContainer === null || scrollableContainer === void 0 ? void 0 : scrollableContainer.scrollTop) || 0,
                // Get the current mouse position
                x: e.clientX,
                y: e.clientY
            };
            /** scroll our container on mouse move events */
            var mouseMoveHandler = function (e) {
                // How far the mouse has been moved
                var dx = e.clientX - state.x;
                var dy = e.clientY - state.y;
                // Scroll the element
                scrollableContainer === null || scrollableContainer === void 0 ? void 0 : scrollableContainer.scroll(state.left - dx, state.top - dy);
            };
            /** Remove all listeners on mouse up */
            var mouseUpHandler = function () {
                document.removeEventListener('mousemove', mouseMoveHandler);
                document.removeEventListener('mouseup', mouseUpHandler);
            };
            /** Add our listeners */
            document.addEventListener('mousemove', mouseMoveHandler);
            document.addEventListener('mouseup', mouseUpHandler);
        };
        target === null || target === void 0 ? void 0 : target.addEventListener('mousedown', mouseDownHandler);
    }, [scrollableContainerId]);
};
exports["default"] = useScrollOnDrag;
