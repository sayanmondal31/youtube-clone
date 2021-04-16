import React from "react";
import VideoCard from "../VideoCard/VideoCard";
import "./RecommendedVideo.css";

function RecommendedVideo() {
  return (
    <div className="recommendedVideo">
      <h2>Recommended</h2>
      <div className="recommendedVideo__videos">
        <VideoCard
          title="Become a web developer in 10 minutes"
          views="2.3M Views"
          timestamp="3 days ago"
          channelImage="https://avatars.githubusercontent.com/u/43213197?v=4"
          channel="Sayan Mondal"
          image="https://res.cloudinary.com/practicaldev/image/fetch/s--5NXiT3Hl--/c_imagga_scale,f_auto,fl_progressive,h_420,q_auto,w_1000/https://dev-to-uploads.s3.amazonaws.com/i/75uyvkb5753zwjxnvzms.jpg"
        />
        <VideoCard
          title="Become a web developer in 10 minutes"
          views="2.3M Views"
          timestamp="3 days ago"
          channelImage="https://avatars.githubusercontent.com/u/43213197?v=4"
          channel="Sayan Mondal"
          image="https://res.cloudinary.com/practicaldev/image/fetch/s--5NXiT3Hl--/c_imagga_scale,f_auto,fl_progressive,h_420,q_auto,w_1000/https://dev-to-uploads.s3.amazonaws.com/i/75uyvkb5753zwjxnvzms.jpg"
        />
        <VideoCard
          title="Become a web developer in 10 minutes"
          views="2.3M Views"
          timestamp="3 days ago"
          channelImage="https://avatars.githubusercontent.com/u/43213197?v=4"
          channel="Sayan Mondal"
          image="https://res.cloudinary.com/practicaldev/image/fetch/s--5NXiT3Hl--/c_imagga_scale,f_auto,fl_progressive,h_420,q_auto,w_1000/https://dev-to-uploads.s3.amazonaws.com/i/75uyvkb5753zwjxnvzms.jpg"
        />
        <VideoCard
          title="Become a web developer in 10 minutes"
          views="2.3M Views"
          timestamp="3 days ago"
          channelImage="https://avatars.githubusercontent.com/u/43213197?v=4"
          channel="Sayan Mondal"
          image="https://res.cloudinary.com/practicaldev/image/fetch/s--5NXiT3Hl--/c_imagga_scale,f_auto,fl_progressive,h_420,q_auto,w_1000/https://dev-to-uploads.s3.amazonaws.com/i/75uyvkb5753zwjxnvzms.jpg"
        />
      </div>
    </div>
  );
}

export default RecommendedVideo;
