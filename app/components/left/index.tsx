import { defineComponent } from "vue"
import styles from "./index.module.css";
import { LeftChild, type LeftChildValue } from "../left-child";
import { prop } from "~/helpers/prop";


export type LeftValue = LeftChildValue & {
  leftValue: string;
};

export const Left = defineComponent({
  props: {
    value: prop<LeftValue>().optional()
  },
  setup(props) {
    return () => (
      <div class={styles.box}>
        Left
        <div style={{ backgroundColor: "#DB7093" }}> {props.value?.leftValue}</div>
        <LeftChild value={props.value} />
      </div>
    );
  }
});
