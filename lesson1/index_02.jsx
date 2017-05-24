const text = "Lorem ipsum could be here"

const TextBox = ({children}) => <span>{ children }</span>;

const Main = () => (
  <TextBox>{text}</TextBox>
)

ReactDOM.render(
    <Main />,
    document.getElementById('root')
);
