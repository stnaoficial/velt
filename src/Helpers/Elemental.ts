import ElementModel from "../Library/ElementModel";

export default class Elemental
{
    public static assign<T extends HTMLElement | ElementModel>(target: T, ...props: any): void
    {
        for (const prop of props) {
            if (typeof prop === "string" || prop instanceof HTMLElement) {
                target.append(prop);
            } else {
                Object.assign(target, prop);
            }
        }
    }
}