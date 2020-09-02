import React       ,{useState}                          from 'react';
import { connect, ConnectedProps } from 'react-redux';

const LandingView: React.FC<null & ConnectedProps> = ({dispatch}) => {
  return (
    <div>LANDING</div>
  )
}

const mapStateToProps = (state) => {
  return {
  }
}

export default connect(mapStateToProps)(LandingView);
