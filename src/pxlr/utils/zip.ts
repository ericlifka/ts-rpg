export function zip(props: string[], values: any[] = [], defaultVal: any = null): object {
  let collection = {};

  if (!props) {
    return collection;
  }

  for (let i = 0; i < props.length; i++) {
    collection[props[i]] = values[i] || defaultVal;
  }

  return collection;
}
