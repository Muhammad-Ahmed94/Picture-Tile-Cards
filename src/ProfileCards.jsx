function ProfileCards({ image, name, age, address, contact, description }) {
  return (
    <div className="card">
      <div className="car-image">
        <figure className="image is-1by1">
          <img src={image} alt="persons image" />
        </figure>
      </div>
      <div className="card-content">
        <div className="media-content">
          <p className="title is-4">Name: {name} </p>
          <p className="subtitle is-6">Age: {age} </p>
          <p className="subtitle is-6">Address: {address}</p>
          <p className="subtitle is-6">Contact: {contact} </p>
        </div>
        <div className="content">{description}</div>
      </div>
    </div>
  );
}

export default ProfileCards;
