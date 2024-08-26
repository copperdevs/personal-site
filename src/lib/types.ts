// i found out about typescript enums and now im having fun with them

export enum Status {
  Online = "green-glow",
  DoNotDisturb = "red-glow",
  Idle = "yellow-glow",
  Offline = "gray-glow",
  None = "",
}

export enum DiscordStatus {
  Online = "online",
  DoNotDisturb = "dnd",
  Idle = "idle",
  Offline = "offline",
  None = "",
}

export enum IconType {
  Discord = "fa-brands fa-discord",
  Github = "fa-brands fa-github",
  Steam = "fa-brands fa-steam",
  Twitch = "fa-brands fa-twitch",
  Twitter = "fa-brands fa-twitter",
  Youtube = "fa-brands fa-youtube",
}
