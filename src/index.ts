import { document } from "./Support/Document";
import ElementModel from "./Library/ElementModel";
import ElementHelper from "./Helpers/ElementHelper";

type VPrototype = (props: any) => HTMLElement;
type VSource = keyof HTMLElementTagNameMap | HTMLElement | VPrototype;
type VResult<T extends VSource> = T extends keyof HTMLElementTagNameMap? HTMLElementTagNameMap[T] : T extends VPrototype? ReturnType<T> : T;
type VSourceProps<T extends VSource> = VResult<T> | HTMLElement | {};

export default function velt<T extends VSource>(source: T, ...props: VSourceProps<T>[]): VResult<T> {
    let element: HTMLElement;

    if (source instanceof HTMLElement) {
        element = source;

    } else if (typeof source === "string") {
        element = document.createElement(source);

    } else {
        const model = new ElementModel();
        ElementHelper.assign(model, ...props);
        return source(model) as VResult<T>;
    }

    ElementHelper.assign(element, ...props);

    return element as VResult<T>;
}

declare global {
    interface Window {
        velt: Function
    }
}

window.velt = window.velt || velt;