import React from 'react';

const Test = () => {
  return (
    <>
      <div className='relative bg-[#222222]'>
        {/* This div will cover the lower part of the iframe */}
        <div className='absolute bottom-0 left-0 w-full bg-[#222222] h-[24vh]'>



		</div>


		<div className='absolute bottom-40 left-20 w-32 bg-[#222222] h-10'>



</div>


<div className='absolute top-0 left-0 w-full bg-[#222222] h-[10vh]'>

</div>


        {/* The iframe */}
        <iframe src="https://cbuelow.shinyapps.io/target-setting/" frameBorder="0" className='w-full h-screen' scrolling="no"></iframe>
      </div>
    </>
  );
};

export default Test;