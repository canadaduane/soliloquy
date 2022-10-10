import { autoUpdate, computePosition } from "@floating-ui/dom";
import type {
  ComputeConfig,
  ContentAction,
  ReferenceAction,
  UpdatePosition,
} from "./types";

export function createFloatingActions(
  initOptions?: ComputeConfig
): [ReferenceAction, ContentAction, UpdatePosition] {
  let referenceElement: HTMLElement;
  let contentElement: HTMLElement;
  let options: ComputeConfig | undefined = initOptions;

  const updatePosition = (updateOptions?: ComputeConfig) => {
    if (referenceElement && contentElement) {
      options = { ...initOptions, ...updateOptions };
      computePosition(referenceElement, contentElement, options).then((v) => {
        Object.assign(contentElement.style, {
          position: v.strategy,
          left: `${v.x}px`,
          top: `${v.y}px`,
        });

        options.onComputed && options.onComputed(v);
      });
    }
  };

  const referenceAction: ReferenceAction = (node) => {
    referenceElement = node;
    updatePosition();
  };

  const contentAction: ContentAction = (node, contentOptions?) => {
    contentElement = node;
    options = { ...initOptions, ...contentOptions };
    const cleanupAutoUpdate = options.autoUpdate
      ? autoUpdate(
          referenceElement,
          contentElement,
          updatePosition,
          options.autoUpdate === true ? {} : options.autoUpdate
        )
      : undefined;
    if (!cleanupAutoUpdate) updatePosition();

    return {
      update: updatePosition,
      destroy: cleanupAutoUpdate,
    };
  };

  return [
    referenceAction, // Action to set the reference element
    contentAction, // Action to set the content element and apply config overrides
    updatePosition, // Method to update the content position
  ];
}
