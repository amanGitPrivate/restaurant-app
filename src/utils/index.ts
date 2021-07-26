import { selected } from "../common.interface";

const getItemIndex = (selectedItems: selected[], id: string) => {
  return selectedItems.findIndex((item) => item.id === id);
};

const getTotal = (selectedItems: selected[]) =>
  selectedItems.reduce(function (acc, obj) {
    return acc + obj.price;
  }, 0);

const getItemCount = (selectedItems: selected[], id: string) =>
  selectedItems.filter((item) => item.id === id).length;

export { getItemIndex, getTotal, getItemCount };
