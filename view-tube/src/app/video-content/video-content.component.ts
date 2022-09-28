import { Component } from '@angular/core';
import { VideoService } from '../services/video.service';
import * as moment from 'moment';
import 'moment-duration-format';


@Component({
  selector: 'app-video-content',
  templateUrl: './video-content.component.html',
  styleUrls: ['./video-content.component.css']
})
export class VideoContentComponent {

  video$: Array<any>;
  constructor(private videoService: VideoService) {
    this.video$ = this.videoService.videoList.items.map(this.addRelativeTime);
  }

  addRelativeTime(video: any) {

    video.snippet.relativeTime = moment(video.snippet.publishedAt, moment.defaultFormatUtc).fromNow();
    video.contentDetails.length = moment.duration(video.contentDetails.duration, "minutes").format();
    return video;
  }

}
