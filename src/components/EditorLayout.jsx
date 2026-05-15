// src/components/EditorLayout.jsx
import React from "react";
import { NavLink, Outlet } from "react-router-dom";
import { Button } from "react-bootstrap";
import Preview from "./Preview";

function EditorLayout({ handleRun, srcDoc }) {

    const downloadFile = (content, fileName) => {

        const element = document.createElement("a");

        const file = new Blob(
            [content],
            { type: "text/html" }
        );
        console.log(file);
        
        element.href = URL.createObjectURL(file);

        element.download = fileName;

        document.body.appendChild(element);

        element.click();

    };
    return (
        <div>
            {/* Sidebar Navigation */}
            <div className="lan mt-3">
                <ol>
                    <li><NavLink to="/">Index.html</NavLink></li>
                    <li><NavLink to="/css">Style.css</NavLink></li>
                    <li><NavLink to="/js">Script.js</NavLink></li>
                    <li>
                        <Button
                            variant="primary"
                            onClick={handleRun}
                            className="bg-danger border border-color-danger"
                        >
                            RUN ▶
                        </Button>
                        <Button
                            variant="primary"
                            onClick={() => downloadFile(srcDoc, "code.html")}
                            className="bg-primary border border-color-primary"
                        >
                            Download Code
                        </Button>
                    </li>
                </ol>
            </div>

            {/* Editor + Preview */}
            <div className="d-flex">
                <Outlet />
                <Preview srcDoc={srcDoc} />
            </div>
        </div>
    );
}

export default EditorLayout;
