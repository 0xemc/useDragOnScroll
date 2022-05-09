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
declare const useScrollOnDrag: (scrollableContainerId: string) => (target: HTMLElement | null) => void;
export default useScrollOnDrag;
