import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import photos from "./domains/PhotoByAlbum";
import styled from "styled-components";
import { useEffect, useState } from "react";
import { HeaderPhotosLength } from "./domains/HeaderPhotosLength";
import { Home } from "./domains/Home";
import DisplayLimit from "./domains/DisplayLimit";
import { DisplayAPhoto } from "./domains/DisplayAPhoto";
import PhotosByAlbum from "./domains/PhotoByAlbum";

const Main = styled.div`
  display: flex;
  flex-direction: column;
  color: white;
`;

const Header = styled.header`
  height: 150px;
  box-sizing: border-box;
  padding: 20px;
  background-color: #33ad73;
  display: flex;
  align-items: center;
  justify-content: space-between;
  a {
    color: white;
  }
  & > a {
    margin-right: 20px;
  }
`;

const Flex = styled.div`
  display: flex;
  align-items: center;
  & > * {
    margin: 10px;
  }
`;

const Content = styled.div`
  padding: 20px;
`;

function App() {
  const [photos, setPhotos] = useState([]);
  const [limit, setLimit] = useState(25);
  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/photos")
      .then((data) => data.json())
      .then((data) => {
        setPhotos(data);
      });
  }, []);

  return (
    <div className="App">
      <Main>
        <Router>
          <Header>
            <Flex>
              <Link to="/">Home</Link>
              <Link to="/photos-by-album">Photos by Album</Link>
            </Flex>
            <Flex>
              <DisplayAPhoto />
              <HeaderPhotosLength datas={photos} />
              <DisplayLimit setLimit={setLimit} limit={limit} />
            </Flex>
          </Header>

          <Content>
            <Switch>
              <Route path="/photos-by-album">
                <PhotosByAlbum limit={limit} />
              </Route>

              <Route path="/">
                <Home setLimit={setLimit} limit={limit} />
              </Route>
            </Switch>
          </Content>

          <footer>Ceci est le footer</footer>
        </Router>
      </Main>
    </div>
  );
}

export default App;
