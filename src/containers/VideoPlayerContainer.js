import { connect } from 'react-redux';
import VideoPlayer from '../components/VideoPlayer.js';

//TODO: define a VideoPlayerContainer component which will hook up your action
//dispatchers with your VideoPlayer component props.
const mapStateToProps = (state) => ({video: state.currentVideo});

var VideoListContainer= connect(
  mapStateToProps
)(VideoPlayer)

export default VideoListContainer;
