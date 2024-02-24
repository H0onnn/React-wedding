export interface Wedding {
  id: number;
  date: string;
  location: Location;
  message: {
    intro: string;
    invitation: string;
    thanksto: string;
    attend: string;
  };
  galleryImages: string[];
  attendCount: number;
  groom: Person & {
    parents: Person[];
  };
  bride: Person & {
    parents: Person[];
  };
}

export interface Location {
  lat: number;
  lng: number;
  name: string;
  address: string;
  kakaoLink: string;
  naverLink: string;
  tmapLink: string;
  waytocome: {
    metro: string[];
    bus: string[];
    self: string[];
  };
}

export interface Account {
  bankName: string;
  accountNumber: string;
  kakaopayLink?: string;
}

export interface Person {
  name: string;
  phoneNumber: string;
  account: Account;
}
