export class config {
  public static googleMapsKey: string = 'AIzaSyA036Y7qqtHc0V3XkQT8fUoyKHEmD1Va28';
  public static latitude: number = 42.563617;
  public static longitude: number = 12.642660;
  public static zoom: number = 5;
  public static leaps: number = 2;
  public static steps: number = 6;
  public static maxSteps: number = 100;

  public static os: string = 'windows';
  public static workers: number = 8;
  public static accountColumns: string = 'username, password';

  public static windowsTemplates: ICommandTemplate = {
    setup: 'taskkill /IM python.exe /F',
    server: 'Start "Server" /d {rocketmap-directory} /MIN python.exe runserver.py -os -l "{location}"',
    worker: 'Start "Worker{index}" /d {rocketmap-directory} /MIN python.exe runserver.py -ns -l "{location}" -st {steps} {auth-template}',
    auth: '-u {username} -p "{password}"',
    delay: 'ping 127.0.0.1 -n 6 > null',
    filename: 'launch.bat'
  };

  public static linuxTemplates: ICommandTemplate = {
    setup: '#!/usr/bin/env bash',
    server: 'nohup python runserver.py -os -l \'{location}\' &',
    worker: 'nohup python runserver.py -ns -l \'{location}\' -st {steps} {auth-template} &',
    auth: '-u {username} -p \'{password}\'',
    delay: 'sleep 0.5;',
    filename: 'launch.sh'
  };
};

export interface ICommandTemplate {
  setup: string;
  server: string;
  worker: string;
  auth: string;
  delay: string;
  filename: string;
}
