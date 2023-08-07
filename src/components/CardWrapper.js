import "./styles/CardWrapper.css";

function CardWrapper(props) {
  // Wrapper components will only allow props that you define, unlike standard HTML tags.
  // Therefore, "classes" is defined here so that...
  // the wrapper can use css stylings from across the application, wherever we use it.

  // Also, we have created a separate CSS file for this wrapper,
  // to remove duplication of styles from multiple other CSS files.
  // Duplication is avoided as we will be wrapping this around many other components
  const classes = "card-wrapper " + props.className;
  // Whitespace after card-wrapper is important, as we are applying two different classNames

  // {props.children} is required if you want the component to wrap around other components
  // and display those elements
  return <div className={classes}>{props.children}</div>;
}

export default CardWrapper;
