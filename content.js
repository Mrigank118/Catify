// Array of image URLs
const images = [
    'https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.pinterest.com%2Fpin%2F581668108095603898%2F&psig=AOvVaw3T3hsgy3gQ-gKbfofF2soS&ust=1736193782795000&source=images&cd=vfe&opi=89978449&ved=0CBEQjRxqFwoTCLC654Gw34oDFQAAAAAdAAAAABAE',
    'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQCjhaFYQAtXE3kUg_VydvQmu_-l-e86wCTCA&s', 
    'https://i.pinimg.com/originals/9d/4a/49/9d4a49b2b2b9392d3f844c4dbcff52d6.jpg', 
    'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQWDWNbVgR7fOQE8lSKtRMEv8406cR6oh6d71HWtjtN0wOghi_n4YTtdygqZnrLVsGA8Ho&usqp=CAU' 
  ];
  
  
  function getRandomImage() {
    const randomIndex = Math.floor(Math.random() * images.length);
    console.log(`Selected Image: ${images[randomIndex]}`); 
    return images[randomIndex];
  }
  
 
  document.querySelectorAll('img').forEach(img => {
    const newSrc = getRandomImage();
    console.log(`Replacing image with: ${newSrc}`);
    img.src = newSrc;
  });
  