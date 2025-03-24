import React from 'react';

function Progressbar({ percentage }) {
  return (
    <div className="w-80 h-3 bg-blue-950 mt-2 rounded-full">
      <div 
        className="h-full bg-blue-200 rounded-full" 
        style={{ width: `${percentage}%` }}
      />
    </div>
  );
}
{/*required is progress bar iwe botttom */}
export default Progressbar;
