import React from 'react';

const Home = (props: { name: string }) => {
    return (
        <div>
            {props.name ? 'Hi ' + props.name : 'You are not logged in'}
            <br/>
            {`TODO: List available sheets here`}
        </div>
    );
};

export default Home;