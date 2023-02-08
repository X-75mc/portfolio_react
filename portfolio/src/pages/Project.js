import React from 'react';
import img from './../img/projects/02-big.jpg';
import BtnGitHub from '../components/BtnGitHub/BtnGitHub';
import { useParams } from 'react-router-dom';
import {projects} from './../Helpers/projectsList';

const Project = () => {

    const {id} = useParams();
    const project = projects[id];

    return (
        <main className="section">
        <div className="container">
            <div className="project-details">

                <h1 className="title-1">{project.title}</h1>

                <img src={project.imgBig} alt="" className="project-details__cover"/>

                <div className="project-details__desc">
                    <p>Skills: {project.skills}</p>
                </div>

                {project.gitHubLink && (<BtnGitHub Link = "https://github.com/"/>)}

                

            </div>
        </div>
    </main>
    );
}

export default Project;