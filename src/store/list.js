import { observable } from 'mobx';

let index = 0;

class ObservableListStore {
  @observe list = [];

  addListItem (item) {
    this.list.push({
      name: item,
      items: [],
      index
    })

    index++;
  }

  removeListItem (item) {
    this.list = this.list.filter((l) => {
      return l.index !== item.index;
    })
  }
}
