export default class Element {
    public static assign<T extends { append(arg: any): any }>(target: T, ...props: any): void {
        for (const prop of props) {
            if (typeof prop === "string" || prop instanceof HTMLElement) {
                target.append(prop);
            } else {
                Object.assign(target, prop);
            }
        }
    }
}