import { defineComponent } from "vue";
import styles from "./index.module.css";
import { prop } from "~/helpers/prop";

export type LeftChildValue = {
  leftChildValue: string;
};

export const LeftChild = defineComponent({
  props: {
    value: prop<LeftChildValue>().optional(),
  },
  setup(props) {
    return () => (
      <div class={styles.box}>
        LeftChild
        <div style={{ backgroundColor: "#20B2AA" }}> {props.value?.leftChildValue}</div>
      </div>
    );
  }
});
