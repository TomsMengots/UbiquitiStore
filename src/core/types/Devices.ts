export interface IDevicesResponseModel {
  devices: IDeviceModel[];
  version: string;
}

export interface IDeviceModel {
  btle?: Dictionary;
  guids: string[];
  icon: IDeviceIconModel;
  id: string;
  jrf?: string[];
  line: IDeviceLineModel;
  product: IProductModel;
  shortnames: string[];
  sysids: string[];
  sysid?: string;
  triplets: Dictionary[];
  uisp?: IUISPModel;
  unifi?: IUnifiModel;
}

interface IDeviceIconModel {
  id: string;
  resolutions: number[][];
}

interface IUnifiModel {
  adoptability: string;
  network: INetworkModel;
}

interface INetworkModel {
  chipset: string;
  deviceCapabilities: string[];
  ethernetMaxSpeedMegabitsPerSecond: number;
  features: INetworkFeaturesModel;
  minimumFirmwareRequired: string;
  numberOfPorts: number;
  radios: INetworkRadiosModel;
  systemIdHexadecimal: string;
  type: string;
}

interface INetworkFeaturesModel {
  bandsteer: boolean;
  ac: boolean;
  gen: number;
}

export interface INetworkRadiosModel {
  [key: string]: IRadioModel;
}

interface IRadioModel {
  gain?: number;
  maxPower?: number;
  maxSpeedMegabitsPerSecond: number;
}

interface IUISPModel {
  bleServices: unknown;
  firmware: IFirmwareModel;
  line: string;
  nameLegacy: string[];
}

interface IFirmwareModel {
  board: string[];
  platform: string | null;
}

interface IProductModel extends IBaseNameModel {
  abbrev: string;
}

interface IDeviceLineModel extends IBaseNameModel {
  id: string;
}

interface IBaseNameModel {
  name: string;
}

interface Dictionary {
  [key: string]: string;
}
