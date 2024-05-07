// import React from 'react'


import {  useTypewriter,Cursor } from "react-simple-typewriter"
import Footer from "../../Components/Footer/Footer"
import Header from "../../Components/Header/Header"
import TaskManager from '../../assets/TaskMange.png'
function Landing() {
    
        const [text] = useTypewriter({
          words: ["Students", "Programmers", "Designers", "Entrepreneurs"],
          loop: false,
        });
    
  return (
    <>
      <Header />
      <div className="container-fluid">
        <div className="row my-4">
          <div className="col-md-6 mt-5 mb-3 text-lg-end text-center">
            {/* text-md-right for medium screens, text-center for smaller screens */}
            <div>
              <h1 className="fw-bold text-light">
                The Ultimate Task
                <br />
                Management Solution
                <br />
                For <span>{text}</span>
                <Cursor cursorColor="#7137D5" />
              </h1>
              <div>
                <button className="btn btn-success">Get started</button>
              </div>
            </div>
          </div>
          <div className="col-md-6 col-lg-4 text-center ">
            {/* Centering the image */}
            <img
              src={TaskManager}
              alt="author"
              width={500}
              className="img-fluid"
            />
          </div>
        </div>

      <section>
          <div className="mb-4">
                <h6 className=" text-uppercase">Text content</h6>
                <hr data-content="AND" className="hr-text"/>
            </div>
      </section>
      </div>

      <Footer />
    </>
  );
}

export default Landing