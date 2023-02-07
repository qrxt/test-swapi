const snakeToCamel = (str: string) =>
  str
    .toLowerCase()
    .replace(/([-_][a-z])/g, (group) =>
      group.toUpperCase().replace("-", "").replace("_", "")
    );

export function camelize<T extends object>(obj: T) {
  return Object.entries(obj).reduce((acc, [key, value]) => {
    return { ...acc, [snakeToCamel(key)]: value };
  }, {}) as T;
}
