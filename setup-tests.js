import "@testing-library/jest-native/extend-expect";
import mockAsyncStorage from "@react-native-async-storage/async-storage/jest/async-storage-mock";

export const mockNavigate = jest.fn();

export const mockGoBack = jest.fn();

jest.mock("@react-navigation/native", () => ({
  __esModule: true,
  useNavigation: () => ({ navigate: mockNavigate, goBack: mockGoBack }),
}));

jest.mock("react-native-linear-gradient", () => "LinearGradient");

jest.mock("@react-native-async-storage/async-storage", () => mockAsyncStorage);
