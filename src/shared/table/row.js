import React from 'react';
import ColComponent from './col';

const RowComponent = () => {
    return (
			<tr>
				<ColComponent />
				<ColComponent />
				<ColComponent />
				<ColComponent />
				<ColComponent />
				<ColComponent />
			</tr>
    )
}

export default RowComponent;
