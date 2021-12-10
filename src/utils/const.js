export const navsItems = [
  [`Home`, `/`],
  [`Payment`, `/payment`],
  [`About`, `/about`],
  [`Contacts`, `/contact`],
  [`FAQ`, `/faq`],
];

export const CLIENT_END_POINT = process.env.CLIENT_END_POINT || `http://localhost:3000`;

export const LogoType = {
  LIGHT: `light`,
  DARK: `dark`,
  VIOLET: `violet`,
};

export const StatusCode = {
  SUCCESS: 200,
  CLIENT_ERROR: 400,
  SERVER_ERROR: 500,
  OVERLOAD_SERVER: 100,
};
