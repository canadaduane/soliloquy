export function getAncestor(
  element: HTMLElement,
  ancestorTag: string
): HTMLElement {
  if (element === null) {
    return null;
  } else if (element.tagName === ancestorTag.toUpperCase()) {
    return element;
  } else {
    return getAncestor(element.parentElement, ancestorTag);
  }
}
