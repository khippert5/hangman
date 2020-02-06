export function rerender(wrapper, store) {
  return new Promise((resolve) => {
    wrapper.setState(store.getState(), resolve);
  }).then(() => {
    wrapper.update();
  });
}

export const sleep = (milliseconds: number): Promise<any> => new Promise(resolve => setTimeout(resolve, milliseconds));
