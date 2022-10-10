import { get, type Readable } from "svelte/store";
import { arrow as arrowCore, type Middleware } from "@floating-ui/dom";
import type { ArrowOptions } from "./types";

export function arrow(options?: ArrowOptions): Middleware {
  function isStore(value: unknown): value is Readable<unknown> {
    return Object.prototype.hasOwnProperty.call(value, "subscribe");
  }

  return {
    name: "arrow",
    options,
    fn(args) {
      if (isStore(options.element)) {
        const element = get(options.element);

        if (element) {
          return arrowCore({
            element,
            padding: options.padding,
          }).fn(args);
        }
      } else if (options.element) {
        return arrowCore({
          element: options.element,
          padding: options.padding,
        }).fn(args);
      }

      return {};
    },
  };
}
