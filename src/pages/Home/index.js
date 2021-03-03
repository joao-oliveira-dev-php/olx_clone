import React from 'react';
import { Link } from 'react-router-dom';

const Page = () => {
    return (
        <div>
            Pagina inicial

            <Link to="/about">About</Link>
        </div>

        
    );
}

export default Page;