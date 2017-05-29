const posts = [post1, post2, post3]

const post1 =  {
  id: 1,
  text: "This is an awesome blogpost 1",
  details: {
    author: "Avdi Grimm",
    created_at: moment("20150620", "YYYYMMDD").fromNow(),
    updated_at: moment().startOf('day').fromNow(),
    likes: 12
  },
  image: {
    src: "https://s-media-cache-ak0.pinimg.com/736x/8b/d1/b8/8bd1b8b02e9cb633adb1d789dd4588c6.jpg",
    alt: "Who cares",
    style: {width: 200, height: 200}
  }
}

const post2 =  {
  id: 2,
  text: "This is an awesome blogpost 2",
  details: {
    author: "Gary Bernhardt",
    created_at: moment("20140620", "YYYYMMDD").fromNow(),
    updated_at: moment().startOf('day').fromNow(),
    likes: 34
  },
  image: {
    src: "https://s-media-cache-ak0.pinimg.com/736x/8b/d1/b8/8bd1b8b02e9cb633adb1d789dd4588c6.jpg",
    alt: "Who cares",
    style: {width: 200, height: 200}
  }
}

const post3 =  {
  id: 3,
  text: "This is an awesome blogpost 3",
  details: {
    author: "Ryan Bates",
    created_at: moment("20160620", "YYYYMMDD").fromNow(),
    updated_at: moment().startOf('day').fromNow(),
    likes: 99
  },
  image: {
    src: "https://s-media-cache-ak0.pinimg.com/736x/8b/d1/b8/8bd1b8b02e9cb633adb1d789dd4588c6.jpg",
    alt: "Who cares",
    style: {width: 200, height: 200}
  }
}

export default posts;
