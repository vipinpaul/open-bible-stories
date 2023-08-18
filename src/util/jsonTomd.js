const jsonTomd = (story) =>{
  console.log(story);
  let title; let body = ''; let end;
  story.forEach((s) => {
    if (Object.prototype.hasOwnProperty.call(s, 'title')) {
      title = `# ${s.title}\n\n`;
    }
    if (Object.prototype.hasOwnProperty.call(s, 'end')) {
      const foot = ((s.end).trim());
      end = `_${foot}_`;
    }
    if (Object.prototype.hasOwnProperty.call(s, 'text')) {
      body += `![OBS Image](${s.img})\n\n${s.text}\n\n`;
    }
  });
  return (title + body + end);
}
export default jsonTomd;