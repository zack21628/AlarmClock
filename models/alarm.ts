import { AlarmConfig } from "./alarm-config";

export class Alarm {
  constructor(date: Date[], title?: string, config?: AlarmConfig) {
    this.date = date;
    this.title = title ? title : "";
    this.config = config ? config : new AlarmConfig();
  }

  title: string;
  date: Date[];
  config: AlarmConfig;
}
