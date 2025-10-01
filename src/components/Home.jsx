import React, { useState, useEffect } from "react";
import Editor from "./Editor";
import "../App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import LOGIN from "./login";
import Navbar from "./Navbar";
import EditorLayout from "./EditorLayout";
import SignUp from "./signUp";
const Home = ()=>{
    const [html, setHtml] = useState("");
    const [css, setCss] = useState("");
    const [js, setJs] = useState("");
    const [srcDoc, setSrcDoc] = useState("");
    // default code setup
    useEffect(() => {
        setHtml(`<h1 class="title">Hello World!</h1><p id="currentTime"></p>`);
    }, []);
    useEffect(() => {
        setCss(`body{padding:25px;} .title{color:#5C6AC4;}`);
    }, []);
    useEffect(() => {
        setJs(`function showTime(){document.getElementById('currentTime').innerHTML=new Date().toUTCString();} showTime(); setInterval(showTime,1000);`);
    }, []);

    const handleRun = () => {
        const code = `
        <html>
            <head><style>${css}</style></head>
            <body>
                ${html}
                <script>${js}<\/script>
            </body>
        </html>`;
        setSrcDoc(code);
    };
    return(<Router>
        <div className="App">
            <Navbar />
            <Routes  style={{ backgroundColor: "rgb(245, 245, 245)" }}>
                {/* Login Page → Separate Screen */}
                <Route path="/login" element={<LOGIN />} />
                <Route path="/signup" element={<SignUp/>}></Route>
                {/* Editor Layout → Shared for /, /css, /js */}
                <Route element={<EditorLayout handleRun={handleRun} srcDoc={srcDoc} />}>
                    <Route path="/" element={<Editor language="html" value={html} onChange={setHtml} />} />
                    <Route path="/css" element={<Editor language="css" value={css} onChange={setCss} />} />
                    <Route path="/js" element={<Editor language="javascript" value={js} onChange={setJs} />} />
                </Route>
            </Routes>
        </div>
        </Router>)
}
export default Home;