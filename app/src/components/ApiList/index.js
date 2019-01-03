import React from 'react';

const ApiList = (props) => {
        var query = 'item.'+props.index;
        var key;
        //set key index
        switch(props.index){
            case 'note':
            case 'location':
                key = "activityID";
                break;
            case 'startTime':
                key = "gstID";
                break;
            default :
                key = 'flrID';
                break;    
        }
        key = 'item.'+key;
        console.log(key);
        return (
            <ul className="nasa-list">
                { props.list.map( item => (
                    // eslint-disable-next-line
                    <li key={eval(key)}>{eval(query)}</li>
                    )
                )}
            </ul>
        );
}
export default ApiList;