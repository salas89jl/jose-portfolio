import React from 'react'
import YouTube from 'react-youtube'

export default class YoutubeVideo extends React.Component {
  render () {
    return (
      <div className="video-container bg-black">
        <div >
          <YouTube videoId="sMpkAlAPiYQ" opts={this.getVideoOptions()} onReady={this._onReady} />
        </div>
      </div>
    )
  }

  getVideoOptions () {
    return {
      playerVars: {
        autoplay: 1
      }
    }
  }

  _onReady (event) {
    event.target.pauseVideo()
  }
}
