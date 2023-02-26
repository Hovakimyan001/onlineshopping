import { useState } from "react"

export default function Showmenu() {

  const [picIndex, setPicIndex] = useState(0);
  const pictures = ['images/1.jpg', 'images/2.webp', 'images/3.jpg', 'images/4.jpg', 'images/5.jpg'];

  setTimeout(() => {
    picIndex > pictures.length - 2 ? setPicIndex(0) : setPicIndex(picIndex + 1)
  }, 5000);

  return (
    <div className="showmenu">
      <div className="show" style={{ background: `url(${pictures[picIndex]})` }}></div>
      <div className="show"></div>
      <div className="show"></div>
      <div className="show"></div>
      <div className="show"></div>
    </div>
  )
}
