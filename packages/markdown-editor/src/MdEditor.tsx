import { useState } from "react"
import { marked } from "marked";
import "./md-editor.css"

export default function MdEditor() {
  const [str, setStr] = useState("")
  const [mdHtml, setMdHtml] = useState("")

  const onChange = async (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    const newStr = e.target.value
    setStr(newStr)
    const parsed = await marked.parse(newStr)
    setMdHtml(parsed)
    console.log(newStr, mdHtml);

  }
  return (
    <div className="md-editor">
      <h1>Markdown Editor</h1>
      {/* 为什么这边可以使用value和onChange？ */}
      <div className="md-editor-body">
        <textarea
          rows={10}
          cols={50}
          value={str}
          onChange={onChange}
        ></textarea>
        <div className="preview" dangerouslySetInnerHTML={{ __html: mdHtml }} />
      </div>
    </div>
  )
}
