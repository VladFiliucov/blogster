const text = "Lorem ipsum could be here"

const TextBox = (props) => (
  <span> { props.text } </span>
)

const Main = () => (
  <TextBox text={text} />
)

ReactDOM.render(
    <Main />,
    document.getElementById('root')
);
