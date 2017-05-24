const style = {width: 200, height: 200}
const imageURL = "https://s-media-cache-ak0.pinimg.com/736x/8b/d1/b8/8bd1b8b02e9cb633adb1d789dd4588c6.jpg"
const altText= "Guy rides a co...grown chicken"
const text = "Lorem ipsum could be here"

const Image = (props) => (
  <div>
     <img
       src={props.imageAddress}
       style={props.style}
       alt={props.altText}
     />
  </div>
)

const TextBox = ({children}) => <span>{ children }</span>;

const BlogItem = () => (
  <Image
    imageAddress={imageURL}
    style={style}
    altText={altText}
  />
  <TextBox>{text}</TextBox>
)

const Main = () => (
  <BlogItem />
  <BlogItem />
  <BlogItem />
)

ReactDOM.render(
    <Main />,
    document.getElementById('root')
);
