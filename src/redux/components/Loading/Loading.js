import React from 'react';

import "./Loading.css"

const Loading = () => {
    return (
        <div id="LoadingContainer">
            <div class="spinner">
                <div class="bounce1"></div>
                <div class="bounce2"></div>
                <div class="bounce3"></div>
            </div>
        </div>
    );
}

export default Loading;
