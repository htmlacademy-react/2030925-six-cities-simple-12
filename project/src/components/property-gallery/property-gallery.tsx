type PropertyGalleryProps = {
  dataTestId?: string;
  images: string[];
}

export default function PropertyGallery(props: PropertyGalleryProps): JSX.Element {
  const {images} = props;
  return (
    <div className="property__gallery-container container" data-testid={props.dataTestId}>
      <div className="property__gallery">
        {
          images.map((image, index) => (
            index < 6 ?
              <div className="property__image-wrapper"
                key={image}
              >
                <img
                  className="property__image"
                  src={image}
                  alt="Interior"
                />
              </div> :
              null
          ))
        }
      </div>
    </div>
  );
}
