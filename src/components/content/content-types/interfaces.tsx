export interface IPosts {
  userId: number;
  id: number;
  title: string;
  body: string;
}

// comments
export interface IComments {
  postId: number;
  id: number;
  name: string;
  email: string;
  body: string;
}

// albums
export interface IAlbum {
  userId: number;
  id: number;
  title: string;
}
// photos
export interface IPhotos {
  albumId: number;
  id: number;
  title: string;
  url: string;
  thumbnailUrl: string;
}

// todos
export interface ITodos {
  userId: number;
  id: number;
  title: string;
  completed: boolean;
}

// users
export interface IUsers {
  id: number;
  name: string;
  username: string;
  email: string;
  address: {
    street: string;
    suite: string;
    city: string;
    zipcode: string;
    geo: {
      lat: string;
      lng: string;
    };
  };
  phone: string;
  website: string;
  company: {
    name: string;
    catchPhrase: string;
    bs: string;
  };
}
