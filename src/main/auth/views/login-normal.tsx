import React                   from 'react';
import { connect, ConnectedProps } from 'react-redux';
import { RouteComponentProps }     from 'react-router';
import { Link, withRouter }    from 'react-router-dom';

const LoginNormalView: React.FC<RouteComponentProps & ConnectedProps> = ({history, dispatch}) => {
    return (
        <div>
            LOGIN
        </div>
    );
};

const mapStateToProps = (state) => {
    return {
    }
  }

export default withRouter(connect(mapStateToProps)(LoginNormalView));
