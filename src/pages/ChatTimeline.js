import React from 'react';
import './ChatTimeline.css';

function ChatTimeline() {
  const timelineData = [

      {
        text: 'Sinh ra ở Tây Ninh',
        date: '24 -  10  - 2002',
        category: {
          tag: 'Cuộc sống',
          color: '#1DA1F2'
        },
      },

      {
        text: 'Học tại trường Tiểu Học Long Thành Bắc A',
        date: '30  -  08  -  2008',
        category: {
          tag: 'Học vấn',
          color: '#e17b77'
        },
      },

      {
        text: 'Đá bóng cho tuyển trường Tiểu Học Long Thành Bắc A',
        date: '26  -  03  -  2012',
        category: {
          tag: 'Thể thao',
          color: '#018f69'
        },
      },

      {
        text: 'Học tại trường THCS Lý Tự Trọng',
        date: '18  -  08  -  2013',
        category: {
          tag: 'Học vấn',
          color: '#e17b77'
        },
      },

      {
        text: 'Học tại trường THPT Lý Thường Kiệt',
        date: '30  -  08  -  2017',
        category: {
          tag: 'Học vấn',
          color: '#e17b77'
        },
      },

      {
        text: 'Vô địch giải THPT Lý Thường Kiệt ',
        date: '15  -  10  -  2019',
        category: {
          tag: 'Thể thao',
          color: '#018f69'
        },
      },

      {
        text: 'Kì thi THPT 2020',
        date: '27  -  06  -  2020',
        category: {
          tag: 'Học vấn',
          color: '#e17b77'
        },
      },

      {
        text: 'Học tại trường Đại Học Sư Phạm TP.HCM',
        date: '12  -  10  -  2020',
        category: {
          tag: 'Học vấn',
          color: '#e17b77'
        },
      },

      {
        text: 'Hạng 4 giải Thể Thao Điện Tử Khoa Học Nhân Văn ',
        date: '20  -  04  -  2022',
        category: {
          tag: 'Thể thao',
          color: '#018f69'
        },
      },
]

  const TimelineItem = ({ data }) => (
    <div className="timeline-item">
        <div className="timeline-item-content">
            <span className="tag" style={{ background: data.category.color }}>
                {data.category.tag}
            </span>
            <time>{data.date}</time>
            <p>{data.text}</p>
            <span className="circle" />
        </div>
    </div>
  );

  const Timeline = () =>
    timelineData.length > 0 && (
        <div className="timeline-container">
            {timelineData.map((data, idx) => (
                <TimelineItem data={data} key={idx} />
            ))}
        </div>
  );

  return (
    <div className='chattimeline'>
        <h1>React Timeline</h1>
	      <Timeline />
    </div>
  );
}

export default ChatTimeline;