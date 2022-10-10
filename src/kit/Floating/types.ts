import type {
  AutoUpdateOptions,
  ComputePositionConfig,
  ComputePositionReturn,
  Padding,
} from "@floating-ui/dom";
import type { Readable } from "svelte/store";

export type ComputeConfig = Omit<ComputePositionConfig, "platform"> & {
  onComputed?: (computed: ComputePositionReturn) => void;
  autoUpdate?: AutoUpdateOptions | true;
};
export type UpdatePosition = (
  contentOptions?: Omit<ComputeConfig, "autoUpdate">
) => void;
export type ReferenceAction = (node: HTMLElement) => void;
export type ContentAction = (
  node: HTMLElement,
  contentOptions?: Omit<ComputeConfig, "autoUpdate">
) => void;
export type ArrowOptions = {
  padding?: Padding;
  element: Readable<HTMLElement> | HTMLElement;
};
