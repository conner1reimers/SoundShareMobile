export type RootStackParamList = {
  Home: {};
  SingleSound: { id: string };
  Auth: { screen: string };
  UploadSound: {};
  UserPage: { id: string };
};

export type AuthStackParamList = {
  Login: {};
  Signup: {};
};
