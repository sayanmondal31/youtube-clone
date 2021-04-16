import React from "react";
import TuneOutlinedIcon from "@material-ui/icons/TuneOutlined";
import ChannelRow from "./ChannelRow/ChannelRow";
import VideoRow from "./VideoRow/VideoRow";
import "./SearchPage.css";

function SearchPage() {
  return (
    <div className="searchPage">
      <div className="searchPage_filter">
        <TuneOutlinedIcon />
        <h2>Filter</h2>
      </div>
      <hr />

      <ChannelRow
        image="https://avatars.githubusercontent.com/u/43213197?v=4"
        channel="Sayan Mondal"
        verified
        subs="658k"
        noOfVideos={382}
        description="You can find awesome programming videos here"
      />
      <hr />
      <VideoRow
        title="Become a web developer in 10 minutes"
        views="2.3M Views"
        timestamp="3 days ago"
        channelImage="https://avatars.githubusercontent.com/u/43213197?v=4"
        channel="Sayan Mondal"
        image="https://res.cloudinary.com/practicaldev/image/fetch/s--5NXiT3Hl--/c_imagga_scale,f_auto,fl_progressive,h_420,q_auto,w_1000/https://dev-to-uploads.s3.amazonaws.com/i/75uyvkb5753zwjxnvzms.jpg"
      />
            <VideoRow
        title="Become a web developer in 10 minutes"
        views="2.3M Views"
        timestamp="3 days ago"
        channelImage="https://avatars.githubusercontent.com/u/43213197?v=4"
        channel="Sayan Mondal"
        image="https://blog.hyperiondev.com/wp-content/uploads/2019/02/Blog-Types-of-Web-Dev.jpg"
      />
            <VideoRow
        title="Become a web developer in 10 minutes"
        views="2.3M Views"
        timestamp="3 days ago"
        channelImage="https://avatars.githubusercontent.com/u/43213197?v=4"
        channel="Sayan Mondal"
        image="https://res.cloudinary.com/practicaldev/image/fetch/s--5NXiT3Hl--/c_imagga_scale,f_auto,fl_progressive,h_420,q_auto,w_1000/https://dev-to-uploads.s3.amazonaws.com/i/75uyvkb5753zwjxnvzms.jpg"
      />
            <VideoRow
        title="Become a web developer in 10 minutes"
        views="2.3M Views"
        timestamp="3 days ago"
        channelImage="https://avatars.githubusercontent.com/u/43213197?v=4"
        channel="Sayan Mondal"
        image="https://blog.hyperiondev.com/wp-content/uploads/2019/02/Blog-Types-of-Web-Dev.jpg"
      />
            <VideoRow
        title="Become a web developer in 10 minutes"
        views="2.3M Views"
        timestamp="3 days ago"
        channelImage="https://avatars.githubusercontent.com/u/43213197?v=4"
        channel="Sayan Mondal"
        image="https://res.cloudinary.com/practicaldev/image/fetch/s--5NXiT3Hl--/c_imagga_scale,f_auto,fl_progressive,h_420,q_auto,w_1000/https://dev-to-uploads.s3.amazonaws.com/i/75uyvkb5753zwjxnvzms.jpg"
      />
            <VideoRow
        title="Become a web developer in 10 minutes"
        views="2.3M Views"
        timestamp="3 days ago"
        channelImage="https://avatars.githubusercontent.com/u/43213197?v=4"
        channel="Sayan Mondal"
        image="https://blog.hyperiondev.com/wp-content/uploads/2019/02/Blog-Types-of-Web-Dev.jpg"
      />
    </div>
  );
}

export default SearchPage;
