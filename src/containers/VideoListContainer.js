import { connect } from 'react-redux';
import VideoList from './../components/VideoList.js';
import videoList from './../actions/videoList.js';


const mapStateToProps = (state) => ({videos: state.videoList});

const mapDispatchToProps = (dispatch) => ({
  handleVideoListEntryTitleClick: (videos) => dispatch(videoList(videos))
})


var VideoListContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(VideoList)

//TODO: define a VideoListContainer component which will hook up your action
// dispatchers with your VideoList component props.

export default VideoListContainer;
