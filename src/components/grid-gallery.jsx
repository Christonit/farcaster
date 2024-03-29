const GridGallery = () => {
  const images = [
    "/images/grid/grid-image-1.png",
    "https://i.seadn.io/s/raw/files/7805b50c48eb42a77b4456271ad74241.gif?auto=format&dpr=1&w=750",
    "/images/grid/grid-image-2.png",
    "https://pbs.twimg.com/media/GIvSsLgXsAAsDMo?format=jpg&name=medium",
    "/images/grid/grid-image-4.png",
    "https://pbs.twimg.com/media/GI67ga7WUAEh45H?format=jpg&name=medium",
    "/images/grid/grid-image-3.png",
    "https://pbs.twimg.com/media/GI6544OWcAAfN3d?format=jpg&name=medium",
  ];

  function shuffleArray(array) {
    for (let i = array.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [array[i], array[j]] = [array[j], array[i]];
    }
    return array;
  }

  const extendedImages = shuffleArray([
    ...images,
    ...images,
    ...images,
    ...images,
  ]).slice(0, 16);
  return (
    <div className="hero-grid-container">
      {extendedImages.map((image, index) => (
        <div key={index} className="hero-grid-item">
          <img src={image} />
        </div>
      ))}
    </div>
  );
};

export default GridGallery;
