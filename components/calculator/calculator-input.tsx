import { defineComponent } from "vue";
import styles from "./calculator-input.module.css";
import { prop } from "~/helpers/prop";

export const CalculatorInput = defineComponent({
  props: {
    text: prop().optional(),
  },
  setup(props) {
    return () => (
      <div class={styles.calculatorInput}>
        <div class={styles.text}>{props.text}</div>
      </div>
    );
  },
});
