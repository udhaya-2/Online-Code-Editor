// src/components/EditorLayout.jsx
import React from "react";
import { NavLink, Outlet } from "react-router-dom";
import { Button } from "react-bootstrap";
import Preview from "./Preview";

function EditorLayout({ handleRun, srcDoc }) {
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
