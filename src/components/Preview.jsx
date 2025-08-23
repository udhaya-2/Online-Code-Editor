import React from 'react';

const Preview = ({ srcDoc}) => {
  return (
     
     <div className='bg-white'>
      <iframe
        srcDoc={srcDoc}
        title="Live Output"
        sandbox="allow-scripts"
        frameBorder="0"
        width="100%"
        height="300px"
      />
     </div>
   
  );
};

export default Preview;
