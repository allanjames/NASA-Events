import React from 'react';

const ApiList = (props) => {

        return (
            <ul className="nasa-list">
                { props.list.map( item => (
                    <li key={item.activityID}>{item.note}</li>
                    )
                )}
            </ul>
        );
}
export default ApiList;