import React, { Suspense } from "react";
import { useImage } from "react-image";

function MyImageComponent() {
  const { src } = useImage({
    srcList: "/images/slider/newSlider/washing.jpg",
    // "/images/slider/newSlider/washing.jpg","/images/slider/newSlider/iron1.jpg","/images/slider/newSlider/iron2.jpg",
  });

  return <img src={src} alt="JMB Services" />;
}

export default function MyComponent() {
  return (
    <Suspense>
      <MyImageComponent />
    </Suspense>
  );
}

// function ImageGallery() {
//   return (
//     <Lightbox
//       images={[
//         { src: "http://example.com/img1.jpg" },
//         { src: "http://example.com/img2.jpg" },
//       ]}
//       isOpen={this.state.lightboxIsOpen}
//       onClickPrev={this.gotoPrevious}
//       onClickNext={this.gotoNext}
//       onClose={this.closeLightbox}
//     />
//   );
// }

// export default ImageGallery;
