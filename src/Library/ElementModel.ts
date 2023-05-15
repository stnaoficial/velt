export default class ElementModel {
    public readonly children: (HTMLElement | string)[] = [];

    public append(child: HTMLElement | string) {
        this.children.push(child);
    }
}