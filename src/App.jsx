import EditorExample from './components/Examples/EditorExample'
import useStory from './hooks/useStory'
import jsonTomd from './util/jsonTomd'
function App() {
  const {states:{story}}=useStory()
  const handleMd=()=>{
    console.log("hey",story);
    const md=jsonTomd(story)
    console.log(md)
  }
  return (
    <>
    <EditorExample/>
    <button onClick={()=>handleMd()}>MD</button>
    </>
  )
}

export default App
