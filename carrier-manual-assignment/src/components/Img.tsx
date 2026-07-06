type ImageProps = {
  src: string;
  alt: string;
};

function Image({ src, alt }: ImageProps) {
  return <img className="documentation-image" src={src} alt={alt} />;
}

export default Image;
