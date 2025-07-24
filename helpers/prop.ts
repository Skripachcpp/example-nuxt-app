export type VProp<T> = {
  type: PropType<T>
  required?: boolean
  default?: T
  validator?: (value: T) => boolean
}

export function prop<T extends string | object | []>() {
  // должно быть достаточно ошибок на этапе компеляции,
  // не получилось подружить ошибки в консоли с генерик компонентами,
  // а вообще надо бы поискать способ сохранить vue валидацию,
  // но не в рамках demo
  const p = {
    type: [Object, String, Number, Boolean, Array, Function] as PropType<T>,
  }

  return {
    optional: (dfl?: VProp<T>["default"]) => ({ ...p, default: dfl }),
    required: (dfl?: VProp<T>["default"]) => ({ ...p, default: dfl }),
  }
}
