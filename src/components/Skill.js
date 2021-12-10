import React from 'react';
import {AiFillHtml5} from 'react-icons/ai';
import {DiCssTricks} from 'react-icons/di';
import {SiJavascript} from 'react-icons/si';
import {FaReact} from 'react-icons/fa';
import {FaAws} from 'react-icons/fa';

const Skill = () => {
    return (
        <div className="d-flex justify-content-center flex-wrap">
            <AiFillHtml5 className="icon_size mx-3" />
            <DiCssTricks className="icon_size mx-3" />
            <SiJavascript className="icon_size mx-3" />
            <FaReact className="icon_size mx-3" />
            <FaAws className="icon_size mx-3" />
        </div>
    );
};

export default Skill;