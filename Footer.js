import React from 'react';

export default function Footer() {

    let footerStyle = {
        position: "relative",
        width: "100%"
    }

    return (
        <div>
            <footer className="bg-dark text-light py-1" style={footerStyle}>
                <p className="text-center">
                    Copyright &copy; MyToDoList.com
                </p>
            </footer>
        </div>
    )
}
