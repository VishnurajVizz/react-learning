const createElement = (type, props, ...children) => {
  return {
    type,
    props: {
      ...props,
      children: children.map((child) =>
        typeof child === "object" ? child : createTextElement(child)
      ),
    },
  };
};

function createTextElement(text) {
  return {
    type: "TEXT_ELEMENT",
    props: {
      nodeValue: text,
      children: [],
    },
  };
}

const render = (element, container) => {
  const { type, props } = element;
  const dom =
    type === "TEXT_ELEMENT"
      ? document.createTextNode(type)
      : document.createElement(type);

  const isProperty = (key) => key !== "children";

  Object.keys(props)
    .filter(isProperty)
    .forEach((attr) => (dom[attr] = props[attr]));

  props.children.forEach((child) => render(child, dom));

  container.appendChild(dom);
};

const Vizz = {
  createElement,
  render,
};

/** @jsx Vizz.createElement */
const Heading = <head>Title</head>;

/** @jsx Vizz.createElement */
const Component = (
  <div id="wrapper">
  </div>
);

const container = document.getElementById("root");
console.log(Component);
Vizz.render(Component, container);
