import { defineComponent } from "vue"
import styles from "./calculator-button.module.css"
import { prop } from "~/helpers/prop"

export function CalculatorButtonGeneric<T extends { toString(): string }>() {
  type Props = { value: T; whenClick: (value: T) => void }

  return defineComponent({
    props: {
      value: prop<T>().required(),
      whenClick: prop<Props["whenClick"]>().required(),
    },
    setup(props: Props) {
      return () => (
        <div
          onClick={() => props.whenClick?.(props.value)}
          class={styles.calculatorButton}
        >
          <div class={styles.text}>{props.value?.toString()}</div>
        </div>
      )
    },
  })
}

export const CalculatorButton = CalculatorButtonGeneric<string>()
