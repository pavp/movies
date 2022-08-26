import "@testing-library/jest-native/extend-expect";

export const mockNavigate = jest.fn();

jest.mock("@react-navigation/native", () => ({
  __esModule: true,
  useNavigation: () => ({ navigate: mockNavigate }),
}));

jest.mock("react-native-linear-gradient", () => "LinearGradient");
