import "../__styles/ChartBar.css";

const ChartBar = (props) => {
  // We are going to filll the bars in the chart as a % of the max value
  // We will dynamically set the style of an element in this component
  let barFillHeight = "0%";

  if (props.maxValue > 0) {
    barFillHeight = Math.round((props.value / props.maxValue) * 100) + "%";
  }
  return (
    <div className="chart-bar">
      <div className="chart-bar__inner">
        {/* style attribute requires an object, hence we use {{}}.
            If the css has '-' in it, like background-color, you have to put it in "background-color"
            or use camelCase. backgroundColor 
        */}
        <div
          className="chart-bar__fill"
          style={{ height: barFillHeight }}
        ></div>
      </div>
      <div className="chart-bar__label">{props.label}</div>
    </div>
  );
};

export default ChartBar;
