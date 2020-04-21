import React from 'react'

export default function Projek() {
   return (
      <div className="portofolio animated zoomIn">
         <h1>My Project</h1>
         <hr className="animated flash infinite" />
         <div className="row animated pulse" id="container-card">
            <div className="card" style={{ width: "12rem" }}>
               <img src="https://images.template.net/wp-content/uploads/2017/04/13125956/Dark-Theme-Web-Design-Template.jpg" className="card-img-top" alt="" />
               <div className="card-body">
                  <a href="https://dom-quote.netlify.com/"><button className="btn btn-light">Visit</button></a>
               </div>
            </div>
            <div className="card" style={{ width: "12rem" }}>
               <img src="https://i.pinimg.com/originals/65/f7/02/65f7025d3e65d75c735cef6bc2951ab9.jpg" className="card-img-top" alt="" />
               <div className="card-body">
                  <a href="https://omanid.netlify.com/"><button className="btn btn-light">Visit</button></a>
               </div>
            </div>
         </div>
         <div className="row" id="container-card2">
            <div className="card" style={{ width: "12rem" }}>
               <img src="https://webthemez.com/wp-content/uploads/2016/09/black-coming-soon-responsive-html-template.jpg" className="card-img-top" alt="" />
               <div className="card-body">
                  <a href="https://colabmusic.netlify.com/"><button className="btn btn-light">Visit</button></a>
               </div>
            </div>
            <div className="card" style={{ width: "12rem" }}>
               <img src="https://1stwebdesigner.com/wp-content/uploads/2015/03/2015_03_23_03_14_54_Nietzsche_Creative_Multipurpose_HTML5_Template.png" className="card-img-top" alt="" />
               <div className="card-body">
                  <a href="https://mo-ok.netlify.com/"><button className="btn btn-light">Visit</button></a>
               </div>
            </div>
            <div className="card" style={{ width: "12rem" }}>
               <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcSF5wAyvQ7V3IxNOLHW8cDuJz5L4vKaVAj0MbWbISKqEFraF8-v&usqp=CAU" className="card-img-top" alt="" />
               <div className="card-body">
                  <a href="https://react-crudd.netlify.app/LihatBarang"><button className="btn btn-light">Visit</button></a>
               </div>
            </div>
         </div>
      </div>

   )
}
