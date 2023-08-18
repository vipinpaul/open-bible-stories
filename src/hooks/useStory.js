import { useState } from "react"
// Todo
const useStory=()=>{
  const [story,setStory]=useState([]);

  const updateSection = (textValue,sectionId) => {
    console.log("hello",textValue,sectionId);
    const value = textValue.toString().replace(/[\n\r]/gm, '');
    const sectionData = story[sectionId-1];
    console.log('sectionData',sectionData);
    let newStory = {};
    if (Object.prototype.hasOwnProperty.call(sectionData, 'title')) {
      newStory = {
        id: sectionId,
        title: value,
      };
    } else if (Object.prototype.hasOwnProperty.call(sectionData, 'text')) {
      newStory = {
        id: sectionId,
        img: sectionData.img,
        text: value,
      };
    } else if (Object.prototype.hasOwnProperty.call(sectionData, 'end')) {
      newStory = {
        id: sectionId,
        end: value,
      };
    }

    const newStories = story.map((story) => (story.id !== newStory.id ? story : newStory));
    let newData = { ...story };
    newData = newStories;
    console.log(newData);
    setStory(newData);
  };

  return{
    states:{story},
    actions:{setStory,updateSection},
  }
}

export default useStory;