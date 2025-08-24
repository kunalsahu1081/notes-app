import {$applyNodeReplacement, ElementNode, } from "lexical";


export class MyNoteNode extends ElementNode {

    __custom_inline_style: string;

    static getType(): string {
        return 'my-xx-checkbox-node';
    }

    static clone(node: MyNoteNode): MyNoteNode {
        return new MyNoteNode(node.__custom_inline_style, node.__key);
    }

    returnNewSimilar(): MyNoteNode {
        return new MyNoteNode(this.__custom_inline_style);
    }

    constructor(custom_inline_style: string, key?: any) {

        super(key);
        this.__custom_inline_style = custom_inline_style;

    }

    createDOM(): HTMLElement {
        // Define the DOM element here

        const externalDiv = document.createElement('div');

        externalDiv.style.cssText = "display: flex; flex-direction: column; padding: 8px;" + this.__custom_inline_style;
        externalDiv.id = this.__key;

        return externalDiv;
    }

    setStyle(custom_inline_style) {

        const self = this.getWritable();
        self.__custom_inline_style = custom_inline_style;

        return self;

    }

    updateDOM(_prevNode: this, _dom: HTMLElement): boolean {

        if (_prevNode.__custom_inline_style !== this.__custom_inline_style) {

            _dom.style.cssText = "display: flex; flex-direction: column; padding: 8px;" + this.__custom_inline_style;

            return  true;
        }

        return false;
    }

    isInline() {
        return false;
    }

}

export function $createMyNoteNode(custom_inline_style: string = ""): { node: MyNoteNode } {

    const newNode = new MyNoteNode(custom_inline_style);

    return {node: $applyNodeReplacement(newNode)}

}

export function $isMyNoteNode(node: any | null | undefined,
): node is MyNoteNode {
    return node instanceof MyNoteNode;
}