export const getIconPath = (view: string, isActive: boolean) => {
  const iconType = isActive ? "active" : "default";

  return `/icons/${view}_${iconType}.svg`;
};
