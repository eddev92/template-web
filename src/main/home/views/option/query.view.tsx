import React, { useState } from 'react';
import { connect, ConnectedProps } from 'react-redux';

let isFiltered = false
const QueryView: React.FC<null & ConnectedProps> = ({ history, dispatch }) => {
  
    return (
       <div>
           QUERY
       </div>
    );
};

const mapStateToProps = (state) => {
    return {
    }
  }

export default connect(mapStateToProps)(QueryView);
