import React from 'react';
import './style.css';
import gitHubIcon from './gitHub-black.svg';

const BtnGitHub = ({Link}) => {
    return(
        <a href={Link} target = "_blank" rel="noopener noreferrer" className="btn-outline">
                    <img src={gitHubIcon} alt=""/>
                    GitHub repo
                </a>
    );
}

export default BtnGitHub;