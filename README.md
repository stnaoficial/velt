# Velt

# ****A TypeScript library for building interfaces****

Velt is a lightweight and easy-to-use library for building interfaces in TypeScript. It provides a simple API for creating and rendering UI components, making it ideal for building small to medium-sized applications.

## ****Installation****

To install Velt, simply run the following command:

```bash
yarn install velt
```

## ****Usage****

To use Velt in your TypeScript project, import it and start creating components. Here's an example:

```tsx
import velt from "velt";

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
```

In this example, we're creating a simple **`Example`** component that renders a **`p`** element with the text "Hello". We're then appending this component to the **`document.body`** element using the **`velt`** function.

Here's an example of using the **`velt`** function with an HTML tag name and attributes:

```tsx
import velt from "velt";

velt(document.body,
	velt("div", { class: "my-class" },
		"Hello, world!"
	)
);
```

In this example, we're creating a **`div`** element with the class "my-class" and the text "Hello, world!". We're then appending this element to the **`document.body`** element.

## ****API****

The **`velt`** function is the main API of the Velt library. It takes one or more arguments:

- A function that returns a Velt component
- A Velt component
- A string representing an HTML tag name
- An object representing HTML attributes
- A string representing text content

## ****Conclusion****

Velt is a lightweight and easy-to-use TypeScript library for building interfaces. Its simple API makes it ideal for small to medium-sized applications. Give it a try in your next project!