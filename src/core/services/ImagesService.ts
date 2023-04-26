export const getIconPath = (type: string, isActive: boolean) => {
  return `/icons/${type}_${isActive ? "active" : "default"}.svg`;
};
