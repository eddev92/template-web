import React                from 'react';
import { Link, withRouter } from 'react-router-dom';
import { connect, ConnectedProps } from 'react-redux';
import { RouteComponentProps }     from 'react-router';

const HomeSelectorView: React.FC<RouteComponentProps & ConnectedProps> = ({ dispatch }) => {

    return (
     <div>
       HOME
     </div>
    );
};

const mapStateToProps = (state) => {
  return {
  }
}

export default withRouter(connect(mapStateToProps)(HomeSelectorView));
