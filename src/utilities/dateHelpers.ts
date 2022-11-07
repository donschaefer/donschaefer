const today = new Date();

export const experience = Math.floor((today.getTime() - (new Date(`11/1/2005`)).getTime()) / (1000 * 60 * 60 * 24 * 365));