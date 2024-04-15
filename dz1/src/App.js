import './App.css';

function Title() {
  return(
    <>
      <p>do cupidatat cupidatat eu eiusmod voluptate elit sint.</p>
    </>
  )
}

function Header(){
  return(
    <>
      <Title/>
      <h1>header</h1>
    </>
  )
}

function Footer() {
  return(
    <>
      <Title/>
      <p>lorem1</p>
    </>
  )
}

function Content() {
  return(
    <>
      <Title/>
      <p>some content</p>
    </>
  )
}


function App() {
  return (
    <div>
      <Header/>
      <h2>hello</h2>
      <Content/>
      <Footer/>
    </div>
    
  );
}

export default App;
