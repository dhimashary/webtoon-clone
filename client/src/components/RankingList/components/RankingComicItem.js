import React from 'react';

export default function RankingComicItem () {
  return <div className="flex border-b border-t">
    <img src="https://webtoon-phinf.pstatic.net/20190826_51/1566745782829lKBue_JPEG/thumb_M.jpg?type=a92" alt="rank-comic" />
    <div className="p-4">
      <p className="text-sm text-green-500">genre</p>
      <h5>Young Mom</h5>
      <p className="text-sm">author</p>
    </div>
  </div>
}