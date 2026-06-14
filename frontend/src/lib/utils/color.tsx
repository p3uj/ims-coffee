export function getBgColor(currentValue: number, reorderLevel: number) {
  if (currentValue > reorderLevel) {
    return "green-500";
  } else if (currentValue <= reorderLevel && currentValue != 0) {
    return "amber-500";
  } else {
    return "red-500";
  }
}
