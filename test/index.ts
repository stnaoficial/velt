import velt from "../src";

function Example({
    children
}: {
    children: (HTMLElement | string)[]
}) {
    return (
        velt("p",
            ...children
        )
    );
}

velt(document.body,
    velt(Example,
        "Hello, world!"
    )
);